import {
  getPexelsMediumUrlById,
  getPexelsLandscapeUrlById,
  getFlagUrlByAlpha2,
} from "./utils/imageHandlers";

// repeated countries
const egito = [
  {
    name: "Cairo",
    thumbnail: getPexelsMediumUrlById("3290075"),
    country: {
      name: "Egito",
      flag: getFlagUrlByAlpha2("eg"),
    },
  },
  {
    name: "Hurghada",
    thumbnail: getPexelsMediumUrlById("5273214"),
    country: {
      name: "Egito",
      flag: getFlagUrlByAlpha2("eg"),
    },
  },
];

const turquia = [
  {
    name: "Istambul",
    thumbnail: getPexelsMediumUrlById("7539810"),
    country: {
      name: "Turquia",
      flag: getFlagUrlByAlpha2("tr"),
    },
  },
  {
    name: "Antália",
    thumbnail: getPexelsMediumUrlById("2767815"),
    country: {
      name: "Turquia",
      flag: getFlagUrlByAlpha2("tr"),
    },
  },
  {
    name: "Muğla",
    thumbnail: getPexelsMediumUrlById("8051876"),
    country: {
      name: "Turquia",
      flag: getFlagUrlByAlpha2("tr"),
    },
  },
];

const russia = [
  {
    name: "Moscou",
    thumbnail: getPexelsMediumUrlById("753339"),
    country: {
      name: "Rússia",
      flag: getFlagUrlByAlpha2("ru"),
    },
  },
  {
    name: "São Petersburgo",
    thumbnail: getPexelsMediumUrlById("3697742"),
    country: {
      name: "Rússia",
      flag: getFlagUrlByAlpha2("ru"),
    },
  },
];

