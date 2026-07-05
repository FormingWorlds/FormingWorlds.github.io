---
title: Licensing and open development
subtitle: How PROTEUS and its modules are licensed, and our commitment to open, reproducible science
description: "The licensing philosophy of the PROTEUS framework: fully open source, modular and independently licensed components, why we use Apache 2.0, how it works alongside GPL-3 modules, and our commitment to crediting the developers of the code we build on."
permalink: /license/
image: /assets/img/og-default.jpg
---

## In brief: our core values

Licensing is a legal subject, and rarely the most exciting part of research.
We set it out carefully because the right licensing is what lets the law support how we want to do science, rather than stand in its way.
Two core values shape every choice described on this page:

1. **Open science is the fastest route to progress, and the basis of reproducibility.**

   PROTEUS is fully open source.
   Open source code can be [read, run, and improved by anyone](https://www.gnu.org/philosophy/free-sw.html){:target="_blank" rel="noopener noreferrer"}, which makes the results that depend on it [reproducible](https://www.nature.com/articles/nature10836){:target="_blank" rel="noopener noreferrer"} and the methods behind them transparent.
   For scientific software we consider this a requirement, not an optional extra.
   The [UNESCO open science framework](https://unesdoc.unesco.org/ark:/48223/pf0000387983){:target="_blank" rel="noopener noreferrer"} takes the same view and counts open source software among the pillars of open scientific knowledge.
   Every part of the framework is released under an [established open source license](https://opensource.org/licenses){:target="_blank" rel="noopener noreferrer"}.

2. **Collaborative science should be as smooth as possible.**

   Open development is the best way to build software that lasts.
   PROTEUS grows through collaboration: contributions from research scientists, software engineers, students, and many others across institutions and countries.
   Keeping the code open is what allows that community to form and [the science to move forward](https://www.nature.com/articles/nchem.1149){:target="_blank" rel="noopener noreferrer"}.

The sections below explain how each choice follows from these two values:

- [We build only on fully open source code, and develop it in the open.](#open-development)
- [PROTEUS couples independent modules, each published and licensed by its own authors.](#modules)
- [Different components carry different licenses; the repository is always the authoritative source.](#licenses)
- [We license the framework permissively, under Apache 2.0, for the widest possible reach.](#apache)
- [Permissive licensing is the established norm for scientific software.](#permissive-norm)
- [We respect the terms of copyleft modules; running them alongside PROTEUS distributes nothing.](#gpl)
- [Documentation, data, and figures are openly licensed too; only the logo is reserved.](#assets)
- [Scientific credit is a separate obligation, and we take it seriously.](#credit)

## Open source, developed in the open {#open-development}

PROTEUS will only ever support and include [fully open source](https://opensource.org/osd){:target="_blank" rel="noopener noreferrer"} code.
We do not build on closed, proprietary, or source-unavailable components, and we do not plan to.
If a capability can only be provided by code that is not open, we would rather develop an open alternative than compromise on this principle.
This keeps the entire pipeline, from input data to published figure, open to inspection.

Development of PROTEUS and the modules we maintain happens in public repositories, dominantly under the [FormingWorlds organisation](https://github.com/FormingWorlds){:target="_blank" rel="noopener noreferrer"} on GitHub.
Issues, code review, and design discussions are public, and anyone can follow the work, report problems, or propose changes.
Releases are versioned and published, so a published result can state the exact code that produced it, in line with the [FAIR principles for research software](https://www.nature.com/articles/s41597-022-01710-x){:target="_blank" rel="noopener noreferrer"}.

## A framework of independent modules {#modules}

PROTEUS is a coupling framework rather than a single monolithic program.
The physics is divided across a set of modules, each of which handles one domain: the atmosphere, the mantle, outgassing, photochemistry, escape, stellar evolution, tides, or interior structure.
Each module is a complete, standalone program.
It can be developed, tested, run, and published independently, and it lives in a separate repository under a license chosen by its authors.
The PROTEUS coupler orchestrates the exchange of boundary conditions between whichever modules are selected for a given simulation.

One consequence follows from this design, and one is a deliberate choice we have made about distribution. Both matter for licensing:

- **Modules are optional and swappable.** No single module is required for the framework to function. You can exchange one atmosphere model for another, enable or disable tidal heating, or substitute a different interior model.
- **Modules are published by their own authors.** PROTEUS does not copy module source code into its code base, and it does not relicense any module. The PROTEUS package contains only PROTEUS source code. Where a module is a Python package, PROTEUS names it as a dependency that the package manager retrieves from the module's published release. Other modules are fetched at install time, in some cases from FormingWorlds-maintained forks of the upstream project, always under the upstream license. In each case the code is combined with PROTEUS at run time on the user's machine.

Much of the value of PROTEUS lies in this integration work: bringing established codes together, extending them, and in many cases contributing improvements back to the projects they came from.

## Licenses across the framework {#licenses}

Different components carry different licenses, reflecting the choices of their authors.
The authoritative license for any component is always the one stated in its repository.
Representative examples across the ecosystem:

<table class="lic-table">
  <thead>
    <tr><th>License</th><th>Type</th><th>Examples</th></tr>
  </thead>
  <tbody>
    <tr><td>Apache 2.0</td><td>Permissive (with patent grant)</td><td>PROTEUS, AGNI, CALLIOPE, JANUS, ZEPHYRUS, Zalmoxis</td></tr>
    <tr><td>MIT</td><td>Permissive</td><td>MORS</td></tr>
    <tr><td>BSD 3-Clause</td><td>Permissive</td><td>SOCRATES</td></tr>
    <tr><td>GPL-3.0</td><td>Strong copyleft</td><td>VULCAN, FastChem, atmodeller, SPIDER, aragog</td></tr>
  </tbody>
</table>

PROTEUS itself, the coupling framework, is released under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0){:target="_blank" rel="noopener noreferrer"}.

## Why PROTEUS uses Apache 2.0 {#apache}

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

## Permissive licenses are widely used in scientific software {#permissive-norm}

Permissive licensing is the established choice for the general-purpose scientific software the research community relies on every day.
Much of the foundational scientific Python stack, including [NumPy](https://numpy.org){:target="_blank" rel="noopener noreferrer"}, [SciPy](https://scipy.org){:target="_blank" rel="noopener noreferrer"}, [pandas](https://pandas.pydata.org){:target="_blank" rel="noopener noreferrer"}, [scikit-learn](https://scikit-learn.org){:target="_blank" rel="noopener noreferrer"}, and [Astropy](https://www.astropy.org){:target="_blank" rel="noopener noreferrer"}, is released under the permissive BSD 3-Clause license, and [Matplotlib](https://matplotlib.org){:target="_blank" rel="noopener noreferrer"} under its own, equally permissive license.
Major frameworks such as [TensorFlow](https://www.tensorflow.org){:target="_blank" rel="noopener noreferrer"} and [JAX](https://github.com/jax-ml/jax){:target="_blank" rel="noopener noreferrer"} use Apache 2.0, the same license as PROTEUS.
Many of these tools, including Matplotlib, NumPy, and Astropy, grew out of research environments; their permissive licensing removed one obstacle to adoption by institutions and companies alike.
PROTEUS sits at the framework level, and we license the coupling framework permissively for the same reason.
Several of the domain-specific solver codes PROTEUS uses are released under copyleft licenses; the next section describes how the framework respects their terms.

## How Apache 2.0 works alongside GPL-3 modules {#gpl}

Some modules used by PROTEUS are released under the [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.html){:target="_blank" rel="noopener noreferrer"}.
The question that matters here is redistribution: the GPL's strong copyleft obligations attach when a combined work that includes GPL code is distributed, not when programs are run.
PROTEUS does not redistribute GPL-3.0 code in any form.
It does not incorporate GPL-3.0 source into its code base, and the PROTEUS package contains only Apache 2.0 code; each module is published separately by its authors as a standalone program.

For source code itself, the two licenses are compatible in one direction.
Apache 2.0 code may be incorporated into a code base distributed under GPL-3.0, and the combined result is then governed by the GPL.
The reverse does not hold: GPL-3.0 code may not be incorporated into a code base distributed under Apache 2.0.
Since the PROTEUS code base contains no GPL-3.0 source, this constraint does not arise.

What counts as a combined work is the harder question.
Where exactly the boundary lies has been debated for as long as open source licensing has existed, and there is no settled legal position for the run-time coupling of independent programs.
The Free Software Foundation [reads combination broadly](https://www.gnu.org/licenses/gpl-faq.html#GPLStaticVsDynamic){:target="_blank" rel="noopener noreferrer"}; the opposite reading, that running independent programs together does not create a derivative work, [goes back at least two decades](https://www.linuxjournal.com/article/6366){:target="_blank" rel="noopener noreferrer"}.
We state our reading openly and take a pragmatic view, grounded in the architecture of the framework: the modules are standalone programs, published separately by their authors, and the coupler exchanges boundary conditions with them at run time.
On that basis we treat the PROTEUS package as not distributing a combined work that includes GPL-3.0 code, and the modules as independent programs, each governed by its own license.

In practice, on this reading: running PROTEUS together with a GPL-3.0 module on your own machine imposes no copyleft obligation on your code, because nothing is distributed.
If you redistribute the combination, or modify and redistribute a module, that distribution is governed by the GPL.
Because the modules are optional and swappable, a simulation can be configured to meet the licensing requirements of a project or institution, provided a suitable alternative module exists for each role.

## Documentation, data, and other non-software assets {#assets}

The framework produces more than code.
Documentation, website text, figures, lookup tables, reference data, and the deposits we publish to archives such as [Zenodo](https://zenodo.org){:target="_blank" rel="noopener noreferrer"} all carry their own licenses, chosen on the same open principle as the software but matched to the kind of material.

We license these assets so that anyone can reuse them, for any purpose including commercially, as long as they give credit.
That openness is the standard the [Open Definition](https://opendefinition.org){:target="_blank" rel="noopener noreferrer"} sets, and it follows the same reasoning as our permissive software license: figures, tables, and text are most useful when researchers, universities, institutes, agencies, and companies can all build on them freely.
A [Creative Commons Attribution license](https://creativecommons.org/licenses/by/4.0/){:target="_blank" rel="noopener noreferrer"} asks only for credit in return, which keeps the work attributed to its authors while leaving it genuinely open to reuse.

We license non-software assets by class, each with one license:

<table class="lic-table">
  <thead>
    <tr><th>Asset</th><th>License</th><th>What it means</th></tr>
  </thead>
  <tbody>
    <tr><td>Documentation, website text, figures</td><td>CC BY 4.0</td><td>Free to reuse and adapt with attribution. Many open access journals publish under the same CC BY terms, so a figure can move between our pages and the published literature, with attribution travelling alongside it. It plays the same role for content that our permissive license plays for code.</td></tr>
    <tr><td>Lookup tables and reference data</td><td>CC0 1.0</td><td>Dedicated to the public domain as far as the law allows, so combined datasets need not carry a growing list of required credits. Citation follows the norms science already uses, supported by our credit guidance. Several major data repositories require or default to CC0 (Dryad requires it; figshare and Dataverse default to it), and funders such as Horizon Europe accept it for deposited data.</td></tr>
    <tr><td>Logos and brand marks</td><td>Reserved</td><td>Not openly licensed. We do not want forks or unrelated products shipping under the project's visual identity, which established projects guard through trademark policy. We hold no registered trademarks, so instead of a formal policy we keep the artwork under reserved copyright with a short usage note.</td></tr>
  </tbody>
</table>

The reserved logo is the only exception: the code, documentation, data, and figures are all openly licensed.

An archive deposit that mixes content and data carries CC BY as a whole, with any public-domain data files inside it marked [CC0](https://creativecommons.org/publicdomain/zero/1.0/){:target="_blank" rel="noopener noreferrer"} in the README.
Where adaptations must stay open under share-alike, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/){:target="_blank" rel="noopener noreferrer"} is the fallback: it is one-way compatible with GPL-3.0, but it cannot be republished under the plain CC BY terms that many journals use, so figures stay under CC BY to remain publishable there.

## Credit where it is due {#credit}

A permissive license requires little beyond preserving copyright and license notices; it says nothing about the scientific credit owed to the people who wrote the code.
We treat that credit as a separate and serious obligation, fully independent of licensing.
PROTEUS exists because of the work of the wider community, and many of its modules extend codes developed and published by others.

We are committed to giving that work proper credit:

- The documentation and code link to the relevant publications and repositories for every module, so the original work is easy to find and cite.
- Modules that wrap or extend an existing code point to the original project and its papers.
- We ask users of PROTEUS to cite the manuscripts listed in the [bibliography](https://proteus-framework.org/PROTEUS/Reference/bibliography){:target="_blank" rel="noopener noreferrer"}, to state the code version used, and to include an acknowledgement.

Our full guidance on citation, authorship, and acknowledgement is set out in the [contributing guidelines](https://proteus-framework.org/PROTEUS/Community/CONTRIBUTING){:target="_blank" rel="noopener noreferrer"}.

## Questions and discussion

Licensing in open source is nuanced, and reasonable people read parts of it differently.
We have set out our position here, and we welcome questions, corrections, and discussion.
If you maintain a code we depend on, are considering using PROTEUS in your own work, or simply want to understand our approach better, please get in touch.

You can reach us through [GitHub Discussions](https://github.com/orgs/FormingWorlds/discussions){:target="_blank" rel="noopener noreferrer"}, open an issue on the relevant repository, or email [proteus_dev@formingworlds.space](mailto:proteus_dev@formingworlds.space).

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
