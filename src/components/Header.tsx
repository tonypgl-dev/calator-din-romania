"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { href: "/oferte", label: "Oferte" },
  { href: "/articole", label: "Articole" },
  { href: "/noutati", label: "Noutăți" },
  { href: "/despre", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#7fbee9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.svg"
            alt="Călător din România"
            width={160}
            height={160}
            className="object-contain rounded-xl"
            style={{
              border: "25px solid transparent",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.6))",
              borderRadius: "16px",
            }}
          />
          <span className="text-white font-bold text-lg leading-tight">
            Călător<br />
            <span className="text-orange-400 text-sm font-semibold">din România</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-slate-200 hover:text-orange-400 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#7fbee9] border-t border-slate-700 px-4 pb-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-200 hover:text-orange-400 text-sm font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
