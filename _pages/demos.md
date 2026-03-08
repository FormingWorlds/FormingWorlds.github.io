---
title: Demonstrations
subtitle: PROTEUS resolves the interior-atmosphere evolution of rocky exoplanets, including sub-Neptunes, super-Earths, and terrestrials.

description: "Live demonstrations of the PROTEUS framework simulating magma ocean solidification, atmosphere formation, and volatile evolution across four planetary scenarios."
image: /assets/img/og-default.jpg
---

<!-- Hero video -->
<div class="demo-hero-video">
  <video autoplay muted playsinline loop>
    <source src="{{ '/assets/demos/earth/video.mp4' | relative_url }}" type="video/mp4">
  </video>
</div>
<p class="demo-hero-caption">
  Earth's magma ocean solidifies over hundreds of thousands of years, outgassing volatiles that form a thick steam atmosphere. Eventually the surface cools enough for liquid water to condense, forming the first oceans. PROTEUS tracks this entire evolution self-consistently.
</p>

<!-- Scenario tabs -->
<h4 class="demo-section-title">Explore scenarios</h4>

<ul class="scenario-pills nav nav-pills" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="pill" href="#scenario-earth" role="tab">Early Earth</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#scenario-l9859d" role="tab">Super-Earth (L 98-59 d)</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#scenario-lavaworld" role="tab">Lava World</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#scenario-subneptune" role="tab">Sub-Neptune</a>
  </li>
</ul>

