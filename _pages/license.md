---
title: Licensing and open development
subtitle: How PROTEUS and its modules are licensed, and our commitment to open, reproducible science
description: "The licensing philosophy of the PROTEUS framework: fully open source, modular and independently licensed components, why we use Apache 2.0, how it works alongside GPL-3 modules, and our commitment to crediting the developers of the code we build on."
permalink: /license/
image: /assets/img/og-default.jpg
---

PROTEUS is built on the conviction that science is strongest when it is open.
Open source code can be read, checked, run, adapted, and improved by anyone, which makes the results that depend on it reproducible and the methods behind them transparent.
We see this not as an optional extra but as a basic requirement for software that sits at the heart of scientific work.
Every part of the framework is therefore released under a recognised open source license.

We also believe that open development is the best way to build software that lasts.
PROTEUS grows through collaboration: contributions from research scientists, software engineers, students, and many others across institutions and countries.
Keeping the code open, and keeping the barriers to using and contributing to it low, is what allows that community to form and the science to move forward.

## Open source, without exception

PROTEUS will only ever support and include fully open source code.
We do not build on closed, proprietary, or source-unavailable components, and we do not plan to.
If a capability can only be provided by code that is not open, we would rather develop an open alternative than compromise on this principle.
This keeps the entire pipeline, from input data to published figure, inspectable end to end.

## A framework of independent modules

PROTEUS is a coupling framework rather than a single monolithic program.
The physics is divided across a set of modules, each of which handles one domain: the atmosphere, the mantle, outgassing, photochemistry, escape, stellar evolution, tides, or interior structure.
Each module is a complete, standalone program in its own right.
It can be developed, tested, run, and published independently, and it lives in its own repository under its own license.
The PROTEUS coupler orchestrates the exchange of boundary conditions between whichever modules are selected for a given simulation.

Two consequences follow from this design, and both matter for licensing:

- **Modules are optional and swappable.** No single module is required for the framework to function. You can exchange one atmosphere model for another, enable or disable tidal heating, or substitute a different interior model. The framework never depends on any one specific component.
- **Modules are published by their own authors.** PROTEUS does not copy module source code into its own code base, and it does not re-host or relicense any module. The PROTEUS package contains only PROTEUS source code. Where a module is a Python package, PROTEUS names it as a dependency that the package manager retrieves from that module's own published release; other modules are fetched from their own repositories at install time. In each case the code comes from the module's own authors, under the module's own license, and is combined with PROTEUS at run time on the user's machine.

Much of the value of PROTEUS lies in this integration work: bringing established codes together, extending them, and in many cases contributing improvements back to the projects they came from.

## Licenses across the framework

Different components carry different licenses, reflecting the choices of their authors.
The authoritative license for any component is always the one stated in its own repository.
Representative examples across the ecosystem:

<table class="lic-table">
  <thead>
    <tr><th>License</th><th>Type</th><th>Examples</th></tr>
  </thead>
  <tbody>
    <tr><td>Apache 2.0</td><td>Permissive (with patent grant)</td><td>PROTEUS, AGNI, CALLIOPE, JANUS, ZEPHYRUS</td></tr>
    <tr><td>MIT</td><td>Permissive</td><td>MORS, Zalmoxis</td></tr>
    <tr><td>BSD 3-Clause</td><td>Permissive</td><td>SOCRATES</td></tr>
    <tr><td>GPL-3.0</td><td>Strong copyleft</td><td>VULCAN, FastChem, atmodeller, SPIDER, aragog</td></tr>
  </tbody>
</table>

PROTEUS itself, the coupling framework, is released under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## Why PROTEUS uses Apache 2.0

Apache 2.0 is a permissive license.
It lets anyone use, modify, and redistribute the code, including as part of a larger work under a different license, as long as attribution and the license notice are preserved.
Where Apache 2.0 goes further than MIT and BSD is on patents, which those shorter licenses do not cover with an explicit grant.
Apache 2.0 includes an explicit patent grant: each contributor automatically gives every user a perpetual, worldwide, royalty-free license to any of their own patents that are necessarily infringed by the code they contributed, whether on its own or in combination with the rest of the project.
In plain terms, a contributor, or the institution that employs them, cannot have their code accepted into the project and then later assert a patent against the people who use it.
The license also includes a patent retaliation clause: if a user starts patent litigation alleging that the software infringes one of their patents, the patent licenses that user received under Apache 2.0 are terminated.
Together these provisions close a gap that MIT and BSD leave open, where a contributor could grant the copyright permissions while making no express promise about their patents. They also shield the project and its community from patent attacks.
For scientific software this certainty is worth having, because contributors come from many universities, research institutes, and companies, each with their own intellectual property policies and patent portfolios.
The explicit grant lets everyone who builds on PROTEUS, including other research groups and any downstream industrial or governmental users, rely on the methods implemented in the code without fear of a later patent claim from a contributor.

