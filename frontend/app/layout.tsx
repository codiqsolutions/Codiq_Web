import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import VisitTracker from "@/components/VisitTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Codiq Solutions | Premium Web, Mobile & Marketing',
    template: '%s | Codiq Solutions',
  },
  description: 'Codiq Solutions offers enterprise-grade Web development, cutting-edge Mobile apps, AI-driven solutions, and ROI-focused Digital marketing services tailored for scalability.',
  keywords: 'software development, web development, mobile apps, digital marketing, AI solutions, Codiq Solutions, enterprise software, SaaS products',
  openGraph: {
    title: 'Codiq Solutions | Premium Web, Mobile & Marketing',
    description: 'Codiq Solutions offers enterprise-grade Web development, cutting-edge Mobile apps, AI-driven solutions, and ROI-focused Digital marketing services tailored for scalability.',
    url: 'https://yourdomain.com',
    siteName: 'Codiq Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codiq Solutions | Premium Web, Mobile & Marketing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codiq Solutions",
    "url": "https://yourdomain.com",
    "description": "Codiq Solutions offers enterprise-grade Web development, cutting-edge Mobile apps, AI-driven solutions, and ROI-focused Digital marketing services."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <VisitTracker />
        <Header />
        <main className="flex-grow pt-16 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
