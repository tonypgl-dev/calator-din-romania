import Link from "next/link";
import Image from "next/image";

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook", icon: "f" },
  { href: "https://instagram.com", label: "Instagram", icon: "ig" },
  { href: "https://tiktok.com", label: "TikTok", icon: "tt" },
  { href: "https://youtube.com", label: "YouTube", icon: "yt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2942] text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.svg"
              alt="Călător din România"
              width={48}
              height={48}
              className="object-contain"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
            />
            <span className="text-white font-bold text-lg">
              Călător <span className="text-orange-400">din România</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Descoperă lumea la prețuri accesibile. Oferte de vacanță selectate manual — zbor + cazare — pentru călătorii din România.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Navigare</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/oferte", label: "Toate ofertele" },
              { href: "/articole", label: "Articole" },
              { href: "/noutati", label: "Noutăți" },
              { href: "/despre", label: "Despre noi" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-orange-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Rețele sociale</h3>
          <div className="flex gap-3 mb-6">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center text-xs font-bold transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Prețurile afișate sunt valabile la momentul publicării. La verificare ulterioară prețul și disponibilitatea pot diferi.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <span>© 2026 Călător din România (calatordinromania.ro). Toate drepturile rezervate.</span>
          <div className="flex gap-4">
            <Link href="/politica-cookies" className="hover:text-slate-300">Politică Cookies</Link>
            <Link href="/confidentialitate" className="hover:text-slate-300">Confidențialitate</Link>
            <Link href="/termeni" className="hover:text-slate-300">Termeni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
