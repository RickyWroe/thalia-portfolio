# Design System

## Color Palette
- `ink`: #0c0d0e (primary background)
- `ash`: #141617 (section depth)
- `smoke`: #1d2022 (cards)
- `pearl`: #f5f3ef (primary text)
- `mist`: #d7d3cc (secondary text)
- `sand`: #b8b2a7 (muted text)
- `accent`: #a5794a (luxury performance accent)
- `accentGlow`: #d2a679 (subtle highlight)
- `emerald`: #2bb673 (performance metric accent)

## Typography
- Display Serif: "Cormorant Garamond" for hero headline and section titles.
- Modern Sans: "Manrope" for body, labels, stats, and UI elements.
- Letter spacing: wide tracking for small caps labels.

## Motion Rules
- Transitions: 300-700ms, cubic-bezier(0.22, 0.61, 0.36, 1).
- Hover: opacity + slight translate (4-6px), no dramatic scaling.
- Reveal: fade + translateY(12px) with staggered timing.

## Spacing System
- Base unit: 4px.
- Section padding: 96px desktop, 64px tablet, 48px mobile.
- Max content width: 1200px.
- Grid gaps: 24px desktop, 16px mobile.

## Button Styles
- Primary: solid `accent` background, `ink` text, rounded-full, 14-16px padding.
- Secondary: ghost with `accent` border, transparent background.
- Hover: subtle glow shadow and lift.

## Video Behavior Standards
- Autoplay, muted, loop, playsInline.
- `preload="metadata"` for non-active videos; switch to `auto` for active.
- Fallback: show gradient poster overlay if video fails to load.
- Always include a performance overlay label to reinforce data-first positioning.
