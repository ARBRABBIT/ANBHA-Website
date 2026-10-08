# ANBHA Design System Specification

> **MANDATORY ARCHITECTURAL DIRECTIVE**  
> Any new component, screen, layout, banner, typography rule, color code, or micro-interaction created for ANBHA **MUST** strictly adhere to this document. No arbitrary hex codes, ad-hoc inline styles, unapproved fonts, or divergent alignments are permitted. Everything created must stem directly from this Design System.

---

## 1. Brand Essence & Visual Identity

ANBHA is a luxury Indian silver jewellery maison founded on principles of handcrafted integrity, quiet luxury, tactile minimalism, and architectural restraint.

- **Brand Values**: Handcrafted, 925 Hallmarked Silver, Mindful Pace, Timeless Wearability.
- **Visual Aesthetic**: Editorial, high-contrast, organic stone textures, deep forest velvet tones, refined typography.
- **Design Tone**: Poised, understated, warm, luxurious, never loud or promotional.

---

## 2. Color Palette & Token Architecture

All colors are defined as CSS Custom Properties in `:root`. Components must consume these variables rather than hardcoded hex values.

### 2.1 Core Brand Colors

| Token | Hex Value | Semantic Role | Usage |
| :--- | :--- | :--- | :--- |
| `--green` | `#193b32` | **Primary Brand Green** | Primary headings, buttons, solid fills, active accents, selection background |
| `--green-soft` | `#31574c` | **Secondary Green** | Eyebrows, subtle category labels, secondary active borders |
| `--sage` | `#e2e8df` | **Soft Sage Tint** | Banner backgrounds, highlight chips, subtle card pills, offer strip |
| `--cream` | `#f9f9f9` | **Brand Canvas / Background** | Page root background, image fallback cards, editorial surfaces |
| `--paper` | `#ffffff` | **Pure Surface White** | Card surfaces, dropdown cards, modal backgrounds, button text |
| `--ink` | `#1f2b27` | **Primary Charcoal Ink** | High-legibility body copy, deep text, input values |
| `--line` | `rgba(25, 59, 50, 0.18)` | **Structural Hairline** | Borders, dividers, table borders, card frames |

### 2.2 Extended Palette & Supporting Accents

| Token / Color | Hex / RGBA | Usage |
| :--- | :--- | :--- |
| `Dark Forest / Vignette` | `#102d26`, `#0e231c`, `#081c16` | Footer background, dark banner shadows, radial gradient outer stops |
| `Subtle Hairline` | `rgba(25, 59, 50, 0.08)` | Ultra-fine dividers, thumbnail borders, breadcrumb border |
| `Muted Body Text` | `#718078`, `#67736d` | Secondary descriptions, caption metadata, breadcrumb inactive links |
| `Footer Body Text` | `#9cada5`, `#cbd3c9` | Inverted typography on deep green backgrounds |
| `Metallic Gold / Brass` | `#b8844b` | Focus ring outline (`:focus-visible`), star ratings, gold hallmark badge |
| `Rose Blush / Heart` | `#8b4b45` | Wishlist heart active state |
| `Light Gray Fill` | `#f4f4f4` | Skeleton loaders, disabled state fills |

### 2.3 Brand Radial & Linear Gradients

To maintain a high-end physical presence (resembling brushed metals and luxury velvet presentation trays), radial lighting gradients are strictly defined:

- **Primary Price Pill Gradient**:
  ```css
  background: radial-gradient(circle at 50% 35%, #2a5246 0%, #0e231c 100%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 10px 24px rgba(14, 35, 28, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);
  ```
- **Accent Price Pill Gradient ("Explore MORE")**:
  ```css
  background: radial-gradient(ellipse at 50% 35%, #3d6b5e 0%, #15382e 100%);
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 10px 24px rgba(21, 56, 46, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.22);
  ```
