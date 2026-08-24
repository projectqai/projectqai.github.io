import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata } from 'next';

// Body / UI — geometric sans as a stand-in for the brand's "Circular".
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Display / headings — stand-in for the brand's "Q schengen A".
const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// Code / mono — exact match for the Hydris brand.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://projectqai.github.io'),
  formatDetection: { telephone: false },
  title: {
    default: 'Hydris Documentation',
    template: '%s | Hydris',
  },
  description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
  openGraph: {
    title: 'Hydris Documentation',
    description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
    url: 'https://projectqai.github.io',
    siteName: 'Hydris',
    images: [
      {
        url: '/hydris-screenshot.png',
        width: 2880,
        height: 1800,
        alt: 'Hydris tactical coordination interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hydris Documentation',
    description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
    images: ['/hydris-screenshot.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
          theme={{
            defaultTheme: 'dark',
            themes: ['light', 'dark', 'system'],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
