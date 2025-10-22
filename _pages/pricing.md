---
title: PROTEUS Framework Modules
subtitle: Explore the modular components of the PROTEUS framework
description: Discover the individual modules that make up the PROTEUS planetary evolution framework
featured_image: /assets/img/illustrations/two_face_planet.jpg
---

# PROTEUS Framework Modules

PROTEUS is designed as a modular framework, allowing researchers to use individual components or combine them for comprehensive planetary evolution studies. Each module focuses on specific aspects of planetary physics and can be used independently or integrated with other modules.

## Core Modules

### Atmosphere Module
**Purpose**: Simulates atmospheric evolution, composition changes, and escape processes

**Key Features**:
- Atmospheric escape modeling (Jeans, hydrodynamic, photochemical)
- Composition evolution tracking
- Climate feedback mechanisms
- Stellar wind interactions

**Applications**:
- Exoplanet atmospheric characterization
- Habitability assessment
- Climate evolution studies

### Interior Module
**Purpose**: Models planetary interior structure, thermal evolution, and geodynamics

**Key Features**:
- Core-mantle differentiation
- Thermal evolution calculations
- Plate tectonics simulation
- Magnetic field generation

**Applications**:
- Planetary formation studies
- Interior structure modeling
- Geodynamic evolution

### Coupling Module
**Purpose**: Links atmospheric and interior processes for integrated evolution

**Key Features**:
- Volatile cycling between surface and interior
- Climate-interior feedback
- Outgassing and subduction processes
- Energy balance calculations

**Applications**:
- Complete planetary evolution
- Habitability studies
- Long-term climate modeling

## Specialized Modules

### Stellar Module
**Purpose**: Provides stellar evolution and radiation environment

**Key Features**:
- Stellar evolution tracks
- Spectral energy distribution
- Stellar wind properties
- Activity cycle modeling

### Orbital Module
**Purpose**: Handles orbital dynamics and tidal interactions

**Key Features**:
- Orbital evolution
- Tidal heating calculations
- Resonant interactions
- Multi-body dynamics

### Chemistry Module
**Purpose**: Detailed chemical reaction networks and equilibrium calculations

**Key Features**:
- Chemical equilibrium calculations
- Reaction network modeling
- Phase diagram calculations
- Thermodynamic databases

## Integration and Workflow

### Module Interconnection
PROTEUS modules are designed to work together seamlessly:

```python
# Example: Coupled atmosphere-interior evolution
from proteus import Atmosphere, Interior, Coupling

# Initialize modules
atmosphere = Atmosphere()
interior = Interior()
coupling = Coupling(atmosphere, interior)

# Run coupled evolution
results = coupling.evolve(time=1e9)  # 1 billion years
```

### Custom Configurations
Users can create custom module combinations:

```python
# Minimal atmosphere-only simulation
atmosphere = Atmosphere()
atmosphere.set_stellar_environment(star_type="M")
results = atmosphere.evolve()

# Full planetary system simulation
planet = Planet()
planet.add_module(Atmosphere())
planet.add_module(Interior())
planet.add_module(Orbital())
planet.evolve()
```

## Module Documentation

Each module comes with comprehensive documentation including:
- API reference
- Tutorial notebooks
- Example simulations
- Parameter descriptions
- Validation cases

## Getting Started

1. **Install PROTEUS**: Follow the installation guide
2. **Choose Modules**: Select modules relevant to your research
3. **Run Examples**: Start with provided example scripts
4. **Customize**: Modify parameters for your specific needs
5. **Extend**: Add custom modules or modify existing ones

---

```components/features/feature-1.html ```
{% include components/features/feature-1.html %}

---

```components/features/feature-2.html ```
{% include components/features/feature-2.html %}

---

```components/features/feature-3.html ```
{% include components/features/feature-3.html %}