<div class="tab-content">

  <!-- ═══ EARTH ═══ -->
  <div class="tab-pane fade show active scenario-pane" id="scenario-earth" role="tabpanel">
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
            <tr><td>Volatiles</td><td>2 Earth oceans H<sub>2</sub>O</td></tr>
            <tr><td>Redox</td><td>IW+4</td></tr>
            <tr><td>Interior</td><td>SPIDER (magma ocean dynamics)</td></tr>
            <tr><td>Atmosphere</td><td>AGNI (radiative-convective)</td></tr>
          </table>
          <div class="outcome">
            <strong>Outcome:</strong> Ocean formation within ~1 Gyr
          </div>
        </div>
      </div>
    </div>

    <div class="result-gallery">
      <div class="result-card">
        <img src="{{ '/assets/demos/earth/thermal.png' | relative_url }}" alt="Earth thermal evolution" loading="lazy">
        <div class="result-label">Thermal evolution</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/earth/volatiles.png' | relative_url }}" alt="Earth volatile inventory" loading="lazy">
        <div class="result-label">Volatile inventory</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/earth/spectrum.png' | relative_url }}" alt="Earth emission spectrum" loading="lazy">
        <div class="result-label">Emission spectrum</div>
      </div>
    </div>

    <details class="demo-detail">
      <summary>Detailed interpretation</summary>
      <div class="detail-body">
        <p>Starting from a fully molten mantle after a giant impact, PROTEUS tracks how Earth's magma ocean solidifies, volatiles outgas to form a thick steam atmosphere, and liquid water oceans eventually form.</p>
        <p>The simulation begins with a high mantle entropy (2900 J/K/kg) representing the aftermath of the Moon-forming impact. As the magma ocean cools, dissolved volatiles partition into the atmosphere following thermochemical equilibrium (CALLIOPE). The atmosphere is dominated by steam, CO<sub>2</sub>, and H<sub>2</sub>S.</p>
        <p>Solidification completes within ~200,000 years, consistent with geological constraints from the oldest surviving rocks. The steam atmosphere persists longer, eventually condensing to form a liquid water ocean beneath a CO<sub>2</sub>+H<sub>2</sub>S atmosphere. This transition constrains when Earth first became habitable, and is directly testable against geological evidence.</p>
      </div>
    </details>
  </div>

  <!-- ═══ SUPER-EARTH (L 98-59 d) ═══ -->
  <div class="tab-pane fade scenario-pane" id="scenario-l9859d" role="tabpanel">
    <div class="scenario-top">
      <div class="scenario-video-col">
        <video muted playsinline loop controls>
          <source src="{{ '/assets/demos/l9859d/video.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <div class="scenario-info-col">
        <div class="at-a-glance">
          <h5>At a glance</h5>
          <table>
            <tr><td>Mass</td><td>1.64 M<sub>Earth</sub></td></tr>
            <tr><td>Orbit</td><td>0.05 AU (M-dwarf, 0.29 M<sub>Sun</sub>)</td></tr>
            <tr><td>Volatiles</td><td>H-rich, volatile-rich mantle</td></tr>
            <tr><td>Redox</td><td>IW-4</td></tr>
            <tr><td>Interior</td><td>SPIDER</td></tr>
            <tr><td>Atmosphere</td><td>AGNI (Honeyside opacities)</td></tr>
          </table>
          <div class="outcome">
            <strong>Outcome:</strong> Thick atmosphere, extended magma ocean, slow solidification
          </div>
        </div>
      </div>
    </div>

    <div class="result-gallery">
      <div class="result-card">
        <img src="{{ '/assets/demos/l9859d/thermal.png' | relative_url }}" alt="L 98-59 d thermal evolution" loading="lazy">
        <div class="result-label">Thermal evolution</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/l9859d/volatiles.png' | relative_url }}" alt="L 98-59 d volatile inventory" loading="lazy">
        <div class="result-label">Volatile inventory</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/l9859d/spectrum.png' | relative_url }}" alt="L 98-59 d emission spectrum" loading="lazy">
        <div class="result-label">Emission spectrum</div>
      </div>
    </div>

    <details class="demo-detail">
      <summary>Detailed interpretation</summary>
      <div class="detail-body">
        <p>L 98-59 d is a volatile-rich rocky super-Earth orbiting an M-dwarf at just 0.05 AU. Close-in stellar irradiation heats the surface strongly, while a massive volatile inventory keeps the atmosphere thick and opaque.</p>
        <p>The combination of strong irradiation and a reduced mantle (IW-4) produces a hydrogen-rich outgassed atmosphere that acts as a thermal blanket, slowing interior cooling significantly. The magma ocean phase is extended compared to Earth-like conditions.</p>
        <p>L 98-59 d is a confirmed JWST target. PROTEUS predictions for its atmospheric composition, thermal emission, and surface state are directly testable with upcoming observations.</p>
      </div>
    </details>
  </div>

  <!-- ═══ LAVA WORLD ═══ -->
  <div class="tab-pane fade scenario-pane" id="scenario-lavaworld" role="tabpanel">
    <div class="scenario-top">
      <div class="scenario-video-col">
        <video muted playsinline loop controls>
          <source src="{{ '/assets/demos/lavaworld/video.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <div class="scenario-info-col">
        <div class="at-a-glance">
          <h5>At a glance</h5>
          <table>
            <tr><td>Mass</td><td>~1 M<sub>Earth</sub></td></tr>
            <tr><td>Orbit</td><td>~0.015 AU (M-dwarf, 0.1 M<sub>Sun</sub>)</td></tr>
            <tr><td>Volatiles</td><td>~0.1 Earth oceans H<sub>2</sub>O</td></tr>
            <tr><td>Redox</td><td>IW+2</td></tr>
            <tr><td>Interior</td><td>SPIDER</td></tr>
            <tr><td>Atmosphere</td><td>AGNI + CALLIOPE</td></tr>
          </table>
          <div class="outcome">
            <strong>Outcome:</strong> Permanent magma ocean, thin atmosphere, strong thermal emission
          </div>
        </div>
      </div>
    </div>

    <div class="result-gallery">
      <div class="result-card">
        <img src="{{ '/assets/demos/lavaworld/thermal.png' | relative_url }}" alt="Lava world thermal evolution" loading="lazy">
        <div class="result-label">Thermal evolution</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/lavaworld/volatiles.png' | relative_url }}" alt="Lava world volatile inventory" loading="lazy">
        <div class="result-label">Volatile inventory</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/lavaworld/spectrum.png' | relative_url }}" alt="Lava world emission spectrum" loading="lazy">
        <div class="result-label">Emission spectrum</div>
      </div>
    </div>

    <details class="demo-detail">
      <summary>Detailed interpretation</summary>
      <div class="detail-body">
        <p>A small rocky planet so close to its star that it can never fully solidify. Its thin silicate atmosphere glows with thermal emission, making it one of the most observable classes of exoplanet.</p>
        <p>At 0.015 AU from an M-dwarf, the equilibrium temperature exceeds the solidus of silicate rock. The dayside remains permanently molten, with a thin atmosphere composed primarily of outgassed silicate vapour and residual volatiles. The strong thermal emission from the molten surface produces a distinctive spectral signature.</p>
        <p>Lava worlds are a growing class of detected exoplanets where PROTEUS predictions can be tested directly with current instrumentation.</p>
      </div>
    </details>
  </div>

  <!-- ═══ SUB-NEPTUNE ═══ -->
  <div class="tab-pane fade scenario-pane" id="scenario-subneptune" role="tabpanel">
    <div class="scenario-top">
      <div class="scenario-video-col">
        <video muted playsinline loop controls>
          <source src="{{ '/assets/demos/subneptune/video.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <div class="scenario-info-col">
        <div class="at-a-glance">
          <h5>At a glance</h5>
          <table>
            <tr><td>Mass</td><td>5 M<sub>Earth</sub></td></tr>
            <tr><td>Instellation</td><td>100x Earth</td></tr>
            <tr><td>Atmosphere</td><td>H-rich envelope</td></tr>
            <tr><td>Escape</td><td>ZEPHYRUS (XUV-driven)</td></tr>
            <tr><td>Stellar evolution</td><td>MORS</td></tr>
            <tr><td>Interior</td><td>SPIDER</td></tr>
          </table>
          <div class="outcome">
            <strong>Outcome:</strong> Competition between outgassing and escape determines final atmospheric mass
          </div>
        </div>
      </div>
    </div>

    <div class="result-gallery">
      <div class="result-card">
        <img src="{{ '/assets/demos/subneptune/thermal.png' | relative_url }}" alt="Sub-Neptune thermal evolution" loading="lazy">
        <div class="result-label">Thermal evolution</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/subneptune/volatiles.png' | relative_url }}" alt="Sub-Neptune volatile inventory" loading="lazy">
        <div class="result-label">Volatile inventory</div>
      </div>
      <div class="result-card">
        <img src="{{ '/assets/demos/subneptune/spectrum.png' | relative_url }}" alt="Sub-Neptune emission spectrum" loading="lazy">
        <div class="result-label">Emission spectrum</div>
      </div>
    </div>

    <details class="demo-detail">
      <summary>Detailed interpretation</summary>
      <div class="detail-body">
        <p>A 5 Earth-mass planet with an H<sub>2</sub>-rich volatile envelope under intense stellar irradiation. PROTEUS tracks how XUV-driven escape strips the atmosphere while the molten interior outgasses dissolved volatiles, setting up a competition that determines the planet's final state.</p>
        <p>The host star's XUV luminosity evolves over time (tracked by MORS), declining from its high initial levels as the star spins down. ZEPHYRUS computes the corresponding hydrodynamic escape rate. In this simulation, escape overwhelms outgassing: the initially thick (~600 bar) H<sub>2</sub>-dominated atmosphere is completely stripped within ~650 kyr, leaving a bare rocky surface cooling toward radiative equilibrium.</p>
        <p>Sub-Neptunes are the most common planet type in the Galaxy, yet none exists in our own Solar System. Whether a given planet retains its envelope or is stripped to a bare super-Earth depends sensitively on stellar XUV history, volatile inventory, and interior-atmosphere coupling. PROTEUS captures all of these processes self-consistently.</p>
      </div>
    </details>
  </div>

