import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BlazeTech Integrated Service Limited | IT, Security & Technology Solutions",
    template: "%s | BlazeTech Integrated Service Limited",
  },
  description:
    "BlazeTech Integrated Service Limited delivers IT infrastructure, networking, CCTV & security systems, cybersecurity, cloud, and technology solutions for businesses in Nigeria.",
  keywords: [
    "BlazeTech",
    "IT solutions Nigeria",
    "CCTV installation Abuja",
    "networking company Abuja",
    "cybersecurity Nigeria",
    "IT infrastructure",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
