
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
  title: "Daran Global - Building the Future Together",
  description: "Diversified corporate group delivering excellence across industrial equipment, furniture solutions, moisture control, and contemporary architecture.",
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
          mode="hybrid"
          voice-show-transcript="true"
          theme="light"
          size="compact"
          accent-color="#0d9488"
          button-base-color="#134e4a"
          button-accent-color="#fbbf24"
        />
      </body>
    </html>
  );
}
