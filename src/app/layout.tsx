import type { Metadata } from 'next';
import { Libre_Franklin, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PrintCafe - Your Branded Online Print Counter',
    template: '%s | PrintCafe',
  },
  description: 'Digitise your print counter with PrintCafe. The ultimate online printing system for Indian cybercafes, photocopy shops, and print studios.',
  metadataBase: new URL('https://printcafe.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'PrintCafe',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${libreFranklin.variable} ${ibmPlexSans.variable}`}>
      <body className="font-sans bg-midnight text-text-primary antialiased flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
