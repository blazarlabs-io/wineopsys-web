export type SectionData = {
  headingIcon?: string;
  heading?: string;
  imageLeft: { src: string; classnames: string };
  imageRight: { src: string; classnames: string };
  cards: { title: string; items: string[] }[];
  shapes: { classnames: string; src: string }[];
  heroimage?: string;
};

export const SECTIONS: SectionData[] = [
  {
    headingIcon: "/icons/vineyards.svg",
    heading: "Vineyard Management",
    imageLeft: { src: "/img/laptop.png", classnames: "z-10" },
    imageRight: { src: "/img/vineyard.jpg", classnames: "hidden sm:block" },
    heroimage: "/modules/vineyard-management.png",
    shapes: [
      { src: "/img/blob.svg", classnames: "right-0 top-6 w-[520px] opacity-30" },
      { src: "/img/blob2.svg", classnames: "-left-10 top-24 w-[380px] opacity-20" },
    ],
    cards: [
      {
        title: "Keeps a central register of all vineyards and parcels, including",
        items: [
          "Location and cadastral identifiers",
          "Surface and vine age",
          "Planting scheme, site conditions and varietal classification",
        ],
      },
      {
        title: "Tracks agronomic status and potential",
        items: ["Vegetation, ripening, harvest-ended status", "Expected vs actual yields"],
      },
      {
        title: "Links each parcel to its operational context",
        items: [
          "Timeline of field operations",
          "Lab results for grapes and weather snapshots",
          "Related tasks and documents",
        ],
      },
    ],
  },
  {
    imageLeft: { src: "/img/laptop.png", classnames: "z-10" },
    imageRight: { src: "/img/vineyard.jpg", classnames: "hidden sm:block" },
    shapes: [
      { src: "/img/blob.svg", classnames: "right-0 top-6 w-[520px] opacity-30" },
      { src: "/img/blob2.svg", classnames: "-left-10 top-24 w-[380px] opacity-20" },
    ],
    cards: [
      {
        title: "Keeps a central register of all vineyards and parcels, including",
        items: [
          "Location and cadastral identifiers",
          "Surface and vine age",
          "Planting scheme, site conditions and varietal classification",
        ],
      },
      {
        title: "Tracks agronomic status and potential",
        items: ["Vegetation, ripening, harvest-ended status", "Expected vs actual yields"],
      },
      {
        title: "Links each parcel to its operational context",
        items: [
          "Timeline of field operations",
          "Lab results for grapes and weather snapshots",
          "Related tasks and documents",
        ],
      },
    ],
  },

];
