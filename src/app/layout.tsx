// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

// Define your custom font
const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Helvetica-Light.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: "DeeCogs - AI-Driven Solutions",
  description: "We craft AI-driven solutions to transform your challenges into opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helvetica.variable}`}>
      <body className="font-helvetica">
        {children}
      </body>
    </html>
  );
}