import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getOfferBySlug, OFFERS } from "@/lib/offers";
import { PHOTOS } from "@/lib/photos";
import PhotoGallery from "@/components/PhotoGallery";
import type { Metadata } from "next";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return OFFERS.map((o) => ({ slug: o.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) return {};

  return {
    title: offer.title,
    description: offer.description,
  };
}

// ─── Platform badge ───────────────────────────────────────────────────────────

const PLATFORM_LABELS: Record<string, { label: string; color: string }> = {
  skyscanner: { label: "Skyscanner", color: "bg-sky-500" },
  momondo: { label: "Momondo", color: "bg-violet-500" },
  kiwi: { label: "Kiwi.com", color: "bg-orange-500" },
  booking: { label: "Booking.com", color: "bg-blue-600" },
  "skyscanner-hotels": { label: "Skyscanner Hotels", color: "bg-sky-500" },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function OfferPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) notFound();

  const cheapestTotal = Math.min(...offer.dates.map((d) => d.totalFrom));
  const photos = PHOTOS[slug] ?? [];

  // JSON-LD schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: offer.title,
    description: offer.description,
    image: offer.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: cheapestTotal,
      availability: "https://schema.org/InStock",
      url: `https://calatorfaralimite.ro/oferte/${offer.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 px-4 py-3">
        <div className="max-w-5xl mx-auto text-sm text-slate-500 flex gap-2 items-center">
          <Link href="/" className="hover:text-orange-500">Acasă</Link>
          <span>/</span>
          <Link href="/oferte" className="hover:text-orange-500">Oferte</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{offer.destination}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero image */}
            <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={offer.image}
                alt={offer.destination}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              {offer.badge && (
                <span className="absolute top-6 left-6 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {offer.badge}
                </span>
              )}
            </div>

            {/* Title & Tags */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {offer.type.map((t) => (
                  <span key={t} className="text-xs font-bold bg-sky-50 text-sky-600 border border-sky-100 px-3 py-1 rounded-full capitalize">
                    {t}
                  </span>
                ))}
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                  📅 {offer.durationLabel}
                </span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                  📍 Din {offer.fromCity}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">{offer.title}</h1>
            </div>

            {/* Price Table - UX IMPROVEMENT */}
            {!offer.isFlightOnly && (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <h2 className="font-bold text-slate-800 flex items-center gap-2">
                    📊 Rezumat prețuri pachete
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider text-slate-400 bg-slate-50/50">
                        <th className="px-6 py-3 font-semibold">Perioada</th>
                        <th className="px-6 py-3 font-semibold">Zbor</th>
                        <th className="px-6 py-3 font-semibold">Cazare</th>
                        <th className="px-6 py-3 font-semibold text-orange-500">Total</th>
                        <th className="px-6 py-3 font-semibold"></th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-slate-100">
                      {offer.dates.map((d, i) => {
                        const minHotel = Math.min(...d.hotels.map(h => h.pricePerPerson));
                        return (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-700">{d.label}</td>
                            <td className="px-6 py-4 text-slate-600">{d.flightPricePerPerson}€</td>
                            <td className="px-6 py-4 text-slate-600">{minHotel}€</td>
                            <td className="px-6 py-4 font-bold text-slate-900">{d.flightPricePerPerson + minHotel}€</td>
                            <td className="px-6 py-4 text-right">
                              <a href={`#date-${i}`} className="text-xs font-bold text-orange-500 hover:text-orange-600 underline">
                                Detalii
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
              {offer.longDescription.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-slate-900 font-extrabold text-lg mt-6 mb-3 first:mt-0">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-4 list-disc mb-1 marker:text-orange-500">
                      {line.slice(2)}
                    </li>
                  );
                }
                if (line.trim() === "") return null;
                return <p key={i} className="mb-4 last:mb-0">{line}</p>;
              })}
            </div>
          </div>

          {/* Sidebar — date & booking options */}
          <div className="space-y-6">
            {/* Sticky-like price card */}
            <div className="bg-orange-500 rounded-3xl p-6 text-white shadow-lg shadow-orange-200">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Cea mai ieftină opțiune</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black">{cheapestTotal}€</span>
                <span className="text-sm font-medium opacity-90">/pers</span>
              </div>
              <p className="text-xs font-medium opacity-80 mb-4 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Zbor + cazare inclusă
              </p>
              <a href="#options" className="block w-full text-center bg-white text-orange-600 font-bold py-3 rounded-2xl text-sm hover:bg-orange-50 transition-colors">
                Vezi toate perioadele
              </a>
            </div>

            {/* Dates & packages */}
            <div id="options" className="space-y-4">
              <h3 className="font-bold text-slate-800 px-1">📅 Perioade disponibile</h3>
              {offer.dates.map((dateOpt, di) => (
                <div key={di} id={`date-${di}`} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-6">
                  <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                    <p className="font-bold text-slate-800 text-sm">{dateOpt.label}</p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Varianta {di + 1}</span>
                  </div>
                  <div className="p-5 space-y-5">
                    {/* Flight */}
                    <div className="bg-sky-50/50 p-4 rounded-2xl border border-sky-100/50">
                      <p className="text-[10px] text-sky-600 uppercase tracking-widest font-black mb-2 flex items-center gap-1">
                        ✈️ Zbor dus-întors
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">
                            {offer.fromCity} ↔️ {offer.destination}
                          </p>
                          <span className={`inline-block mt-1 text-[10px] font-bold text-white px-2 py-0.5 rounded-md ${PLATFORM_LABELS[dateOpt.flightPlatform]?.color}`}>
                            {PLATFORM_LABELS[dateOpt.flightPlatform]?.label}
                          </span>
                        </div>
                        <p className="text-xl font-black text-slate-900">
                          {dateOpt.flightPricePerPerson}€
                        </p>
                      </div>
                      <a
                        href={dateOpt.flightLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 rounded-xl text-xs transition-colors"
                      >
                        Rezervă zborul
                      </a>
                    </div>

                    {/* Hotels */}
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-3 px-1">
                        🏨 Opțiuni de cazare (pers)
                      </p>
                      <div className="space-y-2">
                        {dateOpt.hotels.map((hotel, hi) => (
                          <a
                            key={hi}
                            href={hotel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50 transition-all group shadow-sm hover:shadow-md"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-slate-800 group-hover:text-orange-600 truncate">
                                {hotel.name}
                              </p>
                              <span className={`inline-block text-[10px] font-bold text-white px-1.5 py-0.5 rounded-md ${PLATFORM_LABELS[hotel.platform]?.color}`}>
                                {PLATFORM_LABELS[hotel.platform]?.label}
                              </span>
                            </div>
                            <div className="text-right shrink-0 ml-3">
                              <p className="text-sm font-black text-slate-900 leading-none">{hotel.pricePerPerson}€</p>
                              <p className="text-[10px] text-orange-500 font-bold mt-1">
                                Total: {dateOpt.flightPricePerPerson + hotel.pricePerPerson}€
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                <span className="font-bold text-slate-700 not-italic block mb-1">⚠️ Notă importantă</span>
                Prețurile sunt valabile la momentul publicării. Calator fara Limite este un agregator, nu o agenție de turism. Rezervi direct cu operatorul (Skyscanner/Booking/etc) — fără comisioane ascunse. Prețul final poate varia în funcție de momentul rezervării.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        {photos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">📸 Galerie foto — {offer.destination}</h2>
            <PhotoGallery photos={photos} destination={offer.destination} />
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 border-t border-slate-100 pt-8 flex justify-center">
          <Link href="/oferte" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-2xl text-sm transition-colors">
            ← Înapoi la toate ofertele
          </Link>
        </div>
      </div>
    </>
  );
}
