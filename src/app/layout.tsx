import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../components/providers/ReduxProvider';
import SplashScreen from '../components/animations/SplashScreen';
import ScrollManager from '../components/utils/ScrollManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mayfair Smart City - Premium Properties & Expert Services',
  description: 'Discover luxury real estate properties with Mayfair Smart City . Expert real estate services, premium locations, and personalized property solutions.',
  keywords: 'real estate, luxury properties, buy home, sell home, property investment, real estate agent',
  authors: [{ name: 'Mayfair Smart City' }],
  openGraph: {
    title: 'Mayfair Smart City  Real Estate - Premium Properties & Expert Services',
    description: 'Discover luxury real estate properties with Mayfair Smart City . Expert real estate services, premium locations, and personalized property solutions.',
    url: 'https://luminor-realestate.com',
    siteName: 'Mayfair Smart City Real Estate',
    images: [
      {
        url: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayfair Smart City  Real Estate - Premium Properties',
    description: 'Discover luxury real estate properties with expert services.',
    images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://luminor-realestate.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <SplashScreen>
            <ScrollManager/>
            {children}
          </SplashScreen>
        </ReduxProvider>
      </body>
    </html>
  );
}