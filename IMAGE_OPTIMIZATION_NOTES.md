# Image optimization notes

The site loads 106 MB of image assets. Most pages are now lazy-loading (added
`loading="lazy" decoding="async"` to 99 images sitewide), but the underlying
files are still heavier than they need to be.

This list is the priority order for re-encoding when you have time.

## Tier 1 — heavy + frequently visible (>1.5 MB)

| File | Size | Used on |
|---|---|---|
| `assets/zocdoc-report-reference-full.png` | 5.9 MB | Research reports modal |
| `assets/legacy-projects/RS/RS_desktop_detail.png` | 3.7 MB | Rehab Spot |
| `assets/legacy-projects/RS/RS_mobile_detail.png` | 3.5 MB | Rehab Spot (1:18.6 ratio — see below) |
| `assets/legacy-projects/CC/CC-Hitsm-big.png` | 3.0 MB | Other work archive |
| `assets/legacy-projects/RS/RS_Web.png` | 2.5 MB | Other work archive |
| `assets/about-portrait.png` | 2.3 MB | About page hero |
| `assets/legacy-projects/RS/RS_desktop_home.png` | 2.1 MB | Rehab Spot |
| `assets/legacy-projects/RS/RS_mobile_home.png` | 1.7 MB | Rehab Spot |
| `assets/legacy-projects/CC/CC-KC46-full.png` | 1.7 MB | Other work archive |

## Tier 2 — research report scans (1–1.5 MB each)

These are full-page report scans and load only when their respective report is
opened in the research modal — so the impact is per-click, not per-page.

- `assets/research-reports/digital-acceleration-study/full-report.png`
- `assets/research-reports/ivr-flow/full-report.png`
- `assets/research-reports/insurance-payment-study/full-report.png`
- `assets/research-reports/chat-assistant-study/full-report.png`
- `assets/research-reports/app-features-and-icons/full-report.png`
- `assets/research-reports/digital-intake-study/full-report.png`

## Tier 3 — case study figures (1 MB)

- `assets/northrop-grumman/pc-simulation.png`
- `assets/zocdoc-report-page-1.png`
- `assets/team-cymru-website/additional-pages.png`
- `assets/team-cymru-website/wireframe-progression.png`
- `assets/legacy-projects/CC/CC-t-6a.png`

## Recommended encoding targets

- **Photos** (about-portrait, profile-thomas): convert to WebP, target ≤ 200 KB at 1200 px wide.
- **Screenshots / mockups** (Rehab Spot, AdventHealth): convert to WebP, target ≤ 400 KB. Resize to 2× the largest display width (e.g., 1600 px wide is plenty for a column that renders ≤ 800 px).
- **Charts and reports** (full-report PNGs): convert to WebP at 80% quality. Should drop most of these to 200–400 KB.
- **Long mockups** (RS_mobile_detail at 600×11182): keep the long source image for the lightbox, but consider whether 11182 px tall is necessary — half that height with the same content would still tell the story.

## Aspect ratio notes

`RS_mobile_detail.png` is 600×11182 (1:18.6 ratio). When it's resubmitted, the
lightbox `[data-image-zoom]` wiring on the case study page will automatically
display the new asset — no HTML changes needed. The thumbnail keeps a 4:3 crop;
the lightbox shows the full image with scrollable stage.

## Already shipped

- All non-header `<img>` tags now use `loading="lazy" decoding="async"` (99 images across 17 pages)
- Dynamic gallery images (created by `legacy-galleries.js`) also use lazy loading
- Hero images and the brand-mark in `<header>` load eagerly so they're not delayed
