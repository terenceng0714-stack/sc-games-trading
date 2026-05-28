import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "SC GAMES TRADING | Gaming Console Repair Malaysia",
  description:
    "Fast, reliable gaming console repairs in Sungai Way, Selangor. PlayStation, Nintendo Switch, Xbox, Steam Deck, ROG Ally, controllers, HDMI, screen, battery and joystick repair.",
  keywords: [
    "SC GAMES TRADING",
    "gaming console repair Malaysia",
    "PS5 repair Selangor",
    "Nintendo Switch repair",
    "controller drift repair",
    "Sungai Way gaming repair"
  ],
  openGraph: {
    title: "SC GAMES TRADING | Gaming Console Repair Malaysia",
    description:
      "Trusted console, handheld and controller repairs in the Sungai Way / Selangor area.",
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
