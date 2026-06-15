export interface GalleryPhoto {
  src: string;
  w: number;
  h: number;
}

const dims: [number, number][] = [
  [800, 600],
  [600, 900],
  [800, 520],
  [700, 700],
  [600, 820],
  [800, 580],
  [900, 600],
  [620, 750],
];

function u(seed: string, i: number): GalleryPhoto {
  const [w, h] = dims[i % dims.length];
  return {
    src: `https://picsum.photos/seed/${seed}/${w}/${h}`,
    w,
    h,
  };
}

function dest(slug: string): GalleryPhoto[] {
  return Array.from({ length: 8 }, (_, i) => u(`${slug}-${i}`, i));
}

export const PHOTOS: Record<string, GalleryPhoto[]> = {
  alicante: dest("alicante"),
  mykonos: dest("mykonos"),
  maroc: dest("maroc"),
  antalya: dest("antalya"),
  rhodos: dest("rhodos"),
  halkidiki: dest("halkidiki"),
  mauritius: dest("mauritius"),
  tbilisi: dest("tbilisi"),
  sardinia: dest("sardinia"),
  palermo: dest("palermo"),
  cracovia: dest("cracovia"),
  umbria: dest("umbria"),
  zakynthos: dest("zakynthos"),
  benidorm: dest("benidorm"),
  milano: dest("milano"),
  gdansk: dest("gdansk"),
  skiathos: dest("skiathos"),
  tropea: dest("tropea"),
  paphos: dest("paphos"),
  albania: dest("albania"),
};
