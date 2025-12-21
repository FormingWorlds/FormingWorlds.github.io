---
title: Help & Support
subtitle: Get help with PROTEUS framework

tagline: PROTEUS framework for planetary evolution.
description: PROTEUS framework for planetary evolution. Simulating coupled interior-atmosphere interactions on exoplanets using advanced numerical methods, to understand observations and the origin of life.

featured_image: /assets/img/illustrations/two_face_planet.jpg
---

# Help & Support

Get help with using the PROTEUS framework. Find answers to common questions, troubleshooting guides, and support resources.

## Getting Help

### Documentation
- **User Guide**: Complete user manual for PROTEUS
- **API Reference**: Detailed API documentation
- **Tutorials**: Step-by-step learning guides
- **Examples**: Code examples and use cases

### Support
- **GitHub Issues**: Report bugs and request features
- **Discussion Forum**: Ask questions and share experiences
- **Email Support**: help@formingworlds.org

## Frequently Asked Questions

### Installation & Setup

**Q: How do I install PROTEUS?**
```bash
pip install fwl-proteus
```

**Q: What are the system requirements?**
- Python 3.11 or higher
- 4 GB RAM minimum (8 GB recommended)
- 10 GB disk space for installation

**Q: How do I verify my installation?**
```bash
proteus doctor
```

### Basic Usage

**Q: How do I create a simple planet?**
```python
planet = pr.Planet()
planet.setup_basic()
```

**Q: How do I run a simulation?**
```python
results = planet.evolve(time_steps=1000)
```

**Q: How do I visualize results?**
```python
planet.plot_evolution()
```

### Advanced Features

**Q: How do I create custom modules?**
```python
class CustomAtmosphere(pr.Atmosphere):
    def evolve(self, dt):
        # Your custom logic here
        return super().evolve(dt)
```

**Q: How do I modify planetary parameters?**
```python
planet.mass = 2.0  # Earth masses
planet.radius = 1.3  # Earth radii
planet.stellar_distance = 0.8  # AU
```

**Q: How do I export simulation data?**
```python
planet.export_data('results.csv')
planet.export_visualization('evolution.mp4')
```

## Troubleshooting

### Common Issues

#### Installation Problems
**Issue**: Package installation fails
**Solution**: 
```bash
pip install --upgrade pip
pip install proteus-framework --no-cache-dir
```

#### Memory Errors
**Issue**: "Out of memory" errors during simulation
**Solution**: 
- Reduce simulation time steps
- Use smaller planet models
- Increase system RAM

#### Performance Issues
**Issue**: Simulations run slowly
**Solution**:
- Use parallel processing: `planet.evolve(parallel=True)`
- Reduce output frequency
- Optimize parameter ranges

### Error Messages

#### "Module not found" Error
```python
# Error: ModuleNotFoundError: No module named 'proteus'
# Solution: Install PROTEUS
pip install proteus-framework
```

#### "Invalid parameters" Error
```python
# Error: ValueError: Invalid planetary parameters
# Solution: Check parameter ranges
planet.mass = max(0.1, min(10.0, planet.mass))  # Clamp to valid range
```

#### "Convergence failure" Error
```python
# Error: ConvergenceError: Simulation failed to converge
# Solution: Adjust time step or initial conditions
planet.time_step = 0.01  # Smaller time step
```

## Tutorials & Examples

### Beginner Tutorials
1. **First Simulation**: Create and run your first planet
2. **Parameter Exploration**: Learn to modify planetary properties
3. **Visualization**: Create plots and animations
4. **Data Analysis**: Analyze simulation results

### Intermediate Tutorials
1. **Custom Modules**: Develop custom atmospheric models
2. **Batch Simulations**: Run multiple simulations
3. **Statistical Analysis**: Analyze simulation ensembles
4. **Validation**: Compare with observations

### Advanced Tutorials
1. **Performance Optimization**: Speed up simulations
2. **Parallel Computing**: Use multiple cores
3. **Machine Learning**: Integrate with ML frameworks
4. **Publication Workflow**: Prepare results for publication

## Video Tutorials

### Getting Started Series
- **Installation Guide**: Step-by-step installation
- **First Simulation**: Your first PROTEUS simulation
- **Basic Visualization**: Creating plots and animations
- **Parameter Tuning**: Adjusting simulation parameters

### Advanced Topics
- **Custom Development**: Creating custom modules
- **Performance Tuning**: Optimizing simulation speed
- **Data Analysis**: Statistical analysis techniques
- **Publication Preparation**: Preparing results for papers

## Workshops & Training

### Regular Workshops
- **Monthly Webinars**: Live Q&A sessions
- **Quarterly Workshops**: Intensive training sessions
- **Annual Conference**: PROTEUS user conference
- **Summer Schools**: Week-long training programs

### Custom Training
- **Institution Workshops**: On-site training for research groups
- **Online Courses**: Self-paced learning modules
- **One-on-One Sessions**: Personalized training
- **Mentorship Program**: Long-term guidance

## Contributing

### How to Contribute
1. **Report Issues**: Use GitHub Issues for bug reports
2. **Suggest Features**: Propose new features and improvements
3. **Contribute Code**: Submit pull requests with fixes
4. **Improve Documentation**: Help improve user guides

### Development Guidelines
- **Code Style**: Follow PEP 8 guidelines
- **Testing**: Include tests for new features
- **Documentation**: Document all public functions
- **Version Control**: Use meaningful commit messages

---

```components/features/feature-7.html ```
{% include components/features/feature-7.html %}

---

```components/accordion.html ```
{% include components/accordion.html %}
