import Link from "next/link";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <p className="text-6xl mb-4">✈️</p>
      <h1 className="text-3xl font-extrabold text-slate-800 mb-3">Pagina nu a fost găsită</h1>
      <p className="text-slate-500 mb-8">Oferta sau pagina pe care o cauți nu mai există sau a expirat.</p>
      <Link
        href="/oferte"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
      >
        Vezi toate ofertele
      </Link>
    </div>
  );
}
