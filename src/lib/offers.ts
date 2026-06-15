import {
  skyscannerFlightUrl,
  skyscannerHotelUrl,
  momondoFlightUrl,
  bookingSearchUrl,
  kiwiUrl,
} from "./config";

export type OfferType = "plajă" | "city-break" | "natură" | "exotic";

export interface HotelOption {
  name: string;
  pricePerPerson: number;
  link: string;
  platform: "booking" | "skyscanner-hotels";
}

export interface DateOption {
  label: string;
  checkin: string;
  checkout: string;
  flightPricePerPerson: number;
  flightLink: string;
  flightPlatform: "skyscanner" | "momondo" | "kiwi";
  hotels: HotelOption[];
  totalFrom: number;
}

export interface Offer {
  slug: string;
  title: string;
  destination: string;
  country: string;
  type: OfferType[];
  priceFrom: number;
  duration: number;
  durationLabel: string;
  fromCity: string;
  description: string;
  longDescription: string;
  dates: DateOption[];
  image: string;
  badge?: string;
  isFlightOnly?: boolean;
}

// ─── Offers data ─────────────────────────────────────────────────────────────

export const OFFERS: Offer[] = [
  {
    slug: "alicante",
    title: "Vacanță ieftină Alicante – 288€ zbor + cazare 7 zile",
    destination: "Alicante",
    country: "Spania",
    type: ["plajă"],
    priceFrom: 288,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    badge: "POPULAR",
    image: "https://picsum.photos/seed/alicante-spain/800/500",
    description:
      "Descoperă Costa Blanca cu plaje aurii, apă turcoaz și o gastronomie spaniolă de neuitat — totul de la 288€ per persoană.",
    longDescription: `Alicante este perla Coastei Albe a Spaniei. Cu peste 300 de zile însorite pe an, plaje întinse de nisip fin și un centru vechi vibrant dominat de Castelul Santa Bárbara, orașul te cucerește imediat.

Pachetul include zbor dus-întors din București și cazare la hotel ales de tine (cameră dublă, prețul este per persoană).

**Ce poți face în Alicante:**
- Vizitează Castelul Santa Bárbara cu vedere panoramică la mare
- Explorează strada El Postiguet, plaja orașului
- Plimbare pe Explanada de España, faleza emblematică
- Excursie la Santa Pola sau Tabarca (insulă protejată)

**Important:** Aceasta este o ofertă de vacanță pe cont propriu. Prețurile afișate sunt valabile la momentul postării; la verificare ulterioară, prețul și disponibilitatea pot diferi.`,
    dates: [
      {
        label: "1 feb – 8 feb 2024",
        checkin: "2024-02-01",
        checkout: "2024-02-08",
        flightPricePerPerson: 58,
        flightLink: momondoFlightUrl("BUH-ALC", "2024-02-01", "2024-02-08"),
        flightPlatform: "momondo",
        hotels: [
          {
            name: "Big Room Happy Alicante",
            pricePerPerson: 119,
            link: bookingSearchUrl("Big Room Happy Alicante", "2024-02-01", "2024-02-08"),
            platform: "booking",
          },
          {
            name: "Casa Brava Alicante",
            pricePerPerson: 133,
            link: bookingSearchUrl("Casa Brava Alicante", "2024-02-01", "2024-02-08"),
            platform: "booking",
          },
          {
            name: "El Patio Hostal",
            pricePerPerson: 147,
            link: bookingSearchUrl("El Patio Hostal Alicante", "2024-02-01", "2024-02-08"),
            platform: "booking",
          },
        ],
        totalFrom: 177,
      },
      {
        label: "8 feb – 15 feb 2024",
        checkin: "2024-02-08",
        checkout: "2024-02-15",
        flightPricePerPerson: 62,
        flightLink: momondoFlightUrl("BUH-ALC", "2024-02-08", "2024-02-15"),
        flightPlatform: "momondo",
        hotels: [
          {
            name: "Big Room Happy Alicante",
            pricePerPerson: 119,
            link: bookingSearchUrl("Big Room Happy Alicante", "2024-02-08", "2024-02-15"),
            platform: "booking",
          },
          {
            name: "Casa Brava Alicante",
            pricePerPerson: 133,
            link: bookingSearchUrl("Casa Brava Alicante", "2024-02-08", "2024-02-15"),
            platform: "booking",
          },
        ],
        totalFrom: 181,
      },
    ],
  },
  {
    slug: "mykonos",
    title: "Vacanță în Mykonos – 198€ zbor și cazare 4 zile",
    destination: "Mykonos",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 198,
    duration: 4,
    durationLabel: "4 zile / 3 nopți",
    fromCity: "București",
    badge: "NOU",
    image: "https://picsum.photos/seed/mykonos-greece/800/500",
    description:
      "Mykonos — insulă albastră și albă, plaje de vis, petreceri legendare. Zbor direct și cazare de la 198€.",
    longDescription: `Mykonos este una dintre cele mai renumite insule grecești, celebră pentru arhitectura cicladică albă și albastră, morile de vânt iconice și viața de noapte vibrantă.

Pachetul include zbor dus-întors din București și cazare într-un hotel ales de tine.

**Ce poți face în Mykonos:**
- Vizitează Chora, capitala cu alei înguste și case albe
- Plaje de renume: Paradise Beach, Super Paradise, Elia
- Morile de vânt Kato Myli — fotografia perfectă la apus
- Little Venice — cafenele și taverne la malul mării

**Important:** Prețurile sunt valabile la momentul publicării.`,
    dates: [
      {
        label: "27 iun – 4 iul 2024",
        checkin: "2024-06-27",
        checkout: "2024-07-04",
        flightPricePerPerson: 97,
        flightLink: skyscannerFlightUrl("buch", "miko", "240627", "240704", "Mykonos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Mykonos Town Hotel",
            pricePerPerson: 101,
            link: bookingSearchUrl("Mykonos Town Hotel", "2024-06-27", "2024-07-04"),
            platform: "booking",
          },
          {
            name: "Studios Mykonos",
            pricePerPerson: 115,
            link: bookingSearchUrl("Studios Mykonos center", "2024-06-27", "2024-07-04"),
            platform: "booking",
          },
        ],
        totalFrom: 198,
      },
      {
        label: "7 iul – 11 iul 2024",
        checkin: "2024-07-07",
        checkout: "2024-07-11",
        flightPricePerPerson: 85,
        flightLink: skyscannerFlightUrl("buch", "miko", "240707", "240711", "Mykonos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Mykonos Town Hotel",
            pricePerPerson: 98,
            link: bookingSearchUrl("Mykonos Town Hotel", "2024-07-07", "2024-07-11"),
            platform: "booking",
          },
        ],
        totalFrom: 183,
      },
      {
        label: "18 iul – 25 iul 2024",
        checkin: "2024-07-18",
        checkout: "2024-07-25",
        flightPricePerPerson: 87,
        flightLink: skyscannerFlightUrl("buch", "miko", "240718", "240725", "Mykonos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Mykonos Town Hotel",
            pricePerPerson: 111,
            link: bookingSearchUrl("Mykonos Town Hotel", "2024-07-18", "2024-07-25"),
            platform: "booking",
          },
        ],
        totalFrom: 198,
      },
    ],
  },
  {
    slug: "maroc",
    title: "Zboruri ieftine Maroc de la 69€ dus-întors",
    destination: "Marrakech",
    country: "Maroc",
    type: ["exotic", "natură"],
    priceFrom: 69,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București / Cluj / Iași",
    image: "https://picsum.photos/seed/morocco-marrakech/800/500",
    description:
      "Marrakech — medina labirintică, suquri colorate, riad-uri de poveste. Zboruri de la 69€, pachete complete de la 198€.",
    longDescription: `Marrakech te cucerește de la primul pas în Jemaa el-Fna, piața centrală unde jonglerii, muzicianții și povestitorii se întâlnesc la apus.

Pachetul include zbor dus-întors și cazare în riad-uri sau hoteluri moderne, la alegere.

**Ce poți face în Marrakech:**
- Piața Jemaa el-Fna — spectacolul etern al orașului
- Grădinile Majorelle — oaza albastră a lui Yves Saint Laurent
- Palatul Bahia și ruinele El Badi
- Suqurile din medina — mirodenii, textile, artizanat
- Excursie în Munții Atlas sau deșertul Agafay

**Plecare și din:** Cluj-Napoca (CLJ) și Iași (IAS).`,
    dates: [
      {
        label: "21 feb – 28 feb 2024",
        checkin: "2024-02-21",
        checkout: "2024-02-28",
        flightPricePerPerson: 97,
        flightLink: skyscannerFlightUrl("otp", "rak", "240221", "240228", "Maroc"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Chill Out House",
            pricePerPerson: 101,
            link: bookingSearchUrl("Chill Out House Marrakech", "2024-02-21", "2024-02-28"),
            platform: "booking",
          },
          {
            name: "Be Nomad",
            pricePerPerson: 112,
            link: bookingSearchUrl("Be Nomad Marrakech", "2024-02-21", "2024-02-28"),
            platform: "booking",
          },
          {
            name: "Riad Medina",
            pricePerPerson: 121,
            link: bookingSearchUrl("Riad Medina Marrakech", "2024-02-21", "2024-02-28"),
            platform: "booking",
          },
        ],
        totalFrom: 198,
      },
    ],
    isFlightOnly: false,
  },
  {
    slug: "antalya",
    title: "Vacanță în Antalya – 237€ zbor și cazare 7 zile",
    destination: "Antalya",
    country: "Turcia",
    type: ["plajă"],
    priceFrom: 152,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/antalya-turkey/800/500",
    description:
      "Antalya, perla Rivierei Turcești — plaje aurii, istorie bogată și atmosferă mediteraneană. De la 152€ per persoană.",
    longDescription: `Antalya combină plajele de vis ale Mării Mediterane cu vestigii istorice remarcabile și o gastronomie turcească autentică.

Pachetul include zbor dus-întors din București și cazare la hotel ales de tine (prețul este per persoană).

**Ce poți face în Antalya:**
- Plajele Konyaaltı și Lara — kilometri de nisip fin
- Kaleiçi — centrul vechi otoman cu ziduri romane
- Cascadele Düden — chiar la marginea mării
- Ruinele Perge, Aspendos și Side
- Excursie la Pamukkale (terrase albe) sau Cappadocia

**Notă:** Wizz Air oferă bilete la 58€/pers cu cardul Discount Club în loc de 74€.`,
    dates: [
      {
        label: "11 apr – 18 apr 2024",
        checkin: "2024-04-11",
        checkout: "2024-04-18",
        flightPricePerPerson: 74,
        flightLink: momondoFlightUrl("BUH-AYT", "2024-04-11", "2024-04-18"),
        flightPlatform: "momondo",
        hotels: [
          {
            name: "Antalya Old Town",
            pricePerPerson: 78,
            link: bookingSearchUrl("Antalya Old Town Hotel Kaleiçi", "2024-04-11", "2024-04-18"),
            platform: "booking",
          },
          {
            name: "Faraçlar Hotel",
            pricePerPerson: 80,
            link: bookingSearchUrl("Faraclar Hotel Antalya", "2024-04-11", "2024-04-18"),
            platform: "booking",
          },
          {
            name: "Antalya Lifehotel",
            pricePerPerson: 92,
            link: bookingSearchUrl("Antalya Lifehotel", "2024-04-11", "2024-04-18"),
            platform: "booking",
          },
        ],
        totalFrom: 152,
      },
      {
        label: "4 apr – 11 apr 2024",
        checkin: "2024-04-04",
        checkout: "2024-04-11",
        flightPricePerPerson: 74,
        flightLink: momondoFlightUrl("BUH-AYT", "2024-04-04", "2024-04-11"),
        flightPlatform: "momondo",
        hotels: [
          {
            name: "Antalya Old Town",
            pricePerPerson: 78,
            link: bookingSearchUrl("Antalya Old Town Hotel Kaleiçi", "2024-04-04", "2024-04-11"),
            platform: "booking",
          },
          {
            name: "Faraçlar Hotel",
            pricePerPerson: 80,
            link: bookingSearchUrl("Faraclar Hotel Antalya", "2024-04-04", "2024-04-11"),
            platform: "booking",
          },
        ],
        totalFrom: 152,
      },
      {
        label: "7 mai – 14 mai 2024",
        checkin: "2024-05-07",
        checkout: "2024-05-14",
        flightPricePerPerson: 68,
        flightLink: momondoFlightUrl("BUH-AYT", "2024-05-07", "2024-05-14"),
        flightPlatform: "momondo",
        hotels: [
          {
            name: "Antalya Old Town",
            pricePerPerson: 82,
            link: bookingSearchUrl("Antalya Old Town Hotel Kaleiçi", "2024-05-07", "2024-05-14"),
            platform: "booking",
          },
        ],
        totalFrom: 150,
      },
    ],
  },
  {
    slug: "rhodos",
    title: "Vacanță în Rhodos – 275€ zbor + cazare 7 zile",
    destination: "Rhodos",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 275,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    badge: "POPULAR",
    image: "https://picsum.photos/seed/rhodes-greece/800/500",
    description:
      "Rhodos — insula cavalerilor, cu plaje cristaline și centrul medieval UNESCO. Pachete de la 275€ per persoană.",
    longDescription: `Rhodos este cea mai mare insulă a Dodecanezului și una dintre cele mai populare destinații grecești — pentru motive întemeiate.

Centrul medieval al orașului Rhodos este inclus în patrimoniul UNESCO, iar plajele de la Lindos, Faliraki sau Prasonisi sunt de vis.

**Ce poți face în Rhodos:**
- Centrul medieval și Palatul Marelui Maestru
- Plajele Anthony Quinn Bay și Tsambika
- Acropola Lindos cu vedere la mare
- Plimbări în satul medieval Lindos
- Excursii cu barca la insule mici din jur

**Cazare disponibilă (cameră dublă, preț per persoană):**`,
    dates: [
      {
        label: "11 iun – 18 iun 2024",
        checkin: "2024-06-11",
        checkout: "2024-06-18",
        flightPricePerPerson: 163,
        flightLink: skyscannerFlightUrl("otp", "rho", "240611", "240618", "Rhodos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Merryland Studios",
            pricePerPerson: 112,
            link: skyscannerHotelUrl(
              "/hotels/grecia/kremasti-hotels/merryland-studios/ht-47150294",
              "Rhodos"
            ),
            platform: "skyscanner-hotels",
          },
          {
            name: "Vera Studios",
            pricePerPerson: 116,
            link: skyscannerHotelUrl(
              "/hotels/grecia/kalithea-hotels/vera-studios/ht-134653904",
              "Rhodos"
            ),
            platform: "skyscanner-hotels",
          },
          {
            name: "Tivoli Hotel",
            pricePerPerson: 142,
            link: skyscannerHotelUrl(
              "/hotels/grecia/kalithea-hotels/tivoli-hotel/ht-200802952",
              "Rhodos"
            ),
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 275,
      },
      {
        label: "22 iun – 29 iun 2024",
        checkin: "2024-06-22",
        checkout: "2024-06-29",
        flightPricePerPerson: 163,
        flightLink: skyscannerFlightUrl("otp", "rho", "240622", "240629", "Rhodos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Merryland Studios",
            pricePerPerson: 112,
            link: skyscannerHotelUrl("/hotels/grecia/kremasti-hotels/merryland-studios/ht-47150294", "Rhodos"),
            platform: "skyscanner-hotels",
          },
          {
            name: "Vera Studios",
            pricePerPerson: 116,
            link: skyscannerHotelUrl("/hotels/grecia/kalithea-hotels/vera-studios/ht-134653904", "Rhodos"),
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 275,
      },
    ],
  },
  {
    slug: "halkidiki",
    title: "Vacanță ieftină Halkidiki – 162€ zbor + cazare 7 zile",
    destination: "Halkidiki",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 162,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    badge: "SUPER DEAL",
    image: "https://picsum.photos/seed/halkidiki-greece/800/500",
    description:
      "Halkidiki — trei peninsule, ape cristaline, pini până la malul mării. Cel mai ieftin pachet la Grecia: de la 162€.",
    longDescription: `Halkidiki este considerată de mulți cea mai frumoasă zonă de coastă a Greciei — păduri de pini coborând direct în mare turcoaz, plaje liniștite și sate pescărești autentice.

Zbori din București la Salonic și de acolo Halkidiki este la 1 oră distanță.

**Ce poți face în Halkidiki:**
- Plajele Kassandrei: Kallithea, Sani, Nea Skioni
- Plajele Sitoniei: Kalogria, Toroni, Platanitsi
- Vizita la Muntele Athos (peninsula a treia, monahi ortodocși)
- Excursie la Salonic (2 ore) — Turnul Alb, Via Egnatia
- Plimbări cu barca spre golfuri izolate

**Cazare disponibilă (cameră dublă, prețul per persoană pentru 6 nopți):**`,
    dates: [
      {
        label: "18 mai – 25 mai 2024",
        checkin: "2024-05-18",
        checkout: "2024-05-25",
        flightPricePerPerson: 40,
        flightLink: skyscannerFlightUrl("otp", "skg", "240518", "240525", "Salonic"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Asteris Village",
            pricePerPerson: 122,
            link: skyscannerHotelUrl(
              "/hotels/grecia/polygyros-hotels/asteris-village/ht-47150294",
              "Salonic"
            ),
            platform: "skyscanner-hotels",
          },
          {
            name: "Summer Dream Hotel",
            pricePerPerson: 156,
            link: skyscannerHotelUrl(
              "/hotels/grecia/polikhronon-hotels/summer-dream-hotel/ht-134653904",
              "Salonic"
            ),
            platform: "skyscanner-hotels",
          },
          {
            name: "Happy Anchor Apartments",
            pricePerPerson: 163,
            link: skyscannerHotelUrl(
              "/hotels/grecia/kassandra-hotels/happy-anchor-apartments/ht-200802952",
              "Salonic"
            ),
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 162,
      },
    ],
  },
  {
    slug: "mauritius",
    title: "Vacanță Mauritius – 855€ zbor și cazare 9 zile",
    destination: "Mauritius",
    country: "Mauritius",
    type: ["exotic", "plajă"],
    priceFrom: 855,
    duration: 9,
    durationLabel: "9 zile / 8 nopți",
    fromCity: "București",
    badge: "EXOTIC",
    image: "https://picsum.photos/seed/mauritius-island/800/500",
    description:
      "Mauritius — paradis tropical în Oceanul Indian. Lagune turcoaz, recife de corali și luxuriantă vegetație. De la 855€.",
    longDescription: `Mauritius este unul dintre cele mai exclusiviste destinații tropicale din lume — și totuși accesibil dacă știi cum să rezervi.

Insula oferă plaje de vis, snorkeling în lagune protejate, păduri tropicale și o gastronomie unică, un mix de influențe africane, indiene și europene.

**Ce poți face în Mauritius:**
- Plajele La Gaulette, Le Morne și Flic en Flac
- Snorkeling și scufundări în Blue Bay Marine Park
- Parcul Național Black River Gorges — cascade și maimuțe
- Chamarel — culorile pămîntului și cascada
- Vizita Grand Bassin — lacul sacru Hindu

**Important:** Zbor cu escală (aproximativ 14 ore). Rezervă din timp pentru prețuri bune.`,
    dates: [
      {
        label: "5 mar – 13 mar 2024",
        checkin: "2024-03-05",
        checkout: "2024-03-13",
        flightPricePerPerson: 759,
        flightLink: kiwiUrl("OTP", "MRU", "2024-03-05", "2024-03-13"),
        flightPlatform: "kiwi",
        hotels: [
          {
            name: "Surf House La Gaulette",
            pricePerPerson: 96,
            link: bookingSearchUrl("Surf House La Gaulette Mauritius", "2024-03-05", "2024-03-13"),
            platform: "booking",
          },
          {
            name: "Tam Studio",
            pricePerPerson: 136,
            link: bookingSearchUrl("Tam Studio La Gaulette", "2024-03-05", "2024-03-13"),
            platform: "booking",
          },
          {
            name: "Twakila Sunset Suites",
            pricePerPerson: 190,
            link: bookingSearchUrl("Twakila Sunset Suites La Gaulette", "2024-03-05", "2024-03-13"),
            platform: "booking",
          },
        ],
        totalFrom: 855,
      },
    ],
  },
  {
    slug: "tbilisi",
    title: "Vacanță Tbilisi Georgia – 221€ zbor direct + cazare 7 zile",
    destination: "Tbilisi",
    country: "Georgia",
    type: ["city-break", "natură"],
    priceFrom: 221,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    badge: "NOU",
    image: "https://picsum.photos/seed/tbilisi-georgia/800/500",
    description:
      "Tbilisi — capitala Georgiei, o bijuterie nedescoperiță. Arhitectură balconată, vinuri legendare și Munții Caucaz la orizont. De la 221€.",
    longDescription: `Tbilisi este o destinație care îți fură inima — orașul vechi cu case de lemn sculptate, băi sulfuroase din antichitate și o scenă culinară și de artă în plină efervescență.

Georgia, una dintre cele mai vechi țări producătoare de vin, te va surprinde și cu prețuri foarte accesibile față de restul Europei.

**Ce poți face în Tbilisi:**
- Cartierul Abanotubani — băile sulfuroase istorice
- Fortăreața Narikala — panoramă spectaculoasă
- Carrefour Rustaveli — bulevard cu muzee și teatre
- Excursie la Kazbegi — Munții Caucaz și Biserica Gergeti
- Degustare de vin georgian în pivnițe tradiționale

**Cazare disponibilă (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "21 iul – 28 iul 2026",
        checkin: "2026-07-21",
        checkout: "2026-07-28",
        flightPricePerPerson: 164,
        flightLink: skyscannerFlightUrl("otp", "tbil", "260721", "260728", "Tbilisi"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Alex's Cosy Guesthouse",
            pricePerPerson: 57,
            link: bookingSearchUrl("Alex Cosy Guesthouse Tbilisi", "2026-07-21", "2026-07-28"),
            platform: "booking",
          },
          {
            name: "My Family Hotel",
            pricePerPerson: 84,
            link: bookingSearchUrl("My Family Hotel Tbilisi", "2026-07-21", "2026-07-28"),
            platform: "booking",
          },
          {
            name: "Hotel Amser",
            pricePerPerson: 99,
            link: bookingSearchUrl("Hotel Amser Tbilisi", "2026-07-21", "2026-07-28"),
            platform: "booking",
          },
        ],
        totalFrom: 221,
      },
      {
        label: "7 iul – 14 iul 2026",
        checkin: "2026-07-07",
        checkout: "2026-07-14",
        flightPricePerPerson: 164,
        flightLink: skyscannerFlightUrl("otp", "tbil", "260707", "260714", "Tbilisi"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Alex's Cosy Guesthouse",
            pricePerPerson: 57,
            link: bookingSearchUrl("Alex Cosy Guesthouse Tbilisi", "2026-07-07", "2026-07-14"),
            platform: "booking",
          },
          {
            name: "My Family Hotel",
            pricePerPerson: 84,
            link: bookingSearchUrl("My Family Hotel Tbilisi", "2026-07-07", "2026-07-14"),
            platform: "booking",
          },
        ],
        totalFrom: 221,
      },
    ],
  },
  {
    slug: "sardinia",
    title: "Vacanță Sardinia – 187€ zbor + cazare 4 zile",
    destination: "Sardinia (Alghero)",
    country: "Italia",
    type: ["plajă"],
    priceFrom: 187,
    duration: 4,
    durationLabel: "4 zile / 3 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/sardinia-alghero/800/500",
    description:
      "Sardinia — plaje cu nisip fin alb și apă turcoaz, faleze spectaculoase și bucătărie sardă autentică. De la 187€.",
    longDescription: `Sardinia este considerată una dintre cele mai frumoase insule din Mediterana — o destinație care combină plaje de vis cu o cultură nuragică unică și gastronomie rafinată.

Zbori în Alghero, un orășel medieval catalan pe coasta de nord-vest a insulei.

**Ce poți face în Sardinia:**
- Plajele Alghero: Spiaggia del Lazzaretto, Maria Pia
- Stalactitele din Grotta di Nettuno (accesibile cu barca)
- Centrul vechi al Algherò — ziduri medievale și arc catalan
- Plaja La Pelosa — albă ca zăpada, apă cristalină
- Nuraghe Palmavera — vestigii preistorice

**Cazare disponibilă (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "16 apr – 20 apr 2024",
        checkin: "2024-04-16",
        checkout: "2024-04-20",
        flightPricePerPerson: 98,
        flightLink: kiwiUrl("OTP", "AHO", "2024-04-16", "2024-04-20"),
        flightPlatform: "kiwi",
        hotels: [
          {
            name: "B&B La Terrazza",
            pricePerPerson: 89,
            link: bookingSearchUrl("B&B La Terrazza Alghero Sardinia", "2024-04-16", "2024-04-20"),
            platform: "booking",
          },
          {
            name: "White Star Bedrooms",
            pricePerPerson: 96,
            link: bookingSearchUrl("White Star bedrooms self check-in Alghero", "2024-04-16", "2024-04-20"),
            platform: "booking",
          },
          {
            name: "White Coral Bedrooms",
            pricePerPerson: 100,
            link: bookingSearchUrl("white coral bedrooms self check-in Alghero", "2024-04-16", "2024-04-20"),
            platform: "booking",
          },
        ],
        totalFrom: 187,
      },
    ],
  },

  // ─── New offers ────────────────────────────────────────────────────────────

  {
    slug: "palermo",
    title: "Vacanță Palermo – 221€ zbor + cazare + mic dejun 6 zile",
    destination: "Palermo",
    country: "Italia (Sicilia)",
    type: ["plajă", "city-break"],
    priceFrom: 221,
    duration: 6,
    durationLabel: "6 zile / 5 nopți",
    fromCity: "București",
    badge: "NOU",
    image: "https://picsum.photos/seed/palermo-sicily/800/500",
    description:
      "Palermo — capitala Siciliei, cu piețe vibrant colorate, arhitectură arabă-normandă și mare cristalină. Pachet zbor + cazare cu mic dejun de la 221€.",
    longDescription: `Prea puțini știu locul ăsta superb din ITALIA! Palermo, capitala Siciliei, te cucerește cu un mix unic de culturi: arabă, normandă, greacă și italiană.

Pachetul include zbor dus-întors din București și cazare cu mic dejun inclus (cameră dublă, prețul per persoană).

**Ce poți face în Palermo:**
- Piața Ballarò — cea mai veche piață a orașului, plină de culori și mirosuri
- Catedrala Palermo și Palatul Normanzilor cu mozaicuri bizantine
- Capella Palatina — capelă regală din sec. XII
- Excursie la Mondello — plaja cu nisip alb la 11 km
- Excursie la Cefalù — orășel medieval pe malul mării

**Cazare cu mic dejun inclus (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "16 sep – 22 sep 2026",
        checkin: "2026-09-16",
        checkout: "2026-09-22",
        flightPricePerPerson: 78,
        flightLink: skyscannerFlightUrl("buch", "pmo", "260916", "260922", "Palermo"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "A Casa di Giulia",
            pricePerPerson: 143,
            link: bookingSearchUrl("A Casa di Giulia Palermo", "2026-09-16", "2026-09-22"),
            platform: "booking",
          },
          {
            name: "Antadila",
            pricePerPerson: 178,
            link: bookingSearchUrl("Antadila Palermo", "2026-09-16", "2026-09-22"),
            platform: "booking",
          },
          {
            name: "Galka Rooms",
            pricePerPerson: 183,
            link: bookingSearchUrl("Galka Rooms Palermo", "2026-09-16", "2026-09-22"),
            platform: "booking",
          },
        ],
        totalFrom: 221,
      },
      {
        label: "29 iul – 5 aug 2026",
        checkin: "2026-07-29",
        checkout: "2026-08-05",
        flightPricePerPerson: 84,
        flightLink: skyscannerFlightUrl("buch", "pmo", "260729", "260805", "Palermo"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "A Casa di Giulia",
            pricePerPerson: 143,
            link: bookingSearchUrl("A Casa di Giulia Palermo", "2026-07-29", "2026-08-05"),
            platform: "booking",
          },
          {
            name: "Antadila",
            pricePerPerson: 178,
            link: bookingSearchUrl("Antadila Palermo", "2026-07-29", "2026-08-05"),
            platform: "booking",
          },
        ],
        totalFrom: 227,
      },
      {
        label: "9 sep – 15 sep 2026",
        checkin: "2026-09-09",
        checkout: "2026-09-15",
        flightPricePerPerson: 78,
        flightLink: skyscannerFlightUrl("buch", "pmo", "260909", "260915", "Palermo"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "A Casa di Giulia",
            pricePerPerson: 143,
            link: bookingSearchUrl("A Casa di Giulia Palermo", "2026-09-09", "2026-09-15"),
            platform: "booking",
          },
        ],
        totalFrom: 221,
      },
    ],
  },

  {
    slug: "cracovia",
    title: "Vacanță ieftină Cracovia – 57€ zbor + cazare 2 zile",
    destination: "Cracovia",
    country: "Polonia",
    type: ["city-break"],
    priceFrom: 57,
    duration: 2,
    durationLabel: "2 zile / 1 noapte",
    fromCity: "București",
    badge: "SUPER DEAL",
    image: "https://picsum.photos/seed/krakow-poland/800/500",
    description:
      "Cracovia — cel mai frumos oraș medieval din Polonia. Castelul Wawel, cartierul evreiesc Kazimierz și viața de noapte vibrantă — totul de la 57€.",
    longDescription: `Cracovia este fosta capitală regală a Poloniei și unul dintre cele mai bine conservate centre istorice din Europa Centrală.

Un city-break de 2 zile îți permite să explorezi highlights-urile orașului la un preț incredibil.

**Ce poți face în Cracovia:**
- Piața Centrală (Rynek Główny) cu Basilica St. Mary și Sukiennice
- Castelul Wawel — reședința regilor polonezi
- Cartierul Kazimierz — fostul district evreiesc, acum centru cultural vibrant
- Strada Floriańska — cea mai animată arteră a orașului
- Excursie la Minele de Sare Wieliczka (UNESCO, la 14 km)

**Cazare (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "7 iul – 8 iul 2026",
        checkin: "2026-07-07",
        checkout: "2026-07-08",
        flightPricePerPerson: 36,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Cracovia&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fkrk%2F260707%2F260708%2F",
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Apartamenty Nila",
            pricePerPerson: 21,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Cracovia&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fkrakow-hotels%2Fapartamenty-nila%2Fht-212922886",
            platform: "skyscanner-hotels",
          },
          {
            name: "Krakow Apartments & Rooms",
            pricePerPerson: 25,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Cracovia&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fkrakow-hotels%2Fkrakow-apartments-%2526-rooms%2Fht-218761472",
            platform: "skyscanner-hotels",
          },
          {
            name: "NextDoor Apartments",
            pricePerPerson: 26,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Cracovia&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fkrakow-hotels%2Fnextdoor-apartments%2Fht-219809791",
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 57,
      },
      {
        label: "28 iul – 29 iul 2026",
        checkin: "2026-07-28",
        checkout: "2026-07-29",
        flightPricePerPerson: 38,
        flightLink: skyscannerFlightUrl("buch", "krk", "260728", "260729", "Cracovia"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Apartamenty Nila",
            pricePerPerson: 21,
            link: bookingSearchUrl("Apartamenty Nila Krakow", "2026-07-28", "2026-07-29"),
            platform: "booking",
          },
        ],
        totalFrom: 59,
      },
    ],
  },

  {
    slug: "umbria",
    title: "Weekend Umbria Italia – 155€ zbor + cazare + mic dejun 3 zile",
    destination: "Umbria (Perugia)",
    country: "Italia",
    type: ["natură", "city-break"],
    priceFrom: 155,
    duration: 3,
    durationLabel: "3 zile / 2 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/umbria-perugia-italy/800/500",
    description:
      "Umbria — inima verde a Italiei. Perugia medievală, văi cu măslini și ciocolata celebră Perugina. Pachet zbor + cazare cu mic dejun de la 155€.",
    longDescription: `Umbria este una dintre puținele regiuni italiene fără ieșire la mare, dar compensează cu prisos: dealuri acoperite de măslini și vii, orașe medievale bine conservate și o bucătărie rustică de excepție.

Zbori direct din București la Perugia și ești în inima Umbriei.

**Ce poți face în Umbria:**
- Perugia — centrul medieval cu Fontana Maggiore și Palazzo dei Priori
- Assisi — orașul Sf. Francisc, patrimoniu UNESCO
- Spello și Montefalco — sate pictorești cu fresce renascentiste
- Cascata delle Marmore — una dintre cele mai înalte cascade din Europa
- Degustare de trufă neagră și Sagrantino (vin local)

**Cazare cu mic dejun (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "18 iun – 21 iun 2026",
        checkin: "2026-06-18",
        checkout: "2026-06-21",
        flightPricePerPerson: 58,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Perugia&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fpeg%2F260618%2F260621%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy",
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Camera Palazzoni",
            pricePerPerson: 97,
            link: bookingSearchUrl("Camera Palazzoni Perugia", "2026-06-18", "2026-06-21"),
            platform: "booking",
          },
          {
            name: "Iglo Hotel",
            pricePerPerson: 97,
            link: bookingSearchUrl("Iglo Hotel Perugia", "2026-06-18", "2026-06-21"),
            platform: "booking",
          },
          {
            name: "C'Era Una Volta B&B",
            pricePerPerson: 129,
            link: bookingSearchUrl("C'Era Una Volta B&B Perugia", "2026-06-18", "2026-06-21"),
            platform: "booking",
          },
        ],
        totalFrom: 155,
      },
      {
        label: "2 iul – 5 iul 2026",
        checkin: "2026-07-02",
        checkout: "2026-07-05",
        flightPricePerPerson: 62,
        flightLink: skyscannerFlightUrl("buch", "peg", "260702", "260705", "Perugia"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Camera Palazzoni",
            pricePerPerson: 97,
            link: bookingSearchUrl("Camera Palazzoni Perugia", "2026-07-02", "2026-07-05"),
            platform: "booking",
          },
          {
            name: "C'Era Una Volta B&B",
            pricePerPerson: 129,
            link: bookingSearchUrl("C'Era Una Volta B&B Perugia", "2026-07-02", "2026-07-05"),
            platform: "booking",
          },
        ],
        totalFrom: 159,
      },
    ],
  },

  {
    slug: "zakynthos",
    title: "Vacanță Zakynthos – 253€ zbor și cazare 7 zile",
    destination: "Zakynthos",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 253,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/zakynthos-greece/800/500",
    description:
      "Zakynthos — insula broaștelor țestoase, cu Navagio Beach (epava) și ape turcoaz de vis. Pachet de la 253€ per persoană.",
    longDescription: `Zakynthos (sau Zante) este una dintre cele mai spectaculoase insule grecești — celebră pentru Navagio Beach, plaja cu epavă înconjurată de stânci albe, vizibilă doar cu barca.

**Ce poți face în Zakynthos:**
- Navagio Beach (Shipwreck Beach) — plaja cu epavă, cea mai fotografiată din Grecia
- Grota Albastră (Blue Caves) — excursie cu barca prin caverne cu apă albastru intens
- Laganas Beach și Turtle Island — observarea broaștelor țestoase Caretta-caretta
- Zakynthos Town — port venetian cu arhitectură elegantă
- Alykes și Alykanas — plaje liniștite pentru familii

**Din:** București direct, sau cu escală scurtă.`,
    dates: [
      {
        label: "8 sep – 15 sep 2026",
        checkin: "2026-09-08",
        checkout: "2026-09-15",
        flightPricePerPerson: 141,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Zakynthos&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fotp%2Fzth%2F260908%2F260915%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy%26preferdirects%3Dtrue",
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Dionysos Studios",
            pricePerPerson: 112,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Zakynthos&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fgreece%2Flaganas-hotels%2Fdionysos-studios%2Fht-129243248%3Fadults%3D2%26checkin%3D2026-09-08%26checkout%3D2026-09-15",
            platform: "skyscanner-hotels",
          },
          {
            name: "Julias Apartments",
            pricePerPerson: 163,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Zakynthos&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fgreece%2Flaganas-hotels%2Fjulias-apartments%2Fht-212447571%3Fadults%3D2%26checkin%3D2026-09-08%26checkout%3D2026-09-15",
            platform: "skyscanner-hotels",
          },
          {
            name: "Panos Apartments",
            pricePerPerson: 211,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Zakynthos&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fgreece%2Flaganas-hotels%2Fpanos-apartments%2Fht-216197982%3Fadults%3D2%26checkin%3D2026-09-08%26checkout%3D2026-09-15",
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 253,
      },
    ],
  },

  {
    slug: "benidorm",
    title: "Vacanță ieftină Benidorm – 283€ zbor + cazare 7 zile",
    destination: "Benidorm",
    country: "Spania",
    type: ["plajă"],
    priceFrom: 283,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/benidorm-spain/800/500",
    description:
      "Benidorm — stațiunea cu cele mai înalte zgârie-nori din Europa la malul mării. Plaje imense, viață de noapte și soare garantat. De la 283€.",
    longDescription: `Benidorm este una dintre cele mai populare destinații balneare din Spania — o stațiune cu plaje interminabile, ape calde și o atmosferă de vacanță permanentă.

Zbori din București la Alicante și ești la Benidorm în 45 de minute.

**Ce poți face în Benidorm:**
- Playa de Levante și Playa de Poniente — două plaje uriașe cu nisip fin
- Terra Mítica și Terra Natura — parcuri tematice și de animale
- Centrul vechi cu restaurante de pește proaspăt
- Excursie la Guadalest — sat medieval suspendat pe stânci
- Excursie la Altea — sat de artiști cu case albe

**Cazare (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "8 oct – 15 oct 2026",
        checkin: "2026-10-08",
        checkout: "2026-10-15",
        flightPricePerPerson: 90,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Alicante&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Falic%2F261008%2F261015%2F",
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Apartamento Viena VI",
            pricePerPerson: 193,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Alicante&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fspain%2Fbenidorm-hotels%2Fapartamento-viena-vi%2Fht-216278708",
            platform: "skyscanner-hotels",
          },
          {
            name: "Irati",
            pricePerPerson: 224,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Alicante&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fspain%2Fbenidorm-hotels%2Firati%2Fht-47148139",
            platform: "skyscanner-hotels",
          },
          {
            name: "San Francisco",
            pricePerPerson: 229,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Alicante&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fspain%2Fbenidorm-hotels%2Fsan-francisco-fincas-arena%2Fht-145087228",
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 283,
      },
    ],
  },

  {
    slug: "milano",
    title: "Vacanță ieftină Milano – 59€ zbor dus-întors 1 zi",
    destination: "Milano",
    country: "Italia",
    type: ["city-break"],
    priceFrom: 57,
    duration: 1,
    durationLabel: "1 zi (aceeași zi)",
    fromCity: "București",
    badge: "SUPER DEAL",
    isFlightOnly: true,
    image: "https://picsum.photos/seed/milan-italy/800/500",
    description:
      "Milano dus-întors în aceeași zi de la 57€! Peste 14 ore în capitala modei: Duomo, Navigli, La Scala și shopping de lux.",
    longDescription: `Milano, capitala mondială a modei și designului, poate fi explorată într-o zi intensă cu un zbor de dimineață și întoarcere seara.

Pleci dimineața devreme din București și ai la dispoziție peste 14 ore în cel mai cosmopolit oraș al Italiei.

**Ce poți face în Milano în o zi:**
- Catedrala Duomo și terasa cu vedere panoramică
- Galleria Vittorio Emanuele II — galeria comercială din 1877
- Cartierul Navigli — canale și café-uri artsy
- Pinacoteca di Brera sau Pinacoteca Ambrosiana
- Castello Sforzesco
- Via Montenapoleone — vitrineul luxului mondial

**Important:** Această ofertă include DOAR zborul, fără cazare (excursie de o zi).`,
    dates: [
      {
        label: "30 iun 2026 (aceeași zi)",
        checkin: "2026-06-30",
        checkout: "2026-06-30",
        flightPricePerPerson: 59,
        flightLink: skyscannerFlightUrl("buch", "mila", "260630", "260630", "Milano"),
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 59,
      },
      {
        label: "13 iul 2026 (aceeași zi)",
        checkin: "2026-07-13",
        checkout: "2026-07-13",
        flightPricePerPerson: 57,
        flightLink: skyscannerFlightUrl("buch", "mila", "260713", "260713", "Milano"),
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 57,
      },
      {
        label: "13 aug 2026 (aceeași zi)",
        checkin: "2026-08-13",
        checkout: "2026-08-13",
        flightPricePerPerson: 61,
        flightLink: skyscannerFlightUrl("buch", "mila", "260813", "260813", "Milano"),
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 61,
      },
    ],
  },

  {
    slug: "gdansk",
    title: "Vacanță ieftină Gdansk – 132€ zbor + cazare 4 zile",
    destination: "Gdansk",
    country: "Polonia",
    type: ["city-break"],
    priceFrom: 132,
    duration: 4,
    durationLabel: "4 zile / 3 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/gdansk-poland/800/500",
    description:
      "Gdansk — portul hanseatic cu case colorate, ambarcațiuni și bere Tyskie la malul apei. City-break de la 132€ zbor + cazare.",
    longDescription: `Gdansk este unul dintre cele mai frumoase orașe din Polonia — un port medieval pe Marea Baltică cu case hanseatic colorate, ambarcațiuni și o scenă culturală efervescentă.

Orașul este și locul unde în 1980 s-a născut mișcarea Solidarność, care a schimbat istoria Europei.

**Ce poți face în Gdansk:**
- Strada Długa (Ulița Lungă) — promenada principală cu case din sec. XVII
- Muzeul celei de-a Doua Războaie Mondiale
- Bazilica Sf. Maria — una dintre cele mai mari biserici de cărămidă din lume
- Portul Gdansk și Gru Medievale
- Sopot — stațiunea balneară la 15 min, cu faleza cea mai lungă din Europa

**Cazare (cameră dublă, prețul per persoană, 3 nopți):**`,
    dates: [
      {
        label: "28 iun – 1 iul 2026",
        checkin: "2026-06-28",
        checkout: "2026-07-01",
        flightPricePerPerson: 56,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Gdansk&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fgdn%2F260628%2F260701%2F",
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "MS Apartment Sky Tower",
            pricePerPerson: 76,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Gdansk&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fgdansk-hotels%2Fms-apartments-sky-tower-x%2Fht-200659249%3Fadults%3D2%26checkin%3D2026-06-28%26checkout%3D2026-07-01",
            platform: "skyscanner-hotels",
          },
          {
            name: "Agis Pokoje Goscinne",
            pricePerPerson: 88,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Gdansk&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fgdansk-hotels%2Fagis-pokoje-goscinne%2Fht-154615050%3Fadults%3D2%26checkin%3D2026-06-28%26checkout%3D2026-07-01",
            platform: "skyscanner-hotels",
          },
          {
            name: "AbWentur Pokoje",
            pricePerPerson: 93,
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Gdansk&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Fhotels%2Fpoland%2Fgdansk-hotels%2Fabwentur-pokoje%2Fht-47144584%3Fadults%3D2%26checkin%3D2026-06-28%26checkout%3D2026-07-01",
            platform: "skyscanner-hotels",
          },
        ],
        totalFrom: 132,
      },
    ],
  },

  {
    slug: "skiathos",
    title: "Vacanță în Skiathos – 176€ zbor și cazare 7 zile",
    destination: "Skiathos",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 176,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    badge: "POPULAR",
    image: "https://picsum.photos/seed/skiathos-greece/800/500",
    description:
      "Skiathos — insulița cu cele mai frumoase plaje din Sporade. Koukounaries, Banana Beach și o pădure de pini până la mare. De la 176€.",
    longDescription: `Skiathos este o insulă mică din arhipelagul Sporadelor dar cu o concentrație remarcabilă de plaje superbe — peste 60 la număr.

Insula este renumită pentru Koukounaries, considerată una dintre cele mai frumoase plaje din Europa, cu nisip alb și pini coborând până la apă.

**Ce poți face în Skiathos:**
- Koukounaries — plaja de top a insulei, nisip fin și pini
- Banana Beach și Krassa Beach — plaje animate cu jet ski și sporturi nautice
- Skiathos Town — orășel port pitoresc cu taverne și cafenele
- Excursie cu barca la insula Tsougria
- Kastro — ruinele orașului medieval pe stâncă

**Cazare (cameră dublă, prețul per persoană):**`,
    dates: [
      {
        label: "21 sep – 28 sep 2026",
        checkin: "2026-09-21",
        checkout: "2026-09-28",
        flightPricePerPerson: 73,
        flightLink: skyscannerFlightUrl("buch", "jsi", "260921", "260928", "Skiathos"),
        flightPlatform: "skyscanner",
        hotels: [
          {
            name: "Laura Skia",
            pricePerPerson: 103,
            link: bookingSearchUrl("Laura Skia Skiathos", "2026-09-21", "2026-09-28"),
            platform: "booking",
          },
          {
            name: "Evans Skia",
            pricePerPerson: 127,
            link: bookingSearchUrl("Evans Skia Skiathos", "2026-09-21", "2026-09-28"),
            platform: "booking",
          },
          {
            name: "Asteri Studios",
            pricePerPerson: 136,
            link: bookingSearchUrl("Asteri Studios Skiathos", "2026-09-21", "2026-09-28"),
            platform: "booking",
          },
        ],
        totalFrom: 176,
      },
    ],
  },

  {
    slug: "tropea",
    title: "Zboruri ieftine Tropea (Lamezia) – de la 53€ dus-întors",
    destination: "Tropea (Calabria)",
    country: "Italia",
    type: ["plajă"],
    priceFrom: 53,
    duration: 7,
    durationLabel: "flexibil",
    fromCity: "București",
    isFlightOnly: true,
    image: "https://picsum.photos/seed/tropea-calabria/800/500",
    description:
      "Tropea — cel mai spectaculos sat de pe coastele Italiei, pe o stâncă deasupra mării. Zboruri la Lamezia de la 53€ dus-întors.",
    longDescription: `Tropea este considerat unul dintre cele mai frumoase sate din Italia — un orășel medieval cocoțat pe o stâncă de 50 de metri deasupra Mării Tireniene, cu plaje albe la poalele ei.

Adesea supranumit „Perla Calabriei", Tropea combină arhitectura medievală cu o mare de un albastru intens.

**Ce poți face în Tropea și împrejurimi:**
- Plajele de la poalele stâncii — nisip fin și apă turcoaz
- Santa Maria dell'Isola — biserica pe insuliță, simbol al orașului
- Capo Vaticano — capul cu faleze spectaculoase
- Piazza Ercole — centrul animat al orașului vechi
- Excursie la Scilla — alt sat spectaculos pe stâncă
- Excursie la Parco Nazionale della Sila — munți și lacuri

**Această ofertă include DOAR zborul** (la Lamezia Terme, la 60 km de Tropea). Cazarea o rezervi separat pe Booking.com.`,
    dates: [
      {
        label: "1 oct – 8 oct 2026",
        checkin: "2026-10-01",
        checkout: "2026-10-08",
        flightPricePerPerson: 53,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=LameziaTerme&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fsuf%2F261001%2F261008%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy%26preferdirects%3Dtrue",
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 53,
      },
      {
        label: "28 iun – 5 iul 2026",
        checkin: "2026-06-28",
        checkout: "2026-07-05",
        flightPricePerPerson: 79,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=LameziaTerme&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fsuf%2F260628%2F260705%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy%26preferdirects%3Dtrue",
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 79,
      },
      {
        label: "5 iul – 12 iul 2026",
        checkin: "2026-07-05",
        checkout: "2026-07-12",
        flightPricePerPerson: 88,
        flightLink: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=LameziaTerme&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fbuch%2Fsuf%2F260705%2F260712%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy%26preferdirects%3Dtrue",
        flightPlatform: "skyscanner",
        hotels: [],
        totalFrom: 88,
      },
    ],
  },
];

export function getOfferBySlug(slug: string): Offer | undefined {
  return OFFERS.find((o) => o.slug === slug);
}

export function getMinPrice(offer: Offer): number {
  return offer.priceFrom;
}
