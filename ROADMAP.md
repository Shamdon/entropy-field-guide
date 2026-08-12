# Entropy Field Guide — improvement plan and WBS

The site should grow into a small, coherent publication rather than a loose collection of pages. The recommended architecture is a static, multi-page field guide with shared navigation, design tokens, references, and reusable interactive components.

## Product principles

1. Begin with intuition, then expose the formal model.
2. Let readers manipulate one important quantity at a time.
3. Keep every compact claim scoped to its assumptions.
4. Separate established results, experimental findings, and interpretation.
5. Treat accessibility, performance, and citations as parts of the design.
6. Preserve the current Swiss research-lab identity while adding warmth through artifacts, diagrams, and historical material.

## Recommended information architecture

- `/` — Entropy field guide
- `/claude-shannon/` — Claude Shannon: life, method, and foundational work
- `/source-coding/` — Why entropy is a compression limit
- `/arithmetic-coding/` — Interactive interval-coding laboratory
- `/language-models/` — Cross-entropy, perplexity, tokenization, and LLM compression
- `/atlas/` — Searchable concept atlas and notation index
- `/research/` — Dated research notes with scope, status, and primary sources
- `/about/` — Editorial method, corrections policy, and bibliography

For GitHub Pages, these should be emitted as real static directories such as `claude-shannon/index.html`. This gives every page a direct URL without requiring server-side routing or a fragile client-side 404 workaround.

## WBS

| ID | Work package | Main deliverable | Priority | Depends on |
|---|---|---|---|---|
| 1.0 | Editorial foundation | Voice, notation, citation, and claims guide | P0 | — |
| 1.1 | Information architecture | Route map, page templates, navigation model | P0 | 1.0 |
| 1.2 | Design system | Tokens for type, color, spacing, grids, borders, and motion | P0 | 1.0 |
| 1.3 | Component system | Article shell, equation, citation, lab, callout, timeline, glossary | P0 | 1.1, 1.2 |
| 1.4 | Static multi-page build | Direct-linkable Pages output for every route | P0 | 1.1, 1.3 |
| 2.0 | Current guide refinement | Improved overview page using shared components | P0 | 1.3 |
| 2.1 | Reading aids | Sticky progress, “basic/advanced” markers, glossary tooltips | P1 | 2.0 |
| 2.2 | Equation accessibility | Spoken labels, symbol definitions, copyable plain text | P1 | 1.3 |
| 2.3 | Interaction refinement | Keyboard input, reset controls, annotated output changes | P1 | 2.0 |
| 2.4 | Print and sharing | Print stylesheet, stable anchors, citation/share controls | P2 | 2.0 |
| 3.0 | Claude Shannon page | Researched long-form profile with interactive paper map | P0 | 1.4 |
| 3.1 | Shannon source dossier | Primary-source ledger and image-rights check | P0 | — |
| 3.2 | Shannon narrative | Life/work chronology and “four foundational moves” | P0 | 3.1 |
| 3.3 | Shannon interactives | Noisy-channel demo and printed-English prediction exercise | P1 | 3.2 |
| 4.0 | Source-coding page | Stepwise source-coding theorem explanation | P1 | 1.4 |
| 4.1 | Arithmetic-coding lab | Interval subdivision, encode/decode, and overhead display | P1 | 4.0 |
| 5.0 | Research publication layer | Dated notes, evidence status, bibliography component | P1 | 1.3 |
| 5.1 | Corrections workflow | Public changelog and issue template | P2 | 5.0 |
| 6.0 | Claude Design exploration | Three controlled design directions and page prototypes | P1 | 1.2 |
| 6.1 | Design-system import | Current code, screenshots, tokens, and reference packet | P1 | 1.2 |
| 6.2 | Prototype comparison | Desktop/mobile comparison against explicit criteria | P1 | 6.1 |
| 6.3 | Engineering handoff | Accepted components, states, and interaction intent | P1 | 6.2 |
| 7.0 | Quality gates | Accessibility, performance, responsive, and content QA | P0 | Continuous |
| 7.1 | Automated checks | TypeScript, build, link, and basic accessibility checks | P1 | 1.4 |
| 7.2 | Human review | Mobile reading, keyboard navigation, claim/source review | P0 | Each release |

## Claude Shannon page — recommended content

### Editorial thesis

Present Shannon not simply as “the father of information theory,” but as a thinker who repeatedly turned physical or linguistic problems into formal systems with measurable limits.

### Page sequence

1. **The problem before Shannon** — communication engineering without a general measure of information.
2. **Switches become logic** — the 1937 master’s thesis and Boolean switching circuits.
3. **A message becomes a probability distribution** — the 1948 paper’s abstraction.
4. **Entropy, capacity, noise, and coding** — four concepts with separate diagrams.
5. **Printed English as a prediction experiment** — Shannon’s 1951 human-prediction method.
6. **Secrecy systems** — the bridge from wartime cryptography to formal communication.
7. **Machines at play** — Theseus, chess, juggling devices, and the role of playful construction.
8. **The line to modern AI** — prediction and cross-entropy, with explicit limits on the analogy.
9. **Read the originals** — annotated primary-source bibliography.

### Candidate interactives

- A channel with a controllable error probability and a live capacity curve.
- A “guess the next character” version of Shannon’s printed-English experiment.
- A relay-circuit-to-Boolean-expression demonstrator.
- An annotated map of the 1948 paper linking definitions to modern applications.

### Primary starting sources

- [Shannon’s 1948 paper](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)
- [Prediction and Entropy of Printed English, 1951](https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf)
- [MIT’s institutional biography](https://news.mit.edu/2001/shannon)
- [MIT Museum’s Shannon collection](https://mitmuseum.mit.edu/collections/person/shannon-claude-elwood-12372)

## Phased delivery

### Phase A — foundation

Complete work packages 1.0–1.4 and 7.0. This is the architectural change that makes all later pages cheaper and more consistent.

### Phase B — flagship expansion

Build the Claude Shannon page and its printed-English interaction. Add a compact cross-link from the existing guide.

### Phase C — deeper laboratories

Build source coding, arithmetic coding, and the concept atlas. Upgrade equations and glossary behavior across every page.

### Phase D — publication maturity

Add the research index, correction policy, automated checks, print support, and a regular review cadence.

## Success criteria

- A first-time reader can explain entropy, surprisal, and cross-entropy without conflating them.
- Every advanced claim exposes its conditions or links to them.
- Each page has one memorable interactive explanation rather than many decorative interactions.
- Mobile users can read, navigate, and operate every control without zooming.
- Direct page URLs work on GitHub Pages.
- Core pages remain useful with motion disabled and are printable.
- The homepage remains fast despite the expanded publication.

