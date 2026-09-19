# DESIGN-SPEC

- **Design System Name**: Spatial Midnight
- **Color Tokens**: full table of all oklch() tokens for both dark and light modes
- **Typography**: Libre Franklin (display) + IBM Plex Sans (body), scale, weights, tracking
- **Glass Card System**: CSS spec for glass-card, glass-card-hover, glass-nav
- **Motion Guidelines**: MotionConfig reducedMotion='user', variants used, scroll-reveal approach, play/pause controls on demo, tab visibility pause, transform+opacity only
- **Responsive Breakpoints**: 390px (base), 768px (md), 1024px (lg), 1440px (max container)
- **Ambient Effects**: glow orbs, gradient text
- **Dark/Light Mode**: class-based toggle (.light on html), localStorage persistence, system preference detection
- **Accessibility**: focus-visible ring, keyboard navigation, semantic HTML, WCAG contrast targets
- **Dependencies**: list each with version and rationale
