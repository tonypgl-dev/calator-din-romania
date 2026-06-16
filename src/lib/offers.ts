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
    title: "Vacanță în Alicante: 7 zile de soare pe Costa Blanca – 288€ (Zbor + Cazare)",
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
      "Alicante nu este doar o destinație de vară, ci locul unde soarele strălucește 300 de zile pe an. Descoperă Costa Blanca de la 288€.",
    longDescription: `Alicante este perla Coastei Albe a Spaniei, locul unde relaxarea pe plaja Postiguet se îmbină perfect cu vibe-ul istoric din Barrio de Santa Cruz. Cu peste 300 de zile însorite pe an, este destinația ideală pentru a evada din rutina zilnică.

Pachetul include zbor dus-întors din București și opțiuni de cazare atent selecționate (cameră dublă, prețul este per persoană).

**De ce să alegi Alicante acum:**
- Vizitezi Castelul Santa Bárbara pentru cea mai frumoasă panoramă asupra Mediteranei.
- Te plimbi pe Explanada de España, faleza iconică cu dale de marmură tricolore.
- Savurezi un Arroz a Banda (paella locală) la prețuri autentice.
- Excursie opțională: Insula Tabarca, o rezervație marină spectaculoasă cu ape cristaline.

**Important:** Aceasta este o vacanță pe cont propriu. Prețurile afișate sunt valabile la momentul postării; fiind un agregator, prețul și disponibilitatea pot varia ulterior.`,
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
    title: "Vacanță în Mykonos: 4 zile de lux și relaxare – 198€ (Zbor + Cazare)",
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
      "Mykonos — insula albastră și albă, plaje de vis și petreceri legendare. Zbor direct și cazare de la 198€.",
    longDescription: `Mykonos este chintesența luxului grecesc, celebră pentru arhitectura cicladică imaculată, morile de vânt iconice și viața de noapte vibrantă care atrage turiști din toată lumea.

Pachetul include zbor dus-întors direct din București și cazare în zone strategice pentru a explora insula.

**Ce poți face în Mykonos:**
- Explorează Chora, capitala cu alei înguste, flori de bougainvillea și case albe.
- Selfie la morile de vânt Kato Myli, simbolul inconfundabil al insulei.
- Cină în Little Venice — cartierul unde valurile mării ating fundațiile caselor.
- Relaxare pe plajele de renume: Paradise Beach, Super Paradise sau Elia.

**Notă:** Aceasta este o ofertă pentru o vacanță organizată pe cont propriu. Prețurile sunt valabile la data publicării și pot varia în funcție de disponibilitatea operatorilor aerieni.`,
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
    title: "Exotic: Marrakech – O experiență senzorială completă de la 198€ (Zbor + Riad)",
    destination: "Marrakech",
    country: "Maroc",
    type: ["exotic", "natură"],
    priceFrom: 69,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București / Cluj / Iași",
    image: "https://picsum.photos/seed/morocco-marrakech/800/500",
    description:
      "Marrakech — medina labirintică, suquri colorate și riad-uri de poveste. Zboruri de la 69€, pachete complete de la 198€.",
    longDescription: `Marrakech te va transporta într-o lume a contrastelor, de la forfota colorată din celebra piață Jemaa el-Fna până la liniștea absolută a grădinilor Majorelle. Este destinația ideală pentru cei care caută o aventură exotică la doar câteva ore de zbor.

Pachetul propus include zbor dus-întors și cazare în Riad-uri tradiționale, pentru a trăi o experiență marocană autentică.

**Top experiențe în Marrakech:**
- Pierde-te prin labirintul de souk-uri pentru a descoperi mirodenii, textile și artizanat unic.
- Vizitează Grădinile Majorelle — oaza albastră a lui Yves Saint Laurent.
- Cină la apus pe o terasă cu vedere panoramică spre Munții Atlas.
- Excursie opțională în deșertul Agafay pentru o plimbare cu cămila sub cerul înstelat.

**Plecări disponibile din:** București (OTP), Cluj-Napoca (CLJ) și Iași (IAS).`,
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
    title: "Vacanță în Antalya: Perla Rivierei Turcești – 237€ (Zbor + Cazare 7 zile)",
    destination: "Antalya",
    country: "Turcia",
    type: ["plajă"],
    priceFrom: 152,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/antalya-turkey/800/500",
    description:
      "Antalya combină plajele aurii cu istoria bogată și ospitalitatea turcească legendară. De la 152€ per persoană.",
    longDescription: `Antalya este destinația unde Marea Mediterană întâlnește Munții Taurus, oferind un mix irezistibil de plaje de lux, vestigii antice și bazaruri vibrante. Este locul ideal atât pentru relaxare, cât și pentru explorare culturală.

Pachetul include zbor dus-întors din București și cazare la hoteluri cu rating excelent.

**Ce poți face în Antalya:**
- Relaxează-te pe plajele Konyaaltı sau Lara, celebre pentru nisipul lor fin.
- Explorează Kaleiçi — centrul vechi otoman cu străduțe înguste și poarta lui Hadrian.
- Vizitează Cascadele Düden, care se varsă spectaculos direct în mare.
- Excursie de o zi la ruinele antice din Perge sau Aspendos (unul dintre cele mai bine conservate amfiteatre).

**Sfat:** Wizz Air oferă tarife preferențiale pentru membrii Discount Club. Prețurile afișate sunt estimative și se pot modifica rapid.`,
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
    title: "Insula Cavalerilor: Rhodos – 275€ Pachet complet 7 zile (Zbor + Cazare)",
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
      "Rhodos îmbină istoria medievală UNESCO cu plaje cristaline. Descoperă farmecul Dodecanezului de la 275€.",
    longDescription: `Rhodos este o capsulă a timpului unde zidurile medievale ale cavalerilor ioaniți stau alături de plaje cu apă turcoaz. Este destinația ideală pentru cei care vor să combine relaxarea la soare cu vizitarea unor situri istorice de clasă mondială.

Pachetul include zbor direct și opțiuni de cazare în zone precum Kremasti sau Faliraki.

**Ce poți face în Rhodos:**
- Pierde-te pe străduțele pietruite ale centrului medieval (UNESCO) și vizitează Palatul Marelui Maestru.
- Admiră Acropola din Lindos, cocoțată pe o stâncă deasupra unui sat alb pitoresc.
- Relaxează-te în Anthony Quinn Bay, considerată una dintre cele mai frumoase plaje din Grecia.
- Fă o excursie cu barca spre insula Symi, celebră pentru casele sale colorate neo-clasice.

**Informație utilă:** Rezervarea se face individual pe platformele partenere (Skyscanner/Booking).`,
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
    title: "Grecia Ieftină: Halkidiki – 7 zile de vis la malul mării de la 162€ (Zbor + Cazare)",
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
      "Ape cristaline și pini care coboară până la malul mării. Cea mai accesibilă vacanță în Grecia: de la 162€.",
    longDescription: `Halkidiki este paradisul secret al Greciei de Nord, oferind unele dintre cele mai spectaculoase plaje cu steag albastru, păduri de pini răcoroase și sate pescărești autentice unde timpul pare să stea în loc.

Zborul este către Salonic, de unde poți închiria o mașină pentru a explora brațele Kassandra sau Sithonia (la doar 1 oră distanță).

**Ce poți face în Halkidiki:**
- Descoperă plajele virgine din Sithonia (Kalogria, Orange Beach) pentru liniște totală.
- Bucură-te de viața de noapte și facilitățile din Kassandra (Kallithea, Pefkohori).
- Excursie cu barca spre Muntele Athos (brațul al treilea) pentru a vedea mănăstirile seculare de pe mare.
- Vizitează satul tradițional Afitos, construit pe o stâncă deasupra mării.

**Notă:** Prețurile sunt per persoană, calculat pentru loc în cameră dublă. Grăbește-te, locurile la acest tarif sunt limitate!`,
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
    title: "Paradis Tropical: Mauritius – 9 zile în Oceanul Indian la 855€ (Zbor + Cazare)",
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
      "Lagune turcoaz, recife de corali și vegetație luxuriantă. Evadează în Mauritius de la 855€ per persoană.",
    longDescription: `Mauritius este definiția paradisului tropical, o insulă care depășește orice așteptare: nisip alb ca zăpada, ape de un turcoaz ireal și o cultură multiculturală fascinantă. Este destinația visată pentru o lună de miere sau o vacanță de neuitat.

Pachetul include zbor (cu escală) din București și cazare în zone liniștite precum La Gaulette, aproape de cele mai frumoase plaje.

**Top experiențe în Mauritius:**
- Snorkeling în Blue Bay Marine Park pentru a vedea recifele de corali și peștii exotici.
- Vizitează Parcul Național Black River Gorges pentru trekking și cascade spectaculoase.
- Admiră „Pământul celor Șapte Culori” din Chamarel, un fenomen geologic unic.
- Relaxare pe plaja Le Morne, dominată de muntele iconic inclus în patrimoniul UNESCO.

**Important:** Prețurile zborurilor pe rute exotice pot fluctua zilnic. Recomandăm rezervarea imediată pentru a securiza tariful de 855€.`,
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
    title: "Hidden Gem: Tbilisi – Vinuri legendare și istorie sub Caucaz (221€ Zbor + Cazare)",
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
      "Tbilisi îmbină arhitectura de lemn cu vibe-ul modern și cea mai bună mâncare din regiune. Descoperă Georgia de la 221€.",
    longDescription: `Dacă cauți o destinație care să te surprindă cu adevărat, Georgia este răspunsul. Tbilisi, capitala sa, îmbină străduțele medievale cu balcoane de lemn sculptat cu o scenă culturală și gastronomică în plină efervescență.

Pachetul include zbor direct și cazare în inima orașului sau în cartiere pitorești.

**De ce să vizitezi Tbilisi:**
- Relaxează-te la băile sulfuroase din Abanotubani, vechi de secole.
- Urcă cu telecabina la Fortăreața Narikala pentru o vedere panoramică spectaculoasă.
- Savurează un Khachapuri autentic și vinurile georgiene (Georgia fiind cea mai veche țară viticolă din lume).
- Excursie de o zi la Kazbegi pentru a vedea celebra biserică Gergeti izolată în inima Munților Caucaz.

**Sfat:** Georgia este o destinație extrem de accesibilă ca prețuri locale, oferind un raport calitate-preț imbatabil.`,
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
    title: "Sardinia Ieftină: 4 zile în paradisul italian Alghero – 187€ (Zbor + Cazare)",
    destination: "Sardinia (Alghero)",
    country: "Italia",
    type: ["plajă"],
    priceFrom: 187,
    duration: 4,
    durationLabel: "4 zile / 3 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/sardinia-alghero/800/500",
    description:
      "Sardinia — plaje cu nisip fin alb și apă turcoaz ireală. Descoperă 'Maldivele Europei' de la 187€.",
    longDescription: `Sardinia este una dintre cele mai frumoase insule din Mediterana, celebră pentru plajele sale virgine care concurează cu cele mai exotice destinații tropicale. Zbori direct în Alghero, un oraș medieval catalan fascinant situat pe „Coasta de Coral”.

Pachetul include zbor dus-întors din București și cazare în unități tip B&B cu rating excelent.

**Ce poți face în Sardinia (Alghero):**
- Relaxează-te pe Spiaggia del Lazzaretto sau Maria Pia, celebre pentru apa lor cristalină.
- Explorează Grotta di Nettuno, stalactite spectaculoase accesibile cu barca sau pe „Scara Căprioarei”.
- Cină la apus pe zidurile medievale ale centrului vechi din Alghero.
- Excursie de o zi la plaja La Pelosa — celebră pentru nisipul său alb ca zăpada.

**Informație:** Aceasta este o vacanță organizată pe cont propriu. Prețurile afișate sunt valabile la momentul publicării.`,
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
  {
    slug: "palermo",
    title: "Sicilia Autentică: Palermo – 6 zile cu mic dejun inclus de la 221€ (Zbor + Cazare)",
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
      "Palermo — capitala Siciliei, un mix fascinant de culturi, piețe colorate și mare cristalină. De la 221€ cu mic dejun.",
    longDescription: `Palermo este sufletul vibrant al Siciliei, locul unde arhitectura arabă-normandă se întâlnește cu piețele stradale gălăgioase și gastronomia de renume mondial. Este o destinație care îți va activa toate simțurile.

Pachetul include zbor dus-întors din București și cazare cu mic dejun inclus pentru a începe zilele cu energie siciliană.

**Top experiențe în Palermo:**
- Vizitează Piața Ballarò — cea mai veche și vibrantă piață, un spectacol de culori și gusturi.
- Admiră mozaicurile bizantine din Capella Palatina și grandoarea Catedralei din Palermo.
- Fă o excursie de o zi la Mondello, plaja cu nisip alb aflată la doar 20 de minute de centru.
- Vizitează Cefalù, un orășel medieval spectaculos situat direct pe malul mării.

**Sfat:** Încearcă faimosul „street food” din Palermo — arancini sau cannoli sunt obligatorii!`,
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
    title: "City Break Cracovia: Cel mai frumos oraș medieval din Polonia – 57€ (Zbor + Cazare)",
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
      "Cracovia — inima regală a Poloniei, cu un centru istoric UNESCO spectaculos. Un weekend de poveste de la 57€.",
    longDescription: `Cracovia este fosta capitală regală a Poloniei și unul dintre cele mai bine conservate centre istorice din Europa Centrală. Este destinația ideală pentru un city break scurt, plin de cultură, istorie și viață de noapte vibrantă.

Pachetul include zbor dus-întors din București și cazare în unități centrale sau aproape de punctele de interes.

**Ce poți face în Cracovia:**
- Explorează Piața Centrală (Rynek Główny) — cea mai mare piață medievală din Europa.
- Vizitează Castelul Wawel, reședința regilor polonezi situată pe malul râului Vistula.
- Pierde-te în Kazimierz, cartierul evreiesc plin de cafenele artsy și istorie.
- Excursie opțională la faimoasele Mine de Sare Wieliczka (sit UNESCO aflat la doar 14 km).

**Sfat:** Cracovia este renumită pentru prețurile sale extrem de prietenoase la restaurante și baruri.`,
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
    title: "Weekend în Umbria: Inima verde a Italiei – 155€ (Zbor + Cazare + Mic dejun)",
    destination: "Umbria (Perugia)",
    country: "Italia",
    type: ["natură", "city-break"],
    priceFrom: 155,
    duration: 3,
    durationLabel: "3 zile / 2 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/umbria-perugia-italy/800/500",
    description:
      "Umbria — sate medievale, văi cu măslini și ciocolata celebră Perugina. Evadează în Italia autentică de la 155€.",
    longDescription: `Umbria este singura regiune a Italiei fără ieșire la mare, dar compensează cu peisaje colinare divine, orașe medievale perfect conservate și o bucătărie rustică inegalabilă. Este destinația ideală pentru cei care vor să descopere Italia autentică, departe de agitația marilor metropole.

Zborul este direct în Perugia, capitala regiunii și un centru universitar cosmopolit.

**Top experiențe în Umbria:**
- Explorează Perugia — centrul medieval cu Fontana Maggiore și labirintul subteran al Rocca Paolina.
- Vizitează Assisi (UNESCO), orașul Sfântului Francisc, pentru o doză de spiritualitate și artă renascentistă.
- Pierde-te pe străduțele pline de flori din Spello, considerat unul dintre cele mai frumoase „borghi” din Italia.
- Degustă ciocolata celebră Baci Perugina direct la sursă și bucură-te de un vin local Sagrantino.

**Pachetul include:** Zbor dus-întors și cazare cu mic dejun inclus. Rezervi direct cu operatorul.`,
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
    title: "Vacanță în Zakynthos: Insula Turcoaz și Navagio Beach – 253€ (Zbor + Cazare 7 zile)",
    destination: "Zakynthos",
    country: "Grecia",
    type: ["plajă"],
    priceFrom: 253,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/zakynthos-greece/800/500",
    description:
      "Zakynthos — broaște țestoase, ape de un turcoaz ireal și faimoasa plajă cu epavă. Descoperă paradisul Ionian de la 253€.",
    longDescription: `Zakynthos este una dintre cele mai spectaculoase insule ionice, renumită la nivel mondial pentru Navagio Beach — plaja cu epavă înconjurată de stânci albe amețitoare, accesibilă doar cu barca.

Pachetul include zbor (direct sau cu escală scurtă) și cazare în zone strategice pentru a explora atracțiile insulei.

**Ce poți face în Zakynthos:**
- Excursie la Navagio Beach și Blue Caves (Grotele Albastre) pentru o experiență vizuală de neuitat.
- Observă broaștele țestoase Caretta-caretta în Laganas Bay sau pe Turtle Island (Marathonisi).
- Admiră apusul de soare din Keri sau din satul muntos Exo Hora.
- Explorează portul venețian din Zakynthos Town și străduțele sale elegante.

**Sfat:** Închiriază o barcă mică sau o mașină pentru a descoperi golfurile izolate pe care excursiile de grup le ocolesc.`,
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
            link: "https://skyscanner.pxf.io/c/5327002/1027991/13416?sharedid=Zakynthos&associadeid=AFF_TRA_19345_00001&u=https%3A%2F%2Fwww.skyscanner.ie%2Ftransport%2Fflights%2Fotp%2Fzth%2F260908%2F260915%2F%3Fadultsv2%3D2%26cabinclass%3Deconomy%26preferdirects%3Dtrue",
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
    title: "Vacanță în Benidorm: Zgârie-nori, plaje imense și distracție – 283€ (Zbor + Cazare 7 zile)",
    destination: "Benidorm",
    country: "Spania",
    type: ["plajă"],
    priceFrom: 283,
    duration: 7,
    durationLabel: "7 zile / 6 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/benidorm-spain/800/500",
    description:
      "Benidorm — stațiunea cu cel mai futurist skyline din Europa. Plaje nesfârșite și distracție garantată de la 283€.",
    longDescription: `Benidorm este „Manhattan-ul Mediteranei”, o stațiune unică în Spania unde zgârie-norii moderni mărginesc plaje uriașe cu nisip auriu. Este destinația ideală pentru cei care vor o vacanță activă, plină de distracție, parcuri tematice și soare garantat.

Zborul este către Alicante, urmat de un transfer scurt (45 min) până în inima distracției din Benidorm.

**Ce poți face în Benidorm:**
- Relaxează-te pe Playa de Levante (vibrantă și animată) sau Playa de Poniente (mai liniștită și spațioasă).
- Admiră priveliștea de la Balcón del Mediterráneo, punctul de unde orașul se vede cel mai frumos.
- Vizitează Terra Mítica sau Mundomar pentru o zi plină de adrenalină și experiențe cu animale.
- Excursie de o zi la Guadalest — un sat medieval spectaculos „agățat” pe o stâncă în munți.

**Pachetul propus:** Include zbor și cazare la unități cu rating bun în zone accesibile. Rezervă acum pentru tarifele promoționale!`,
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
    title: "Vacanță Flash: Milano – O zi întreagă în capitala modei de la 57€ (Zbor dus-întors)",
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
      "Evadează la Milano pentru shopping și cultură: 14 ore în cel mai cosmopolit oraș al Italiei de la 57€.",
    longDescription: `Cine spune că ai nevoie de un concediu întreg pentru a vizita Milano? Îți propunem o escapadă de o zi: pleci dimineața devreme și te întorci seara, având la dispoziție peste 14 ore pentru a explora inima modei europene.

Această ofertă este ideală pentru cei care vor să facă shopping, să vadă Duomo-ul sau să se bucure de un prânz autentic italian fără costuri de cazare.

**Ce poți face în Milano într-o singură zi:**
- Admiră Catedrala Duomo și urcă pe terasă pentru o vedere panoramică spectaculoasă.
- Plimbare prin Galleria Vittorio Emanuele II pentru o sesiune de window-shopping de lux.
- Explorează cartierul Navigli pentru un „aperitivo” pe malul canalelor.
- Vizitează Pinacoteca di Brera sau Castello Sforzesco pentru o doză de artă și istorie.

**Important:** Oferta include DOAR biletele de avion dus-întors în aceeași zi. Grăbește-te, locurile la acest preț se epuizează rapid!`,
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
    title: "City Break Gdansk: Portul medieval al Poloniei – 132€ (Zbor + Cazare 4 zile)",
    destination: "Gdansk",
    country: "Polonia",
    type: ["city-break"],
    priceFrom: 132,
    duration: 4,
    durationLabel: "4 zile / 3 nopți",
    fromCity: "București",
    image: "https://picsum.photos/seed/gdansk-poland/800/500",
    description:
      "Gdansk — case hanseatice colorate, ambarcațiuni și vibe-ul Mării Baltice. Descoperă un oraș de poveste de la 132€.",
    longDescription: `Gdansk este unul dintre cele mai frumoase porturi hanseatice din Europa, un oraș care îmbină istoria zbuciumată cu o arhitectură colorată spectaculoasă. Situat pe Marea Baltică, acesta oferă un mix unic de cultură, istorie recentă (locul unde s-a născut Solidarność) și relaxare.

Pachetul include zbor și cazare în unități tip apartament situate aproape de centrul istoric.

**Ce nu trebuie să ratezi în Gdansk:**
- Strada Długa (Ulița Lungă) — promenada principală cu cele mai frumoase case din sec. XVII.
- Portul Medieval și Gruul Medieval (Crane), cel mai mare de acest tip din Europa veche.
- Muzeul celei de-a Doua Războaie Mondiale — o experiență imersivă și educativă.
- Excursie la Sopot (la doar 15 min distanță) pentru a vedea cea mai lungă faleză de lemn din Europa.

**Sfat:** Încearcă berea locală pe malul apei la apus — experiența este magică!`,
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
    title: "Vacanță în Skiathos: Cele mai frumoase plaje din Sporade – 176€ (Zbor + Cazare 7 zile)",
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
      "Skiathos — peste 60 de plaje cu nisip fin, pini și ape cristaline. Descoperă magia insulei de la 176€.",
    longDescription: `Skiathos este o insulă mică dar cu o personalitate uriașă, celebră pentru concentrația sa de plaje spectaculoase — peste 60 pe o suprafață restrânsă. Este destinația ideală pentru iubitorii de natură și ape turcoaz care vor să evite aglomerația marilor stațiuni.

Pachetul include zbor direct (în sezon) și cazare în unități tip studio cu rating mare.

**Ce poți face în Skiathos:**
- Relaxează-te pe Koukounaries — considerată una dintre cele mai frumoase plaje din Europa, înconjurată de o pădure de pini protejată.
- Explorează Skiathos Town — un orășel port pitoresc cu taverne, magazine și o atmosferă vibrantă.
- Excursie cu barca la Lalaria — plaja cu stânci albe și o arcadă naturală în mare, accesibilă doar pe apă.
- Urcă la Kastro — ruinele vechiului oraș medieval situat pe o stâncă cu vedere panoramică asupra Sporadelor.

**Informație importantă:** Prețurile afișate sunt per persoană și pot varia în funcție de momentul rezervării.`,
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
    title: "Perla Calabriei: Tropea – Zboruri ieftine de la 53€ dus-întors",
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
      "Tropea — orășelul medieval cocoțat pe o stâncă deasupra mării cristaline. Zboruri spre Lamezia de la 53€.",
    longDescription: `Tropea este considerată una dintre cele mai spectaculoase destinații de coastă din Italia — un orășel medieval suspendat pe o stâncă de 50 de metri deasupra Mării Tireniene. Cu ape de un albastru intens și plaje cu nisip fin la poalele sale, Tropea este cu adevărat „Perla Calabriei”.

Această ofertă vizează DOAR biletele de avion către Lamezia Terme (aeroportul aflat la 60 km distanță), oferindu-ți libertatea de a-ți alege singur cazarea perfectă.

**De ce să alegi Tropea:**
- Vizitează Biserica Santa Maria dell'Isola — simbolul orașului, situată pe o insuliță chiar în fața stâncii.
- Plajele spectaculoase cu apă cristalină care te fac să crezi că ești în Caraibe.
- Explorează centrul vechi plin de viață, cu restaurante ce servesc celebrele cepe roșii de Tropea și paste locale.
- Excursie la Capo Vaticano pentru faleze dramatice și unele dintre cele mai bune locuri de snorkeling din Italia.

**Important:** Oferta include doar zborul. Rezervările se fac pe platformele partenerilor noștri.`,
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
