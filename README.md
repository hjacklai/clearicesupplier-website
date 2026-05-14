# Malaysia Clear Ice | Sunny Pop

One-page marketing site for Malaysia Clear Ice / Clear Ice Supplier. Static HTML/CSS/JS (no build step), based on the "Sunny Pop" direction from Claude Design.

## Stack

- `index.html` : single page, semantic sections
- `styles.css` : palette, type, layout, responsive breakpoints
- `main.js` : mobile nav, smooth-scroll, footer year
- `assets/` : logo PNG variants + favicon
- Fonts: Archivo Black + Inter from Google Fonts
- Product / lifestyle imagery: served from the existing Wix CDN (`static.wixstatic.com`)

## Preview locally

```powershell
# from this folder
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1
# then open http://localhost:5180/
```

Or just double-click `index.html`. `file://` works because images load from the CDN.

## Design tokens

| Token            | Value      | Usage                                 |
| ---------------- | ---------- | ------------------------------------- |
| Background       | `#FFF7E0`  | Page background, cream                |
| Ink (text)       | `#0E1428`  | All body text, borders, dark sections |
| Yellow (primary) | `#FFD23F`  | Hero chip, badges, accents            |
| Cobalt (accent)  | `#2854F4`  | Primary CTA, "Why us" panel, links    |
| Coral (highlight)| `#FF6B4A`  | Hero dot, product card, testimonial   |
| Display font     | Archivo Black | Headlines, prices, marquee         |
| Body font        | Inter      | Everything else                       |

## Logo files

The original brand mark (white wireframe cube on black) is preserved verbatim in `assets/logo-original.png`. Two theme-recoloured variants sit alongside:

- `assets/logo-ink.png` : ink (#0E1428) cube on a transparent background. Used in the **nav** so it sits on the yellow tile.
- `assets/logo-yellow.png` : yellow (#FFD23F) cube on transparent. Used in the **footer** so it sits on the cobalt tile.
- `assets/logo-original.png` : the untouched original. Drop-in if you ever want to revert.
- `assets/favicon.svg` : browser tab icon, ink tile + yellow cube.

To regenerate the recoloured variants from the original, run `.claude/recolour-logo.ps1`.

## Replacing photos

Product and lifestyle photos load directly from the existing Wix CDN URLs (e.g. `https://static.wixstatic.com/media/d365cd_...mv2.jpg`). To swap:

1. Find the `<img>` tag in `index.html` for the slot you want to change
2. Replace the `src` URL with another Wix URL, or a local `assets/your-photo.jpg`

## Editing copy

All copy is in `index.html`. Quick navigation by `id`:

- `#top` : nav
- `#products` : the five shapes + custom tile
- `#engraving` : engraving feature block
- `#business` : "Why us" reasons panel
- `#process` : 4-step order flow

To change product prices: edit the `<div class="card__price">` values inside each `.card` in `#products`. Same for the engraving "From RM 4.00 / cube" line.

## Contact funnels

Every CTA links to WhatsApp `+60 11-3965 2066` via `https://wa.me/601139652066`. Some links include a pre-filled message via `?text=...`. To change the WhatsApp number, find/replace `601139652066` across `index.html`.

## Deploying

Drop the folder into Netlify / Vercel / Cloudflare Pages: no build command, no config. Or any static host. The site is small (HTML + CSS + JS + a few KB of logo PNGs); product imagery loads from the Wix CDN.

For SEO: edit the `<title>` and `<meta name="description">` at the top of `index.html`.

## Accessibility

- Skip-link to main content
- Semantic landmarks (header, nav, main, footer, sections)
- ≥ AA colour contrast on all text
- Visible focus rings
- `prefers-reduced-motion` respected (marquee and smooth scroll disable)
- Mobile menu announced via `aria-expanded`
