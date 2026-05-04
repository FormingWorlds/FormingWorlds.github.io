---
title: Publications
subtitle: Scientific papers that develop or apply the PROTEUS framework

description: "Scientific papers developing and applying the PROTEUS framework for coupled interior-atmosphere evolution of rocky exoplanets and early Earth."
image: /assets/img/og-default.jpg
---

This list covers papers that develop or make direct use of the PROTEUS code. For a continuously updated version, see the [SciX library](https://scixplorer.org/public-libraries/EVAJ1UgWTCy2Z7TRoSmjtQ).

<style>
  .pub-section { margin-bottom: 2.5rem; }
  .pub-section h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--muted-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.25rem;
  }
  .pub-entry {
    margin-bottom: 1.75rem;
    padding-left: 1rem;
    border-left: 3px solid var(--border-color);
  }
  .pub-entry:hover {
    border-left-color: var(--accent);
  }
  .pub-title {
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--heading-color);
    margin: 0 0 0.25rem;
    line-height: 1.4;
  }
  .pub-title a {
    color: var(--heading-color);
    text-decoration: none;
  }
  .pub-title a:hover {
    color: var(--accent);
  }
  .pub-authors {
    color: var(--body-color);
    font-size: 0.9rem;
    margin: 0 0 0.25rem;
  }
  .pub-venue {
    color: var(--muted-color);
    font-size: 0.85rem;
    font-style: italic;
    margin: 0 0 0.35rem;
  }
  .pub-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .pub-links a {
    font-size: 0.8rem;
    color: var(--accent);
    text-decoration: none;
    padding: 0.15rem 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 3px;
    transition: background 0.15s, border-color 0.15s;
  }
  .pub-links a:hover {
    background: var(--accent-light);
    border-color: var(--accent);
  }
  .pub-summary {
    color: var(--body-color);
    font-size: 0.88rem;
    margin: 0.4rem 0 0.25rem;
    line-height: 1.55;
  }
  .pub-abstract {
    margin: 0.4rem 0 0.35rem;
  }
  .pub-abstract summary {
    font-size: 0.82rem;
    color: var(--accent);
    cursor: pointer;
    user-select: none;
  }
  .pub-abstract summary:hover {
    text-decoration: underline;
  }
  .pub-abstract p {
    font-size: 0.82rem;
    color: var(--body-color);
    line-height: 1.55;
    margin: 0.4rem 0 0;
    padding-left: 0.5rem;
    border-left: 2px solid var(--border-color);
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pub-section a').forEach(function(a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
});
</script>

