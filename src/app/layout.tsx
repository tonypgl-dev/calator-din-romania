import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: {
    default: "Călător din România — Oferte vacanță ieftine pentru români",
    template: "%s | Călător din România",
  },
  description:
    "Oferte de vacanță selectate manual: zbor + cazare la prețuri imbatabile. Destinații Europa și nu numai, plecare din București, Cluj și Iași. calatordinromania.ro",
  openGraph: {
    siteName: "Călător din România",
    locale: "ro_RO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
