# Silver, made personal banner backup

Removed from the live hero on 9 October 2026.

- Eyebrow: Made slowly. Worn always.
- Heading: Silver, / made personal.
- Artwork: `anbha-hero-silver-banner.png` (1944 × 809)
- Fonts: Cormorant Upright heading; Inter eyebrow
- Layout: left inset 6%, text group centered at 42% of image height, width 38%

The exact slide markup is in `banner.jsx.txt`; the source snapshots preserve its layout, fonts and carousel dependencies. The image generation prompt is in `image-prompt.txt`.

To restore, import the artwork as `heroBannerImage`, insert the saved slide markup into the hero stage, restore the four `.hero-banner-copy`, `.hero-banner-eyebrow`, `.hero-banner-title`, and `.hero-banner-title em` CSS rules from the snapshot, and add `Silver, made personal` to `heroBannerLabels`. Update each slide and CTA index to remain consecutive. If restoring as the first slide, return the New Arrivals heading to h2 and its CSS selector accordingly; this archived slide already contains the page h1. Keep shared banner height and the 5-second timer.

Use snapshots as references instead of overwriting live files, preserving subsequent changes.
