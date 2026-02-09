import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akriti | Data Scientist",
  description: "Data Scientist from IIT Mandi specializing in Machine Learning, Python and Gen AI. Explore my portfolio Website.",
  keywords: ["Akriti ", "Data Scientist", "IIT Mandi", "Machine Learning Engineer", "Python Developer", "Portfolio", "Female Coder", "Computer Vision"],
  authors: [{ name: "Akriti " }],
  metadataBase: new URL("https://a-kriti.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akriti  | Data Scientist",
    description: "Coding Dreams, One Heartbeat at a Time. Explore the analytical magic of an IIT Mandi Data Scientist.",
    url: "https://a-kriti.vercel.app",
    siteName: "Akriti's Portfolio",
    images: [
      {
        url: "/generated/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akriti  Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akriti  | Data Scientist",
    description: "Data Scientist & Analytics Coder. Mixing precision with a touch of Magical Codes.",
    images: ["/generated/og-image.jpg"],
  },
  icons: {
    icon: "/generated/favicon-32x32.png",
    shortcut: "/generated/favicon-32x32.png",
    apple: "/generated/apple-touch-icon.png",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${quicksand.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
