// ─── Affiliate credentials ────────────────────────────────────────────────────
// Replace the placeholders below with your own IDs before going live.
// You can also set them via environment variables (prefixed with NEXT_PUBLIC_).

export const AFFILIATE = {
  skyscanner: {
    publisherId: process.env.NEXT_PUBLIC_SKYSCANNER_PUBLISHER_ID ?? "YOUR_SKYSCANNER_PUBLISHER_ID",
    adId: "1027991",
    subId: "13416",
    assocId: "AFF_TRA_19345_00001",
  },
  booking: {
    aid: process.env.NEXT_PUBLIC_BOOKING_AID ?? "YOUR_BOOKING_AID",
    sid: process.env.NEXT_PUBLIC_BOOKING_SID ?? "",
  },
  kiwi: {
    affilid: process.env.NEXT_PUBLIC_KIWI_AFFILID ?? "YOUR_KIWI_AFFILID",
  },
};

// ─── Link builders ────────────────────────────────────────────────────────────

export function skyscannerFlightUrl(
  from: string,   // IATA code, lowercase, e.g. "otp"
  to: string,     // IATA code, lowercase, e.g. "miko"
  checkin: string, // "YYMMDD"
  checkout: string,
  sharedId = "default",
): string {
  const searchUrl = `https://www.skyscanner.ro/transport/zboruri/${from}/${to}/${checkin}/${checkout}/?adultsv2=1&cabinclass=economy`;
  return buildSkyscannerAffiliate(searchUrl, sharedId);
}

export function skyscannerHotelUrl(
  hotelPath: string, // e.g. "/hotels/grecia/polygyros-hotels/asteris-village/ht-47150294"
  sharedId = "default",
): string {
  const searchUrl = `https://www.skyscanner.ro${hotelPath}`;
  return buildSkyscannerAffiliate(searchUrl, sharedId);
}

function buildSkyscannerAffiliate(targetUrl: string, sharedId: string): string {
  const { publisherId, adId, subId, assocId } = AFFILIATE.skyscanner;
  const u = encodeURIComponent(targetUrl);
  return `https://skyscanner.pxf.io/c/${publisherId}/${adId}/${subId}?sharedid=${sharedId}&associadeid=${assocId}&u=${u}`;
}

export function momondoFlightUrl(
  route: string,    // e.g. "BUH-ALC"
  checkin: string,  // "YYYY-MM-DD"
  checkout: string,
  adults = 2,
): string {
  return `https://www.momondo.ro/flight-search/${route}/${checkin}/${checkout}/${adults}adults?sort=bestflight_a`;
}

export function bookingSearchUrl(
  query: string,
  checkin: string,  // "YYYY-MM-DD"
  checkout: string,
  adults = 2,
): string {
  const { aid, sid } = AFFILIATE.booking;
  const ss = encodeURIComponent(query);
  let url = `https://www.booking.com/searchresults.ro.html?ss=${ss}&checkin=${checkin}&checkout=${checkout}&group_adults=${adults}&no_rooms=1&aid=${aid}`;
  if (sid) url += `&sid=${sid}`;
  return url;
}

export function kiwiUrl(
  origin: string,      // IATA, e.g. "OTP"
  destination: string, // IATA, e.g. "MRU"
  departure: string,   // "YYYY-MM-DD"
  returnDate: string,
): string {
  const { affilid } = AFFILIATE.kiwi;
  return (
    `https://www.kiwi.com/deep?affilid=${affilid}&currency=EUR` +
    `&departure=${departure}_${departure}&destination=${destination}` +
    `&lang=ro&origin=${origin}&return=${returnDate}_${returnDate}` +
    `&selectedAirlinesExclude=false&stopNumber=1&transport=aircraft`
  );
}
