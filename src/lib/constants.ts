/* ── Site-wide constants and metadata ─────────────────────────────── */

export const SITE_CONFIG = {
  name: "PrintCafe",
  tagline: "Your branded online print counter",
  description:
    "PrintCafe digitises your print counter. Customers scan a QR, upload documents, choose options, get a clear quote, pay online, and collect their prints — while you manage everything from a desktop terminal.",
  /* PLACEHOLDER: Update with actual domain before launch */
  url: "https://printcafe.in",
  ogImage: "/og-image.png",
} as const;

export const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "#use-cases", children: [
    { label: "Cybercafés", href: "/for-cybercafes" },
    { label: "Photocopy Shops", href: "/for-photocopy-shops" },
    { label: "Print Studios", href: "/for-print-studios" },
  ]},
  { label: "Features", href: "#features", children: [
    { label: "QR Printing System", href: "/qr-printing-system" },
    { label: "Online Payments", href: "/online-print-payments" },
    { label: "Print Queue", href: "/automatic-print-queue" },
  ]},
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "QR Printing System", href: "/qr-printing-system" },
    { label: "Online Payments", href: "/online-print-payments" },
    { label: "Automatic Print Queue", href: "/automatic-print-queue" },
  ],
  useCases: [
    { label: "For Cybercafés", href: "/for-cybercafes" },
    { label: "For Photocopy Shops", href: "/for-photocopy-shops" },
    { label: "For Print Studios", href: "/for-print-studios" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    /* PLACEHOLDER: Add these when pages exist */
    // { label: "About", href: "/about" },
    // { label: "Privacy Policy", href: "/privacy" },
    // { label: "Terms of Service", href: "/terms" },
  ],
} as const;

/* PLACEHOLDER: Replace with actual contact details */
export const CONTACT_INFO = {
  email: "[PLACEHOLDER: contact@printcafe.in]",
  phone: "[PLACEHOLDER: +91-XXXXX-XXXXX]",
  whatsapp: "[PLACEHOLDER: WhatsApp link]",
} as const;

export const DEMO_STEPS = [
  { id: "scan", label: "Scan QR", description: "Customer scans the shop QR code" },
  { id: "upload", label: "Upload", description: "Upload a PDF, JPG, or PNG document" },
  { id: "options", label: "Options", description: "Choose B&W or colour, copies, pages, duplex" },
  { id: "quote", label: "Quote", description: "See a clear, real-time price quote" },
  { id: "payment", label: "Pay", description: "Pay online or choose pay-at-counter" },
  { id: "queue", label: "Queue", description: "Job appears on the desktop terminal" },
  { id: "print", label: "Print", description: "Owner prints manually or uses Auto-Print" },
  { id: "done", label: "Done", description: "Customer tracks status and collects print" },
] as const;
