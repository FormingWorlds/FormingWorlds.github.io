---
title: Interactive Map
subtitle: Explore planetary systems and exoplanets
description: Interactive visualization of planetary systems simulated with PROTEUS
featured_image: /assets/img/sections/unsplashs.jpg
---

# Interactive Planetary Map

Explore planetary systems and exoplanets through our interactive visualization tool powered by PROTEUS simulations.

## Featured Systems

### Solar System
Explore our own solar system with detailed atmospheric and interior evolution models.

### TRAPPIST-1 System
Investigate the seven-planet system around the ultracool dwarf star TRAPPIST-1.

### Kepler-442b
Study this potentially habitable exoplanet located in the constellation Lyra.

## Interactive Features

### Planet Comparison Tool
Compare atmospheric compositions, interior structures, and evolution histories of different planets.

### Habitability Assessment
Visualize habitable zones and assess planetary habitability based on PROTEUS simulations.

### Evolution Timeline
Watch planets evolve over billions of years with interactive timeline controls.

## Data Sources

Our interactive map incorporates data from:
- NASA Exoplanet Archive
- ESA Exoplanet Database
- Ground-based surveys
- Space telescope observations
- PROTEUS simulation results

## How to Use

1. **Browse Systems**: Use the navigation panel to explore different planetary systems
2. **Select Planets**: Click on planets to view detailed information
3. **Compare Features**: Use the comparison tool to analyze multiple planets
4. **Run Simulations**: Modify parameters and run custom PROTEUS simulations
5. **Export Data**: Download simulation results and visualizations

## Custom Simulations

Run your own planetary evolution simulations directly from the map:

```python
# Example: Create a custom planet
planet = proteus.Planet()
planet.mass = 2.0  # Earth masses
planet.radius = 1.3  # Earth radii
planet.stellar_distance = 0.8  # AU

# Run simulation
results = planet.evolve()
```

## Visualization Tools

### 3D Planet Models
Interactive 3D models showing:
- Atmospheric layers
- Interior structure
- Magnetic fields
- Surface features

### Evolution Animations
Watch planets evolve through:
- Atmospheric escape
- Interior cooling
- Volatile cycling
- Climate changes

### Data Plots
Interactive plots displaying:
- Temperature profiles
- Pressure evolution
- Composition changes
- Habitability metrics

---

```components/features/feature-6.html ```
{% include components/features/feature-6.html %}

---

```components/features/feature-7.html ```
{% include components/features/feature-7.html %}
