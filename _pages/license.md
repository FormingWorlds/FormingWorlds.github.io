---
title: Licensing and open development
subtitle: How PROTEUS and its modules are licensed, and our commitment to open, reproducible science
description: "The licensing philosophy of the PROTEUS framework: fully open source, modular and independently licensed components, why we use Apache 2.0, how it works alongside GPL-3 modules, and our commitment to crediting the developers of the code we build on."
permalink: /license/
image: /assets/img/og-default.jpg
---

PROTEUS is fully open source.
Open source code can be read, run, and improved by anyone, which makes the results that depend on it reproducible and the methods behind them transparent.
For scientific software we consider this a requirement, not an optional extra.
Every part of the framework is released under an established open source license.

We also believe that open development is the best way to build software that lasts.
PROTEUS grows through collaboration: contributions from research scientists, software engineers, students, and many others across institutions and countries.
Keeping the code open is what allows that community to form and the science to move forward.

## Open source, without exception

PROTEUS will only ever support and include fully open source code.
We do not build on closed, proprietary, or source-unavailable components, and we do not plan to.
If a capability can only be provided by code that is not open, we would rather develop an open alternative than compromise on this principle.
This keeps the entire pipeline, from input data to published figure, open to inspection.

## Developed in the open

Development of PROTEUS and the modules we maintain happens in public repositories under the [FormingWorlds organisation](https://github.com/FormingWorlds) on GitHub.
Issues, code review, and design discussions are public, and anyone can follow the work, report problems, or propose changes.
Releases are versioned and published, so a published result can state the exact code that produced it.

## A framework of independent modules

PROTEUS is a coupling framework rather than a single monolithic program.
The physics is divided across a set of modules, each of which handles one domain: the atmosphere, the mantle, outgassing, photochemistry, escape, stellar evolution, tides, or interior structure.
Each module is a complete, standalone program.
It can be developed, tested, run, and published independently, and it lives in a separate repository under a license chosen by its authors.
The PROTEUS coupler orchestrates the exchange of boundary conditions between whichever modules are selected for a given simulation.

One consequence follows from this design, and one is a deliberate choice we have made about distribution. Both matter for licensing:

- **Modules are optional and swappable.** No single module is required for the framework to function. You can exchange one atmosphere model for another, enable or disable tidal heating, or substitute a different interior model.
- **Modules are published by their own authors.** PROTEUS does not copy module source code into its code base, and it does not relicense any module. The PROTEUS package contains only PROTEUS source code. Where a module is a Python package, PROTEUS names it as a dependency that the package manager retrieves from the module's published release. Other modules are fetched at install time, in some cases from FormingWorlds-maintained forks of the upstream project, always under the upstream license. In each case the code is combined with PROTEUS at run time on the user's machine.

Much of the value of PROTEUS lies in this integration work: bringing established codes together, extending them, and in many cases contributing improvements back to the projects they came from.

## Licenses across the framework

Different components carry different licenses, reflecting the choices of their authors.
The authoritative license for any component is always the one stated in its repository.
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

Our main reason is reach.
A permissive license keeps the barriers to adoption as low as possible.
The alternative, a copyleft license, requires that derived works be released under the same terms.
Researchers and institutions can build on PROTEUS, and integrate parts of it into their pipelines, without taking on that obligation for the surrounding code.
Some public research institutes, agencies, and companies restrict or prohibit the use of strong-copyleft code for precisely this reason.

There are situations where strong copyleft is the right choice, for example when the explicit goal is to ensure that every downstream user must in turn keep their derived code open.
For the core PROTEUS framework, whose purpose is to enable science as broadly as possible, we judge that ease of adoption matters more than that guarantee.

Among permissive licenses, we choose Apache 2.0 over MIT and BSD because of patents, which those shorter licenses do not cover with an explicit grant.
Under Apache 2.0, each contributor automatically gives every user a perpetual, worldwide, royalty-free license to any of their patents that are necessarily infringed by the code they contributed.
The grant covers that code on its own and in combination with the rest of the project.
The license also includes a patent retaliation clause: if a user starts patent litigation alleging that the software infringes one of their patents, the patent licenses that user received under Apache 2.0 are terminated.
For scientific software this certainty is worth having, because contributors come from many universities, research institutes, and companies, each with different intellectual property policies and patent portfolios.
This is why we license the framework, and the modules we maintain, permissively, with Apache 2.0 as our default.

## Permissive licenses are widely used in scientific software

Permissive licensing is the established choice for the general-purpose scientific software the research community relies on every day.
Much of the foundational scientific Python stack, including [NumPy](https://numpy.org), [SciPy](https://scipy.org), [pandas](https://pandas.pydata.org), [scikit-learn](https://scikit-learn.org), and [Astropy](https://www.astropy.org), is released under the permissive BSD 3-Clause license, and [Matplotlib](https://matplotlib.org) under its own, equally permissive license.
Major frameworks such as [TensorFlow](https://www.tensorflow.org) and [JAX](https://github.com/jax-ml/jax) use Apache 2.0, the same license as PROTEUS.
Many of these tools, including Matplotlib, NumPy, and Astropy, grew out of research environments; their permissive licensing removed one obstacle to adoption by companies and institutions alike.
PROTEUS sits at the framework level, and we license the coupling framework permissively for the same reason.
Several of the domain-specific solver codes PROTEUS uses are released under copyleft licenses; the next section describes how the framework respects their terms.

## How Apache 2.0 works alongside GPL-3 modules

Some modules used by PROTEUS are released under the GPL-3.0 license.
Apache 2.0 and GPL-3.0 are compatible in one direction: Apache 2.0 code may be incorporated into a GPL-3.0 project, and the combined result is then governed by the GPL.
The reverse does not hold: GPL-3.0 code may not be incorporated into an Apache 2.0 project.
PROTEUS does not incorporate GPL-3.0 source code into its code base, so this constraint does not arise for PROTEUS itself.

The framework relies instead on the modular, separately distributed design described above.
The GPL's strong copyleft obligations attach to the distribution of a combined work.
Where exactly the boundary of a combined work lies is a long-standing, unresolved question in open source licensing, and there is no settled legal position for the run-time coupling of independent programs.
We therefore state our reading openly and take a pragmatic view, grounded in the architecture of the framework.
The PROTEUS package contains only Apache 2.0 code, and each module is published separately by its authors as a standalone program.
On that basis we treat the PROTEUS package as not distributing a combined work that includes GPL-3.0 code, and the modules as independent programs, each governed by its own license.

In practice, on this reading: running PROTEUS together with a GPL-3.0 module on your own machine imposes no copyleft obligation on your code, because nothing is distributed.
If you redistribute the combination, or modify and redistribute a module, that distribution is governed by the GPL.
Because the modules are optional and swappable, a simulation can be configured to meet the licensing requirements of a project or institution, provided a suitable alternative module exists for each role.

## Credit where it is due

A permissive license requires little beyond preserving copyright and license notices; it says nothing about the scientific credit owed to the people who wrote the code.
We treat that credit as a separate and serious obligation, fully independent of licensing.
PROTEUS exists because of the work of the wider community, and many of its modules extend codes developed and published by others.

We are committed to giving that work proper credit:

- The documentation and code link to the relevant publications and repositories for every module, so the original work is easy to find and cite.
- Modules that wrap or extend an existing code point to the original project and its papers.
- We ask users of PROTEUS to cite the manuscripts listed in the [bibliography](https://proteus-framework.org/PROTEUS/Reference/bibliography), to state the code version used, and to include an acknowledgement.

Our full guidance on citation, authorship, and acknowledgement is set out in the [contributing guidelines](https://proteus-framework.org/PROTEUS/Community/CONTRIBUTING).

## Questions and discussion

Licensing in open source is nuanced, and reasonable people read parts of it differently.
We have set out our position here, and we welcome questions, corrections, and discussion.
If you maintain a code we depend on, are considering using PROTEUS in your own work, or simply want to understand our approach better, please get in touch.

You can reach us through [GitHub Discussions](https://github.com/orgs/FormingWorlds/discussions), open an issue on the relevant repository, or email [proteus_dev@formingworlds.space](mailto:proteus_dev@formingworlds.space).

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
