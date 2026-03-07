---
title: Modules within PROTEUS
subtitle: Explore the modular components of the PROTEUS framework

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS framework for planetary evolution. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods, to understand observations and the origin of life.

featured_image: /assets/img/illustrations/two_face_planet.jpg
---

Since PROTEUS is a modular simulation framework, modelling of physics is handled by various sub-modules. Each module can be independently configured, swapped, or extended.

<style>
  .module-group { margin-bottom: 2.5rem; }
  .module-group h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #8898aa;
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  .module-card {
    border: 1px solid #e9ecef;
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1rem;
    transition: box-shadow 0.2s, transform 0.2s;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .module-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
  .module-card .module-info { flex: 1; }
  .module-card .module-name {
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0;
    color: #32325d;
  }
  .module-card .module-desc {
    margin: 0.25rem 0 0;
    color: #8898aa;
    font-size: 0.95rem;
  }
  .module-card .module-link {
    flex-shrink: 0;
    margin-left: 1rem;
  }
  .module-card .module-link a {
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .module-accent {
    width: 4px;
    border-radius: 2px;
    margin-right: 1rem;
    align-self: stretch;
    flex-shrink: 0;
  }
  .accent-atmos { background: #5e72e4; }
  .accent-chem { background: #2dce89; }
  .accent-escape { background: #11cdef; }
  .accent-outgas { background: #fb6340; }
  .accent-interior { background: #8b572a; }
  .accent-stellar { background: #f5365c; }
  .accent-tidal { background: #8965e0; }
</style>

<div class="module-group">
  <h4>Atmosphere</h4>
  <div class="module-card">
    <div class="module-accent accent-atmos"></div>
    <div class="module-info">
      <p class="module-name">AGNI</p>
      <p class="module-desc">Radiative-convective atmosphere model</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/AGNI/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-atmos"></div>
    <div class="module-info">
      <p class="module-name">JANUS</p>
      <p class="module-desc">Prescribed fully-convective atmosphere</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/JANUS/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Chemistry &amp; escape</h4>
  <div class="module-card">
    <div class="module-accent accent-chem"></div>
    <div class="module-info">
      <p class="module-name">VULCAN</p>
      <p class="module-desc">Chemical kinetics</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/VULCAN/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-escape"></div>
    <div class="module-info">
      <p class="module-name">ZEPHYRUS</p>
      <p class="module-desc">Hydrodynamic escape</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/ZEPHYRUS/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Outgassing</h4>
  <div class="module-card">
    <div class="module-accent accent-outgas"></div>
    <div class="module-info">
      <p class="module-name">CALLIOPE</p>
      <p class="module-desc">Equilibrium volatile outgassing</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/CALLIOPE/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-outgas"></div>
    <div class="module-info">
      <p class="module-name">Atmodeller</p>
      <p class="module-desc">Equilibrium volatile outgassing</p>
    </div>
    <div class="module-link"><a href="https://atmodeller.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Interior</h4>
  <div class="module-card">
    <div class="module-accent accent-interior"></div>
    <div class="module-info">
      <p class="module-name">Zalmoxis</p>
      <p class="module-desc">Interior structure</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/Zalmoxis/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-interior"></div>
    <div class="module-info">
      <p class="module-name">Aragog</p>
      <p class="module-desc">Mantle dynamics</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/aragog/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-interior"></div>
    <div class="module-info">
      <p class="module-name">SPIDER</p>
      <p class="module-desc">Mantle dynamics</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/SPIDER" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Stellar evolution</h4>
  <div class="module-card">
    <div class="module-accent accent-stellar"></div>
    <div class="module-info">
      <p class="module-name">MORS</p>
      <p class="module-desc">Stellar luminosity evolution</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/MORS/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Tidal interactions</h4>
  <div class="module-card">
    <div class="module-accent accent-tidal"></div>
    <div class="module-info">
      <p class="module-name">LovePy</p>
      <p class="module-desc">Solid-phase tides</p>
    </div>
    <div class="module-link"><a href="https://github.com/nichollsh/lovepy" target="_blank" rel="noopener noreferrer">GitHub <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-tidal"></div>
    <div class="module-info">
      <p class="module-name">Obliqua</p>
      <p class="module-desc">Multi-phase tides</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/Obliqua/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>
