---
title: How we test PROTEUS

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

  .quality-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0 1.2rem; }
  @media (max-width: 640px) { .quality-cols { grid-template-columns: 1fr; } }
  .quality-col {
    border: 1px solid var(--border-color);
    border-top: 3px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 1rem 1.1rem;
    background: var(--card-bg);
  }
  .quality-req { border-top-color: #2dce89; }
  .quality-rej { border-top-color: #f5365c; }
  .quality-col h5 {
    margin: 0 0 0.6rem;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .quality-req h5 { color: #2dce89; }
  .quality-rej h5 { color: #f5365c; }
  .quality-col ul { margin: 0; padding-left: 1.1rem; }
  .quality-col li { margin: 0 0 0.5rem; font-size: 0.9rem; line-height: 1.45; color: var(--text-color); }
  .quality-col li:last-child { margin-bottom: 0; }

  .vignette { margin-bottom: 1.4rem; }
  .testing-section p + .vignette { margin-top: 2.2rem; }
  .testing-section .subsection-lead { margin: 0 0 0.2rem; }
  .vignette h6 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.4rem;
    color: var(--heading-color);
  }
  .testing-section .subsection {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--heading-color);
    line-height: 1.3;
    margin: 2.3rem 0 0.9rem;
    padding-left: 0.7rem;
    border-left: 4px solid var(--bs-primary, #5e72e4);
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

<p class="lead">Every change to code within the PROTEUS ecosystem must pass test 'gates' before it can be merged into the main versions of our models. In addition, the modelled physics is cross-checked against independent codes and against peer-reviewed papers. The 'coverage' of these tests (i.e. the fraction of the code which is probed) is tracked publicly. Validating workflows ensure that the coverage is only allowed only to increase as development progresses. We now have thousands of tests across all of our open-source repositories.</p>

<div class="epistemic-callout">
  <span class="callout-label">On what testing can and cannot show</span>
  <p>How do we know the code is accurately modelling the real world? This can be approached as two questions. Firstly: does the code do what we wrote it to do, every time? Our test suite tracks the modelled behaviours for reproducibility, and this page describes how. Secondly: do codes and models we have written capture the real behaviour of planets? This is judged by comparison against empirical data, including JWST spectra, geochemical and geophysical measurements, as well as with independent codes from other research groups.</p>
  <p>The test suite is the precondition, not the substitute. It guarantees the code does, reproducibly, what we wrote, so that any disagreement with data is a statement about the physics we chose, not a bug we failed to catch.</p>
</div>

<div class="testing-section">

<h4>Continuous integration</h4>

Every change to PROTEUS or its modules runs through automated tests on GitHub Actions before it reaches the main branch. Two pipelines serve different purposes:

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
      <td><strong>Nightly full suite</strong></td>
      <td>Nightly (03:00 UTC)</td>
      <td>Runs the complete suite including integration and slow tests, uploads coverage to Codecov, and ratchets the coverage threshold so it can only ever increase.</td>
    </tr>
  </tbody>
</table>

Pull requests must additionally clear an 80% bar on changed lines: meaning that 80% of the lines of code updated in a pull request must be tested. We apply a 0.3% grace tolerance on changes to the global coverage for each pull request. 

The full developer-facing detail is on the PROTEUS <a href="https://proteus-framework.org/PROTEUS/How-to/testing.html" target="_blank" rel="noopener noreferrer">testing how-to</a> and <a href="https://proteus-framework.org/PROTEUS/Explanations/test_framework.html" target="_blank" rel="noopener noreferrer">test-framework pages</a>.

<h4>Three categories of test, three things they catch</h4>

<div class="test-cards">
  <div class="test-card">
    <span class="accent accent-unit"></span>
    <h5>Unit tests</h5>
    <p>Isolate one function with mocked physics. Catch algebra errors, input-output regressions, and broken assumptions about types and units. They run in milliseconds, so the suite stays cheap to invoke on every commit.</p>
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

<h4>What counts as a test</h4>

<p>Coverage measures how much of the code runs under test; it does not say whether a test would notice when the code is wrong. A test that passes for the wrong reason is worse than none, because it manufactures confidence. Every test in the suite is held to a standard a happy-path test cannot meet.</p>

<div class="quality-cols">
  <div class="quality-col quality-req">
    <h5>Required in every test</h5>
    <ul>
      <li>A boundary or edge case: a temperature at the solidus, an empty inventory, or an extreme physical parameter.</li>
      <li>The failure path. Where the code validates its input, the error must fire and leave no side effect behind; for closed-form physics, the limiting case must hold exactly.</li>
      <li>A value a plausible bug would break. A wrong sign, a wrong exponent, a missing factor, or a unit slip must make the test fail, so inputs are chosen where a wrong formula lands far from the right one.</li>
      <li>On physics modules, at least one physical invariant: conservation of mass, energy, or angular momentum; boundedness (temperatures positive, mass fractions within zero and one); monotonicity or symmetry; or a value pinned to a published benchmark or an independent code.</li>
    </ul>
  </div>
  <div class="quality-col quality-rej">
    <h5>Rejected automatically</h5>
    <ul>
      <li>Single-assertion tests, and weak checks such as "the result is not empty" or "the result is positive" left to stand alone.</li>
      <li>Floating-point equality against a literal value.</li>
      <li>Tests that mock the very function they are meant to check.</li>
      <li>Tests that never state which physical scenario or contract clause they verify.</li>
    </ul>
  </div>
</div>

<p>These rules are enforced mechanically: an automated check runs on every pull request and rejects new tests that break them. The strongest requirement, a value pinned to a refereed result or to an independent implementation, is documented under <a href="#tests-and-papers">Tests and papers</a> below.</p>

<h4>Code coverage and test counts</h4>

The PROTEUS framework and its mature submodules expose passing-tests badges and, where wired, line-coverage badges from <a href="https://app.codecov.io/gh/FormingWorlds" target="_blank" rel="noopener noreferrer">Codecov</a>. Test counts marked with a live badge refresh automatically from each repository's CI; static counts are snapshots from the date in the footnote below. Each row links to the public repository behind it, and every live badge to the workflow or coverage report that generated it, so the figures can be checked at source.

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

<h4 id="tests-and-papers">Tests and papers</h4>

Two tests of the framework sit beyond CI, and both are on the public record: whether a single code matches observations, and whether independent codes agree with one another. The papers highlighted below are part of the complete <a href="/publications">PROTEUS publications list</a>.

<h5 class="subsection">Tested against data: published applications</h5>

<p class="subsection-lead">A simulation that reaches a refereed journal has been argued for in writing, exposed to independent review, and tied to physical predictions that observation can falsify. Two recent results close that loop.</p>

<div class="vignette">
  <h6>Early Earth: the magma ocean lifetime</h6>
  <p>Coupled PROTEUS simulations of post-impact Earth resolve the interplay between tidal heating from the early Moon and greenhouse forcing from the outgassed atmosphere. The magma ocean lifetime ranges from roughly 30 to 500 Myr depending on mantle redox and volatile inventory, a prediction tied to specific geochemical observables.</p>
  <p class="ref">van Dijk, Nicholls &amp; Lichtenberg, <em>Planetary Science Journal</em> 7, 94 (2026). <a href="https://doi.org/10.3847/PSJ/adc1ef">doi:10.3847/PSJ/adc1ef</a></p>
</div>

<div class="vignette">
  <h6>L 98-59 d: a JWST detection meets a model prediction</h6>
  <p>JWST detected sulphur dioxide in the atmosphere of L 98-59 d, the first sulphur detection on a planet of this size. PROTEUS explains it with a permanent, sulphur- and hydrogen-rich magma ocean whose outgassed SO<sub>2</sub> is produced photochemically, ruling out both the standard "gas dwarf" and "water world" categories. The falsification loop closes: data constrains the model, the model returns a testable interior-composition claim, and the next observation can break it.</p>
  <p class="ref">Nicholls, Lichtenberg, Chatterjee, Guimond, Postolec &amp; Pierrehumbert, <em>Nature Astronomy</em> 10, 809 (2026). <a href="https://doi.org/10.1038/s41550-026-02815-8">doi:10.1038/s41550-026-02815-8</a></p>
</div>

<h5 class="subsection">Tested against independent codes: the CHILI intercomparison</h5>

<p class="subsection-lead">Publication tests one code against data. A harder test is whether independent codes, built by different groups with different numerical choices, agree on the same problem. We initiated the Coupled atmospHere Interior modeL Intercomparison (CHILI), the first shared benchmark suite for coupled interior-atmosphere models, to make that test rigorous.</p>

<div class="vignette">
  <h6>CHILI: a shared benchmark for coupled codes</h6>
  <p>CHILI defines a common protocol of standardized cases, early Earth, Venus, and rocky exoplanets around M-dwarfs, that any coupled interior-atmosphere code can run. Fixing the inputs turns model disagreement into a measured quantity: differences in energy transport, geochemistry, and volatile cycling become numbers to explain rather than buried assumptions. It is the community-scale counterpart of the cross-code checks PROTEUS runs internally, such as SPIDER against Aragog for the magma-ocean energy budget.</p>
  <p class="ref">Lichtenberg et al., <em>Planetary Science Journal</em> 7, 108 (2026). <a href="https://doi.org/10.3847/PSJ/ae593b">doi:10.3847/PSJ/ae593b</a></p>
</div>

<div class="vignette">
  <h6>CHILI I: primordial magma oceans of Earth and Venus</h6>
  <p>The first results benchmark planetary evolution codes on the primordial magma oceans of Earth and Venus. Nominal Earth models agree on solidification timescale to within 4 Myr; Venus scenarios diverge more, and the intercomparison pins that divergence to specific treatments of volatile partitioning, vertical energy transport, mantle rheology, and melting. Locating those sensitivities is what separates a code that runs from one that agrees with independent implementations, and shows exactly where it does not.</p>
  <p class="ref">Nicholls et al. (2026). <a href="https://arxiv.org/abs/2606.24757">arXiv:2606.24757</a></p>
</div>

<h4>Further reading</h4>

<ul>
  <li><a href="https://proteus-framework.org/PROTEUS/How-to/testing.html" target="_blank" rel="noopener noreferrer">PROTEUS test-infrastructure guide</a></li>
  <li><a href="https://proteus-framework.org/PROTEUS/Explanations/test_framework.html" target="_blank" rel="noopener noreferrer">Test categorization (markers, fixtures, conventions)</a></li>
  <li><a href="https://github.com/FormingWorlds/PROTEUS/tree/main/.github/workflows" target="_blank" rel="noopener noreferrer">CI workflow definitions on GitHub</a></li>
  <li><a href="https://app.codecov.io/gh/FormingWorlds" target="_blank" rel="noopener noreferrer">Codecov dashboards (FormingWorlds organisation)</a></li>
  <li><a href="/publications">All PROTEUS publications</a></li>
</ul>

</div>
