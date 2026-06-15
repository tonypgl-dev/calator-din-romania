import { OFFERS } from "@/lib/offers";
import OffersGrid from "@/components/OffersGrid";
import PriceAlertForm from "@/components/PriceAlertForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toate ofertele de vacanță",
  description:
    "Oferte vacanță ieftine cu zbor și cazare incluse. Filtrează după buget, tip de destinație sau durată.",
};

export default function OffersPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#0f2942] py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-2">Toate ofertele</h1>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Oferte selectate manual — zbor + cazare — la cele mai bune prețuri. Filtrează mai jos după buget sau tip de destinație.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <OffersGrid offers={OFFERS} />
      </div>

      <PriceAlertForm />
    </>
  );
}
