---
title: Demo
subtitle: Interactive demonstrations of PROTEUS capabilities

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS framework for planetary evolution. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods, to understand observations and the origin of life.

featured_image: /assets/img/illustrations/two_face_planet.jpg
---
<!-- 
# Interactive Demo

Experience the power of PROTEUS through interactive demonstrations and live simulations.

## Live Simulations

### Earth Evolution Demo
Watch Earth's atmosphere and interior evolve over 4.5 billion years:

```python
# Interactive Earth simulation
earth = proteus.Planet()
earth.setup_earth_like()
earth.evolve_interactive()
```

**Features:**
- Real-time visualization
- Parameter adjustment
- Evolution timeline
- Data export

### Exoplanet Explorer
Explore different exoplanet scenarios:

```python
# Custom exoplanet simulation
exoplanet = proteus.Planet()
exoplanet.mass = 2.0  # Earth masses
exoplanet.radius = 1.3  # Earth radii
exoplanet.stellar_distance = 0.8  # AU
exoplanet.evolve()
```

**Parameters to Explore:**
- Planet mass and radius
- Stellar distance and type
- Initial atmospheric composition
- Interior structure

## Interactive Tools

### Parameter Slider Interface
Adjust simulation parameters in real-time:
- **Planet Mass**: 0.1 - 10 Earth masses
- **Stellar Distance**: 0.1 - 10 AU
- **Atmospheric Pressure**: 0.01 - 1000 bar
- **Surface Temperature**: 100 - 2000 K

### Visualization Controls
- **3D Planet View**: Rotate and zoom planet models
- **Evolution Timeline**: Scrub through simulation time
- **Data Plots**: Interactive temperature, pressure, and composition plots
- **Comparison Mode**: Side-by-side planet comparisons

## Demo Scenarios

### Habitable Zone Exploration
Investigate planets in different habitable zone positions:

1. **Inner Edge**: Hot, potentially runaway greenhouse
2. **Center**: Earth-like conditions
3. **Outer Edge**: Cold, potential snowball states

### Atmospheric Escape
Study atmospheric loss mechanisms:

- **Hydrodynamic Escape**: Early planetary evolution
- **Jeans Escape**: Thermal atmospheric loss
- **Impact Erosion**: Collisional atmospheric removal
- **Stellar Wind**: Stellar activity effects

### Interior Evolution
Explore planetary interior dynamics:

- **Core Formation**: Metallic core development
- **Mantle Convection**: Heat transfer and mixing
- **Volatile Cycling**: Water and gas exchange
- **Magnetic Field**: Dynamo generation and evolution

## Tutorial Simulations

### Beginner Tutorial
**Step 1**: Create a simple planet
```python
planet = proteus.Planet()
planet.setup_basic()
```

**Step 2**: Run a short simulation
```python
results = planet.evolve(time_steps=100)
```

**Step 3**: Visualize results
```python
planet.plot_evolution()
```

### Advanced Tutorial
**Custom Module Development**:
```python
class CustomAtmosphere(proteus.Atmosphere):
    def evolve(self, dt):
        # Custom evolution logic
        self.temperature += self.heating_rate * dt
        return super().evolve(dt)
```

## Performance Benchmarks

### Simulation Speed
- **Small Planets** (< 2 Earth masses): ~1 minute per billion years
- **Large Planets** (> 5 Earth masses): ~5 minutes per billion years
- **Complex Atmospheres**: ~10 minutes per billion years

### Memory Requirements
- **Minimum**: 4 GB RAM
- **Recommended**: 8 GB RAM
- **Large Simulations**: 16+ GB RAM

## Export Options

### Data Export
- **CSV Format**: Time series data
- **HDF5 Format**: Complete simulation state
- **JSON Format**: Parameter and metadata
- **NetCDF Format**: Climate model compatibility

### Visualization Export
- **PNG/JPG**: Static images
- **MP4**: Evolution animations
- **Interactive HTML**: Web-based visualizations
- **VRML**: 3D models for VR

## Getting Started

### Quick Start
1. **Load Demo**: Click "Load Earth Demo" button
2. **Run Simulation**: Press "Start Evolution" button
3. **Adjust Parameters**: Use sliders to modify conditions
4. **Export Results**: Download data and visualizations

### Advanced Features
1. **Custom Scenarios**: Create your own planetary systems
2. **Batch Runs**: Run multiple simulations simultaneously
3. **Sensitivity Analysis**: Test parameter dependencies
4. **Statistical Analysis**: Analyze simulation ensembles

---

```components/features/feature-5.html ```
{% include components/features/feature-5.html %}

---

```components/features/feature-6.html ```
{% include components/features/feature-6.html %} -->
