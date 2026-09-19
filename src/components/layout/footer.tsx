import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex relative h-12 w-[200px]">
              <Image 
                src="/logo-dark.png" 
                alt="PrintHatke" 
                fill 
                className="object-contain object-left theme-logo-dark" 
              />
              <Image 
                src="/logo-light.png" 
                alt="PrintHatke" 
                fill 
                className="object-contain object-left theme-logo-light" 
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed font-medium">
              Your branded online print counter.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Digitise your print shop with a branded portal, seamless online payments, and an automated print queue system designed for modern Indian businesses.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-6 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-4">
              <li><Link href="/#how-it-works" className="text-sm text-text-secondary hover:text-electric transition-colors">How It Works</Link></li>
              <li><Link href="/features/qr-printing" className="text-sm text-text-secondary hover:text-electric transition-colors">QR Printing System</Link></li>
              <li><Link href="/features/payments" className="text-sm text-text-secondary hover:text-electric transition-colors">Online Payments</Link></li>
              <li><Link href="/features/print-queue" className="text-sm text-text-secondary hover:text-electric transition-colors">Automatic Print Queue</Link></li>
            </ul>
          </div>

          {/* Column 3: Use Cases */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-6 text-sm uppercase tracking-wider">Use Cases</h3>
            <ul className="space-y-4">
              <li><Link href="/use-cases/cybercafes" className="text-sm text-text-secondary hover:text-electric transition-colors">For Cybercafés</Link></li>
              <li><Link href="/use-cases/photocopy-shops" className="text-sm text-text-secondary hover:text-electric transition-colors">For Photocopy Shops</Link></li>
              <li><Link href="/use-cases/print-studios" className="text-sm text-text-secondary hover:text-electric transition-colors">For Print Studios</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-electric transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-electric transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-electric transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 PrintCafe. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            <a href="mailto:contact@printcafe.in" className="hover:text-electric transition-colors">
              contact@printcafe.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
