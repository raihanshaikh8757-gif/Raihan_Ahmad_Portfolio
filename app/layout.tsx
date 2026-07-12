import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

const ogImageUrl = siteConfig.ogImageAbsolute;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.linkedin }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  category: 'Portfolio',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Digital Marketer & Vibe Coder`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [ogImageUrl],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/raihan-profile.png',
    apple: '/raihan-profile.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImageAbsolute,
    email: siteConfig.author.email,
    jobTitle: 'Digital Marketer & Vibe Coder',
    description: siteConfig.shortDescription,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.shortDescription} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${siteConfig.name} — Digital Marketer & Vibe Coder`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.shortDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="image_src" href={ogImageUrl} />
      </head>
      <body suppressHydrationWarning className="font-sans bg-[#F5F5F5] text-[#1E1E1E] antialiased selection:bg-[#FDB515] selection:text-[#1E1E1E] relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Background Decorative Elements */}
        <div className="fixed top-[-100px] right-[-100px] w-80 h-80 rounded-full border-[1px] border-[#FDB515] opacity-20 z-[-1] pointer-events-none"></div>
        <div className="fixed bottom-[10%] left-[20%] w-60 h-60 bg-[#FDB515] rounded-full blur-[120px] opacity-20 z-[-1] pointer-events-none"></div>
        <div className="fixed top-[20%] left-[5%] opacity-10 z-[-1] pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100"><circle cx="2" cy="2" r="2" fill="currentColor"/><circle cx="22" cy="2" r="2" fill="currentColor"/><circle cx="42" cy="2" r="2" fill="currentColor"/><circle cx="2" cy="22" r="2" fill="currentColor"/><circle cx="22" cy="22" r="2" fill="currentColor"/><circle cx="42" cy="22" r="2" fill="currentColor"/><circle cx="2" cy="42" r="2" fill="currentColor"/><circle cx="22" cy="42" r="2" fill="currentColor"/><circle cx="42" cy="42" r="2" fill="currentColor"/></svg>
        </div>
        <div className="fixed top-[40%] right-[10%] w-96 h-96 bg-[#1E1E1E] rounded-full blur-[150px] opacity-5 z-[-1] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
