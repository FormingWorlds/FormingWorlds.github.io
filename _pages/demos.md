---
title: Demonstrations
subtitle: PROTEUS can resolve the interior-atmosphere evolution of rocky exoplanets, including sub-Neptunes, super-Earths, and terrestrials. This page demonstrates the model's capabilities.

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS framework for planetary evolution. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods, to understand observations and the origin of life.

featured_image: /assets/img/illustrations/two_face_planet.jpg
---


# Earth

The Earth represents an important benchmark scenario for PROTEUS; we will always know more about this planet than any other. Evolutionary modelling can tell us when our oceans formed and when clement conditions first arose. 

Here we configure PROTEUS to model a single evolutionary pathway for the early Earth following a giant impact. The simulation begins with a modest initial inventory of volatiles and a fully molten interior, and runs until oceans form.

<div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
  <div>
    <button id="play-video-btn" class="btn btn-primary">Simulate the early Earth</button>
  </div>
  <div style="display:flex; justify-content:center; width:100%;">
    <video id="demo-earth-video" muted playsinline width="38%">
      <source src="/assets/demos/earth/anim.mp4">
      Your browser does not support MP4 videos.
    </video>
  </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('play-video-btn');
  var vid = document.getElementById('demo-earth-video');
  if (!btn || !vid) return;
  btn.addEventListener('click', function () {
    vid.play().catch(function(e){ console.warn('Video play failed:', e); });
  });
});
</script>

Earth cools and forms oceans within ~1 billion years of simulated time. This animation is not only illustrative; the outgoing radiation spectrum (bottom left) changes over time. This spectrum is what JWST would observe for an exo-Earth.


The image below plots several high-level variables across the course of this simulation. The left column shows thermodynamic variables. Panel (c) shows that this simulated Earth starts fully molten and cools very rapidly; it solidifies within 200&nbsp;000 years, consistent with measurements of the oldest surviving rocks.

<div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
    <img src="{{ '/assets/demos/earth/global.png' | relative_url }}" alt="Multi-panel plot of global model evolution" style="width:70%; height:auto">
</div>


Atmospheric thickness increases over time; the right column tracks volatile inventories. Volatiles are initially mostly dissolved but are progressively <i>outgassed</i> as the mantle solidifies. Panel (b) shows partial surface pressures, which first increase and later decrease as some gas escapes.

Solidification of Earth's early magma ocean produces an atmosphere dominated by steam, carbon dioxide (CO2), and hydrogen sulfide (H2S). The steam eventually condenses to form a liquid water ocean beneath a CO2+H2S atmosphere, which could provide conditions suitable for the origin of life.

We visualise these climatic transitions by plotting atmospheric temperature profiles (below) at several points in time (line colours).

<div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
    <img src="{{ '/assets/demos/earth/atmos.png' | relative_url }}" alt="Atmosphere profiles over time" style="width:45%; height:auto">
</div>

These profiles change shape because the atmosphere's capacity to cool the planet varies with time. PROTEUS resolves this continuum of climate regimes, which is central to quantifying the cooling timescale and linking model results to telescope observations of exo‑Earths.

# Next steps

We now refer you to the online documentation pages for [PROTEUS](https://proteus-framework.org/PROTEUS/), which provide tutorials and how-to guides.


