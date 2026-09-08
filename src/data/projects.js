import project1Image from "../assets/projects/project-1.jpg";
import project2Image from "../assets/projects/project-2.jpg";
import resellBungalowImage from "../assets/projects/resell-bungalow-1.jpg";
import project3Image from "../assets/projects/kalpataru-blossom.jpg";
import rentalProjectImage from "../assets/projects/rental-project-1.jpg";

const projects = [
  {
    id: "project-1",

    name: "Kolte Patil The Reserve",
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

    pricingNote:
      "* On-possession charges extra.",

    has360: true,

    tourUrl:
      "https://tours.punepropertycircle.com/tours/Ytbc0wKgZ",
  },


  /* =================================
     PROJECT 2
     SAAJGIRI NANDED CITY
  ================================= */

  {
    id: "project-2",

    name: "Saajgiri Nanded City",

    sheetName: "saajgiri 3 bhk",

    category: "new",

    location: "Nanded City",

    type: "3 BHK",

    status: "New Project",

    image: project2Image,

    shortDescription:
      "Premium 3 BHK homes in Nanded City.",

    description:
      "Saajgiri Nanded City offers premium 3 BHK homes in the Nanded City area of Pune.",

    features: [
      "3 BHK Premium Homes",
      "Nanded City Location",
      "360° Virtual Tour",
    ],

    has360: true,

    tourUrl:
      "https://tours.punepropertycircle.com/tours/TiVbO0eRn",
  },
  {
    id: "project-3",
    name: "Kalpataru Blossom",
    sheetName: "Kalpataru Blossom",
    category: "new",
    location: "Sinhagad Road, Pune",
    type: "2, 3, 4 & 4.5 BHK Luxury Homes",
    status: "New Project",

    image: project3Image,

    shortDescription:
      "Premium 2, 3, 4 & 4.5 BHK luxury homes on Sinhagad Road, Pune.",

    description:
      "Kalpataru Blossom is a premium residential project spread across 16 acres, featuring 3 premium towers in Phase 1. The project offers 2, 3, 4 and 4.5 BHK luxury homes with possession planned from March 2028.",

    features: [
      "16 Acres Total Land Parcel",
      "3.5 Acres Phase 1",
      "3 Premium Towers",
      "2, 3, 4 & 4.5 BHK Luxury Homes",
      "4 Apartments per Floor",
      "3 High-Speed Lifts per Tower",
      "Builder Possession – March 2028",
      "RERA Possession – March 2029"
    ],

    pricing: [
      {
        type: "2 BHK",
        carpetSize: "885 sq.ft.",
        launchPrice: "₹1.62 Cr"
      },
      {
        type: "2 BHK",
        carpetSize: "900 sq.ft.",
        launchPrice: "₹1.64 Cr"
      },
      {
        type: "2 BHK",
        carpetSize: "940 sq.ft.",
        launchPrice: "₹1.75 Cr"
      },
      {
        type: "3 BHK",
        carpetSize: "1100 sq.ft.",
        launchPrice: "₹2.15 Cr"
      },
      {
        type: "3 BHK",
        carpetSize: "1122 sq.ft.",
        launchPrice: "₹2.16 Cr"
      },
      {
        type: "3 BHK",
        carpetSize: "1266 sq.ft.",
        launchPrice: "₹2.40 Cr"
      },
      {
        type: "3 BHK",
        carpetSize: "1422 sq.ft.",
        launchPrice: "₹2.75 Cr"
      },
      {
        type: "3 BHK",
        carpetSize: "1530 sq.ft.",
        launchPrice: "₹2.90 Cr"
      },
      {
        type: "4 BHK",
        carpetSize: "1965 sq.ft.",
        launchPrice: "₹4.10 Cr"
      },
      {
        type: "4.5 BHK",
        carpetSize: "2400 sq.ft.",
        launchPrice: "₹5.20 Cr"
      },
      {
        type: "4.5 BHK",
        carpetSize: "2637 sq.ft.",
        launchPrice: "₹5.40 Cr"
      },
      {
        type: "Commercial Showroom",
        carpetSize: "1800 sq.ft. carpet",
        launchPrice: "₹12.50 Cr All Inclusive"
      }
    ],

    pricingNote:
      "Commercial showroom: 40 ft frontage, main road facing.",

    possession:
      "Builder Possession – March 2028 | RERA Possession – March 2029",

    has360: true,

    tourUrl:
      "https://tours.punepropertycircle.com/tours/AghgSTrHh",
  },
{
  id: "rental-project-1",
  name: "Majestic Swapnagan",
  category: "rental",
  location: "Pune",
  type: "2 BHK",
  status: "For Rent",
  image: rentalProjectImage,

  shortDescription:
    "Unfurnished 2 BHK apartment for rent in Pune.",

  description:
    "Unfurnished 2 BHK apartment available for rent in Pune.",

  features: [
    "2 BHK",
    "Unfurnished",
    "Rent – ₹26,000/month",
    "Deposit – ₹60,000"
  ],

  pricing: [
    {
      type: "2 BHK",
      launchPrice: "₹26,000/month",
      deposit: "₹60,000"
    }
  ],

 has360: true,

tourUrl:
  "https://tours.punepropertycircle.com/tours/3qz9uRvUZ",
}


  /* =================================
     RESALE BUNGALOW
  ================================= */


];

export default projects;