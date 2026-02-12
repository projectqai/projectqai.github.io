import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://projectqai.github.io'),
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
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
