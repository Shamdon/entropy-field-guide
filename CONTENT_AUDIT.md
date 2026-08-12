# Editorial and technical audit

Audit date: 12 August 2026

This audit used two deliberately separate passes. The first treated the site as edited prose. The second treated every compact claim as a possible source of mathematical, engineering, or interpretive ambiguity.

## Pass 1 — grammar and language

The prose was checked for grammar, agreement, punctuation, parallel construction, terminology, and reading flow.

Changes made:

- Repaired the tense in “what the observation supplies.”
- Replaced “one-in-a-thousand” with the exact “one-in-1,024.”
- Added missing spacing in the logarithm identity.
- Repaired subject–verb agreement around the family of entropy-coding methods.
- Recast several compressed sentence fragments as complete, parallel descriptions.
- Changed “program outputting” to the more idiomatic “program that outputs.”
- Replaced informal “lost to” language in the research summary with “was substantially outperformed by.”
- Normalized several comparative statements so they read as measured findings rather than slogans.

## Pass 2 — technical precision and interpretive risk

Changes made:

- Distinguished entropy, an expected quantity, from surprisal, the information associated with one realized outcome.
- Stated that the two outcomes in the one-bit box example are equally probable.
- Replaced the broad headline “Compression is probability translated into bits” with the narrower and correct “Entropy coding translates probabilities into bits.”
- Replaced “Coding is near-solved” with “Entropy coding is near-optimal.”
- Made the model–coder decomposition explicit so it is not mistaken for a claim about every compressor implementation.
- Changed “actual average cost” to “expected average cost” for cross-entropy.
- Identified training loss as empirical cross-entropy rather than silently equating a finite sample with the unknown population distribution.
- Qualified bits per byte as more comparable on the same byte-encoded dataset, not universally “safe.”
- Specified that lossless decoding requires encoder and decoder to reproduce the same quantized probability distribution.
- Clarified that pretrained weights count as side information only when both encoder and decoder possess them.
- Replaced “correlation is not cause” with the more exact “dependence is not causation.”
- Rewrote the chain-rule explanation in terms of joint entropy and remaining conditional uncertainty.
- Clarified that differential entropy depends on units and coordinates.
- Tightened the summaries of the 2024–2026 research papers to reflect their actual experimental scope and assumptions.
- Rewrote the concluding sentence to refer to specified side information and recurring predictive structure.

## Claims retained deliberately

- “Entropy is the average amount of surprise” remains the central beginner-level intuition. The surrounding copy now makes clear that the average is over possible outcomes.
- “Modeling remains open” remains defensible: even if an entropy coder is near-optimal relative to supplied probabilities, estimating useful probabilities for new data remains an open-ended problem.
- “An LLM is a probability model before it is a chatbot” remains in the autoregressive-language-model section, where the intended model class is clear.
- “Compression is evidence of captured regularity—not proof of understanding” remains because it explicitly blocks a common but unjustified inference.

## Research sources checked

- [Language Modeling Is Compression — ICLR 2024](https://deepmind.google/research/publications/39768/)
- [Test-Time Steering for Lossless Text Compression via Weighted Product of Experts — EMNLP 2025 Findings](https://aclanthology.org/2025.findings-emnlp.110/)
- [Comparing Text Compression Capabilities of Large Language Models with Traditional Compression Algorithms — EACL 2026 SRW](https://aclanthology.org/2026.eacl-srw.16.pdf)
- [LLM-based Source Code Compression via Thresholded Symbol Ranking — July 2026 preprint](https://arxiv.org/html/2607.24192v2)

