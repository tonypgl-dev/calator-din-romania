import Image from "next/image";
import Link from "next/link";
import type { Offer } from "@/lib/offers";

const TYPE_COLORS: Record<string, string> = {
  "plajă": "bg-sky-100 text-sky-700",
  "city-break": "bg-violet-100 text-violet-700",
  "natură": "bg-green-100 text-green-700",
  "exotic": "bg-amber-100 text-amber-700",
};

const BADGE_COLORS: Record<string, string> = {
  "POPULAR": "bg-emerald-600",
  "NOU": "bg-teal-500",
  "SUPER DEAL": "bg-red-500",
  "EXOTIC": "bg-amber-500",
  "LAST MINUTE": "bg-rose-600",
};

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Link
      href={`/oferte/${offer.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.destination}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {offer.badge && (
          <span
            className={`absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full ${BADGE_COLORS[offer.badge] ?? "bg-slate-700"}`}
          >
            {offer.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-xs font-medium opacity-90">{offer.country}</p>
          <p className="text-lg font-bold leading-tight">{offer.destination}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Types */}
        <div className="flex flex-wrap gap-1.5">
          {offer.type.map((t) => (
            <span key={t} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[t]}`}>
              {t}
            </span>
          ))}
          <span className="text-xs text-slate-400 px-2 py-0.5">
            {offer.durationLabel}
          </span>
        </div>

        <p className="text-slate-600 text-sm line-clamp-2 flex-1">
          {offer.description}
        </p>

        {/* Price row */}
        <div className="flex items-end justify-between pt-2 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400">de la</p>
            <p className="text-2xl font-extrabold text-emerald-600">
              {offer.priceFrom}€
              <span className="text-xs text-slate-400 font-normal ml-1">/pers</span>
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
            {offer.fromCity}
          </span>
        </div>
      </div>
    </Link>
  );
}
