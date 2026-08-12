# Claude Design brief for the Entropy Field Guide

## What Claude Design is useful for here

Claude Design is best treated as a design-exploration and prototyping environment, not as the authority for mathematical claims or production code. It can ingest a codebase, screenshots, brand references, and a design system; generate working visual directions; accept inline comments and direct canvas edits; and export HTML or a handoff bundle.

As of August 2026, Anthropic documents Claude Design as a beta for Pro, Max, Team, and Enterprise plans. It is available on the web at `claude.ai/design`; Enterprise organizations may need an administrator to enable it.

## Inputs to prepare

1. The GitHub repository:
   `https://github.com/Shamdon/entropy-field-guide`
2. Full-page desktop and mobile screenshots of the current site.
3. This brief and `ROADMAP.md`.
4. The current source files, especially `src/App.tsx` and `src/styles.css`.
5. Screenshots or links representing the desired editorial qualities:
   - Distill for article-native interactivity.
   - Seeing Theory for one-concept-at-a-time exploration.
   - Visual Information Theory for geometric intuition.
   - The Pudding for visual pacing and scrollytelling.
   - Quanta Magazine for scientific editorial hierarchy.
   - The Swiss Grid for typographic and grid discipline.
6. Constraints: static GitHub Pages hosting, mobile first, no required backend, minimal dependencies, keyboard accessibility, reduced-motion support, and fast initial load.

## Current design-system seed

- **Personality:** rigorous, calm, precise, curious; a mathematics and AI laboratory publishing field notes.
- **Typography:** Helvetica Neue, Helvetica, or a metrically compatible sans-serif; large display scale; compact monospaced metadata.
- **Palette:** paper white `#ffffff`, ink `#101212`, muted gray `#646b68`, line gray `#d9ddda`, soft field `#f1f4f1`, signal blue `#163cff`, experimental acid `#c8ff00`.
- **Geometry:** strict grid, square controls, hairline rules, minimal radius, strong alignment, generous negative space.
- **Interaction:** controls should reveal mathematics directly; motion should communicate state changes and remain optional.
- **Voice:** explain simply without becoming casual; state assumptions; distinguish theorem, experiment, and interpretation.

## Ready-to-paste first prompt

```text
Create a controlled design exploration for “Entropy: A Field Guide to Information,” an interactive educational publication about information theory, lossless compression, and AI.

Use the attached repository and screenshots as the existing product, not merely as loose inspiration. Preserve its strongest identity: white paper-like surfaces, oversized Helvetica-style typography, strict Swiss editorial grids, black rules, signal blue, acid-green experimental panels, monospaced metadata, and a calm research-laboratory tone.

Audience:
- Curious general readers beginning from zero
- Software engineers who will scrutinize technical wording
- Researchers and advanced readers who need notation and assumptions to remain precise

Primary goals:
1. Improve reading hierarchy and long-form usability on desktop and mobile.
2. Make equations, definitions, assumptions, and citations easier to distinguish.
3. Make each interactive experiment feel like a real scientific instrument.
4. Develop a reusable article system for related pages, beginning with a Claude Shannon profile.
5. Preserve fast static delivery through GitHub Pages and avoid designs that require a backend.

Produce three meaningfully different directions within the existing identity:
A. “Swiss scientific journal” — strict, archival, typographic.
B. “Interactive laboratory notebook” — more instrument panels and live annotations.
C. “Modern field manual” — stronger wayfinding, layered beginner/advanced reading, compact reference tools.

For each direction, show:
- Homepage first viewport and one dense technical section
- Mobile equivalents
- Global navigation and multi-page article navigation
- Equation, definition, citation, caveat, timeline, glossary, and interactive-lab components
- A Claude Shannon article opening and one “Prediction and Entropy of Printed English” interaction
- Hover, focus, active, error, and reduced-motion states
- Type scale, spacing scale, color tokens, grid rules, and component inventory

Do not add ornamental gradients, generic glassmorphism, rounded SaaS cards, stock imagery, or decorative charts. Do not sacrifice mathematical notation or readability for visual novelty.

Evaluate each direction against:
- Technical clarity
- Editorial authority
- Beginner comprehension
- Mobile usability
- Accessibility
- Performance feasibility
- Distinctiveness without visual noise

Finish with a comparison table and recommend one direction plus the strongest components worth borrowing from the other two.
```

## Recommended workflow in Claude Design

1. Create a project and attach the repository or upload the relevant source.
2. Add current desktop and mobile screenshots.
3. Create or import the design-system seed above.
4. Run the first prompt and insist on three controlled directions.
5. Compare directions against the explicit criteria instead of choosing by first impression.
6. Use inline comments for element-specific changes and chat for system-wide changes.
7. Prototype the Claude Shannon page before redesigning every existing section.
8. Export an HTML bundle or engineering handoff only after tokens, components, and responsive states are settled.
9. Reimplement accepted decisions in the production repository and repeat accessibility and performance checks there.

## Inspiration and transferable ideas

| Reference | What to borrow | What not to copy |
|---|---|---|
| [Distill](https://distill.pub/) | Interactions embedded at the exact point of conceptual need; margin explanations; article-native figures | Its exact visual identity or historically complex publishing machinery |
| [Seeing Theory](https://seeing-theory.brown.edu/) | One manipulable concept per panel; progressive curriculum; immediate visual feedback | Large visualization payloads where a small CSS/React instrument is enough |
| [Visual Information Theory](https://colah.github.io/posts/2015-09-Visual-Information/) | Geometric explanations of probability mass and code length | Long uninterrupted article flow without stronger modern mobile wayfinding |
| [The Pudding](https://pudding.cool/about/) | Storyboarding, visual pacing, sticky scrollytelling used selectively | Scrollytelling for ideas that are clearer as a static equation or direct control |
| [Quanta Magazine](https://www.quantamagazine.org/) | Scientific editorial hierarchy, author/source context, durable article pages | Magazine ornament that competes with the mathematical instruments |
| [The Swiss Grid](https://swissgrid.posterhouse.org/) | Flexible modular grids, typographic rhythm, historical rigor | Museum-style density on small screens |
| [Explorable Explanations](https://explorabl.es/) | Learning through play and direct manipulation | Playfulness that weakens the laboratory voice |
| [Observable](https://observablehq.com/) | Reactive controls and transparent live outputs | Notebook chrome as the public article interface |

## Professional refinements worth testing

- A two-level reading mode: plain-language summary visible by default, formal note directly beneath it.
- Margin notation that becomes an inline accordion on mobile.
- A persistent “You are here” concept map rather than only a percentage progress bar.
- Equation blocks with “read this as,” symbol definitions, and a copyable text form.
- Research cards with status labels: peer reviewed, workshop, or preprint.
- Citation previews that expose title, venue, year, and scope before sending the reader away.
- Lab controls with reset buttons, keyboard increments, outcome annotations, and a short observation log.
- A publication header that distinguishes field guides, biographies, laboratories, and research notes.
- A compact corrections link and visible “last reviewed” date.
- Print styles that turn interactive controls into annotated static figures.

## Official Claude Design references

- [Introducing Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
- [Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)
- [Set up a design system](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design)

