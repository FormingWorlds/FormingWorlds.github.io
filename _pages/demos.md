---
title: Demonstrations
subtitle: PROTEUS resolves the coupled interior-atmosphere evolution of rocky planets from a molten beginning.

description: "Demonstration of the PROTEUS framework simulating magma ocean solidification and atmosphere formation for early Earth."
image: /assets/img/og-default.jpg
---

<!-- Hero video -->
<div class="demo-hero-video">
  <video autoplay muted playsinline loop>
    <source src="{{ '/assets/demos/earth/video.mp4' | relative_url }}" type="video/mp4">
  </video>
</div>
<p class="demo-hero-caption">
  Earth's magma ocean solidifies over two million years, outgassing volatiles that form a thick steam atmosphere. PROTEUS tracks this entire evolution self-consistently.
</p>

<!-- Earth scenario -->
<h4 class="demo-section-title">Early Earth</h4>

<div class="scenario-pane">
  <div class="scenario-top">
    <div class="scenario-video-col">
      <video autoplay muted playsinline loop controls>
        <source src="{{ '/assets/demos/earth/video.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="scenario-info-col">
      <div class="at-a-glance">
        <h5>At a glance</h5>
        <table>
          <tr><td>Mass</td><td>1 M<sub>Earth</sub></td></tr>
          <tr><td>Orbit</td><td>1 AU (Sun)</td></tr>
          <tr><td>Volatiles</td><td>1 Earth ocean H<sub>2</sub>O</td></tr>
          <tr><td>Redox</td><td>IW+4</td></tr>
          <tr><td>Interior</td><td>SPIDER (magma ocean dynamics)</td></tr>
          <tr><td>Atmosphere</td><td>AGNI (radiative-convective)</td></tr>
        </table>
        <div class="outcome">
          <strong>Outcome:</strong> Full mantle solidification within ~2 Myr
        </div>
      </div>
    </div>
  </div>

  <div class="result-gallery">
    <div class="result-card">
      <img class="plot-dark" src="{{ '/assets/demos/earth/thermal-dark.png' | relative_url }}" alt="Earth thermal evolution" loading="lazy">
      <img class="plot-light" src="{{ '/assets/demos/earth/thermal-light.png' | relative_url }}" alt="Earth thermal evolution" loading="lazy">
      <div class="result-label">Thermal evolution</div>
    </div>
    <div class="result-card">
      <img class="plot-dark" src="{{ '/assets/demos/earth/volatiles-dark.png' | relative_url }}" alt="Earth volatile inventory" loading="lazy">
      <img class="plot-light" src="{{ '/assets/demos/earth/volatiles-light.png' | relative_url }}" alt="Earth volatile inventory" loading="lazy">
      <div class="result-label">Volatile inventory</div>
    </div>
  </div>

  <details class="demo-detail">
    <summary>Detailed interpretation</summary>
    <div class="detail-body">
      <p>Starting from a fully molten mantle after a giant impact, PROTEUS tracks how Earth's magma ocean solidifies and volatiles outgas to form a thick steam atmosphere.</p>
      <p>The simulation begins with a high mantle entropy (2900 J/K/kg) representing the aftermath of the Moon-forming impact. As the magma ocean cools, dissolved volatiles partition into the atmosphere following thermochemical equilibrium (CALLIOPE). The atmosphere becomes dominated by H<sub>2</sub>O, CO<sub>2</sub>, and sulfur species.</p>
      <p>The surface cools from ~3400 K to ~1400 K within the first ~2 million years, with the last few percent of deep-mantle melt persisting through rheological transitions. By the end of solidification the atmosphere has grown to ~290 bar (~210 bar H<sub>2</sub>O, ~50 bar CO<sub>2</sub>, plus N<sub>2</sub>, H<sub>2</sub>S, and SO<sub>2</sub>). This thick steam atmosphere eventually condenses to form a liquid water ocean beneath a CO<sub>2</sub>-dominated atmosphere, constraining when Earth first became habitable.</p>
    </div>
  </details>
</div>

---

## What PROTEUS computes

Each simulation couples multiple physical processes in a single self-consistent calculation: radiative transfer through the atmosphere, convective heat transport in the mantle, thermochemical partitioning of volatiles between melt and gas, stellar evolution, and atmospheric escape. The modules responsible for each process can be swapped independently; see the [modules page](/modules) for details.

The outgoing radiation spectra shown in the animation are computed at every time step by the atmosphere module (AGNI), producing synthetic observables that can be compared directly with telescope data from JWST and future missions.

<div class="demo-cta">
  <a href="https://proteus-framework.org/PROTEUS/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Run PROTEUS yourself</a>
  <a href="https://github.com/FormingWorlds/PROTEUS" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Explore the code</a>
</div>
