# PrintCafe Marketing Website

Standalone marketing website for [PrintCafe](https://printcafe.in) — a branded online print counter for Indian cybercafés, photocopy shops, and print studios.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Animation**: Motion for React (`motion/react`)
- **Icons**: Lucide React
- **Design System**: Spatial Midnight — dark/light mode with glass-morphism

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── how-it-works/      # How it works page
│   ├── for-cybercafes/    # Use case pages
│   ├── for-photocopy-shops/
│   ├── for-print-studios/
│   ├── qr-printing-system/    # Feature pages
│   ├── online-print-payments/
│   ├── automatic-print-queue/
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Homepage sections
│   ├── providers/         # Theme + Motion providers
│   └── shared/            # Reusable components
├── lib/                   # Utilities, constants, hooks
docs/
├── DESIGN-SPEC.md         # Design system documentation
├── CONTENT-AND-CLAIMS.md  # Product claims audit
└── VERIFICATION.md        # Verification checklist
```

## Design System

See [docs/DESIGN-SPEC.md](docs/DESIGN-SPEC.md) for the complete Spatial Midnight design specification.

## Content Policy

See [docs/CONTENT-AND-CLAIMS.md](docs/CONTENT-AND-CLAIMS.md) for the product claims audit and content guidelines.

## Important Notes

- This is a **separate project** from the main PrintCafe product repository.
- No backend, database, or authentication — pure marketing frontend.
- All contact details are `[PLACEHOLDER]` — update before launch.
- Payment gateway references are intentionally generic ('online payment') — never name a specific provider as permanent.
- Dark mode is the default; light mode available via theme toggle.
