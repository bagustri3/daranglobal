import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daran Global – Equipment, Furniture & Architecture",
  description: "Leading diversified corporate group delivering excellence in industrial equipment, custom furniture solutions, advanced moisture control systems, and contemporary architecture. We provide innovative, sustainable, and high-quality solutions for businesses, residences, and institutions, combining precision engineering, ergonomic design, environmental comfort, and modern architectural innovation to ensure efficiency, durability, and lasting impact.",
  keywords: "Diversified corporate group, Industrial equipment, Custom furniture, Moisture control systems, Contemporary architecture, Innovative machinery, Ergonomic furniture, Sustainable design",
  icons: {
    icon: "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/fb467e4e7a399168a060cedfdb073e6f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Script 
          src="https://readdy.ai/api/public/assistant/widget?projectId=46def1a4-bb4b-4055-846b-8427e6f59231"
          strategy="afterInteractive"
          data-mode="hybrid"
          data-voice-show-transcript="true"
          data-theme="light"
          data-size="compact"
          data-accent-color="#0d9488"
          data-button-base-color="#134e4a"
          data-button-accent-color="#fbbf24"
        />
      </body>
    </html>
  );
}
