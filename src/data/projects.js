import project1Image from "../assets/projects/project-1.jpg";
import resellBungalowImage from "../assets/projects/resell-bungalow-1.jpg";

const projects = [
  {
    id: "project-1",

    name: "project 1",
      sheetName: "Kolate Patil",

    category: "new",

    location: "Pune",

    type: "2 & 3 BHK Premium Homes",

    status: "New Project",

    image: project1Image,

    shortDescription:
      "Premium 2 & 3 BHK homes .",

    description:
      "The Reserve offers premium 2 & 3 BHK homes with carpet areas ranging from 770 sq.ft. to 1,149 sq.ft. The project offers multiple pricing options including launch pricing, EOI Gold and EOI Platinum.",

    features: [
      "2 BHK Premium – 770 sq.ft.",
      "2 BHK Large – 811–832 sq.ft.",
      "2 BHK X-Large – 877 sq.ft.",
      "3 BHK – 1,149 sq.ft.",
      "All-Inclusive Pricing Options",
      "EOI Gold – ₹1L",
      "EOI Platinum – ₹2L",
      "Possession Charges Extra",
    ],

    pricing: [
      {
        type: "2 BHK (Premium)",
        carpetSize: "770 sq.ft.",
        launchPrice: "₹87L onwards",
        goldPrice: "₹85.99L onwards",
        platinumPrice: "₹84.99L onwards",
      },

      {
        type: "2 BHK (Large)",
        carpetSize: "811–832 sq.ft.",
        launchPrice: "₹92L onwards",
        goldPrice: "₹90.99L onwards",
        platinumPrice: "₹89.99L onwards",
      },

      {
        type: "2 BHK (X-Large)",
        carpetSize: "877 sq.ft.",
        launchPrice: "₹99.5L onwards",
        goldPrice: "₹98.49L onwards",
        platinumPrice: "₹97.49L onwards",
      },

      {
        type: "3 BHK",
        carpetSize: "1,149 sq.ft.",
        launchPrice: "₹129.5L onwards",
        goldPrice: "₹128.49L onwards",
        platinumPrice: "₹127.49L onwards",
      },
    ],

    pricingNote: "* On-possession charges extra.",

    has360: true,

    tourUrl:
      "https://tours.punepropertycircle.com/tours/Ytbc0wKgZ",
  },

  {
    id: "resell-bungalow-1",

    name: "Luxury 3-Floor Bungalow",

    category: "resale",

    location: "Pune",

    type: "Luxury Bungalow",

    status: "Resale",

    image: resellBungalowImage,

    shortDescription:
      "A spacious three-floor luxury bungalow with premium interiors.",

    description:
      "A premium three-floor resale bungalow with spacious interiors and multiple living spaces.",

    features: [
      "Three-Floor Bungalow",
      "Multiple Bedrooms",
      "Multiple Bathrooms",
      "Balcony",
      "Two Terrace Areas",
      "360° Virtual Tour",
    ],

    has360: true,

    tourUrl:
      "https://app.cloudpano.com/tours/8MCmCEySv",
  },
];

export default projects;