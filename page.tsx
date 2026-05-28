import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "SC Games Holiday Plaza | Chip-Level Console Repair Johor Bahru",
  description:
    "Premium gaming console micro-repair specialists at Holiday Plaza, Johor Bahru. Motherboard diagnostics, micro-soldering, controller drift repair, eMMC recovery and firmware optimization.",
  keywords: [
    "SC Games Holiday Plaza",
    "console repair Johor Bahru",
    "Nintendo Switch micro soldering",
    "PS5 controller drift repair",
    "Holiday Plaza game repair",
    "chip level console repair"
  ],
  openGraph: {
    title: "SC Games Holiday Plaza | Chip-Level Console Repair",
    description:
      "Advanced console motherboard diagnostics, micro-soldering, storage recovery and controller restoration in Johor Bahru.",
    type: "website",
    locale: "en_MY"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

