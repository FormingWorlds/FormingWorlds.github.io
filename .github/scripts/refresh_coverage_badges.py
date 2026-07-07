#!/usr/bin/env python3
"""Generate shields.io endpoint JSON for each module's Codecov line coverage.

The validation page lists the coverage figure for every module whose
``has_codecov`` flag is set in ``data/test_counts.yml``. Rather than have the
page call Codecov at render time (that request times out often enough to leave
broken badges), this script reads the settled line coverage from the public
Codecov v2 API once, server-side, and writes a small shields.io endpoint file
per module. The page then renders each figure from a static JSON URL, which
does not depend on Codecov being reachable at page load.

For each module a ``coverage-<repo>.json`` file is written into the output
directory in shields.io endpoint schema. If the Codecov query for a module
fails after several attempts and a previous file for that module already sits
in the output directory, the previous file is kept, so a transient Codecov
outage holds the last good value instead of blanking the badge.

Parameters
----------
--data : str
    Path to the ``test_counts.yml`` data file that lists the modules.
--out : str
    Directory the ``coverage-<repo>.json`` files are written into. Pre-existing
    files in it are treated as the last known good values.
"""

from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

import yaml

API_URL = "https://api.codecov.io/api/v2/github/{owner}/repos/{repo}/"


def fetch_coverage(owner: str, repo: str, attempts: int = 4, timeout: int = 25) -> float:
    """Return the default-branch line coverage percent for a Codecov repo.

    Retries a few times with a linear backoff so a slow or briefly unavailable
    Codecov response does not fail the run on the first miss.

    Raises
    ------
    RuntimeError
        If every attempt fails or the response carries no coverage total.
    """
    url = API_URL.format(owner=owner, repo=repo)
    last_error: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "fwl-coverage-badge"})
            with urllib.request.urlopen(request, timeout=timeout) as response:
                payload = json.load(response)
            if not isinstance(payload, dict):
                raise ValueError("response body was not a JSON object")
            totals = payload.get("totals")
            if not isinstance(totals, dict):
                raise ValueError("response carried no totals object")
            coverage = totals.get("coverage")
            if not isinstance(coverage, (int, float, str)):
                raise ValueError("response carried no usable coverage total")
            return float(coverage)
        except (urllib.error.URLError, ValueError, json.JSONDecodeError, TimeoutError) as error:
            last_error = error
            time.sleep(2 * attempt)
    raise RuntimeError(f"Codecov query failed for {owner}/{repo}: {last_error}")


def color_for(percent: float) -> str:
    """Map a coverage percent to a shields.io colour band."""
    if percent >= 90:
        return "brightgreen"
    if percent >= 80:
        return "yellowgreen"
    if percent >= 70:
        return "yellow"
    if percent >= 60:
        return "orange"
    return "red"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data", required=True, help="Path to test_counts.yml")
    parser.add_argument("--out", required=True, help="Output directory for coverage-<repo>.json")
    args = parser.parse_args()

    data = yaml.safe_load(Path(args.data).read_text())
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    modules = [row for row in data.get("mature", []) if row.get("has_codecov")]

    # Each badge file is keyed by the lower-cased repo name; two modules that
    # collapse to the same name would overwrite each other, so refuse to run
    # rather than publish a silently clobbered badge.
    seen: dict[str, str] = {}
    for row in modules:
        repo = row.get("repo")
        if not repo:
            continue
        key = repo.lower()
        if key in seen:
            raise SystemExit(
                f"two modules map to coverage-{key}.json: {seen[key]} and {row.get('owner')}/{repo}"
            )
        seen[key] = f"{row.get('owner')}/{repo}"

    for row in modules:
        owner, repo = row.get("owner"), row.get("repo")
        if not owner or not repo:
            print(f"::warning::skipping malformed module row: {row}", file=sys.stderr)
            continue
        destination = out_dir / f"coverage-{repo.lower()}.json"
        had_prior = destination.is_file()
        try:
            percent = fetch_coverage(owner, repo)
            if percent <= 0 and had_prior:
                # A zero reading from a repo that previously reported coverage is
                # almost always a Codecov glitch mid-upload; keep the last good
                # value rather than pinning a spurious 0%.
                raise RuntimeError("implausible 0% reading")
        except Exception as error:  # noqa: BLE001 - one module must not fail the rest
            if had_prior:
                print(
                    f"::warning::coverage for {owner}/{repo} unavailable; keeping last value ({error})",
                    file=sys.stderr,
                )
            else:
                print(
                    f"::warning::no coverage badge for {owner}/{repo} and no prior value ({error})",
                    file=sys.stderr,
                )
            continue
        rounded = int(percent + 0.5)  # round half up to match Codecov's badge
        badge = {
            "schemaVersion": 1,
            "label": "coverage",
            "message": f"{rounded}%",
            "color": color_for(rounded),
        }
        destination.write_text(json.dumps(badge, indent=2) + "\n")
        print(f"ok    {owner}/{repo}: {percent:.2f}% -> {rounded}% ({badge['color']})")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
