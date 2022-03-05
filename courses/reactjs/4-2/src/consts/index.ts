import { CONTINENTS } from "../continents";

export const TRAVEL_TYPES = [
  {
    imageSrc: "/nightlife.svg",
    label: "vida noturna",
  },
  {
    imageSrc: "/beach.svg",
    label: "praia",
  },
  {
    imageSrc: "/modern.svg",
    label: "moderno",
  },
  {
    imageSrc: "/classic.svg",
    label: "clássico",
  },
  {
    imageSrc: "/more.svg",
    label: "e mais...",
  },
];

export const CONTINENT_SLIDES = Object.values(CONTINENTS).map(
  ({ name, title, image, slug }) => {
    return {
      title: name,
      subtitle: title,
      backgroundUrl: image,
      path: `/continente/${slug}`,
    };
  }
);
