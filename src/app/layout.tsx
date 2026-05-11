import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import ThemeProvider from "@/components/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PrimeLink Global Services | Product Sourcing & Logistics Specialist",
  description:
    "PrimeLink Global Services offers comprehensive global trade solutions including product sourcing, logistics, customs clearance, and secure payment handling.",
  keywords: [
    "Logistics",
    "Product Sourcing",
    "Global Trade",
    "Customs Clearance",
    "Freight Forwarding",
    "India Imports",
    "PrimeLink",
  ],
  openGraph: {
    title: "PrimeLink Global Services | Product Sourcing & Logistics Specialist",
    description:
      "End-to-end global trade solutions — product sourcing, freight forwarding, customs clearance & secure payments.",
    url: "https://primelink.co.in",
    siteName: "PrimeLink Global Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <ThemeProvider>
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