<div class="pub-section">
  <h4>Preprints</h4>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://arxiv.org/abs/2511.16142">Coupled atmospHere Interior modeL Intercomparison (CHILI) Protocol Version 1.0: A CUISINES Intercomparison Project of Magma Ocean Models</a>
    </p>
    <p class="pub-authors"><strong>Lichtenberg, T.</strong>; Schaefer, L.; Krissansen-Totton, J.; Miguel, Y.; Sergeev, D. E.; Baumeister, P.; Cmiel, J.; Janssen, L. J.; Nguyen, T. G.; Miyazaki, Y.; <strong>Nicholls, H.</strong>; Papesh, A.; Pelissard, H.; Peng, B.; Perez, J.; <strong>Postolec, E.</strong>; Sastre, M.; Salvador, A.; Spreeuw, H.; Zorzi, A.; Fauchez, T. J.; Hamano, K.; Leconte, J.; Maurice, M.; Noack, L.; Soucasse, L.</p>
    <p class="pub-venue">Preprint (2025)</p>
    <p class="pub-summary">Presents the experimental protocol for CHILI, an intercomparison project for coupled magma ocean-atmosphere models. The protocol defines standard tests for early Earth, Venus, and rocky exoplanets around M-dwarfs to quantify differences in energy transport, geochemistry, and volatile cycling between various models in the community.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Spectroscopic characterization of rocky exoplanets with the James Webb Space Telescope has brought the origin and evolution of their atmospheres into the focus of exoplanet science. Time-evolved models of the feedback between interior and atmosphere are critical to predict and interpret these observations and link them to the Solar System terrestrial planets. However, models differ in methodologies and input data, which can lead to significant differences in interpretation. In this paper, we present the experimental protocol of the Coupled atmospHere Interior modeL Intercomparison (CHILI) project. CHILI is an (exo-)planet model intercomparison project within the Climates Using Interactive Suites of Intercomparisons Nested for Exoplanet Studies (CUISINES) framework, which aims to support a diverse set of multi-model intercomparison projects in the exoplanet community. The present protocol includes the initial set of participating magma ocean models, divided into evolutionary and static models, and two types of test categories, one focused on Solar System planets (Earth & Venus) and the other on exoplanets orbiting low-mass M-dwarfs. Both test categories aim to quantify the evolution of key markers of the links between planetary atmospheres and interiors over geological timescales. The proposed tests would allow us to quantify and compare the differences between coupled atmosphere-interior models used by the exoplanet and planetary science communities. Results from the proposed tests will be published in dedicated follow-up papers. To encourage the community to join this comparison effort and as an example, we present initial test results for the early Earth and TRAPPIST-1 b, conducted with models differing in the treatment of energy transport in the planetary interior and atmosphere, surface boundary layer, geochemistry, and the in- and outgassing of volatile compounds.</p>
    </details>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2511.16142">arXiv</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://arxiv.org/abs/2512.05816">Most rocky sub-Neptunes are molten: mapping the solidification shoreline for gas dwarf exoplanets</a>
    </p>
    <p class="pub-authors">Calder, R.; Shorttle, O.; Nicholls, H.; Lichtenberg, T.; Guimond, C.-M.</p>
    <p class="pub-venue">Under review at MNRAS (2026)</p>
    <p class="pub-summary">Sub-Neptunes are the most common type of detected exoplanet, but their internal structure is ambiguous. This study maps the "solidification shoreline" separating molten from solid interiors and finds that 98% of detected sub-Neptunes, if they have rocky cores with hydrogen envelopes, host permanent magma oceans today.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Sub-Neptunes are the most common type of detected exoplanet, yet their observed masses and radii are degenerate with several interior structures. One possibility is that sub-Neptunes have silicate/iron interiors and H₂-dominated atmospheres, i.e., they are 'gas dwarfs'. If gas dwarfs have molten interiors, interactions between their magma oceans and atmospheres will produce distinct observational signatures. These signatures may break the degeneracy in interior structure, while providing insight into their interior processes, history, and population trends. We expect all such planets are born molten, but under what conditions do they remain molten today? We use the coupled interior-climate evolution model, PROTEUS, to estimate the 'solidification shoreline': the instellation flux boundary (as a function of stellar T_eff) that separates molten gas dwarfs from solidified ones. Our results show that 98% of detected sub-Neptunes occupy a region of parameter space consistent with their having permanent magma oceans, if they are gas dwarfs. While mantle fO₂ and bulk volatile C/H ratio both influence magma ocean lifetimes, planets with oxidising mantles and carbon-rich atmospheres are unlikely to have radii consistent with the sub-Neptune classification. Therefore, most detected sub-Neptunes (if they are gas dwarfs) have permanent magma oceans.</p>
    </details>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2512.05816">arXiv</a>
      <a href="https://scixplorer.org/abs/2025arXiv251205816C">SciX</a>
    </div>
  </div>
</div>