- **Hero Fade Overlay**:
  ```css
  background: linear-gradient(0deg, rgba(249, 249, 249, 0.98), rgba(249, 249, 249, 0.85) 35%, rgba(249, 249, 249, 0.05) 72%);
  ```
- **Dark Banner Ambient Overlay**:
  ```css
  background: radial-gradient(ellipse at 50% 50%, rgba(20, 51, 43, 0.32) 0%, rgba(10, 26, 21, 0.76) 100%);
  ```

---

## 3. Typography System

The typography pairs an editorial, haute-couture serif with an ultra-clean, legible modern sans-serif.

### 3.1 Font Families

```css
:root {
  --serif: 'Cormorant Upright', Georgia, serif;
  --utility: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

- **Editorial Serif (`--serif`)**:
  - Used for: Display headlines (`h1`), Section headlines (`h2` including "Questions, answered."), Product card titles (`h3`), FAQ question triggers (`.faq-item button`), Modal headers, Story quotes, Seal badges.
  - Characteristics: High contrast, elegant vertical proportions, editorial presence.
- **Modern Utility (`--utility`)**:
  - Used for: Eyebrows, Navigation links, Buttons, Body copy, Technical specs, Breadcrumbs, Filter badges, Price figures, Footnotes, FAQ answer paragraphs (`.faq-answer p`).
  - Characteristics: Precision legibility at small sizes, tabular tracking, functional clarity.

### 3.2 Typography Scale & Rules

| Level | Font Family | Size | Weight | Line Height | Tracking | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | `--serif` | `clamp(64px, 7.7vw, 118px)` | 400 | 0.78 | `-0.045em` | Normal (`em` italic) |
| **Section Title (H2)** | `--serif` | `clamp(48px, 5vw, 72px)` | 400 | 0.95 | `-0.035em` | Normal (`em` italic) |
| **Feature Title (H3)** | `--serif` | `clamp(20px, 2.2vw, 28px)` | 400 / 500 | 1.15 | `-0.025em` | Normal |
| **Card Heading** | `--serif` | `19px - 21px` | 500 / 600 | 1.2 | `-0.02em` | Normal |
| **Eyebrow Header** | `--utility` | `9px - 10px` | 600 | 1.0 | `+0.2em` | **UPPERCASE** |
| **Navigation & Links** | `--utility` | `10px - 11px` | 500 | 1.0 | `+0.11em - 0.14em` | **UPPERCASE** |
| **Buttons / CTA** | `--utility` | `11px` | 500 | 1.0 | `+0.12em` | **UPPERCASE** |
| **Price Hero Number** | `--utility` | `28px - 32px` | 700 | 1.1 | `-0.02em` | Normal (₹ prefix) |
| **Standard Body Copy** | `--utility` | `13px - 15px` | 400 | 1.6 - 1.7 | `0em` | Normal |
| **Micro Copy / Tags** | `--utility` | `7px - 9px` | 500 / 600 | 1.2 | `+0.12em - 0.16em` | **UPPERCASE** |

### 3.3 Strict Alignment Directive

- **ALL section headings must be LEFT-ALIGNED** (`text-align: left`).
  - `.section-heading` and `.section-heading.centered` must align to the left margin.
  - Centered text is strictly restricted to:
    1. Announcement bar (`.announcement`)
    2. Promotional full-bleed banners (`.first-access-banner`)
    3. Price capsule cards interior (`.price-card-pill`)
    4. Badges and circular seals (`.story-seal`)

---

## 4. Spacing, Grids & Layout Architecture

### 4.1 Page Margins & Section Spacing

- **Desktop Standard Section Padding**:
  `padding: 120px clamp(22px, 6vw, 96px);`
- **Mobile Standard Section Padding (<= 700px)**:
  `padding: 85px 18px;`
- **Compact Sections (Price, Banners)**:
  `padding: 80px clamp(22px, 6vw, 96px);` (Desktop), `padding: 55px 18px;` (Mobile).
- **PDP Max Content Width**: `1360px` with `margin: 0 auto;`.

### 4.2 Standard Grids

- **Category Grid**:
  - Desktop: `grid-template-columns: repeat(4, 1fr); gap: 14px;`
  - Tablet/Mobile: `grid-template-columns: repeat(2, 1fr); gap: 10px; row-gap: 30px;`
- **Product Catalog Grid**:
  - Desktop: `grid-template-columns: repeat(4, 1fr); gap: 18px;` with compact card height (`.product-image: clamp(260px, 26vw, 390px)`).
  - Headings: Semi-bold editorial serif typography (`.product-info h3`: `font-family: var(--serif); font-weight: 600;`).
  - Subtext: Product-specific artisan descriptors detailing each item's distinct silhouette, finish, and hallmark characteristics (e.g. *"Ripple-hammered surface · Open taper cuff"*).
  - Mobile: Horizontal scroll carousel with snap (`scroll-snap-type: x mandatory; gap: 12px;`) or 2-column grid.
- **Price Tier Grid (`.price-section`)**:
  - Desktop: `grid-template-columns: repeat(4, 1fr); gap: 18px;`
  - Mobile: `grid-template-columns: repeat(2, 1fr); gap: 10px; row-gap: 12px;`
  - Seamless surface flow: Borderless transition into Explore More (`border-bottom: none`, `.explore-section` `border-top: none`).
- **First Access Banner (`.first-access-banner`)**:
  - Located between the products section and the price section, center-aligned with no dividing borders.
  - Quiet luxury aesthetic with emerald velvet jewellery flat lay and human model photography.
  - Hover effects disabled (clean static presentation without transform lift).
  - CTA button (`.first-access-cta`) is permanently styled in solid white (`background: #ffffff; color: var(--green);`) with pill radius (`999px`).