</div><!-- /tab-content -->

---

## What PROTEUS computes

Each scenario above couples multiple physical processes in a single self-consistent simulation: radiative transfer through the atmosphere, convective heat transport in the mantle, thermochemical partitioning of volatiles between melt and gas, stellar evolution, atmospheric escape, and (where relevant) tidal dissipation. The modules responsible for each process can be swapped independently; see the [modules page](/modules) for details.

The outgoing radiation spectra shown in the animations are not post-processed visualisations. They are computed at every time step by the atmosphere module (AGNI), meaning PROTEUS produces synthetic observables that can be compared directly with telescope data from JWST and future missions.

<div class="demo-cta">
  <a href="https://proteus-framework.org/PROTEUS/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Run PROTEUS yourself</a>
  <a href="https://github.com/FormingWorlds/PROTEUS" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Explore the code</a>
</div>

<!-- Tab-switching: pause inactive videos, play active -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var pills = document.querySelectorAll('a[data-toggle="pill"]');
  for (var i = 0; i < pills.length; i++) {
    pills[i].addEventListener('shown.bs.tab', function(e) {
      // Pause all scenario videos
      var allVideos = document.querySelectorAll('.scenario-pane video');
      for (var j = 0; j < allVideos.length; j++) {
        allVideos[j].pause();
      }
      // Play video in newly active pane
      var target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        var vid = target.querySelector('video');
        if (vid) vid.play();
      }
    });
  }
});
</script>
