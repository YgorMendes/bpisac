import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import "./page.scss";

export const metadata: Metadata = {
  title: "segurobp",
  description: "Seguros automotivos.",
  openGraph: {
    images: [
      {
        url: "https://segurobp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhiteLogo.1c8c124a.png&w=828&q=75",
        width: 1200,
        height: 630,
        alt: "Imagem de preview do SeguroBP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