- **Trust Strip (`.trust-strip`)**:
  - Full-width architectural strip spanning 100% viewport width directly below the "Shop by category" section and before "Pieces you may love", with top and bottom borders (`1px solid var(--line)`).
  - Desktop: 4 equal columns (`grid-template-columns: repeat(4, 1fr);`) separated by vertical dividers (`border-right: 1px solid var(--line)`).
  - Proper, equal top and bottom internal padding (`padding: 40px 18px;`) with optically centered elements using modern Inter typography (`--utility`):
    1. Free Shipping (*Get 100% Free Shipping*)
    2. Easy Exchange (*Exchange your old designs anytime*)
    3. Certified Jewellery (*100% Certified Jewellery*)
    4. 2 Days Return (*2 Days Hassle-Free Returns*)
  - Mobile: Full-bleed horizontal scroll with snap (`scroll-snap-type: x mandatory; padding: 28px 14px;`).
- **Explore More Grid (`.explore-section`)**:
  - Located directly after Shop by price (`#price`) and before the Welcome Offer banner.
  - Desktop: 12-piece curated catalog in a 4-column product grid (3 rows) with compact card height (`.explore-section .product-image: clamp(260px, 26vw, 390px)`) and left-aligned heading ("Explore more").
  - Mobile: Horizontally scrolling product cards with snap.
  - Section Footer: Centered `.explore-more-btn` ("VIEW MORE" with arrow) linking to catalog.
- **Welcome Offer Banner (`.offer-banner-section` > `.offer-section`)**:
  - Container Section (`.offer-banner-section`): Dedicated standalone container positioned directly below "Explore more" (`#explore`) with clean seamless background (`background: var(--paper);` / `#ffffff`) and no bottom border (`border: none; border-bottom: none;`).
  - Architecture: **Luxury Atelier Gift Voucher** split-ticket card with subtle ANBHA hallmark watermark.
  - Left Wing (`.offer-main`): Editorial privilege headline in Cormorant Upright (`A welcome gift of ₹500 toward your first piece`), hallmark badge (`ANBHA`), and checkmark trust perks (`Hallmarked 925 Silver`, `Complimentary Gift Box`, `Free Insured Delivery`).
  - Center Divider: Perforated ticket tear line with authentic semicircular ticket notches (`.offer-notch-top`, `.offer-notch-bottom`).
  - Right Wing (`.offer-voucher-stub`): Interactive voucher ticket stub card with dashed coupon pill (`WELCOME500`), tactile copy button with dynamic checkmark feedback (`Code Copied`), and terms note (`Order above ₹1999. On your first order`).
  - Palette: Authentic luxury cream silk gradient (`#ffffff` to `#faf6ee` to `#f1e9dd`), deep forest green typography (`#193b32`), refined green border (`1px solid rgba(25, 59, 50, 0.16)`), and `8px` container radius.

