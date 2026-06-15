import { OFFERS } from "@/lib/offers";
import OffersGrid from "@/components/OffersGrid";
import PriceAlertForm from "@/components/PriceAlertForm";
import Link from "next/link";
import Image from "next/image";

// imgW = target render width to normalise perceived text size across logos
const PARTNERS = [
  { src: "/skyscanner.png", alt: "Skyscanner",  imgW: 120 },
  { src: "/booking.svg",    alt: "Booking.com", imgW: 130 },
  { src: "/expedia.svg",    alt: "Expedia",     imgW: 100 },
  { src: "/momondo.png",    alt: "Momondo",     imgW: 110 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2942] via-[#1a4470] to-[#0f2942] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Partner logos */}
          <div className="mb-10">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-5 font-medium">
              Partenerii noștri
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-2xl mx-auto">
              {PARTNERS.map((p) => (
                <Image
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  width={p.imgW}
                  height={50}
                  className="object-contain h-auto"
                  style={{
                    width: p.imgW,
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.6))",
                  }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Descoperă lumea<br />
            <span className="text-orange-400">la prețuri accesibile</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Oferte selectate manual — zbor + cazare — pentru călătorii din România. Actualizate zilnic.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/oferte"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Vezi toate ofertele
            </Link>
            <Link
              href="#alerte"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Primesc alerte
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: `${OFFERS.length}+`, label: "Oferte active" },
            { value: "9", label: "Destinații" },
            { value: "100%", label: "Verificate manual" },
            { value: "0€", label: "Comision rezervare" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-orange-500">{s.value}</p>
              <p className="text-xs text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offers section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Oferte recomandate</h2>
          <Link href="/oferte" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
            Toate ofertele →
          </Link>
        </div>
        <OffersGrid offers={OFFERS} />
      </section>

      {/* Why us */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">De ce Călător din România?</h2>
          <p className="text-slate-500 text-sm">Oferte reale, prețuri oneste, fără surprize.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎯", title: "Selectate manual", text: "Fiecare ofertă este verificată personal înainte de publicare." },
            { icon: "💰", title: "Cel mai mic preț", text: "Combinăm zboruri și cazare pentru cele mai bune tarife." },
            { icon: "⚡", title: "Actualizate zilnic", text: "Noile oferte apar în fiecare zi — fii primul care rezervă." },
            { icon: "🛡️", title: "Fără comision", text: "Rezervi direct cu operatorii. Noi nu adăugăm comisioane." },
          ].map((f) => (
            <div key={f.title} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-3xl mb-3">{f.icon}</p>
              <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price alert */}
      <div id="alerte">
        <PriceAlertForm />
      </div>
    </>
  );
}
