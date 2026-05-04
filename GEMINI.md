# PROTEUS Website Update Skill

This file defines the rigorous standards and workflows for updating the PROTEUS framework website, with a focus on preserving exact formatting and ensuring technical accuracy in the publications list.

## Publication Entry Template

All new publication entries in `_pages/publications.md` MUST strictly adhere to this HTML structure:

```html
<div class="pub-entry">
  <p class="pub-title">
    <a href="PRIMARY_DOI_OR_ARXIV_LINK">Paper Title</a>
  </p>
  <p class="pub-authors">Author One; Author Two; Author Three</p>
  <p class="pub-venue">Journal Name, Volume, Page (Year)</p>
  <p class="pub-summary">A brief (1-3 sentence) summary of the paper's contribution and relevance to PROTEUS.</p>
  <details class="pub-abstract">
    <summary>Abstract</summary>
    <p>The full abstract text here.</p>
  </details>
  <div class="pub-links">
    <a href="SCIX_LINK">SciX</a>
    <a href="ARXIV_LINK">arXiv</a>
    <a href="DOI_LINK">DOI</a>
  </div>
</div>
```

## Formatting Rules

1.  **Link Order**: In the `pub-links` section, links MUST be ordered: **SciX**, then **arXiv**, then **DOI**.
2.  **Venue Formatting**:
    - **Published**: `Journal Name, Volume, Page (Year)`. Do NOT include issue numbers (e.g., use `7` not `7(4)`).
    - **In Press**: `Journal Name, in press (Year)`.
    - **Preprints**: `Under review`.
3.  **No Extra Whitespace**: Do not introduce stray tags, newlines, or characters (like "X") outside the template structure.
4.  **Special Characters**: Use HTML entities for sub/superscripts (e.g., `H<sub>2</sub>O`, `CO<sub>2</sub>`).

## Internal Review Phase

Before committing any changes to `_pages/publications.md`, the following internal review steps are MANDATORY:

1.  **Structural Validation**:
    - Verify that every opening `<div>` and `<details>` tag has a corresponding closing tag.
    - Check that no tags or text have been accidentally duplicated or left orphaned.
2.  **Formatting Audit**:
    - Confirm the `pub-links` order is SciX → arXiv → DOI.
    - Confirm the `pub-venue` string matches the mandated format.
3.  **Self-Critique Report**:
    - Provide a brief summary of the audit: "Structure [OK], Link Order [OK], Venue Format [OK]".

## Verification Workflow

1.  **Local Preview**: Always run `bundle exec jekyll serve` (if not already running).
2.  **HTML Inspection**: Use `curl` or `web_fetch` to inspect the end of the generated `/publications/` page to ensure the HTML is valid and no fragments are visible.
3.  **Visual Check**: If possible, request the user to check a screenshot or the local URL if they have access.

## General Website Rules

- **Image Paths**: Always use the `relative_url` filter: `{{ '/assets/img/faces/name.jpg' | relative_url }}`.
- **Argon Components**: Do not modify files in `assets/` (Argon Design System) unless explicitly instructed.
