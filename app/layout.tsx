import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ShoppingCartProvider } from "@/context/ShoppingCartProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MegaMart | Your One-Stop Shopping Destination",
  description:
    "MegaMart offers a premium selection of products across electronics, fashion, home goods, and more. Enjoy a seamless shopping experience with fast delivery and excellent customer service.",
  keywords: [
    "e-commerce",
    "online shopping",
    "megamart",
    "electronics",
    "fashion",
    "home goods",
  ],
  authors: [{ name: "Amr Khaled" }],
  creator: "Amr Khaled",
  publisher: "Amr Khaled",
  metadataBase: new URL("https://megamart-ak.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://megamart-ak.vercel.app",
    title: "MegaMart | Your One-Stop Shopping Destination",
    description:
      "Discover MegaMart's premium selection of products with fast delivery and excellent customer service.",
    siteName: "MegaMart",
    images: [
      {
        url: "/logo.png",
        type: "image/png",
        width: 800,
        height: 600,
        alt: "MegaMart Logo",
      },
    ],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  category: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ShoppingCartProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
            <Footer />
            <Analytics />
          </ThemeProvider>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
