import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getOfferBySlug, OFFERS } from "@/lib/offers";
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
          <div className="lg:col-span-2 space-y-6">
            {/* Hero image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.destination}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              {offer.badge && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {offer.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {offer.type.map((t) => (
                  <span key={t} className="text-xs font-semibold bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full capitalize">
                    {t}
                  </span>
                ))}
                <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {offer.durationLabel}
                </span>
                <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Din {offer.fromCity}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{offer.title}</h1>
            </div>

            {/* Description */}
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600">
              {offer.longDescription.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-slate-800 font-bold text-base mt-4 mb-2">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-4 list-disc">
                      {line.slice(2)}
                    </li>
                  );
                }
                if (line.trim() === "") return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </div>

          {/* Sidebar — date & booking options */}
          <div className="space-y-4">
            {/* Price card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <p className="text-xs text-slate-500 mb-1">Preț total de la</p>
              <p className="text-4xl font-extrabold text-orange-500 mb-1">
                {cheapestTotal}€
                <span className="text-sm text-slate-400 font-normal">/pers</span>
              </p>
              <p className="text-xs text-slate-400">Zbor + cazare inclusă</p>
            </div>

            {/* Dates & packages */}
            {offer.dates.map((dateOpt, di) => (
              <div key={di} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                  <p className="font-bold text-slate-800 text-sm">{dateOpt.label}</p>
                </div>
                <div className="p-5 space-y-4">
                  {/* Flight */}
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">✈ Zbor</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {offer.fromCity} → {offer.destination}
                        </p>
                        <span className={`inline-block mt-1 text-xs text-white px-2 py-0.5 rounded-full ${PLATFORM_LABELS[dateOpt.flightPlatform]?.color}`}>
                          {PLATFORM_LABELS[dateOpt.flightPlatform]?.label}
                        </span>
                      </div>
                      <p className="text-lg font-extrabold text-slate-900">
                        {dateOpt.flightPricePerPerson}€
                      </p>
                    </div>
                    <a
                      href={dateOpt.flightLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Caută zborul
                    </a>
                  </div>

                  {/* Hotels */}
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">🏨 Cazare (per persoană)</p>
                    <div className="space-y-2">
                      {dateOpt.hotels.map((hotel, hi) => (
                        <a
                          key={hi}
                          href={hotel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50 transition-colors group"
                        >
                          <div>
                            <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">
                              {hotel.name}
                            </p>
                            <span className={`inline-block text-xs text-white px-1.5 py-0.5 rounded-full ${PLATFORM_LABELS[hotel.platform]?.color}`}>
                              {PLATFORM_LABELS[hotel.platform]?.label}
                            </span>
                          </div>
                          <div className="text-right shrink-0 ml-2">
                            <p className="font-extrabold text-slate-900">{hotel.pricePerPerson}€</p>
                            <p className="text-xs text-orange-500 font-bold">
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

            {/* Disclaimer */}
            <p className="text-xs text-slate-400 leading-relaxed">
              ⚠️ Prețurile sunt valabile la momentul publicării. La verificare ulterioară, prețul și disponibilitatea pot diferi. Rezervi direct cu operatorul — fără comisioane.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <Link href="/oferte" className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
            ← Înapoi la toate ofertele
          </Link>
        </div>
      </div>
    </>
  );
}