The deeper reason is reach.
A permissive license keeps the barriers to adoption as low as possible.
Researchers and institutions can build on PROTEUS, and integrate parts of it into their own pipelines, without being obliged to release their entire surrounding codebase under a copyleft license.
This matters in practice: some public research institutes, agencies, and companies restrict or prohibit the use of strong-copyleft code precisely because of that obligation.

There are situations where strong copyleft is the right choice, for example when the explicit goal is to ensure that every downstream user must in turn keep their derived code open.
For the core PROTEUS framework, whose purpose is to enable science and to be reused as broadly as possible, we judge that maximising reach and minimising friction is more important than enforcing that obligation downstream.
This is why we prefer Apache 2.0, and more permissive licenses generally, for the framework and for the modules we maintain.

## How Apache 2.0 works alongside GPL-3 modules

Some modules used by PROTEUS are released under the GPL-3.0 license.
Apache 2.0 and GPL-3.0 are compatible in one direction: Apache 2.0 code may be incorporated into a GPL-3.0 project, in which case the combined result is governed by the GPL, but GPL-3.0 code may not be incorporated into an Apache 2.0 project.
PROTEUS does not incorporate GPL-3.0 source code into its own code base, so this one-directional compatibility is respected.

The framework relies instead on the modular, separately distributed design described above.
The GPL's strong copyleft obligations attach to the distribution of a combined work.
Because the PROTEUS package contains only its own Apache 2.0 code, and each module is published separately by its own authors under its own license, it is our understanding that the PROTEUS package itself does not distribute a combined work that includes GPL-3.0 code.
The modules remain independent programs, each governed by its own license.

We state this plainly so that anyone reusing the framework understands which terms apply.
When PROTEUS is run together with a GPL-3.0 module, the combination assembled on your machine is subject to the terms of that module's license, and we treat that license as authoritative for any such run.
Treating each repository's license as authoritative, and keeping the modules optional and swappable, means the framework can be configured to match the licensing requirements of a project or institution wherever a suitable alternative module is available for each role it needs.

## Permissive licenses are the norm in scientific software

Permissive licensing is the established choice across the scientific software the research community relies on every day.
Much of the foundational scientific Python stack, including [NumPy](https://numpy.org), [SciPy](https://scipy.org), [pandas](https://pandas.pydata.org), [scikit-learn](https://scikit-learn.org), and [Astropy](https://www.astropy.org), is released under the permissive BSD 3-Clause license, and [Matplotlib](https://matplotlib.org) under its own, equally permissive license.
Major frameworks such as [TensorFlow](https://www.tensorflow.org) and [JAX](https://github.com/jax-ml/jax) use Apache 2.0, the same license as PROTEUS.
Many of these tools, including Matplotlib, NumPy, and pandas, grew out of academia and became broadly useful in large part because their permissive licensing posed the fewest obstacles to adoption.
PROTEUS follows the same path.

## Credit where it is due

A permissive license sets out how code may be used; it says nothing about the credit owed to the people who wrote it.
We treat scientific credit as a separate and serious obligation, fully independent of licensing.
PROTEUS exists because of the work of the wider community, and many of its modules build directly on codes developed and published by others.

We are committed to giving that work proper credit:

- The documentation and code link to the relevant publications and repositories for every module, so the original work is easy to find and cite.
- Modules that wrap or extend an existing code point to the original project and its papers.
- Users of PROTEUS are asked to cite the manuscripts listed in the [bibliography](https://proteus-framework.org/PROTEUS/Reference/bibliography), to state the code version used, and to include an acknowledgement.

Our full guidance on citation, authorship, and acknowledgement is set out in the [contributing guidelines](https://proteus-framework.org/PROTEUS/Community/CONTRIBUTING).

## Questions and discussion

Licensing in open source is nuanced, and reasonable people read parts of it differently.
We have set out our position here, and we welcome questions, corrections, and discussion.
If you maintain a code we build on, are considering building on PROTEUS, or simply want to understand our approach better, please get in touch.

You can reach us through [GitHub Discussions](https://github.com/orgs/FormingWorlds/discussions), open an issue on the relevant repository, or email [proteus_dev@formingworlds.space](mailto:proteus_dev@formingworlds.space).
We are always happy to talk this through.

<style>
  table.lic-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0 1.75rem;
    font-size: 0.95rem;
  }
  .lic-table th,
  .lic-table td {
    text-align: left;
    padding: 0.6rem 0.9rem;
    border-bottom: 1px solid var(--border-color);
    vertical-align: top;
  }
  .lic-table thead th {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.8rem;
    color: var(--muted-color);
    border-bottom: 2px solid var(--border-color);
  }
  .lic-table tbody tr:hover { background: var(--card-bg); }
  .lic-table td:first-child { font-weight: 700; color: var(--heading-color); white-space: nowrap; }
</style>
