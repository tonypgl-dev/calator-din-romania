export interface GalleryPhoto {
  src: string;
  w: number;
  h: number;
}

// Picsum with destination seeds — replace with real photos per destination
// Pattern varies dimensions to get natural masonry rhythm
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

function gen(slug: string, count = 8): GalleryPhoto[] {
  return dims.slice(0, count).map(([w, h], i) => ({
    src: `https://picsum.photos/seed/${slug}-g${i + 1}/${w}/${h}`,
    w,
    h,
  }));
}

export const PHOTOS: Record<string, GalleryPhoto[]> = {
  alicante:  gen("alicante"),
  mykonos:   gen("mykonos"),
  maroc:     gen("maroc"),
  antalya:   gen("antalya"),
  rhodos:    gen("rhodos"),
  halkidiki: gen("halkidiki"),
  mauritius: gen("mauritius"),
  tbilisi:   gen("tbilisi"),
  sardinia:  gen("sardinia"),
  palermo:   gen("palermo"),
  cracovia:  gen("cracovia"),
  umbria:    gen("umbria"),
  zakynthos: gen("zakynthos"),
  benidorm:  gen("benidorm"),
  milano:    gen("milano"),
  gdansk:    gen("gdansk"),
  skiathos:  gen("skiathos"),
  tropea:    gen("tropea"),
  paphos:    gen("paphos"),
  albania:   gen("albania"),
};