---

## 5. Elevation, Borders & Glassmorphism

### 5.1 Border Radius Tokens

| Radius Token | Value | Semantic Role & Universal Usage |
| :--- | :--- | :--- |
| `--radius-container` | `8px` | **Universal Container Radius**: All content cards, image viewports, category cards, product tiles, promotional banners, offer strips, review cards, trust strips, story media wraps, dialog containers, and CTA action buttons (`.primary-button`, `.outline-button`, `.checkout-button`, `.pdp-add-to-cart-btn`, `.pdp-buy-now-btn`) **MUST** use this corner radius (`8px`). |
| `--radius-container-sm` | `8px` | **Nested Media / Sub-containers**: Thumbnails, delivery checker box, atelier description card, nested photo wraps, dropdowns, and search suggestion boxes (`8px`). |
| `0px` (Sharp) | `0px` | Strict architectural elements: Standard input field borders. |
| `Capsule / Pill` | `999px` | Filter pills, category tabs, CTA badges, search category chips, announcement tags, First Access CTA. |
| `Circle` | `50%` | Wishlist heart toggle on product cards, artisan wax seals, carousel indicators, icon marks. |

### 5.2 Shadows

```css
/* Card Subtle Lift */
box-shadow: 0 4px 14px rgba(25, 59, 50, 0.08);

/* Pill Deep Radial Shadow */
box-shadow: 0 10px 24px rgba(14, 35, 28, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.2);

/* Pill Hover Shadow */
box-shadow: 0 16px 32px rgba(14, 35, 28, 0.38), inset 0 1px 2px rgba(255, 255, 255, 0.3);

/* Drawer / Modal Deep Depth */
box-shadow: -20px 0 70px rgba(0, 0, 0, 0.15);
```

### 5.3 Glassmorphism & Blurs

- **Sticky Navigation**:
  ```css
  background: rgba(249, 249, 249, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  ```
- **Mega Menu Dropdown**:
  ```css
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--line);
  box-shadow: 0 24px 50px rgba(25, 59, 50, 0.13);
  ```
- **Photo Overlay Tag**:
  ```css
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  ```

---

## 6. Component Guidelines

### 6.1 Buttons & Action Triggers

- **Primary Button (`.primary-button`)**:
  - Background: `var(--green)`
  - Text: `var(--paper)` (`#ffffff`), font-family: `var(--utility)`, `11px`, uppercase, tracking `0.12em`
  - Height: `50px`, padding: `0 24px`
  - Border: `1px solid var(--green)`
  - Hover: Background `#285648` (refined forest sheen)
- **Outline Button (`.outline-button`)**:
  - Background: `transparent`
  - Text: `var(--green)`
  - Border: `1px solid var(--green)`
  - Hover: Background `var(--green)`, text `var(--paper)`
- **Product Card CTA (`.product-card-cta`)**:
  - Dedicated action button placed below the product metadata text.
  - Height: `40px`, border: `1px solid rgba(25, 59, 50, 0.24)`, border-radius: `8px`.
  - Default: Clean transparent background with `var(--green)` text and shopping bag icon.
  - Hover: Fills with solid `var(--green)` and `#ffffff` text (`box-shadow: 0 6px 16px rgba(25, 59, 50, 0.14)`) only when hovering directly on the button itself (never triggered by card container hover).
