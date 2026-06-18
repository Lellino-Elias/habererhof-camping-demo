import type { CampsiteConfig } from "../types";

const IMG = "/campsites/habererhof";

const habererhof: CampsiteConfig = {
  name: "Camping Virgental am Habererhof",
  shortName: "Habererhof",
  slug: "habererhof",
  ort: "Virgen",
  region: "Osttirol",
  brandKind: "Camping am Biobauernhof",
  regionLong: "Virgental · Nationalpark Hohe Tauern · Osttirol",

  heroVariant: "center",

  claim: "Camping zwischen Großvenediger und Großglockner",
  claimEmphasis: "Großvenediger und Großglockner",
  emailDetail: "euer kleiner Campingplatz direkt neben dem Bauernhof",
  intro:
    "Sechzehn großzügige Stellplätze, direkt neben dem Biobauernhof der Familie Berger und mitten im Nationalpark Hohe Tauern — kleiner Platz, viel Wiese und Berge ringsum.",

  statement: {
    text: "Bei uns campst du dort, wo der Bauernhof aufhört und der Nationalpark beginnt.",
    emphasis: "der Nationalpark beginnt",
  },

  pillars: [
    {
      title: "Camping direkt am Hof",
      text: "Der kleine Platz liegt gleich neben unserem Bauernhof — Hofleben, Tiere und Frühstück inklusive.",
      image: { src: `${IMG}/gallery-ba3cb7162b.webp`, alt: "Stellplätze des Campingplatzes Virgental mit Wohnmobil, Zelten und Bergblick" },
    },
    {
      title: "Biobauernhof in Virgen",
      text: "Familie Berger führt den Hof auf 1.140 Metern im Sonnendorf Virgen — die Bergwelt liegt vor der Haustür.",
      image: { src: `${IMG}/gallery-24c00e039e.webp`, alt: "Der Habererhof in Virgen mit blühenden Balkonen vor den Gipfeln der Hohen Tauern" },
    },
    {
      title: "Mitten im Nationalpark",
      text: "Rundherum der Nationalpark Hohe Tauern mit Bergseen, Almen und geführten Rangertouren.",
      image: { src: `${IMG}/activity-ced3ad2039.webp`, alt: "Smaragdgrüner Bergsee mit Alpenrosen und schneebedeckten Gipfeln im Nationalpark Hohe Tauern" },
    },
  ],

  usps: ["16 Stellplätze ab 100 m²", "Strom & WLAN gratis", "Eigener Trinkwasserbrunnen", "Duschen inklusive", "Großer Spielplatz", "Hunde willkommen"],

  trust: {
    heading: "Warum Familien immer wiederkommen",
    headingEmphasis: "immer wiederkommen",
    intro:
      "Ein überschaubarer Platz, auf dem Kinder den ganzen Tag draußen sind: Tiere streicheln, am Lagerfeuer Stockbrot backen und abends müde ins Zelt fallen — Urlaub, der nach Bauernhof schmeckt.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-e5298eb2f3.webp`, alt: "Der Habererhof in Virgen im Sommer, eingebettet in grüne Almwiesen vor der Bergwelt" },
  },

  breather: {
    image: { src: `${IMG}/hero-8a17d5337b.webp`, alt: "Bergpanorama im Nationalpark Hohe Tauern über dem Virgental" },
    line: "Zwischen Großvenediger und Großglockner.",
  },

  camping: {
    heading: "Dein Platz am Habererhof",
    intro:
      "Sechzehn Stellplätze ab 100 m², teils beschattet, mit Strom, WLAN und eigenem Trinkwasserbrunnen — dazu der ganze Bauernhof gleich nebenan.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Ebene Plätze ab 100 m², teilweise beschattet und mit Stromanschluss — der Blick auf die Berge ist gratis.",
        image: { src: `${IMG}/gallery-a80115c830.webp`, alt: "Stellplatz mit Zelt und Wohnmobil am Campingplatz Virgental vor bewaldeten Bergen" },
      },
      {
        title: "Viel Wiese, kleiner Platz",
        text: "Nur sechzehn Stellplätze auf 3.000 m² — hier bleibt es ruhig, übersichtlich und familiär.",
        image: { src: `${IMG}/gallery-b8c2677668.webp`, alt: "Überblick über den kleinen Campingplatz Virgental mit Wohnwagen und Wiesen" },
      },
      {
        title: "Mitten ins Grüne gebettet",
        text: "Der Platz schmiegt sich an den Rand der Virger Feldflure, mit Bergen ringsum und dem Hof gleich daneben.",
        image: { src: `${IMG}/hero-36f340a075.webp`, alt: "Luftaufnahme von Habererhof und Campingplatz in den grünen Wiesen des Virgentals" },
      },
      {
        title: "Großer Spielplatz",
        text: "Schaukel, Trampolin, Sandkiste und eine Wiese zum Toben warten direkt am Platz auf die Kinder.",
        image: { src: `${IMG}/kids-c2fbd29ff6.webp`, alt: "Großer Spielplatz am Habererhof mit Schaukel, Trampolin und spielenden Kindern" },
      },
      {
        title: "Stockbrot am Lagerfeuer",
        text: "Abends Stockbrot über der Glut backen und Räuber und Gendarm im Wald spielen — Camperabende wie früher.",
        image: { src: `${IMG}/gallery-9a16bff50b.webp`, alt: "Kinder backen Stockbrot am Lagerfeuer auf dem Campingplatz Virgental" },
      },
      {
        title: "Frühstück & Brötchenservice",
        text: "Auf Wunsch bringen wir dir frische Brötchen oder ein Frühstück mit Produkten vom eigenen Hof.",
        image: { src: `${IMG}/gallery-2fbfb2d8ae.webp`, alt: "Tiroler Frühstückskorb mit Brot, Obst und hofeigenen Produkten vom Habererhof" },
      },
    ],
  },

  kinder: {
    heading: "Ein Bauernhof zum Mitmachen",
    intro:
      "Kühe melken, Kätzchen suchen, im Sand buddeln — bei uns sind die Kleinen den ganzen Tag draußen und abends glücklich müde.",
    features: [
      {
        title: "Tiere zum Streicheln",
        text: "Kühe, Kälber, Schweine, Katzen und ein Häschen leben am Hof — beim Melken darfst du gerne zuschauen.",
        image: { src: `${IMG}/kids-7814f872ea.webp`, alt: "Kinder streicheln eine Katze auf der Wiese am Habererhof" },
      },
      {
        title: "Sandkiste & Spielwiese",
        text: "Direkt am Platz wird gebuddelt, geschaukelt und Fußball gespielt — Langeweile kommt hier keine auf.",
        image: { src: `${IMG}/gallery-575da226ca.webp`, alt: "Zwei Kinder spielen in der Sandkiste am Campingplatz Virgental" },
      },
      {
        title: "Kinderabenteuer in den Bergen",
        text: "Für die Großen warten glasklare Bergseen und Gipfel — ein Abenteuer nach dem anderen.",
        image: { src: `${IMG}/kids-103ba0b39f.webp`, alt: "Kinder an einem glasklaren Bergsee in den Hohen Tauern" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Vor der Tür beginnt der Nationalpark",
    intro:
      "Vom Hof starten Wanderungen zu Almen, Bergseen und Dreitausendern — viele davon mit Hausherr Albert oder den Nationalpark-Rangern.",
    items: [
      {
        title: "Almen & Wanderungen",
        text: "Gemütliche Almwege oder lange Touren zu Hütten und Bergseen starten direkt vom Habererhof.",
        image: { src: `${IMG}/activity-bc3e45ef66.webp`, alt: "Almhütte vor herbstlichen Lärchen und Gipfeln im Virgental" },
      },
      {
        title: "Gipfel mit Bergführer Alois",
        text: "Mit dem heimischen Bergführer geht es auf Großglockner, Großvenediger oder die Rötspitze.",
        image: { src: `${IMG}/activity-8192926dcb.webp`, alt: "Bergsteigerin auf einem Gipfel mit Blick auf die vergletscherten Hohen Tauern" },
      },
      {
        title: "Bergsommer im Virgental",
        text: "Blühende Almwiesen, smaragdgrüne Bergseen und tosende Wasserfälle rund um den Hof.",
        image: { src: `${IMG}/activity-f48887df11.webp`, alt: "Blühende Almwiese mit Enzian vor schneebedeckten Gipfeln im Virgental" },
      },
      {
        title: "Burgruine Rabenstein",
        text: "Zu Fuß erreichst du die Burgruine Rabenstein mit Wandgemälden aus dem 14. Jahrhundert.",
        image: { src: `${IMG}/gallery-2640848eac.webp`, alt: "Burgruine Rabenstein über dem bewaldeten Hang im Virgental" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Virgental",
    modes: [
      { title: "Mit dem Auto", text: "Über den Felbertauern oder via Lienz nach Virgen — bei der Kirche links nach Niedermauern, nach rund 500 m bist du da. (Von Deutschland brauchst du eine Vignette.)" },
      { title: "Öffentlich", text: "Mit der Bahn bis Lienz, von dort weiter mit dem Postbus nach Virgen." },
      { title: "Mit dem Flugzeug", text: "Innsbruck und Salzburg liegen rund 170 bis 180 km entfernt, Klagenfurt ebenso." },
    ],
  },

  galerie: {
    heading: "Ein Sommer am Habererhof",
    headingEmphasis: "Sommer",
    intro:
      "Blumenbalkone, weite Wiesen, Bergseen und lange Abende am Lagerfeuer — ein paar Eindrücke vom Hof und seinem Tal.",
    tag: "Virgental · Osttirol",
    moreCount: 24,
    images: [
      { src: `${IMG}/hero-4629dc3323.webp`, alt: "Blumengeschmückte Terrasse am Habererhof mit Blick auf die Virgener Berge" },
      { src: `${IMG}/hero-b0bfad498d.webp`, alt: "Das Virgental mit den schneebedeckten Gipfeln der Hohen Tauern" },
      { src: `${IMG}/gallery-a6791db77a.webp`, alt: "Blühende Krokuswiese vor den schneebedeckten Gipfeln der Hohen Tauern im Virgental" },
      { src: `${IMG}/gallery-080a671c61.webp`, alt: "Hofkatzen auf dem Geländer vor dem Habererhof" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Berger meldet sich persönlich mit deiner Verfügbarkeit am Platz.",
    pricesArePlaceholder: false,
    priceNote:
      "ab € 23 für Stellplatz mit Strom (2 Personen) — bis € 28 je nach Saison · zzgl. Ortstaxe € 2 pro Person/Tag ab 15 J. · Kind 2–14 J. € 5 · jede weitere Person € 8 · Hund € 3",
    highlight: { title: "Strom inklusive", text: "Jeder Stellplatz hat einen Stromanschluss — und die Duschen sind gratis." },
    categories: [
      { id: "stellplatz", label: "Stellplatz mit Strom", perNight: 23, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 46.998689, lng: 12.441869 },
    tel: "+43 4874 5261",
    telHref: "tel:+4348745261",
    mail: "info@habererhof.at",
    facebook: "https://www.facebook.com/habererhof/",
    adresse: "Niedermauern 9 · 9972 Virgen · Osttirol",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Ausstattung", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default habererhof;
