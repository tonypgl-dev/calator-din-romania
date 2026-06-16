"use client";

import { useState } from "react";
import { Bell, CheckCircle2 } from "lucide-react";

export default function PriceAlertForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your backend / Mailchimp / ConvertKit
    setSubmitted(true);
  }

  return (
    <section className="bg-gradient-to-r from-[#0f2942] to-[#1a4470] py-14 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Bell className="w-8 h-8 mx-auto mb-3 text-orange-400" strokeWidth={2} />
        <h2 className="text-2xl font-bold text-white mb-2">Primești ofertele pe email</h2>
        <p className="text-slate-300 mb-8 text-sm">
          Fii primul care află când apare o ofertă nouă. Viteza contează — prețurile nu stau mult.
        </p>

        {submitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-200 rounded-xl px-6 py-4 text-sm font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Te-ai abonat cu succes! Vei primi ofertele direct în inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="adresa@email.ro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shrink-0"
            >
              Abonează-te gratuit
            </button>
          </form>
        )}

        <p className="text-xs text-slate-500 mt-4">Fără spam. Te poți dezabona oricând.</p>
      </div>
    </section>
  );
}
