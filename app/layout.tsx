import type { Metadata } from 'next';
import { Geist_Mono, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cognitiasolucoes.com'),
  title: 'Cognitia | Segurança inteligente e software sob medida',
  description:
    'Integração de segurança, localização, visão computacional, automação e software sob medida para operações complexas.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Cognitia Soluções Inteligentes',
    title: 'Cognitia | Sistemas que ajudam sua operação a ver, decidir e agir',
    description: 'Segurança inteligente, localização, visão computacional, automação e software sob medida para operações complexas.',
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Cognitia — sistemas para operações inteligentes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitia | Sistemas para operações inteligentes',
    description: 'Integração de segurança, localização, IA, automação e software sob medida.',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cognitia Soluções Inteligentes',
  url: 'https://cognitiasolucoes.com',
  logo: 'https://cognitiasolucoes.com/images/logo-cognitia.png',
  email: 'contato@cognitiasolucoes.com',
  telephone: '+55 11 98019-5401',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1106, 16º andar, sala 1',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-914',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.linkedin.com/company/cognitiasolucoes',
    'https://www.instagram.com/cognit.ia/',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        {children}
      </body>
    </html>
  );
}
