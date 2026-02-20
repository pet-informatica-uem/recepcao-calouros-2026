import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import Header from "../components/header";
import "./globals.css";
import { CRTEffect } from "../components/crtEffect";

const jersey = Jersey_10({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Recepção de Calouros 2026",
  description: "Site da Recepção de Calouros 2026 da UEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jersey.className} antialiased`}
      >
        <CRTEffect />
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
