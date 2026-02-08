# Implementation Plan

## Architecture
- Vite + React 18 single-page site with lightweight component structure in `src/App.jsx`.
- TailwindCSS for layout, typography, and utility styling with a custom design system token layer.
- Framer Motion for subtle reveals and counter animation timing.
- Lenis for smooth scrolling with requestAnimationFrame loop.
- All assets served via CDN URLs; no local media to keep build minimal.

## Section Hierarchy
1. Hero
- Autoplay muted looping UGC video rotation
- Results-led headline + positioning subcopy
- Profile image + CTA
2. Performance Stats
- Animated counters (in-view trigger)
- Quick proof points with supporting labels
3. Featured Evergreen Ad
- Instagram reel embed with performance metrics summary
4. Work Showcase
- Masonry grid cards with TikTok examples, hover overlays, and performance callouts
5. Expertise
- Strategic positioning across DTC, paid social, marketplaces, lifecycle marketing
6. Contact
- Email trigger CTA + optional calendar link placeholder
7. Footer
- Minimal trust line

## Animation Philosophy
- Motion is restrained and intentional: soft fades, 8-16px vertical shifts, and slow easing.
- No parallax or heavy transforms; keep motion predictable for performance.
- Section reveals only when in view to avoid above-the-fold blocking.

## Performance Strategy
- Hero videos stacked but only the active video is fully visible; all videos are muted, looped, `playsInline`, and `preload="metadata"` to reduce bandwidth.
- Lightweight crossfade between videos; no JS-heavy video libraries.
- Images and iframes use `loading="lazy"` where supported.
- CSS-based masonry to avoid JS layout work.
- Minimal bundle: avoid large third-party UI libs.

## SEO Structure
- Semantic HTML: `header`, `main`, `section`, `footer`.
- Single H1 in hero with descriptive, performance-led language.
- Descriptive section headings using H2.
- Meta description + Open Graph/Twitter tags in `index.html`.
- Accessible `alt` text for profile image and clear link labels.
