# Entropy: A Field Guide to Information

A progressive, visual introduction to entropy, information theory, lossless compression, cross-entropy, KL divergence, and their connection to modern AI.

The guide begins with simple ideas—uncertainty and surprise—then builds toward conditional entropy, arithmetic coding, autoregressive language models, minimum description length, Kolmogorov complexity, and the current compression research frontier. Two interactive experiments make the core quantities tangible.

## Live site

After GitHub Pages is enabled, the site will be available at:

https://shamdon.github.io/entropy-field-guide/

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Open **Settings**, then **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the **main** branch and the **/docs** folder.
5. Tap or click **Save**.

GitHub will publish the already-built static files in `docs/`. The first deployment can take a few minutes.

## Local development

```bash
npm install
npm run dev
```

To rebuild the GitHub Pages files after editing the source:

```bash
npm run build
```

Commit both the source changes and the regenerated `docs/` directory.

## Unpublishing

See [UNPUBLISHING.md](UNPUBLISHING.md) for the reversible steps that remove the live site without deleting the repository or its source.

## Structure

- `src/App.tsx` — guide content, equations, interactions, and research links
- `src/styles.css` — complete responsive Swiss-inspired design system
- `docs/` — production build served by GitHub Pages
- `UNPUBLISHING.md` — mobile-friendly unpublishing guide
