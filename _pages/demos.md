---
title: Demonstrations
subtitle: PROTEUS resolves the interior-atmosphere evolution of rocky exoplanets, including sub-Neptunes, super-Earths, and terrestrials.

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS demonstrations. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods.
---

<style>
  .demo-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0;
  }
  .demo-media img {
    border-radius: 0.5rem;
    box-shadow: var(--card-shadow);
  }
  .demo-media video {
    border-radius: 0.5rem;
    box-shadow: var(--card-shadow);
  }
</style>

## Earth

The Earth is an important benchmark scenario for PROTEUS; we will always know more about this planet than any other. Evolutionary modelling can tell us when oceans formed and when clement conditions first arose.

Here we configure PROTEUS to model one specific evolutionary pathway for the early Earth following a giant impact. The outcome shown below is not unique: it depends on the chosen initial conditions and assumptions. Key parameters that control the evolution include the **surface oxidation state**, the **initial volatile inventory**, the **post-impact mantle entropy**, and the strength of **tidal forcing**. Varying these parameters can lead to qualitatively different outcomes, from long-lived steam atmospheres to rapid ocean formation.

In this example, the simulation begins with a modest initial inventory of volatiles and a fully molten interior, and runs until oceans form.

<div class="demo-media">
  <video autoplay muted playsinline loop controls style="width: 100%; max-width: 500px;">
    <source src="{{ '/assets/demos/earth/anim.mp4' | relative_url }}" type="video/mp4">
  </video>
</div>

Under these specific conditions, Earth cools and forms oceans within ~1 billion years of simulated time. Different choices of initial parameters (for instance, a more oxidised mantle or a larger volatile budget) would shift this timescale significantly. The animation is not only illustrative; the outgoing radiation spectrum (bottom left) changes over time. This spectrum is what JWST would observe for an exo-Earth.

The image below plots several high-level variables across the course of this simulation. The left column shows thermodynamic variables. Panel (c) shows that this simulated Earth starts fully molten and cools very rapidly; it solidifies within 200&nbsp;000 years, consistent with measurements of the oldest surviving rocks.

<div class="demo-media">
  <img src="{{ '/assets/demos/earth/global.png' | relative_url }}" alt="Multi-panel plot of global model evolution" style="width: 100%; max-width: 700px;" loading="lazy">
</div>

Atmospheric thickness increases over time; the right column tracks volatile inventories. Volatiles are initially mostly dissolved but are progressively *outgassed* as the mantle solidifies. Panel (b) shows partial surface pressures, which first increase and later decrease as some gas escapes.

In this scenario, solidification of Earth's early magma ocean produces an atmosphere dominated by steam, carbon dioxide (CO<sub>2</sub>), and hydrogen sulfide (H<sub>2</sub>S). The steam eventually condenses to form a liquid water ocean beneath a CO<sub>2</sub>+H<sub>2</sub>S atmosphere, which could provide conditions suitable for the origin of life. The atmospheric composition and the timing of ocean formation are sensitive to the assumed volatile inventory and redox state of the mantle.

We visualise these climatic transitions by plotting atmospheric temperature profiles (below) at several points in time (line colours).

<div class="demo-media">
  <img src="{{ '/assets/demos/earth/atmos.png' | relative_url }}" alt="Atmosphere profiles over time" style="width: 100%; max-width: 450px;" loading="lazy">
</div>

These profiles change shape because the atmosphere's capacity to cool the planet varies with time. PROTEUS resolves this continuum of climate regimes, which is central to quantifying the cooling timescale and linking model results to telescope observations of exo-Earths.

---

## Next steps

We now refer you to the online documentation pages for [PROTEUS](https://proteus-framework.org/PROTEUS/), which provide tutorials and how-to guides.
