"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/lib/photos";

interface Props {
  photos: GalleryPhoto[];
  destination: string;
}

export default function PhotoGallery({ photos, destination }: Props) {
  const [idx, setIdx] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), [photos.length]);
  const next = useCallback(() => setIdx((i) => (i === null ? null : (i + 1) % photos.length)), [photos.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, prev, next, close]);

  useEffect(() => {
    document.body.style.overflow = idx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [idx]);

  if (!photos.length) return null;

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
        {photos.map((p, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-3 cursor-zoom-in group overflow-hidden rounded-xl"
            onClick={() => setIdx(i)}
          >
            <Image
              src={p.src}
              alt={`${destination} — foto ${i + 1}`}
              width={p.w}
              height={p.h}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {idx !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center"
          onClick={close}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = touchStart - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
            setTouchStart(null);
          }}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/40 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors"
            onClick={close}
            aria-label="Închide"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10 bg-black/40 px-3 py-1 rounded-full">
            {idx + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-3 z-10 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full px-20 max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[idx].src}
              alt={`${destination} — foto ${idx + 1}`}
              width={photos[idx].w * 2}
              height={photos[idx].h * 2}
              className="object-contain max-h-[88vh] w-auto rounded-lg shadow-2xl"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-3 z-10 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Următor"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </>
  );
}
