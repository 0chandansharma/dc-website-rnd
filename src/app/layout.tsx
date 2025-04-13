import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}