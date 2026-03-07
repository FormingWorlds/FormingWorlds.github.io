---
title: Modules within PROTEUS
subtitle: Explore the modular components of the PROTEUS framework

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS framework for planetary evolution. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods, to understand observations and the origin of life.
---

Planetary evolution involves tightly coupled physical processes: radiative transfer in the atmosphere, convection and solidification in the mantle, volatile exchange between interior and surface reservoirs, chemical reactions, atmospheric escape, stellar irradiation, and tidal dissipation. No single code can treat all of these from first principles at once.

PROTEUS addresses this by adopting a modular architecture. Each physical domain is handled by a dedicated module that can be developed, tested, and validated independently. The PROTEUS coupler orchestrates the exchange of boundary conditions between modules at each time step, so that the full system evolves self-consistently. This design makes it straightforward to swap one atmosphere model for another, to enable or disable tidal heating, or to plug in a new outgassing parameterisation without rewriting the rest of the framework.

All PROTEUS modules are fully open source. The modules currently available are listed below, grouped by physical domain.

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
      <p class="module-desc">Solves the radiative-convective equilibrium of the atmosphere column, computing temperature profiles, fluxes, and the outgoing longwave radiation that controls planetary cooling.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/AGNI/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-atmos"></div>
    <div class="module-info">
      <p class="module-name">JANUS</p>
      <p class="module-desc">A simple atmosphere model that assumes a fully convective (adiabatic) temperature profile. Useful for parameter sweeps and cases where radiative transfer in the upper atmosphere is less critical.</p>
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
      <p class="module-desc">Computes time-dependent atmospheric photochemistry and thermochemistry, tracking the production and destruction of molecular species throughout the atmosphere column.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/VULCAN/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-escape"></div>
    <div class="module-info">
      <p class="module-name">ZEPHYRUS</p>
      <p class="module-desc">Models hydrodynamic atmospheric escape driven by stellar XUV irradiation, determining the rate at which atmospheric species are lost to space over time.</p>
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
      <p class="module-desc">Calculates the partitioning of volatiles (H<sub>2</sub>O, CO<sub>2</sub>, N<sub>2</sub>, S-species, and others) between the magma ocean and the atmosphere at thermochemical equilibrium, accounting for melt composition and redox state.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/CALLIOPE/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-outgas"></div>
    <div class="module-info">
      <p class="module-name">Atmodeller</p>
      <p class="module-desc">Computes volatile speciation at equilibrium using a different thermodynamic backend. Adopted to supersede CALLIOPE.</p>
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
      <p class="module-desc">Solves for the radial interior structure of the planet (density, pressure, gravity, temperature) given bulk composition and equations of state, providing the gravitational and thermodynamic context for the mantle modules.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/Zalmoxis/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-interior"></div>
    <div class="module-info">
      <p class="module-name">SPIDER</p>
      <p class="module-desc">The primary mantle energy transport module. Solves the mixed-phase magma ocean evolution in entropy-pressure (S-P) space using a finite-volume approach on a staggered grid, tracking melt fraction, heat fluxes, and solidification fronts.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/SPIDER" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-interior"></div>
    <div class="module-info">
      <p class="module-name">Aragog</p>
      <p class="module-desc">An alternative mantle dynamics solver that operates in temperature-pressure (T-P) space. Simulates the thermal evolution of the magma ocean and solid mantle using a 1-D parameterised convection model.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/aragog/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>

<div class="module-group">
  <h4>Stellar evolution</h4>
  <div class="module-card">
    <div class="module-accent accent-stellar"></div>
    <div class="module-info">
      <p class="module-name">MORS</p>
      <p class="module-desc">Provides the time-dependent bolometric and XUV luminosity of the host star, based on stellar evolution tracks. The stellar flux sets the energy budget that drives atmospheric escape and surface heating.</p>
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
      <p class="module-desc">Computes tidal Love numbers and dissipation rates for a solid (or partially molten) planet, translating orbital forcing into internal heat production that can delay or prevent mantle solidification.</p>
    </div>
    <div class="module-link"><a href="https://github.com/nichollsh/lovepy" target="_blank" rel="noopener noreferrer">GitHub <i class="ni ni-bold-right"></i></a></div>
  </div>
  <div class="module-card">
    <div class="module-accent accent-tidal"></div>
    <div class="module-info">
      <p class="module-name">Obliqua</p>
      <p class="module-desc">Extends tidal modelling to bodies with both solid and liquid layers, computing dissipation across multiple rheological phases and coupling tidal heat to the interior energy budget.</p>
    </div>
    <div class="module-link"><a href="https://proteus-framework.org/Obliqua/" target="_blank" rel="noopener noreferrer">Docs <i class="ni ni-bold-right"></i></a></div>
  </div>
</div>