<div class="pub-section">
  <h4>Published</h4>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://arxiv.org/abs/2511.00952">Onset of habitable conditions on the Hadean Earth set by feedback between tides and greenhouse forcing</a>
    </p>
    <p class="pub-authors">van Dijk, M. R.; Nicholls, H.; <strong>Lichtenberg, T.</strong></p>
    <p class="pub-venue">The Planetary Science Journal (2026)</p>
    <p class="pub-summary">After the Moon-forming impact, Earth's magma ocean had to solidify before liquid water oceans could form. This study shows that feedback between tidal heating from the early Moon and greenhouse forcing from the outgassed atmosphere can vary the magma ocean lifetime from 30 Myr to 500 Myr, depending on the mantle redox state and volatile inventory.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>In the aftermath of the Moon-forming giant impact, the Hadean Earth's mantle and surface crystallized from a global magma ocean blanketed by a dense volatile-rich atmosphere. While prior studies have explored the thermal evolution of such early Earth scenarios under idealized, oxidizing conditions, the potential feedback between tidal heating driven by Earth-Moon orbital forcing and variable redox scenarios have not yet been explored in detail. We investigate whether tidal heating could have prolonged this early magma ocean phase and supported quasi-steady state epochs of global radiative equilibrium: periods of thermal balance between outgoing radiation and interior heat flux. Using the PROTEUS simulation framework, we simulate Earth's early evolution under a range of plausible tidal power densities, oxygen fugacities, and volatile inventories. Our results suggest that feedback between tidal heating and atmospheric forcing can induce substantial variation in magma ocean lifetimes, from ~30 Myr up to ~500 Myr, sensitive to interior redox conditions. Global radiative equilibrium epochs commonly arise across this range, lasting from ~2 to ~320 Myr, and typically occur from 24 Myr after the Moon-forming impact. Under oxidizing conditions, late-stage H₂O degassing promotes melt retention and sustained heating due to its significant contribution to greenhouse forcing.</p>
    </details>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2511.00952">arXiv</a>
      <a href="https://scixplorer.org/abs/2025arXiv251100952V">SciX</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://doi.org/10.1038/s41550-026-02815-8">Volatile-rich evolution of molten super-Earth L 98-59 d</a>
    </p>
    <p class="pub-authors">Nicholls, H.; Lichtenberg, T.; Chatterjee, R. D.; Guimond, C. M.; Postolec, E.; Pierrehumbert, R. T.</p>
    <p class="pub-venue">Nature Astronomy (2026)</p>
    <p class="pub-summary">JWST detected sulphur dioxide in the atmosphere of the 1.6 Earth-mass planet L 98-59 d, the first sulphur detection on a planet of this size. Simulations show the planet hosts a permanent magma ocean rich in sulphur, which outgasses and is converted to SO<sub>2</sub> by ultraviolet radiation. L 98-59 d does not fit the standard "gas dwarf" or "water world" categories, suggesting super-Earths are more diverse than previously assumed.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Small low-density exoplanets are sculpted by strong stellar irradiation but their origin is unknown. Two competing scenarios are that they formed either with rocky interiors and H₂-He atmospheres ('gas-dwarfs'), or instead with bulk compositions dominated by H₂O phases ('water-worlds'). Observations of L 98-59 d have revealed its unusually low density and spectral characteristics, opening a window for disentangling its origin. We constrain the possible range of evolutionary histories linking L 98-59 d's birth conditions to these observations, using a coupled atmosphere-interior modelling framework. Observations are explained by a chemically-reducing mantle and early substantial (>1.8 mass%) sulfur and hydrogen content, inconsistent with both the gas-dwarf and water-world origin scenarios. Observed spectral features are explained by in-situ photochemical production of SO₂ in an H₂ background. L 98-59 d's interior comprises a permanent magma ocean, allowing long-term retention of volatiles within its interior over billions of years. In breaking with the supposed gas-dwarf/water-world dichotomy, we reveal an evolutionary pathway defined by high-molar-mass atmospheres overlying magma oceans, and invite a more nuanced taxonomy of small exoplanets.</p>
    </details>
    <div class="pub-links">
      <a href="https://doi.org/10.1038/s41550-026-02815-8">DOI</a>
      <a href="https://arxiv.org/abs/2507.02656">arXiv</a>
      <a href="https://scixplorer.org/abs/2026NatAs.tmp...61N">SciX</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://doi.org/10.1093/mnras/staf1167">Self-limited tidal heating and prolonged magma oceans in the L 98-59 system</a>
    </p>
    <p class="pub-authors">Nicholls, H.; Guimond, C. M.; Hay, H. C. F. C.; Chatterjee, R. D.; Lichtenberg, T.; Pierrehumbert, R. T.</p>
    <p class="pub-venue">Monthly Notices of the Royal Astronomical Society, 541, 2566 (2025)</p>
    <p class="pub-summary">Simulates the early evolution of all three rocky planets in the L 98-59 system with self-consistent tidal heating. Discovers a new "radiation-tide-rheology feedback" where tidal heating, mantle viscosity, and radiative cooling regulate each other, yielding heating rates up to 100x lower than previous estimates but still sufficient to keep magma oceans alive for billions of years.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Rocky exoplanets accessible to characterisation often lie on close-in orbits where tidal heating within their interiors is significant, with the L 98-59 planetary system being a prime example. As a long-term energy source for ongoing mantle melting and outgassing, tidal heating has been considered as a way to replenish lost atmospheres on rocky planets around active M-dwarfs. We simulate the early evolution of L 98-59 b, c and d using a time-evolved interior-atmosphere modelling framework, with a self-consistent implementation of tidal heating and redox-controlled outgassing. Emerging from our calculations is a novel self-limiting mechanism between radiative cooling, tidal heating, and mantle rheology, which we term the 'radiation-tide-rheology feedback'. Our coupled modelling yields self-limiting tidal heating estimates that are up to two orders of magnitude lower than previous calculations, and yet are still large enough to enable the extension of primordial magma oceans to Gyr timescales. Comparisons with a semi-analytic model demonstrate that this negative feedback is a robust mechanism which can probe a given planet's initial conditions, atmospheric composition, and interior structure. The orbit and instellation of the sub-Venus L 98-59 b likely place it in a regime where tidal heating has kept the planet molten up to the present day, even if it were to have lost its atmosphere. For c and d, a long-lived magma ocean can be induced by tides only with additional atmospheric regulation of energy transport.</p>
    </details>
    <div class="pub-links">
      <a href="https://doi.org/10.1093/mnras/staf1167">DOI</a>
      <a href="https://arxiv.org/abs/2505.03604">arXiv</a>
      <a href="https://scixplorer.org/abs/2025MNRAS.541.2566N">SciX</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://doi.org/10.1093/mnras/stae2772">Convective shutdown in the atmospheres of lava worlds</a>
    </p>
    <p class="pub-authors">Nicholls, H.; Pierrehumbert, R. T.; Lichtenberg, T.; Soucasse, L.; Smeets, S.</p>
    <p class="pub-venue">Monthly Notices of the Royal Astronomical Society, 536, 2957 (2025)</p>
    <p class="pub-summary">Previous models assumed convection always sets the atmospheric temperature structure on lava worlds. This work shows that atmospheres overlying magma oceans can develop deep convectively stable isothermal layers, yet permanent magma oceans persist regardless. Applied to HD 63433 d and TRAPPIST-1 c, the results show that low-molecular-weight atmospheres can produce cool stratospheres that mimic the emission of an airless body.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Atmospheric energy transport is central to the cooling of primordial magma oceans. Theoretical studies of atmospheres on lava planets have assumed that convection is the only process involved in setting the atmospheric temperature structure. This significantly influences the ability for a magma ocean to cool. It has been suggested that convective stability in these atmospheres could preclude permanent magma oceans. We develop a new 1D radiative-convective model in order to investigate when the atmospheres overlying magma oceans are convectively stable. Using a coupled interior-atmosphere framework, we simulate the early evolution of two terrestrial-mass exoplanets: TRAPPIST-1 c and HD 63433 d. Our simulations suggest that the atmosphere of HD 63433 d exhibits deep isothermal layers which are convectively stable. However, it is able to maintain a permanent magma ocean and an atmosphere depleted in H₂O. It is possible to maintain permanent magma oceans underneath atmospheres without convection. Absorption features of CO₂ and SO₂ within synthetic emission spectra are associated with mantle redox state, meaning that future observations of HD 63433 d may provide constraints on the geochemical properties of a magma ocean analogous with the early Earth. Simulations of TRAPPIST-1 c indicate that it is expected to have solidified within 100 Myr, outgassing a thick atmosphere in the process. Cool isothermal stratospheres generated by low molecular-weight atmospheres can mimic the emission of an atmosphere-less body.</p>
    </details>
    <div class="pub-links">
      <a href="https://doi.org/10.1093/mnras/stae2772">DOI</a>
      <a href="https://arxiv.org/abs/2412.11987">arXiv</a>
      <a href="https://scixplorer.org/abs/2025MNRAS.536.2957N">SciX</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://doi.org/10.1029/2024JE008576">Magma ocean evolution at arbitrary redox state</a>
    </p>
    <p class="pub-authors">Nicholls, H.; Lichtenberg, T.; Bower, D. J.; Pierrehumbert, R. T.</p>
    <p class="pub-venue">Journal of Geophysical Research: Planets, 129 (2024)</p>
    <p class="pub-summary">Introduces the current PROTEUS framework with coupled magma ocean interior, radiative-convective atmosphere, and redox-dependent outgassing chemistry. Explores how varying the mantle oxidation state, orbital distance, hydrogen budget, and C/H ratio controls whether a planet ends up with a steam atmosphere, a hydrogen-rich greenhouse, or a permanently molten surface.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>Interactions between magma oceans and overlying atmospheres on young rocky planets leads to an evolving feedback of outgassing, greenhouse forcing, and mantle melt fraction. Previous studies have predominantly focused on the solidification of oxidized Earth-similar planets, but the diversity in mean density and irradiation observed in the low-mass exoplanet census motivate exploration of strongly varying geochemical scenarios. We aim to explore how variable redox properties alter the duration of magma ocean solidification, the equilibrium thermodynamic state, melt fraction of the mantle, and atmospheric composition. We develop a 1D coupled interior-atmosphere model that can simulate the time-evolution of lava planets. This is applied across a grid of fixed redox states, orbital separations, hydrogen endowments, and C/H ratios around a Sun-like star. The composition of these atmospheres is highly variable before and during solidification. The evolutionary path of an Earth-like planet at 1 AU ranges between permanent magma ocean states and solidification within 1 Myr. Recently solidified planets typically host H₂O- or H₂-dominated atmospheres in the absence of escape. Orbital separation is the primary factor determining magma ocean evolution, followed by the total hydrogen endowment, mantle oxygen fugacity, and finally the planet's C/H ratio. Collisional absorption by H₂ induces a greenhouse effect which can prevent or stall magma ocean solidification.</p>
    </details>
    <div class="pub-links">
      <a href="https://doi.org/10.1029/2024JE008576">DOI</a>
      <a href="https://arxiv.org/abs/2411.19137">arXiv</a>
      <a href="https://scixplorer.org/abs/2024JGRE..12908576N">SciX</a>
    </div>
  </div>

  <div class="pub-entry">
    <p class="pub-title">
      <a href="https://doi.org/10.1029/2020JE006711">Vertically resolved magma ocean-protoatmosphere evolution: H<sub>2</sub>, H<sub>2</sub>O, CO<sub>2</sub>, CH<sub>4</sub>, CO, O<sub>2</sub>, and N<sub>2</sub> as primary absorbers</a>
    </p>
    <p class="pub-authors">Lichtenberg, T.; Bower, D. J.; Hammond, M.; Boukrouche, R.; Sanan, P.; Tsai, S.-M.; Pierrehumbert, R. T.</p>
    <p class="pub-venue">Journal of Geophysical Research: Planets, 126 (2021)</p>
    <p class="pub-summary">The foundational PROTEUS paper. Couples a vertically resolved magma ocean model with a radiative-convective atmosphere to track how Earth-sized planets evolve under different dominant volatiles. Finds that H<sub>2</sub>-dominated atmospheres delay solidification by orders of magnitude compared to H<sub>2</sub>O or CO<sub>2</sub>, linking interior evolution directly to multi-wavelength observations.</p>
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <p>The earliest atmospheres of rocky planets originate from extensive volatile release during magma ocean epochs that occur during assembly of the planet. These establish the initial distribution of the major volatile elements between different chemical reservoirs that subsequently evolve via geological cycles. Current theoretical techniques are limited in exploring the anticipated range of compositional and thermal scenarios of early planetary evolution, even though these are of prime importance to aid astronomical inferences on the environmental context and geological history of extrasolar planets. Here, we present a coupled numerical framework that links an evolutionary, vertically-resolved model of the planetary silicate mantle with a radiative-convective model of the atmosphere. Using this method we investigate the early evolution of idealized Earth-sized rocky planets with end-member, clear-sky atmospheres dominated by either H₂, H₂O, CO₂, CH₄, CO, O₂, or N₂. We find central metrics of early planetary evolution, such as energy gradient, sequence of mantle solidification, surface pressure, or vertical stratification of the atmosphere, to be intimately controlled by the dominant volatile and outgassing history of the planet. Thermal sequences fall into three general classes with increasing cooling timescale: CO, N₂, and O₂ with minimal effect, H₂O, CO₂, and CH₄ with intermediate influence, and H₂ with several orders of magnitude increase in solidification time and atmosphere vertical stratification.</p>
    </details>
    <div class="pub-links">
      <a href="https://doi.org/10.1029/2020JE006711">DOI</a>
      <a href="https://arxiv.org/abs/2101.10991">arXiv</a>
      <a href="https://scixplorer.org/abs/2021JGRE..12606711L">SciX</a>
    </div>
  </div>
</div>
