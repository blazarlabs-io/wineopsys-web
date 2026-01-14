export type SectionData = {
  id: string;
  headingIcon?: string;
  heading?: string;
  cards: { title: string; items: string[] }[];
  shapes: { classnames: string; src: string }[];
  leftHeroimage?: string;
  rightHeroimage?: string;
  className?: string;
};

export const SECTIONS: SectionData[] = [
  {
    id: "vineyards",
    headingIcon: "/icons/vineyards.svg",
    heading: "Vineyard Management",
    leftHeroimage: "/modules/laptops/vineyard-laptop.png",
    rightHeroimage: "/modules/vineyard-management.png",
    shapes: [
      { src: "/shapes/object-gray-romb.svg", classnames: "right-[-841px] top-6 w-[542px]" },
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
    id: "grapes",
    headingIcon: "/icons/grapes.svg",
    heading: "Grapes Management",
    leftHeroimage: "/modules/laptops/grapes-laptop.png",
    rightHeroimage: "/modules/images/grapes-management.png",
    shapes: [
      { src: "/object-left.svg", classnames: "right-[300px] top-[158px] w-[491px]" },
    ],
    cards: [
      {
        title: "Manages all grape intakes as structured batches",
        items: [
          "Batch id and harvest campaign",
          "Origin (vineyard/parcel or supplier)",
          "Processing location",
        ],
      },
      {
        title: "Captures reception quality and logistics",
        items: [
          "Net weight, sugar and acidity at intake", 
          "Logistics status (in transit, received, etc.)"
        ],
      },
      {
        title: "Anchors the production flow",
        items: [
          "Acts as the bridge between vineyard production data and primary vinification",
          "Provides the basis for automated grape registers for authorities",
        ],
      },
    ],
  },
  {
    id: "wine-production",
    headingIcon: "/icons/wine-production.svg",
    heading: "Wine Production",
    leftHeroimage: "/modules/laptops/wine-laptop.png",
    rightHeroimage: "/modules/images/wine-production.png",
    shapes: [
      { src: "/shapes/object-gray-romb.svg", classnames: "right-[-740px] top-[360px] w-[493px]" },
    ],
    cards: [
      {
        title: "Covers primary vinification of must lots",
        items: [
          "Tracks status from fresh must to fermenting, transferred and completed",
          "Stores continuous lab data such as alcohol, sugar and acidity over time",
          "Shows quantities and surplus or deficit against demand",
          "Links lots to tanks with volumes and occupancy",
          "Attaches cellar tasks such as punch-downs, racking and temperature checks at lot level"
        ],
      },
      {
        title: "Manages secondary vinification and ageing for wines and blends",
        items: [
          "Keeps wine names, styles and ageing status such as stored, bottled, ageing or at risk", 
          "Shows quantities and coverage against demand",
          "Stores lab results for finished product quality tracking",
          "Groups wines into collections and identifies at-risk volumes",
          "Acts as the source for bottling operations and later tokenisation where this is used"
        ],
      },
      {
        title: "Supports bottling as part of the same flow",
        items: [
          "Manages bottling runs and packaging materials",
          "Forms bottled lots so each bottled wine remains linked back to its source batch",
        ],
      },
    ],
  },
  {
    id: "order-management",
    headingIcon: "/icons/order-management.svg",
    heading: "Order Management",
    leftHeroimage: "/modules/laptops/order-laptop.png",
    rightHeroimage: "/modules/images/order.png",
    shapes: [
      { src: "/object-left.svg", classnames: "right-[455px] top-[-360px] w-[640px]" },
    ],
    cards: [
      {
        title: "Connects product orders with available stock and production plans",
        items: [
          
        ],
      },
      {
        title: "Links product orders with stock and production so the right batches are allocated and shipped on time",
        items: [
        
        ],
      },
      {
        title: "Supports fulfilment from the right batches at the right time",
        items: [
         
        ],
      },
    ],
  },
  {
    id: "vessel-management",
    headingIcon: "/icons/vessel-management.svg", 
    heading: "Vessel Management",
    leftHeroimage: "/modules/laptops/vessel-laptop.png",
    rightHeroimage: "/modules/images/vessel.png",
    shapes: [
      { src: "/shapes/object-gray-romb.svg", classnames: "right-[347px] top-[-424px] w-[452px]" },
      { src: "/object-left.svg", classnames: "right-[-755px] top-[-479px] w-[640px]" },
    ],
    cards: [
      {
        title: "Maintains a registry of tanks, barrels and special vessels",
        items: [
          "Capacity, fill level, status and cellar location"
        ],
      },
      {
        title: "Stores detailed technical data for barrels",
        items: [
          "Material, toast level, oxygen transmission rate, stave thickness, manufacturer"
        ],
      },
      {
        title: "Tracks vessel history and related work",
        items: [
          "Barrel history and previous fillings",
          "Tasks such as cleaning, inspections and topping up",
          "Documents attached per vessel"
        ],
      },
    ],
  },
  {
    id: "consumables",
    headingIcon: "/icons/consumables.svg", 
    heading: "Consumables",
    leftHeroimage: "/modules/laptops/consumables-laptop.png",
    rightHeroimage: "/modules/images/consumables.png",
    shapes: [
      { src: "/object-left.svg", classnames: "right-[250px] top-[-66px] w-[504px]" },
      { src: "/shapes/object-gray-romb.svg", classnames: "right-[-982px] top-[-440px] w-[493px]" },
    ],
    cards: [
      {
        title: "Includes chemistry for enological products",
        items: [
          "Products such as sulphur dioxide, fining agents and stabilisers",
          "Quantity on hand and minimum stock levels",
          "Recommended dosage information",
          "Traceability of additions linked to lab results and final wine quality"
        ],
      },
      {
        title: "Includes non-chemical consumables",
        items: [
          "Bottles, closures, filters, labels and packaging materials",
          "Stock levels and minimums to support bottling planning and procurement"
        ],
      }
    ],
  },
  {
    id: "storage",
    headingIcon: "/icons/storage.svg", 
    heading: "Storage",
    leftHeroimage: "/modules/laptops/storage-laptop.png",
    rightHeroimage: "/modules/images/storage.png",
    shapes: [
    ],
    cards: [
      {
        title: "Connects product orders with available stock and production plans",
        items: [
         
        ],
      },
      {
        title: "Links product lots to physical locations",
        items: [
          "Connects each lot to specific vessels and locations",
          "Shows current volume and capacity utilisation"
        ],
      }
    ],
  },
  {
    id: "team-tasks",
    headingIcon: "/icons/team-tasks.svg", 
    heading: "Team & Tasks",
    leftHeroimage: "/modules/laptops/team-laptop.png",
    rightHeroimage: "/modules/images/team.png",
    shapes: [
      { src: "/object-left.svg", classnames: "right-[587px] top-[-706px] w-[704px]" },
    ],
    cards: [
      {
        title: "Embeds tasks directly into production data",
        items: [
          "Context-aware tasks attached to vineyards, batches, wine lots, vessels or inventory items"
        ],
      },
      {
        title: "Structures work through clear statuses and dates",
        items: [
          "Status categories such as blocked, pending, in progress and done",
          "Due dates to support planning and prioritisation",
          "Workload summaries per user by status and due date"
        ],
      },
      {
        title: "Keeps a registry of people and roles",
        items: [
          "Staff list and roles",
          "Assignment and filtering by responsible person or role",
        ],
      }
    ],
  },
  {
    id: "reports",
    headingIcon: "/icons/reports.svg", 
    heading: "Reports",
    leftHeroimage: "/modules/laptops/reports-laptop.png",
    rightHeroimage: "/modules/images/reports.png",
    shapes: [
      { src: "/object-left.svg", classnames: "right-[287px] top-[131px] w-[427px]" },
      { src: "/shapes/object-gray-romb.svg", classnames: "right-[-717px] top-[-335px] w-[707px]" },
    ],
    cards: [
      {
        title: "Compiles operational data into regulatory registers and annexes",
        items: [
          "Grapes registers",
          "Bulk wine and bottling reports",
          "Stock and other compliance documents"
        ],
      },
      {
        title: "Builds reports directly from the same structured operational data used in daily work",
        items: [
   
        ],
      },
      {
        title: "Uses nomenclature as a central master dictionary",
        items: [
          "Grape varieties, suppliers, clients, packaging types and other reference data"
        ],
      }
    ],
  },
  {
    id: "documents",
    headingIcon: "/icons/documents.svg", 
    heading: "Documents",
    leftHeroimage: "/modules/laptops/documents-laptop.png",
    rightHeroimage: "/modules/images/reports.png",
    className: "mb-[185px]",
    shapes: [
      // { src: "/shapes/object-gray-romb.svg", classnames: "right-[487px] top-[-61px] w-[707px]" },
      // { src: "/object-left.svg", classnames: "right-[-917px] top-[-405px] w-[427px]" },
    ],
    cards: [
      {
        title: "Acts as a hub for key winery documents",
        items: [
          "Certificates, lab analyses, contracts and export documents",
        ],
      },
      {
        title: "Allows documents to be attached where they are needed",
        items: [
          "Linked to vineyards, batches, wines, vessels or reports as relevant"
        ],
      }
    ],
  },

];
