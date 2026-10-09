# Previous ANBHA hero backup

Saved on 9 October 2026, before the image-only banner replacement.

This archive preserves the previous three-slide hero: original copy, CTA, pagination, five-second autoplay, reduced-motion handling, animation styles, responsive layouts, typography, and all three photographs.

## Files

- `src/App.jsx`: original app source containing the hero markup, slide data, imports, state, and autoplay effect.
- `src/App.css`: original complete styles, including hero desktop/mobile styles and animations.
- `src/index.css` and `index.html`: theme defaults and font loading.
- `src/assets/`: all three original hero photographs.
- `package.json`: dependency reference.

## Restore only the hero

Use archived `src/App.jsx` to restore the `heroImage` and `heroNecklaceImage` imports (the live app still imports `heroCuffImage`), `heroSlides` array, `activeHero` state, five-second carousel effect, and `<section className="hero-section">` block in place of the current `<section className="hero-banner">` block. Remove the live `heroBannerImage` import if unused.

The original hero styles and image assets remain in the live project. If they change later, recover their corresponding rules or files from this archive. Remove the `.hero-banner` rules when no longer used.

The archived app is a source reference, not a standalone app. Copy the hero-specific portions instead of replacing the whole current app, to preserve subsequent unrelated changes.