// continents
const americaDoNorte = {
  name: "América do Norte",
  title: "O continente das potências mundiais",
  image: getPexelsLandscapeUrlById("417054"),
  slug: "america-do-norte",
  description:
    "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América.",
  countries: 3,
  languages: 6,
  top100Cities: {
    count: 10,
    cities: [
      {
        name: "Toronto",
        thumbnail: getPexelsMediumUrlById("374870"),
        country: {
          name: "Canadá",
          flag: getFlagUrlByAlpha2("ca"),
        },
      },
      {
        name: "Vancouver",
        thumbnail: getPexelsMediumUrlById("2382868"),
        country: {
          name: "Canadá",
          flag: getFlagUrlByAlpha2("ca"),
        },
      },
      {
        name: "Cancún",
        thumbnail: getPexelsMediumUrlById("3608328"),
        country: {
          name: "México",
          flag: getFlagUrlByAlpha2("me"),
        },
      },
      {
        name: "Nova York",
        thumbnail: getPexelsMediumUrlById("9404534"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "Miami",
        thumbnail: getPexelsMediumUrlById("421655"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "Los Angeles",
        thumbnail: getPexelsMediumUrlById("237325"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "Las Vegas",
        thumbnail: getPexelsMediumUrlById("415999"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "Orlando",
        thumbnail: getPexelsMediumUrlById("1860618"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "São Francisco",
        thumbnail: getPexelsMediumUrlById("2351425"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
      {
        name: "Honolulu",
        thumbnail: getPexelsMediumUrlById("4319752"),
        country: {
          name: "Estados Unidos",
          flag: getFlagUrlByAlpha2("us"),
        },
      },
    ],
  },
};

const americaDoSul = {
  name: "América do Sul",
  title: "O continente dos recursos naturais",
  image: getPexelsLandscapeUrlById("3822113"),
  slug: "america-do-sul",
  description:
    "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
  countries: 12,
  languages: 9,
  top100Cities: {
    count: 3,
    cities: [
      {
        name: "Buenos Aires",
        thumbnail: getPexelsMediumUrlById("1060803"),
        country: {
          name: "Argentina",
          flag: getFlagUrlByAlpha2("ar"),
        },
      },
      {
        name: "Rio de Janeiro",
        thumbnail: getPexelsMediumUrlById("351283"),
        country: {
          name: "Brasil",
          flag: getFlagUrlByAlpha2("br"),
        },
      },
      {
        name: "Lima",
        thumbnail: getPexelsMediumUrlById("3727260"),
        country: {
          name: "Peru",
          flag: getFlagUrlByAlpha2("pe"),
        },
      },
    ],
  },
};

const africa = {
  name: "África",
  title: "O continente da diversidade",
  image: getPexelsLandscapeUrlById("2600207"),
  slug: "africa",
  description:
    "A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia).",
  countries: 54,
  languages: 2000,
  top100Cities: {
    count: 6,
    cities: [
      ...egito,
      {
        name: "Marrakech",
        thumbnail: getPexelsMediumUrlById("3889843"),
        country: {
          name: "Marrocos",
          flag: getFlagUrlByAlpha2("ma"),
        },
      },
      {
        name: "Joanesburgo",
        thumbnail: getPexelsMediumUrlById("259447"),
        country: {
          name: "África do Sul",
          flag: getFlagUrlByAlpha2("za"),
        },
      },
      {
        name: "Seoul",
        thumbnail: getPexelsMediumUrlById("237211"),
        country: {
          name: "Coréia do Sul",
          flag: getFlagUrlByAlpha2("kr"),
        },
      },
      {
        name: "Jeju",
        thumbnail: getPexelsMediumUrlById("4077772"),
        country: {
          name: "Coréia do Sul",
          flag: getFlagUrlByAlpha2("kr"),
        },
      },
    ],
  },
};

const asia = {
  name: "Ásia",
  title: "O continente dos contrastes",
  image: getPexelsLandscapeUrlById("235648"),
  slug: "asia",
  description:
    "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
  countries: 50,
  languages: 2300,
  top100Cities: {
    count: 53,
    cities: [
      ...egito,
      ...russia,
      ...turquia,
      {
        name: "Shenzhen",
        thumbnail: getPexelsMediumUrlById("3210189"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Cantão",
        thumbnail: getPexelsMediumUrlById("1366957"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Xangai",
        thumbnail: getPexelsMediumUrlById("169647"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Pequim",
        thumbnail: getPexelsMediumUrlById("7897550"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Zhuhai",
        thumbnail: getPexelsMediumUrlById("8445729"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Guilin",
        thumbnail: getPexelsMediumUrlById("2362085"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Hong Kong",
        thumbnail: getPexelsMediumUrlById("5997322"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Macau",
        thumbnail: getPexelsMediumUrlById("4223678"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },
      {
        name: "Taipei",
        thumbnail: getPexelsMediumUrlById("260566"),
        country: {
          name: "China",
          flag: getFlagUrlByAlpha2("ch"),
        },
      },

      {
        name: "Deli",
        thumbnail: getPexelsMediumUrlById("1098460"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Bombaim",
        thumbnail: getPexelsMediumUrlById("5414586"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Agra",
        thumbnail: getPexelsMediumUrlById("1603650"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Chennai",
        thumbnail: getPexelsMediumUrlById("6667281"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Jaipur",
        thumbnail: getPexelsMediumUrlById("3581368"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Calcutá",
        thumbnail: getPexelsMediumUrlById("9267903"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Bangalore",
        thumbnail: getPexelsMediumUrlById("3290386"),
        country: {
          name: "Índia",
          flag: getFlagUrlByAlpha2("in"),
        },
      },
      {
        name: "Denpasar",
        thumbnail: getPexelsMediumUrlById("4504336"),
        country: {
          name: "Indonésia",
          flag: getFlagUrlByAlpha2("id"),
        },
      },
      {
        name: "Jacarta",
        thumbnail: getPexelsMediumUrlById("2116719"),
        country: {
          name: "Indonésia",
          flag: getFlagUrlByAlpha2("id"),
        },
      },
      {
        name: "Batam",
        thumbnail: getPexelsMediumUrlById("2480285"),
        country: {
          name: "Indonésia",
          flag: getFlagUrlByAlpha2("id"),
        },
      },
      {
        name: "Jerusalém",
        thumbnail: getPexelsMediumUrlById("610533"),
        country: {
          name: "Israel",
          flag: getFlagUrlByAlpha2("is"),
        },
      },
      {
        name: "Telavive",
        thumbnail: getPexelsMediumUrlById("190339"),
        country: {
          name: "Israel",
          flag: getFlagUrlByAlpha2("is"),
        },
      },
      {
        name: "Tóquio",
        thumbnail: getPexelsMediumUrlById("2341830"),
        country: {
          name: "Japão",
          flag: getFlagUrlByAlpha2("jp"),
        },
      },
      {
        name: "Osaka",
        thumbnail: getPexelsMediumUrlById("1440476"),
        country: {
          name: "Japão",
          flag: getFlagUrlByAlpha2("jp"),
        },
      },
      {
        name: "Quioto",
        thumbnail: getPexelsMediumUrlById("402028"),
        country: {
          name: "Japão",
          flag: getFlagUrlByAlpha2("jp"),
        },
      },
      {
        name: "Chiba",
        thumbnail: getPexelsMediumUrlById("6903735"),
        country: {
          name: "Japão",
          flag: getFlagUrlByAlpha2("jp"),
        },
      },
      {
        name: "Fukuoka",
        thumbnail: getPexelsMediumUrlById("3408354"),
        country: {
          name: "Japão",
          flag: getFlagUrlByAlpha2("jp"),
        },
      },
      {
        name: "Kuala Lumpur",
        thumbnail: getPexelsMediumUrlById("1538177"),
        country: {
          name: "Malásia",
          flag: getFlagUrlByAlpha2("my"),
        },
      },
      {
        name: "Johor Bahru",
        thumbnail: getPexelsMediumUrlById("7907117"),
        country: {
          name: "Malásia",
          flag: getFlagUrlByAlpha2("my"),
        },
      },
      {
        name: "Ilha de Penang",
        thumbnail: getPexelsMediumUrlById("2306365"),
        country: {
          name: "Malásia",
          flag: getFlagUrlByAlpha2("my"),
        },
      },
      {
        name: "Cebu",
        thumbnail: getPexelsMediumUrlById("584302"),
        country: {
          name: "Filipinas",
          flag: getFlagUrlByAlpha2("ph"),
        },
      },

      {
        name: "Meca",
        thumbnail: getPexelsMediumUrlById("4118038"),
        country: {
          name: "Arábia Saudita",
          flag: getFlagUrlByAlpha2("sa"),
        },
      },
      {
        name: "Medina",
        thumbnail: getPexelsMediumUrlById("2291789"),
        country: {
          name: "Arábia Saudita",
          flag: getFlagUrlByAlpha2("sa"),
        },
      },
      {
        name: "Riad",
        thumbnail: getPexelsMediumUrlById("7391720"),
        country: {
          name: "Arábia Saudita",
          flag: getFlagUrlByAlpha2("sa"),
        },
      },
      {
        name: "Dammam",
        thumbnail: getPexelsMediumUrlById("618079"),
        country: {
          name: "Arábia Saudita",
          flag: getFlagUrlByAlpha2("sa"),
        },
      },
      {
        name: "Singapura",
        thumbnail: getPexelsMediumUrlById("6753873"),
        country: {
          name: "Singapura",
          flag: getFlagUrlByAlpha2("sg"),
        },
      },
      {
        name: "Bangkok",
        thumbnail: getPexelsMediumUrlById("1031659"),
        country: {
          name: "Tailândia",
          flag: getFlagUrlByAlpha2("th"),
        },
      },
      {
        name: "Phuket",
        thumbnail: getPexelsMediumUrlById("4100130"),
        country: {
          name: "Tailândia",
          flag: getFlagUrlByAlpha2("th"),
        },
      },
      {
        name: "Pattaya",
        thumbnail: getPexelsMediumUrlById("797409"),
        country: {
          name: "Tailândia",
          flag: getFlagUrlByAlpha2("th"),
        },
      },
      {
        name: "Chiang Mai",
        thumbnail: getPexelsMediumUrlById("2956618"),
        country: {
          name: "Tailândia",
          flag: getFlagUrlByAlpha2("th"),
        },
      },
      {
        name: "Krabi",
        thumbnail: getPexelsMediumUrlById("1031798"),
        country: {
          name: "Tailândia",
          flag: getFlagUrlByAlpha2("th"),
        },
      },

      {
        name: "Dubai",
        thumbnail: getPexelsMediumUrlById("3787839"),
        country: {
          name: "Emirados Árabes Unidos",
          flag: getFlagUrlByAlpha2("ar"),
        },
      },
      {
        name: "Abu Dhabi",
        thumbnail: getPexelsMediumUrlById("1589237"),
        country: {
          name: "Emirados Árabes Unidos",
          flag: getFlagUrlByAlpha2("ar"),
        },
      },
      {
        name: "Cidade de Ho Chi Minh",
        thumbnail: getPexelsMediumUrlById("2299337"),
        country: {
          name: "Vietnã",
          flag: getFlagUrlByAlpha2("vn"),
        },
      },
      {
        name: "Baía de Ha Long",
        thumbnail: getPexelsMediumUrlById("2993128"),
        country: {
          name: "Vietnã",
          flag: getFlagUrlByAlpha2("vn"),
        },
      },
      {
        name: "Hanói",
        thumbnail: getPexelsMediumUrlById("58597"),
        country: {
          name: "Vietnã",
          flag: getFlagUrlByAlpha2("vn"),
        },
      },
      {
        name: "Da Nang",
        thumbnail: getPexelsMediumUrlById("5746277"),
        country: {
          name: "Vietnã",
          flag: getFlagUrlByAlpha2("vn"),
        },
      },
    ],
  },
};

const europa = {
  name: "Europa",
  title: "O continente da qualidade de vida",
  image: getPexelsLandscapeUrlById("9390776"),
  slug: "europa",
  description:
    "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
  countries: 50,
  languages: 60,
  top100Cities: {
    count: 32,
    cities: [
      ...russia,
      ...turquia,
      {
        name: "Viena",
        thumbnail: getPexelsMediumUrlById("2351425"),
        country: {
          name: "Áustria",
          flag: getFlagUrlByAlpha2("au"),
        },
      },
      {
        name: "Bruxelas",
        thumbnail: getPexelsMediumUrlById("2960887"),
        country: {
          name: "Bélgica",
          flag: getFlagUrlByAlpha2("be"),
        },
      },
      {
        name: "Praga",
        thumbnail: getPexelsMediumUrlById("820735"),
        country: {
          name: "Tchéquia",
          flag: getFlagUrlByAlpha2("cz"),
        },
      },
      {
        name: "Copenhage",
        thumbnail: getPexelsMediumUrlById("4947138"),
        country: {
          name: "Dinamarca",
          flag: getFlagUrlByAlpha2("dk"),
        },
      },
      {
        name: "Paris",
        thumbnail: getPexelsMediumUrlById("1850619"),
        country: {
          name: "França",
          flag: getFlagUrlByAlpha2("fr"),
        },
      },
      {
        name: "Nice",
        thumbnail: getPexelsMediumUrlById("3016350"),
        country: {
          name: "França",
          flag: getFlagUrlByAlpha2("fr"),
        },
      },
      {
        name: "Berlim",
        thumbnail: getPexelsMediumUrlById("9392358"),
        country: {
          name: "Alemanha",
          flag: getFlagUrlByAlpha2("de"),
        },
      },
      {
        name: "Munique",
        thumbnail: getPexelsMediumUrlById("4213372"),
        country: {
          name: "Alemanha",
          flag: getFlagUrlByAlpha2("de"),
        },
      },
      {
        name: "Frankfurt",
        thumbnail: getPexelsMediumUrlById("1124460"),
        country: {
          name: "Alemanha",
          flag: getFlagUrlByAlpha2("de"),
        },
      },
      {
        name: "Atenas",
        thumbnail: getPexelsMediumUrlById("9411998"),
        country: {
          name: "Grécia",
          flag: getFlagUrlByAlpha2("gr"),
        },
      },
      {
        name: "Iráklio",
        thumbnail: getPexelsMediumUrlById("9390722"),
        country: {
          name: "Grécia",
          flag: getFlagUrlByAlpha2("gr"),
        },
      },
      {
        name: "Rhodes",
        thumbnail: getPexelsMediumUrlById("2625752"),
        country: {
          name: "Grécia",
          flag: getFlagUrlByAlpha2("gr"),
        },
      },
      {
        name: "Budapeste",
        thumbnail: getPexelsMediumUrlById("9392346"),
        country: {
          name: "Hungria",
          flag: getFlagUrlByAlpha2("hu"),
        },
      },
      {
        name: "Dublin",
        thumbnail: getPexelsMediumUrlById("1650882"),
        country: {
          name: "Irlanda",
          flag: getFlagUrlByAlpha2("ir"),
        },
      },
      {
        name: "Roma",
        thumbnail: getPexelsMediumUrlById("532263"),
        country: {
          name: "Itália",
          flag: getFlagUrlByAlpha2("it"),
        },
      },
      {
        name: "Milão",
        thumbnail: getPexelsMediumUrlById("2954412"),
        country: {
          name: "Itália",
          flag: getFlagUrlByAlpha2("it"),
        },
      },
      {
        name: "Veneza",
        thumbnail: getPexelsMediumUrlById("586687"),
        country: {
          name: "Itália",
          flag: getFlagUrlByAlpha2("it"),
        },
      },
      {
        name: "Florença",
        thumbnail: getPexelsMediumUrlById("4819658"),
        country: {
          name: "Itália",
          flag: getFlagUrlByAlpha2("it"),
        },
      },
      {
        name: "Amsterdã",
        thumbnail: getPexelsMediumUrlById("4237154"),
        country: {
          name: "Países Baixos",
          flag: getFlagUrlByAlpha2("nl"),
        },
      },
      {
        name: "Cracóvia",
        thumbnail: getPexelsMediumUrlById("46273"),
        country: {
          name: "Polônia",
          flag: getFlagUrlByAlpha2("pl"),
        },
      },
      {
        name: "Varsóvia",
        thumbnail: getPexelsMediumUrlById("3009706"),
        country: {
          name: "Polônia",
          flag: getFlagUrlByAlpha2("pl"),
        },
      },
      {
        name: "Lisboa",
        thumbnail: getPexelsMediumUrlById("1534560"),
        country: {
          name: "Portugal",
          flag: getFlagUrlByAlpha2("pr"),
        },
      },
      {
        name: "Porto",
        thumbnail: getPexelsMediumUrlById("2549573"),
        country: {
          name: "Portugal",
          flag: getFlagUrlByAlpha2("pr"),
        },
      },

      {
        name: "Barcelona",
        thumbnail: getPexelsMediumUrlById("1388030"),
        country: {
          name: "Espanha",
          flag: getFlagUrlByAlpha2("es"),
        },
      },
      {
        name: "Madrid",
        thumbnail: getPexelsMediumUrlById("670261"),
        country: {
          name: "Espanha",
          flag: getFlagUrlByAlpha2("es"),
        },
      },
      {
        name: "Estocolmo",
        thumbnail: getPexelsMediumUrlById("3779783"),
        country: {
          name: "Suécia",
          flag: getFlagUrlByAlpha2("se"),
        },
      },

      {
        name: "Londres",
        thumbnail: getPexelsMediumUrlById("460672"),
        country: {
          name: "Reino Unido",
          flag: getFlagUrlByAlpha2("gb"),
        },
      },
    ],
  },
};

const oceania = {
  name: "Oceania",
  title: "O menor continente da Terra",
  image: getPexelsLandscapeUrlById("3326366"),
  slug: "oceania",
  description:
    "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas.",
  countries: 16,
  languages: 18,
  top100Cities: {
    count: 3,
    cities: [
      {
        name: "Sydney",
        thumbnail: getPexelsMediumUrlById("1878293"),
        country: {
          name: "Austrália",
          flag: getFlagUrlByAlpha2("au"),
        },
      },
      {
        name: "Melbourne",
        thumbnail: getPexelsMediumUrlById("2097616"),
        country: {
          name: "Austrália",
          flag: getFlagUrlByAlpha2("au"),
        },
      },
      {
        name: "Auckland",
        thumbnail: getPexelsMediumUrlById("5169056"),
        country: {
          name: "Nova Zelândia",
          flag: getFlagUrlByAlpha2("nz"),
        },
      },
    ],
  },
};

export const CONTINENTS = {
  "america-do-norte": americaDoNorte,
  "america-do-sul": americaDoSul,
  africa,
  asia,
  europa,
  oceania,
};
