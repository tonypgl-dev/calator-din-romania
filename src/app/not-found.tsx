import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <PlaneTakeoff className="w-16 h-16 mb-4 text-emerald-500" strokeWidth={1.5} />
      <h1 className="text-3xl font-extrabold text-slate-800 mb-3">Pagina nu a fost găsită</h1>
      <p className="text-slate-500 mb-8">Oferta sau pagina pe care o cauți nu mai există sau a expirat.</p>
      <Link
        href="/oferte"
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
      >
        Vezi toate ofertele
      </Link>
    </div>
  );
}
