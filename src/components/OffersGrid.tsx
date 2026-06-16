"use client";

import { useState, useMemo } from "react";
import { SearchX } from "lucide-react";
import type { Offer, OfferType } from "@/lib/offers";
import OfferCard from "./OfferCard";

const TYPES: OfferType[] = ["plajă", "city-break", "natură", "exotic"];

const BUDGETS = [
  { label: "Toate", max: Infinity },
  { label: "Sub 150€", max: 150 },
  { label: "150€ – 250€", max: 250, min: 150 },
  { label: "250€ – 500€", max: 500, min: 250 },
  { label: "Peste 500€", min: 500, max: Infinity },
];

interface Props {
  offers: Offer[];
}

export default function OffersGrid({ offers }: Props) {
  const [selectedType, setSelectedType] = useState<OfferType | null>(null);
  const [budgetIdx, setBudgetIdx] = useState(0);
  const [sortBy, setSortBy] = useState<"price" | "duration">("price");

  const filtered = useMemo(() => {
    const budget = BUDGETS[budgetIdx];
    return offers
      .filter((o) => !selectedType || o.type.includes(selectedType))
      .filter((o) => {
        const min = (budget as { min?: number }).min ?? 0;
        return o.priceFrom >= min && o.priceFrom <= budget.max;
      })
      .sort((a, b) =>
        sortBy === "price" ? a.priceFrom - b.priceFrom : a.duration - b.duration
      );
  }, [offers, selectedType, budgetIdx, sortBy]);

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-3 items-center">
          {/* Type filters */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                selectedType === null
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "border-slate-200 text-slate-600 hover:border-emerald-300"
              }`}
            >
              Toate
            </button>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t === selectedType ? null : t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  selectedType === t
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "border-slate-200 text-slate-600 hover:border-emerald-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="h-5 border-l border-slate-200 hidden sm:block" />

          {/* Budget filter */}
          <select
            value={budgetIdx}
            onChange={(e) => setBudgetIdx(Number(e.target.value))}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            {BUDGETS.map((b, i) => (
              <option key={i} value={i}>{b.label}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "price" | "duration")}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <option value="price">Sortare: Preț</option>
            <option value="duration">Sortare: Durată</option>
          </select>

          <span className="ml-auto text-xs text-slate-400">{filtered.length} oferte</span>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <SearchX className="w-10 h-10 mx-auto mb-3" strokeWidth={1.5} />
          <p className="font-medium">Nicio ofertă găsită pentru filtrele selectate.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </div>
      )}
    </div>
  );
}
