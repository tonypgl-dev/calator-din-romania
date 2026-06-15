export interface GalleryPhoto {
  src: string;
  w: number;
  h: number;
}

// Dimensions vary to create natural masonry rhythm
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

function u(id: string, i: number): GalleryPhoto {
  const [w, h] = dims[i % dims.length];
  return {
    src: `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`,
    w,
    h,
  };
}

export const PHOTOS: Record<string, GalleryPhoto[]> = {
  alicante: [
    "6JZroLmljmA",
    "Ih5MQMqPjQ8",
    "RIn4NU0shrc",
    "q0cdMsv4DTI",
    "HeBkv0CwxRE",
    "zVvw_efO_o8",
    "qqAcQNJ9gQ0",
    "FObL2dxx9dg",
  ].map(u),

  mykonos: [
    "1601581875309-fafbf2d3ed3a",
    "1533105079780-92b9be482077",
    "1523568129082-a8d6c095638e",
    "1661935781384-b27f5faa9197",
    "1598395927056-8d895e701c3b",
    "1597744733354-0499ea376fe9",
    "1596933144889-c15043a9ddde",
    "1602584386319-fa8eb4361c2c",
  ].map(u),

  maroc: [
    "dLnErzTXNAY",
    "CFKksjYRSQ8",
    "Dql2_LN5sRg",
    "bzFHhYKdIa0",
    "apWEUZdDXdQ",
    "7a_PHX91su8",
    "LhVJaRPweJc",
    "NMF5sEaHUmo",
  ].map(u),

  antalya: [
    "cqwOLVw-I7E",
    "MdshtB1VOj8",
    "p46ETJPtql8",
    "FZWxLTN7m_8",
    "5LEls01Qn2w",
    "OZfVcu3Hy9E",
    "zgJ6vbkwHEw",
    "GbK3NM4w69M",
  ].map(u),

  rhodos: [
    "x-HCoTDGgZw",
    "YZBuJZ808-4",
    "mAOTatwrE_o",
    "Zy58SPXW_jE",
    "df9n4iL4WWU",
    "H_0iJrjeVvw",
    "q40GIu3B6ps",
    "GqstaPBPBvw",
  ].map(u),

  halkidiki: [
    "ybvb-u7sar4",
    "Bfe6LJbAaMs",
    "zaXQT3rz9lw",
    "U2OwjL8xmdY",
    "1B4lRrTtzoc",
    "hqbDAXEIgiU",
    "GeLHmnxJZyU",
    "U2OwjL8xmdY",
  ].map(u),

  mauritius: [
    "1719843013775-1a101dd75b37",
    "1513415563383-4e580ed27a46",
    "1686739996006-7c2cdff5d34c",
    "1557488640-d00b728a2f1e",
    "1719843013722-c2f4d69db940",
    "1585952201050-45c66f810fcc",
    "1553683982-bf97c72e4a1c",
    "1642414994067-58f5e043a1b9",
  ].map(u),

  tbilisi: [
    "1664303290540-ef425e175ff0",
    "1603350576276-24747f7bbf40",
    "1561731172-9d906d7b13bf",
    "1505294399615-2479253a4990",
    "1584097774573-1c3cc28b2aef",
    "1597395529362-361ba4b8ec24",
    "1603698873304-b052340d9719",
    "1608499781813-44bd498ed089",
  ].map(u),

  sardinia: [
    "wgkRUUcn8cw",
    "cwihrX0W5xQ",
    "F7TamMkPB_M",
    "iSORmTk3pao",
    "acuoqp9Wt_o",
    "9OkNXWZkQx0",
    "d8XlOvNVS3c",
    "xVWM7zUvhww",
  ].map(u),

  palermo: [
    "Fo5o3iXG8_8",
    "Er4gxPJpRe8",
    "OOtlY6Z7PW0",
    "rDQhm-8WV5g",
    "p4i4MMfwnmU",
    "ERPwTqJ_LDs",
    "SeyoNMq_dCU",
    "XpAEJeU0W0A",
  ].map(u),

  cracovia: [
    "XnIWbaujHec",
    "t-SSPRyqo7c",
    "2lK0291iNHI",
    "i-p1zqFros8",
    "Wc5gq9tQZSE",
    "7rCdqEuQ1rg",
    "xoc2KsSMM8k",
    "SPpsFbCaN2A",
  ].map(u),

  umbria: [
    "HYKyIErVMjg",
    "FRetgKIUSvA",
    "XxQxQok5plI",
    "fg407Mu59Dk",
    "x-W9R7hfVGg",
    "EAwhoDHHQbY",
    "cs-fGIqlKQs",
    "WLpdyIkTQOY",
  ].map(u),

  zakynthos: [
    "1JF7MxTEYiI",
    "bFdC-dVtFT8",
    "miazfAFxGX0",
    "eItGF1k01LI",
    "Mwkk3AQfV04",
    "EsXofGG5czc",
    "mgOtb_-8GCA",
    "1JF7MxTEYiI",
  ].map(u),

  benidorm: [
    "o8nXMC-mzUs",
    "sqPc2Qadypo",
    "41ySbWkof24",
    "0tI3LZonKUA",
    "guMzb01Y50Q",
    "qggtzHY-PjE",
    "YaSI1y5BP7Q",
    "ljQBcS0UzKA",
  ].map(u),

  milano: [
    "XvTdgBo4adE",
    "0xe2FGo7Vc0",
    "x9Qixy7lbzo",
    "xEQLO9EGu64",
    "txlzajY7Drc",
    "I9MeNSxtoJ8",
    "6KyLQPDCc9o",
    "XvTdgBo4adE",
  ].map(u),

  gdansk: [
    "oUrM2wOYmBQ",
    "KcjKvX7w8YQ",
    "GZmxOByPubM",
    "Pi6ZukL2cGA",
    "BBSEfVqOczY",
    "PuFtDp6U4Ws",
    "Sm0WHQnZmlw",
    "oUrM2wOYmBQ",
  ].map(u),

  skiathos: [
    "yuSSGouWn9U",
    "G_4T6u5zREY",
    "5tq6bxlLn68",
    "FueoUdlC4i4",
    "48k4_RKDJB0",
    "jHPs48bjGF4",
    "X5j705TuFnA",
    "zxd87r_1wdU",
  ].map(u),

  tropea: [
    "tc2Cts4aXCw",
    "pjsL2h13KFo",
    "ZrVXjTO72B4",
    "cl7qxzOTmoQ",
    "g0n0FLM3UTg",
    "BQdxpKe5gHw",
    "pN-LYvRlJCE",
    "kIgAzv_YdNE",
  ].map(u),

  paphos: [
    "7SMfnnWsoIk",
    "FrfHhHUbo9c",
    "Fs3tnxNGutk",
    "Cu801se37-k",
    "PUDnpQDnzLw",
    "SIOdjcYotms",
    "ZwvJjgC3uTM",
    "6jxWmNmKM8s",
  ].map(u),

  albania: [
    "z7AylYXLaW4",
    "gNobjQZVowA",
    "01tk6pZwVl0",
    "2k2_SZSSmQ8",
    "B1o-RNQ4p0I",
    "W4hp2cIsDv4",
    "e0KtGTOSJgs",
    "hbTF64uEUl8",
  ].map(u),
};
