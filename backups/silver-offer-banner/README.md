# Silver offer banner backup

Removed from the live hero on 9 October 2026.

- Heading: Flat 15% OFF
- Subtext: on silver worth ₹20,000 or below
- CTA: Shop now → `#new`
- Artwork: `anbha-silver-offer-clean-banner.png` (1942 × 809)
- Fonts: Cormorant Upright heading; Inter subtext and CTA
- Layout: centered text in the left 44%-width region, left inset 4%, whole text/CTA group vertically centered

`banner.jsx.txt` preserves the exact slide markup. The source snapshots preserve all shared layout, typography, carousel behavior, and styles before removal. `image-prompt.txt` records the image edit.

To restore, copy the artwork to `src/assets/` if needed, restore its import as `silverOfferBannerImage`, insert the saved markup into the hero stage, add its label to `heroBannerLabels`, and update the slide/CTA indices for its position. Restore the `.hero-offer-copy` styles and shared selector entries from the CSS snapshot. Current slides should retain consecutive indices. Use the snapshots as references instead of overwriting the live files, to preserve later changes.
