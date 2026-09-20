# CONTENT AND CLAIMS

## Product Claims Used on the Site
| Claim | Where Used | Verification Status |
|---|---|---|
| 'Branded online print counter' | Homepage hero, capability cards | Verified in source (System.md §19, §20) |
| 'QR-based ordering, no app install' | How it works, capability cards | Verified in source (System.md §12) |
| 'Real-time price quotes' | Capability cards | Verified in source (pricing.ts, System.md §5) |
| 'Online payment (UPI, card)' | Multiple pages | Verified in source (System.md §2, §9); gateway-flexible |
| 'Pay-at-counter option' | Capability cards, how-it-works | Verified in source (print-flow supports both) |
| 'Desktop print terminal for Windows' | Terminal section, feature pages | Verified in source (System.md §15) |
| 'Manual and Auto-Print modes' | Print mode comparison | Verified in source (System.md §15, §18) |
| 'Customer order status tracking' | Capability cards | Verified in source (System.md §12, /status/[publicToken]) |
| 'Owner-customisable portal: shop name, location, dynamic badge, brand accent colour, customer order link' | Portal customisation section, capability cards | Founder-confirmed; pending merge into the reference repository |
| 'Live customer preview in owner dashboard' | Portal customisation section | Founder-confirmed; pending merge into the reference repository |
| 'Configurable document retention' | Capability cards | Verified in source (System.md §16, cleanup cron) |
| 'Supported formats: PDF, JPG, PNG' | FAQ, how-it-works | Verified in source (System.md §12, documents.ts) |
| 'No customer account/login required' | FAQ, multiple pages | Verified in source (System.md §12) |

## Claims Deliberately Excluded
| Claim NOT Made | Reason |
|---|---|
| WhatsApp bot or automation | Feature does not exist |
| Delivery service | Feature does not exist |
| Multi-café management | Not built (future SaaS) |
| SaaS self-service signup | Not built (manual onboarding only) |
| Customer accounts/login | Not part of product design |
| Smart multi-printer routing | Not implemented |
| Named payment gateway as permanent | Gateway is swappable; currently Razorpay/UPI but must remain flexible |
| Security certifications | Not independently verified |
| Customer testimonials | None verified |
| Shop counts or user numbers | No confirmed data |
| Pricing or free trial | No confirmed policy |
| Launch date claims | No confirmed timeline |
| File privacy / security claims | Not independently verified; use 'configurable document retention' only |

## Payment Gateway Policy
- Current integration: Razorpay/UPI
- Public marketing copy: always 'online payment', 'UPI payments', or 'card payments'
- Never present any gateway as permanent
- Architecture supports provider swaps

## Placeholder Items Requiring Founder Decisions
- Domain name (using printhatke.example.com as placeholder)
- Contact email, phone, WhatsApp
- Demo booking mechanism
- OG image for social sharing
- Pricing tiers (if any)
- Blog/resources section
- Legal pages (privacy, terms)
- Customer testimonials (when available)
- Shop count / user metrics (when available)

## Content Tone Guidelines
- Professional but approachable
- Speak to shop owners as peers, not as tech-illiterate users
- Emphasise practical benefits over technical features
- Indian market context (₹ pricing, UPI, cybercafé terminology)
- No hype, no unverified superlatives