- **Text Link (`.text-link`)**:
  - Understated link with bottom border: `border-bottom: 1px solid var(--green);`
  - Uppercase `10px`, tracking `0.12em`.

### 6.2 Price Capsule Cards (`.price-card-pill`)

- **Shape**: Compact rounded capsule (`border-radius: 8px`, height `135px` on desktop, `98px` on mobile).
- **Surface**: Radial gradient originating from upper-center (`circle at 50% 35%`).
- **Typography**:
  - Prefix (`Under` / `Explore`): Font `var(--utility)`, size `16px`, weight `500`, color `var(--sage)` (`#e2e8df`).
  - Amount (`₹1499`, `₹1999`, `MORE`): Font `var(--utility)`, size `32px`, weight `700`, color `#ffffff`.
- **Interaction**: Lifts up `translateY(-5px)` on hover with elevated emerald shadow and luminous top border.

### 6.3 Product Cards (`.product-card`)

- **Image Stage**: `aspect-ratio: 1/1` or `height: clamp(330px, 35vw, 510px)`, background: `var(--cream)`.
- **Hover Micro-interaction**: Image scales smoothly `transform: scale(1.04)` over `0.45s ease`. No distracting hover pop-up banner on top of the image.
- **Badges**: Top-left corner, pure white pill with green text (`.product-tag`).
- **Ratings Badge (`.product-rating-badge`)**: Bottom-left corner of image card, glassmorphic white pill (`background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(8px); border-radius: 6px`) displaying gold star (`#bfa15f`), numeric score (`4.9`), and review count in parentheses.
- **Heart Button**: Top-right corner, glassmorphic white circle (`background: rgba(255,255,255,0.9)`), turns `#8b4b45` when active.
- **Card Metadata**:
  - Title: Editorial serif, `19px`, `var(--green)`.
  - Type / Subtitle: Utility sans-serif, `9px`, uppercase, color `#738078`.
  - Price: Utility sans-serif, `17px`, `var(--green)`, right-aligned.
- **Card CTA**: Dedicated `.product-card-cta` ("ADD TO BAG") situated below the metadata with matching `8px` container radius.

### 6.4 Mid-page Minimal Editorial Banner (`.first-access-banner`)

- **Container**: Aspect ratio `3.6:1` (min-height `240px` desktop, `190px` mobile), radius `18px`.
- **Background**: High-res panoramic image featuring pure 925 silver jewellery and model in emerald green tones on `#14332b` base.
- **Atmospheric Overlay**: Soft radial gradient `radial-gradient(ellipse at 50% 50%, rgba(20, 51, 43, 0.32) 0%, rgba(10, 26, 21, 0.76) 100%)`.
- **Content Hierarchy**:
  - Eyebrow: `var(--utility)` uppercase `10px`, tracking `0.24em`, color `var(--sage)` (`#e2e8df`).
  - Headline: `var(--serif)` editorial title `32px - 52px`, `font-weight: 400`, with italic emphasis, crisp `#ffffff`.
  - Subtitle: Understated `var(--utility)` `12px - 14px`, color `#d9e3de`, line-height `1.55`.
  - Minimal Pill CTA: Glassmorphic capsule (`border-radius: 999px`, `rgba(255,255,255,0.12)` background, `1px solid rgba(255,255,255,0.3)` border), transitioning to solid white with `--green` text on hover.

### 6.5 PDP (Product Detail Page) Architecture

- **Layout Structure**: 2-column sticky gallery grid (`1.15fr` gallery, `0.85fr` purchase info).
- **Gallery**: Vertical thumbnail strip (84px wide) + large square primary image viewport with zoom hover.
- **Breadcrumbs**: Uppercase utility font `10px`, tracking `0.14em`, separated by `/`.
- **Offers Section**: Clean boxed accordion cards featuring code pills (`ANBHA10`, `SILVER200`) and soft sage accents.
- **Trust Badges**: Hallmarked 925 Silver, Free Insured Shipping, 15-day Easy Returns.
- **Accordions**: Clean border dividers with rotating chevron, smooth height transitions, zero layout shift.
- **Mobile Sticky Cart**: Fixed bar at bottom viewport on mobile showing price + "Add to Cart" button.

