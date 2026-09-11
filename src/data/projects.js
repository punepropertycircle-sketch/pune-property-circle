import project1Image from "../assets/projects/project-1.jpg";
import project2Image from "../assets/projects/project-2.jpg";

import project3Image from "../assets/projects/kalpataru-blossom.jpg";
import rentalProjectImage from "../assets/projects/rental-project-1.jpg";
import shubhaKalyanImage from "../assets/projects/shubha-kalyan.jpg";
import shimmerNShineImage from "../assets/projects/shimmer-n-shine.jpg";
import siddhivinayakaGreenOneImage from "../assets/projects/siddhivinayaka-green-one.jpg";
import venkateshSkylifeImage from "../assets/projects/venkatesh-skylife.jpg";
import harmonyApartmentsImage from "../assets/projects/harmony-apartments.jpg";

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
  /* =================================
   PROJECT 4
   SIDDHIVINAYAKA GREEN ONE
================================= */

{
  id: "project-4",

  name: "Siddhivinayak Green One",

  category: "new",

  location: "Pune",

  type: "2 BHK",

  status: "New Project",

  image: siddhivinayakaGreenOneImage,

  shortDescription:
    "Premium 2 BHK homes with carpet areas from 740 to 845 sq.ft.",

  description:
    "Siddhivinayaka Green One offers 2 BHK homes with multiple carpet area options ranging from 740 sq.ft. to 845 sq.ft. Possession is planned for December 2028.",

  features: [
    "2 BHK Premium Homes",
    "Carpet Areas – 740 to 845 sq.ft.",
    "RERA No. – PR1260002503030",
    "Possession – December 2028",
    "Booking Amount – 10% of Agreement Value",
    "Floor Rise Charges Applicable",
    "Legal Charges – ₹15,000",
    "Maintenance – ₹4/sq.ft./month"
  ],

  pricing: [
    {
      type: "2 BHK",
      carpetSize: "740 sq.ft.",
      launchPrice: "₹72.90L"
    },
    {
      type: "2 BHK",
      carpetSize: "756 sq.ft.",
      launchPrice: "₹74.50L"
    },
    {
      type: "2 BHK",
      carpetSize: "772 sq.ft.",
      launchPrice: "₹75.90L"
    },
    {
      type: "2 BHK",
      carpetSize: "843 sq.ft.",
      launchPrice: "₹81.90L"
    },
    {
      type: "2 BHK",
      carpetSize: "845 sq.ft.",
      launchPrice: "₹81.90L"
    }
  ],

  pricingNote:
    "Prices mentioned are indicative and subject to change without prior notice.",

  possession:
    "December 2028",

  has360: true,

  tourUrl:
    "https://tours.punepropertycircle.com/tours/0Gh4w-T8u"
},
{
  id: "project-5",
  name: "Venkatesh Skylife",
  sheetName: "Venkatesh Skylife",
  category: "new",
  location: "Near Lokmat Press Office, Vadgaon Bk, Pune",
  type: "2, 3 & 4 BHK Spacious Flats",
  status: "New Project",
  image: venkateshSkylifeImage,

  shortDescription:
    "Spacious 2, 3 & 4 BHK flats with premium amenities and endless views of Khadakwasala & Sinhgad Fort.",

  description:
    "Venkatesh Skylife is a community of 112 flats spread across 1.35 acres in a serene location near Lokmat Press Office, Vadgaon Bk. The project offers spacious 2, 3 & 4 BHK flats with 30,000 sq.ft. of amenities, 5 levels of car parking and modern lifestyle amenities.",

  features: [
    "Community of 112 Flats",
    "1.35 Acres of Serene Location",
    "30,000 Sq.ft. Amenities",
    "Luxurious Internal Specifications",
    "2, 3 & 4 BHK Spacious Flats",
    "Endless Views of Khadakwasala & Sinhgad Fort",
    "5 Levels of Car Parking",
    "Good Connectivity to School, Hospital & Market",
    "Community Living",
    "20+ Modern Amenities",
    "Possession – Within 28 Months"
  ],

  pricing: [
    {
      type: "2 BHK",
      carpetSize: "975 sq.ft.",
      launchPrice: "₹1.48 Cr",
      parking: "1 Covered Car Park"
    },
    {
      type: "3 BHK",
      carpetSize: "1220–1364 sq.ft.",
      launchPrice: "₹1.79–2.02 Cr",
      parking: "1 Covered Car Park"
    },
    {
      type: "4 BHK",
      carpetSize: "1633 sq.ft.",
      launchPrice: "₹2.61 Cr",
      parking: "2 Covered Car Parks"
    }
  ],

  pricingNote:
    "Price and availability are subject to change.",

  possession:
    "Within 28 Months",

  has360: true,

  tourUrl:
    "https://tours.punepropertycircle.com/tours/34g2HqALK"
},
{
  id: "rental-project-1",
  name: "Majestic Swapnangan",
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
},
/* =================================
   PROJECT 4
   SIDDHIVINAYAKA GREEN ONE
================================= */
{
  id: "project-6",
  name: "Harmony Apartments",
  sheetName: "Harmony Apartments",
  category: "new",
  location: "Pune",
  type: "4.5 BHK",
  status: "New Project",
  image: harmonyApartmentsImage,

  shortDescription:
    "Spacious 4.5 BHK apartments with 2,017.07 sq.ft. carpet area.",

  description:
    "Harmony Apartments offers spacious 4.5 BHK apartments with a carpet area of 2,017.07 sq.ft., living room balcony and master bedroom balcony. The project offers multiple floor options with total flat costs ranging from approximately ₹3.22 Cr to ₹3.27 Cr.",

  features: [
    "4.5 BHK Spacious Apartments",
    "2,017.07 sq.ft. Carpet Area",
    "161.46 sq.ft. Living Room Balcony",
    "78.79 sq.ft. Master Bedroom Balcony",
    "3 Four-Wheeler Parking",
    "3 Two-Wheeler Parking"
  ],

  pricing: [
    {
      type: "4.5 BHK",
      carpetSize: "2,017.07 sq.ft.",
      launchPrice: "₹2.85 Cr – ₹2.90 Cr",
      totalCost: "₹3.22 Cr – ₹3.27 Cr"
    }
  ],

  pricingNote:
    "Costing effective from 28th February 2026 until further notice. Previous costings are not valid.",

  has360: true,

  tourUrl:
    "https://tours.punepropertycircle.com/tours/b1-IlL7hJ"
},

  /* =================================
     RESALE BUNGALOW

     ================================= */
{
  id: "resale-project-2",
  name: "Shimmer N Shine",
  sheetName: "Shimmer N Shine",
  category: "resale",
  location: "Sinhgad Road, Hingane Khurd, Pune 411051",
  type: "2 BHK Fully Furnished",
  status: "Resale Available",

  image: shimmerNShineImage,

  shortDescription:
    "Fully furnished 2 BHK resale flat at Shimmer N Shine, Sinhgad Road, Pune.",

  description:
    "Fully furnished 2 BHK resale flat in Shimmer N Shine, Sinhgad Road, Hingane Khurd, Pune. The flat is located on the 3rd floor of a 14-floor building and offers 786 + 119 sq.ft. carpet area with 1 covered car parking.",

  features: [
    "2 BHK Fully Furnished",
    "Built-up Area – 1156 sq.ft.",
    "Carpet Area – 786 + 119 sq.ft.",
    "3rd Floor of 14 Floors",
    "1 Covered Car Parking",
    "3 Balconies / Terraces Including Dry Area",
    "North Facing",
    "Property Age – 8 Years",
    "All Amenities",
    "Flat No. A2-301"
  ],

  pricing: [
    {
      type: "2 BHK Fully Furnished",
      carpetSize: "786 + 119 sq.ft.",
      builtupArea: "1156 sq.ft.",
      launchPrice: "₹1.50 Cr*"
    }
  ],

  pricingNote:
    "Price ₹1.50 Cr*. Price and availability are subject to change.",

  flatDetails: {
    
    wing: "A2",
    floor: "3rd",
    totalFloors: "14",
    facing: "North",
    age: "8 Years",
    parking: "1 Covered",
    balconies: "3 Including Dry"
  },

  roomSizes: [
    'Living: 14\'6" × 12\'0"',
    'Dining: 9\'0" × 8\'6"',
    'Kitchen: 8\'0" × 7\'6"',
    'Bedroom 1: 11\'8" × 11\'6"',
    'Bedroom 2: 11\'0" × 14\'0"',
    'Toilet 1: 8\'0" × 5\'0"',
    'Toilet 2: 7\'6" × 5\'0"',
    "Terraces: Attached to the living room and both bedrooms."
  ],

 has360: true,
tourUrl:
  "https://tours.punepropertycircle.com/tours/d270dUSec"
},



     {
  id: "resale-project-1",

  name: "Shubha Kalyan Society",

  sheetName: "Shubha Kalyan Society",

  category: "resale",

  location: "Nanded City, Pune",

  type: "3 BHK Resale",

  status: "Resale Available",

  image: shubhaKalyanImage,

  shortDescription:
    "Spacious 3 BHK resale flats with 1245 sq.ft. carpet area in Shubha Kalyan Society, Nanded City.",

  description:
    "Spacious 3 BHK resale flats available in Shubha Kalyan Society, Nanded City. These homes offer a generous 1245 sq.ft. carpet area and are suitable for families looking for a spacious resale property in Nanded City.",

  features: [
    "3 BHK Resale Flats",
    "1245 sq.ft. Carpet Area",
    "3 Resale Flats Available",
    "Premium Nanded City Location",
    "Spacious Family Layout",
    "Brokerage Applicable",
    "360° Virtual Tour Available"
  ],

  pricing: [
    {
      type: "3 BHK",
      carpetSize: "1245 sq.ft.",
      launchPrice: "₹1.50 Cr+"
    }
  ],

  pricingNote:
    "Price and availability are subject to change. Brokerage applicable.",

  has360: true,

  tourUrl:
    "https://tours.punepropertycircle.com/tours/escJrZNKt"
},

];

export default projects;