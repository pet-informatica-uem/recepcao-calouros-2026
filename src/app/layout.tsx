import type { Metadata } from "next";
import { Jersey_20 } from "next/font/google";
import Footer from "../components/footer";
import "./globals.css";
import CRTController from "../components/crtController";

const jersey = Jersey_20({
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
        <CRTController />
        <>
          {children}
        </>
        <Footer/>
      </body>
    </html>
  );
}