---

## 7. Motion & Accessibility

### 7.1 Motion Tokens

- **Smooth Scroll**: Lenis inertial scrolling enabled globally.
- **Scrollbar Appearance**: Native browser scrollbars are hidden globally (`scrollbar-width: none !important;` and `::-webkit-scrollbar { display: none !important; }`), ensuring an unobstructed luxury canvas while retaining full trackpad/mouse scroll and swipe functionality.
- **Hero Carousel Text Transition**: Staggered upward float and fade-in (`heroTextSlideUp`) using `cubic-bezier(0.16, 1, 0.3, 1)`:
  - Eyebrow: `0.75s` (delay `0.04s`)
  - Headline `h1`: `0.85s` (delay `0.12s`)
  - Description: `0.85s` (delay `0.2s`)
  - CTA Button: `0.8s` (delay `0.28s`)
- **Standard Transition**: `0.25s cubic-bezier(0.2, 0.8, 0.2, 1)` for cards, buttons, and links.
- **Image Scale Transition**: `transform 0.45s ease`.
- **Drawer Slide**: `0.3s cubic-bezier(0.16, 1, 0.3, 1)` from right (`translateX(100%)` to `0`).

### 7.2 Accessibility Standards

- **Focus Rings**:
  ```css
  button:focus-visible, a:focus-visible, input:focus-visible {
    outline: 2px solid #b8844b;
    outline-offset: 3px;
  }
  ```
- **Text Selection**:
  ```css
  ::selection {
    background: #193b32;
    color: #f9f9f9;
  }
  ```
- **Reduced Motion**: All animations and transforms collapse to `.01ms` when `prefers-reduced-motion: reduce` is active.

---

## 8. Imagery & Art Direction

1. **Jewellery Presentation**: High-resolution studio photography showing genuine 925 sterling silver luster. Pieces rest on raw ivory stone, travertine arches, or fine linen.
2. **Model Photography**: Soft natural studio lighting, unretouched skin textures, understated postures, highlighting the intimate relationship between jewellery and wearer.
3. **Color Cast**: Natural warm neutral lighting (`#f9f9f9`, ivory, warm stone). Never cold blue or artificial oversaturated tones.
4. **Jewellery Macro**: Macro shots must clearly show the 925 hallmark stamp, clasp mechanisms, and hand-finished textures.

---

## 9. Copywriting & Tone of Voice

- **Style**: Quiet Luxury, Editorial, Thoughtful.
- **Forbidden Phrases**: "HURRY UP!", "HOT SALE!", "BUY NOW OR CRY LATER!", "CHEAPEST DEALS".
- **Approved Vocabularies**: "Curated by budget", "Hallmarked 925 sterling silver", "Made slowly. Worn always.", "Hand-finished in small batches", "Quiet forms, lasting feeling".

---

## 10. Developer & Designer Checklist

Before pushing or implementing ANY new UI component in this project, verify:

- [ ] Does it use `--green` (`#193b32`), `--green-soft`, `--sage`, `--cream`, or `--paper` exclusively?
- [ ] Are all headlines using `'Cormorant Upright'` with left-alignment?
- [ ] Are all eyebrows, buttons, and metadata labels using `'Inter'` with proper tracking (`letter-spacing: 0.12em - 0.2em`)?
- [ ] Are borders using `var(--line)` (`rgba(25, 59, 50, 0.18)`) or its subtle variant?
- [ ] Are prices formatted with standard currency notation (`₹1,999`)?
- [ ] Are hover states equipped with smooth transitions and appropriate box-shadows?
- [ ] Does it maintain accessibility focus states (`#b8844b`)?
- [ ] Is mobile responsiveness verified at `<= 1000px` and `<= 700px`?

