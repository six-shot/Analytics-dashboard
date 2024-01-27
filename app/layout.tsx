import type { Metadata } from "next";

import { Plus_Jakarta_Sans,Inter } from "next/font/google"; 
import "./globals.css";
import {Providers} from './providers'



const plus_jakara_sans = Plus_Jakarta_Sans({
  subsets: ["cyrillic-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-plus_jakara_sans",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "GeegPay",
  description: "Global banking for Africa's Professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plus_jakara_sans.variable} ${inter.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
