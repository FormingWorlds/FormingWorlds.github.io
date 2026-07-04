---
title: How we test PROTEUS
subtitle: Continuous integration, code coverage, and the relationship between tests and scientific evidence.

description: "Testing infrastructure, code coverage, and validation strategy for the PROTEUS framework and its modules."
image: /assets/img/og-default.jpg
---

<style>
  .epistemic-callout {
    border-left: 4px solid var(--bs-primary, #5e72e4);
    background: var(--card-bg);
    padding: 1.1rem 1.3rem;
    margin: 1.5rem 0 2rem;
    border-radius: 0.4rem;
    font-size: 1.02rem;
    line-height: 1.55;
  }
  .epistemic-callout p { margin-bottom: 0.6rem; }
  .epistemic-callout p:last-child { margin-bottom: 0; }
  .epistemic-callout .callout-label {
    display: inline-block;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted-color);
    margin-bottom: 0.4rem;
  }

  .testing-section h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--muted-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin: 2rem 0 1rem;
  }

  .ci-table, .coverage-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    font-size: 0.93rem;
  }
  .ci-table th, .ci-table td,
  .coverage-table th, .coverage-table td {
    text-align: left;
    padding: 0.55rem 0.65rem;
    border-bottom: 1px solid var(--border-color);
    vertical-align: middle;
  }
  .ci-table th, .coverage-table th {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted-color);
    background: transparent;
  }
  .coverage-table img { vertical-align: middle; height: 20px; }
  .coverage-table td.module-name { font-weight: 600; white-space: nowrap; }
  .coverage-table td.test-count { font-variant-numeric: tabular-nums; white-space: nowrap; }
  .coverage-table td.test-breakdown {
    color: var(--muted-color);
    font-size: 0.85rem;
    line-height: 1.35;
  }

  .test-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin: 1rem 0 1.5rem; }
  .test-card {
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 1.1rem;
    background: var(--card-bg);
  }
  .test-card h5 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--heading-color);
  }
  .test-card p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--text-color);
  }
  .test-card .accent {
    display: block;
    width: 36px;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 0.6rem;
  }
  .accent-unit { background: #5e72e4; }
  .accent-integ { background: #11cdef; }
  .accent-physical { background: #f5365c; }

  .vignette { margin-bottom: 1.4rem; }
  .vignette h5 {
    font-size: 1rem;
    margin: 0 0 0.4rem;
    color: var(--heading-color);
  }
  .vignette p { margin: 0 0 0.4rem; font-size: 0.95rem; line-height: 1.55; }
  .vignette .ref {
    font-size: 0.85rem;
    color: var(--muted-color);
  }

  .footnote {
    font-size: 0.82rem;
    color: var(--muted-color);
    margin-top: 0.4rem;
  }
</style>

<div class="epistemic-callout">
  <span class="callout-label">On what testing can and cannot show</span>
  <p>A frequent question is "how do you know the code is right?" That is the wrong question. PROTEUS does not recreate nature; it generates physically and chemically grounded hypotheses, testable against telescope data and laboratory experiments.</p>
  <p>Tests guarantee that the code does, reproducibly, what we wrote it to do. Whether what we wrote captures the planet is judged by data: JWST spectra, geochemical and geophysical measurements, comparison with independent codes. The test suite is the precondition for the science to be meaningful, not a substitute for it.</p>
</div>

<div class="testing-section">

<h4>Continuous integration</h4>

Every change to PROTEUS or its modules runs through automated tests on GitHub Actions before it reaches the main branch. Three categories of pipeline serve different purposes:

<table class="ci-table">
  <thead>
    <tr><th>Pipeline</th><th>Trigger</th><th>What it does</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Fast PR gate</strong></td>
      <td>Every pull request</td>
      <td>Runs unit tests with mocked physics and smoke tests with real binaries on a small configuration. Roughly 5 minutes; gates merging.</td>
    </tr>
    <tr>
      <td><strong>Docker rebuild</strong></td>
      <td>Daily, or on dependency change</td>
      <td>Rebuilds the PROTEUS Docker image (atmosphere code, radiative transfer data, Julia and Fortran toolchains), then triggers the nightly suite.</td>
    </tr>
    <tr>
      <td><strong>Nightly full suite</strong></td>
      <td>Triggered by Docker rebuild (fallback: 03:00 UTC)</td>
      <td>Runs the complete suite including integration and slow tests, uploads coverage to Codecov, and ratchets the coverage threshold so it can only ever increase.</td>
    </tr>
  </tbody>
</table>

Pull requests must additionally clear an 80% diff-cover bar on changed lines, and a 0.3% grace allowance on the global coverage threshold. The full developer-facing description lives in the <a href="https://proteus-framework.org/PROTEUS/How-to/test_infrastructure/" target="_blank" rel="noopener noreferrer">PROTEUS test-infrastructure guide</a>.

<h4>Code coverage and test counts</h4>

The PROTEUS framework and its mature submodules expose passing-tests badges and, where wired, line-coverage badges from <a href="https://app.codecov.io/gh/FormingWorlds" target="_blank" rel="noopener noreferrer">Codecov</a>. Test counts marked with a live badge refresh automatically from each repository's CI; static counts are snapshots from the date in the footnote below.

<p style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>Mature suites</strong></p>

<table class="coverage-table">
  <thead>
    <tr>
      <th>Module</th>
      <th>Tests on main</th>
      <th>Breakdown</th>
      <th>CI</th>
      <th>Coverage</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.test_counts.mature %}
    {%- assign bb = row.badge_branch | default: 'main' -%}
    <tr>
      <td class="module-name"><a href="https://github.com/{{ row.owner }}/{{ row.repo }}">{{ row.name }}</a></td>
      <td class="test-count">
        {%- if row.total_endpoint -%}
          <a href="https://github.com/{{ row.owner }}/{{ row.repo }}/blob/{{ bb }}/{{ row.total_endpoint }}"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/{{ row.owner }}/{{ row.repo }}/{{ bb }}/{{ row.total_endpoint }}" alt="tests"></a>
        {%- else -%}
          {{ row.total }}
        {%- endif -%}
      </td>
      <td class="test-breakdown">
        {%- if row.markers -%}
          {%- for m in row.markers -%}
            <a href="https://github.com/{{ row.owner }}/{{ row.repo }}/blob/{{ bb }}/{{ m[1] }}"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/{{ row.owner }}/{{ row.repo }}/{{ bb }}/{{ m[1] }}" alt="{{ m[0] }}"></a>{% unless forloop.last %} {% endunless %}
          {%- endfor -%}
        {%- else -%}
          {{ row.breakdown }}
        {%- endif -%}
      </td>
      <td><a href="https://github.com/{{ row.owner }}/{{ row.repo }}/actions/workflows/{{ row.workflow }}"><img src="https://img.shields.io/github/actions/workflow/status/{{ row.owner }}/{{ row.repo }}/{{ row.workflow }}?branch=main&label={{ row.ci_label }}&logo=github" alt="{{ row.ci_label }}"></a></td>
      <td>
        {%- if row.has_codecov -%}
          <a href="https://app.codecov.io/gh/{{ row.owner }}/{{ row.repo }}"><img src="https://img.shields.io/codecov/c/github/{{ row.owner }}/{{ row.repo }}?label=coverage&logo=codecov" alt="coverage"></a>
        {%- else -%}
          <span style="color: var(--muted-color); font-size: 0.85rem;">Codecov pending</span>
        {%- endif -%}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<p style="font-size: 0.95rem; margin: 1.4rem 0 0.4rem;"><strong>Suites in development</strong></p>

<table class="coverage-table">
  <thead>
    <tr>
      <th>Module</th>
      <th>Tests on main</th>
      <th>Breakdown</th>
      <th>CI</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.test_counts.in_development %}
    {%- assign bb = row.badge_branch | default: 'main' -%}
    <tr>
      <td class="module-name"><a href="https://github.com/{{ row.owner }}/{{ row.repo }}">{{ row.name }}</a></td>
      <td class="test-count">
        {%- if row.total_endpoint -%}
          <a href="https://github.com/{{ row.owner }}/{{ row.repo }}/blob/{{ bb }}/{{ row.total_endpoint }}"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/{{ row.owner }}/{{ row.repo }}/{{ bb }}/{{ row.total_endpoint }}" alt="tests"></a>
        {%- else -%}
          {{ row.total }}
        {%- endif -%}
      </td>
      <td class="test-breakdown">
        {%- if row.markers -%}
          {%- for m in row.markers -%}
            <a href="https://github.com/{{ row.owner }}/{{ row.repo }}/blob/{{ bb }}/{{ m[1] }}"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/{{ row.owner }}/{{ row.repo }}/{{ bb }}/{{ m[1] }}" alt="{{ m[0] }}"></a>{% unless forloop.last %} {% endunless %}
          {%- endfor -%}
        {%- else -%}
          {{ row.breakdown }}
        {%- endif -%}
      </td>
      <td>
        {%- if row.workflow != "" -%}
          <a href="https://github.com/{{ row.owner }}/{{ row.repo }}/actions/workflows/{{ row.workflow }}"><img src="https://img.shields.io/github/actions/workflow/status/{{ row.owner }}/{{ row.repo }}/{{ row.workflow }}?branch=main&label={{ row.ci_label }}&logo=github" alt="{{ row.ci_label }}"></a>
        {%- else -%}
          <span style="color: var(--muted-color); font-size: 0.85rem;">No CI yet</span>
        {%- endif -%}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<p class="footnote">Rows displaying a numeric badge are live: the count is fetched from a JSON file that each repository's CI regenerates and republishes whenever its tests change. The remaining plain-number rows are static counts, last verified on 2026-07-04 by direct repository inspection. Ecosystem-wide adoption of the PROTEUS marker convention (unit, smoke, integration, slow) is in progress; until then, total counts are the most comparable figure across repositories.</p>

<h4>Three categories of test, three things they catch</h4>

<div class="test-cards">
  <div class="test-card">
    <span class="accent accent-unit"></span>
    <h5>Unit tests</h5>
    <p>Isolate one function with mocked physics. Catch algebra errors, IO regressions, and broken assumptions about types and units. They run in milliseconds, so the suite stays cheap to invoke on every commit.</p>
  </div>
  <div class="test-card">
    <span class="accent accent-integ"></span>
    <h5>Integration and smoke tests</h5>
    <p>Run real binaries on minimal configurations, often a single time step at low resolution. Catch coupling bugs that unit tests cannot see: when two correct modules disagree on a boundary condition, on a sign convention, or on which way time runs.</p>
  </div>
  <div class="test-card">
    <span class="accent accent-physical"></span>
    <h5>Physically-motivated validation</h5>
    <p>Cross-check against analytic limits, independent implementations (SPIDER versus Aragog for the magma-ocean energy budget), and published reference runs. This is the hardest category: pass and fail are not always binary, and a "passing" run that disagrees with a known limit is a stronger signal than a green check.</p>
  </div>
</div>

<h4>Tests and papers</h4>

The strongest test is publication. A simulation that reaches a refereed journal has been argued for in writing, exposed to independent reviewers, and tied to specific physical predictions that observation can falsify. Two recent examples illustrate the loop.

<div class="vignette">
  <h5>Early Earth: the magma ocean lifetime</h5>
  <p>Coupled PROTEUS simulations of post-impact Earth resolve the interplay between tidal heating from the early Moon and greenhouse forcing from the outgassed atmosphere. Depending on mantle redox state and volatile inventory, the magma ocean lifetime ranges from roughly 30 Myr to 500 Myr, a prediction tied to specific geochemical observables.</p>
  <p class="ref">van Dijk, Nicholls &amp; Lichtenberg, <em>Planetary Science Journal</em> 7, 94 (2026). <a href="https://doi.org/10.3847/PSJ/adc1ef">doi:10.3847/PSJ/adc1ef</a></p>
</div>

<div class="vignette">
  <h5>L 98-59 d: a JWST detection meets a model prediction</h5>
  <p>JWST detected sulphur dioxide in the atmosphere of L 98-59 d, the first sulphur detection on a planet of this size. PROTEUS simulations show the observation is explained by a permanent magma ocean rich in sulphur and hydrogen, whose outgassed SO<sub>2</sub> is produced photochemically. The result rules out both the standard "gas dwarf" and "water world" categories. This is the falsification loop closed: telescope data constrains the model, the model produces a falsifiable interior-composition claim, and the next observation can confirm or break it.</p>
  <p class="ref">Nicholls, Lichtenberg, Chatterjee, Guimond, Postolec &amp; Pierrehumbert, <em>Nature Astronomy</em> (2026). <a href="https://doi.org/10.1038/s41550-026-02815-8">doi:10.1038/s41550-026-02815-8</a></p>
</div>

The configurations behind both papers live in the PROTEUS repository and are exercised by the integration suite, so a regression in coupled behaviour breaks CI before it can quietly invalidate a downstream result.

<h4>Further reading</h4>

<ul>
  <li><a href="https://proteus-framework.org/PROTEUS/How-to/test_infrastructure/" target="_blank" rel="noopener noreferrer">PROTEUS test-infrastructure guide</a></li>
  <li><a href="https://proteus-framework.org/PROTEUS/How-to/test_categorization/" target="_blank" rel="noopener noreferrer">Test categorization (markers, fixtures, conventions)</a></li>
  <li><a href="https://github.com/FormingWorlds/PROTEUS/tree/main/.github/workflows" target="_blank" rel="noopener noreferrer">CI workflow definitions on GitHub</a></li>
  <li><a href="https://app.codecov.io/gh/FormingWorlds" target="_blank" rel="noopener noreferrer">Codecov dashboards (FormingWorlds organisation)</a></li>
  <li><a href="/publications">All PROTEUS publications</a></li>
</ul>

</div>
