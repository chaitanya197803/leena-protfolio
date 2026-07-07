import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import CustomCursor from '../components/CustomCursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leenasingh.vercel.app'),
  title: 'Leena Singh | Portfolio',
  description: 'Official portfolio of Leena Singh, B.Sc Graduate, Content Writer, School Teacher, and Computer Operator from Durg, Chhattisgarh.',
  keywords: [
    'Leena Singh',
    'Portfolio',
    'B.Sc Graduate',
    'Content Writer',
    'School Teacher',
    'Computer Operator',
    'Durg',
    'Chhattisgarh'
  ],
  authors: [{ name: 'Leena Singh' }],
  icons: {
    icon: '/profile2.png',
    apple: '/profile2.png',
  },
  openGraph: {
    title: 'Leena Singh | Portfolio',
    description: 'Official portfolio of Leena Singh, B.Sc Graduate, Content Writer, School Teacher, and Computer Operator from Durg, Chhattisgarh.',
    url: 'https://leenasingh.vercel.app', // placeholder
    siteName: 'Leena Singh Portfolio',
    images: [
      {
        url: '/profile2.png',
        width: 800,
        height: 800,
        alt: 'Leena Singh Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leena Singh | Portfolio',
    description: 'Official portfolio of Leena Singh, B.Sc Graduate, Content Writer, School Teacher, and Computer Operator from Durg, Chhattisgarh.',
    images: ['/profile2.png'],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative text-text-main bg-white">
        {/* Dynamic Background */}
        <ThreeBackground />

        {/* Layout Indicators & Helpers */}
        <ScrollProgress />
        <CustomCursor />
        <BackToTop />

        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
