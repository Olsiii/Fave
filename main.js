// ======================================
// FAVE - Main JavaScript
// ======================================

// --------------------------------------
// EmailJS config (for newsletter & notify forms)
// HOW TO MAKE NEWSLETTER WORK:
// 1. Sign up at https://www.emailjs.com/ (free tier available).
// 2. Add an "Email Service" (Gmail, Outlook, etc.) and connect your account.
// 3. Create an "Email Template". Use these variables in the template body:
//    {{subscriber_email}} {{from_email}} {{message}} {{date}} {{subject}}
// 4. Copy your Public Key (Account > API Keys), Service ID, and Template ID
//    into the object below, replacing the YOUR_... placeholders.
// 5. Save and test: submit the form; you should get an email at receiveEmail.
// --------------------------------------
const EMAILJS_CONFIG = {
  publicKey: "5-5qrTfZPTohgUGLU",   // Account > API Keys > Public Key
  serviceId: "service_fave",  // Email Services > your service > Service ID
  templateId: "template_49dyco8", // Email Templates > your template > Template ID
  receiveEmail: "contact@drinkfave.com"   // Email address that receives signups
}
const EMAILJS_IS_CONFIGURED =
  EMAILJS_CONFIG.publicKey.startsWith("YOUR_") === false &&
  EMAILJS_CONFIG.serviceId.startsWith("YOUR_") === false &&
  EMAILJS_CONFIG.templateId.startsWith("YOUR_") === false

// Store Locations Data
const storeLocations = [
  {
    name: "Heavenly Market Deli",
    address: "240 Sullivan St, New York, NY 10012",
    neighborhood: "Greenwich Village",
    borough: "Manhattan",
    hours: "Mon-Sun: 7am-10pm",
    lat: 40.7145,
    lng: -73.9564,
  },
  {
    name: "Mediterranean Foods II",
    address: "22-78 35th St, Astoria, NY 11105",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sat: 8am-9pm, Sun: 8am-7pm",
    lat: 40.773312,
    lng: -73.910992,
  },
  {
    name: "Euro Market",
    address: "30-42 31st St, Astoria, NY 11102",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 8am-12am",
    lat: 40.7644,
    lng: -73.9235,
  },
  {
    name: "Steinway Gourment Deli",
    address: "32-34 Steinway St, Astoria, NY 11103",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 8am-10pm",
    lat: 40.7644,
    lng: -73.9235,
  },
  {
    name: "Shell Market",
    address: "1450 NY-22, Brewster, NY 10509",
    neighborhood: "Southeast",
    borough: "",
    hours: "Open 24/7",
    lat: 41.3934,
    lng: -73.6171,
  },
  {
    name: "Briarcliff Bagels & More",
    address: "549 N State Rd, Briarcliff Manor, NY 10510",
    neighborhood: "Briarcliff Manor",
    borough: "",
    hours: "Mon-Sun: 6am-3pm",
    lat: 41.1459,
    lng: -73.8235,
  },
  {
    name: "G&G European Grocery",
    address: "1005 Mace Ave, Bronx, NY 10469",
    neighborhood: "Morris Park",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Cafe Italiano",
    address: "1011 Allerton Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Grocery and butcher bab al yamen",
    address: "1025 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "New Morris Deli",
    address: "1048 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Mike & Joe's Pizza",
    address: "1057 NY-82, Hopewell Junction, NY 12533",
    neighborhood: "Hopewell Junction",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Diaspora Euro Market",
    address: "1058 Morris Park Ave, Bronx, NY 10461",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Park Convenience Smoke Shop",
    address: "1077 Morris Park Ave, Bronx, NY 10461",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Deli",
    address: "128 W Fordham Rd, Bronx, NY 10468",
    neighborhood: "University Heights",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8626,
    lng: -73.9012,
  },
  {
    name: "Allerton Deli Market",
    address: "1305 Allerton Ave, Bronx, NY 10462",
    neighborhood: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Red Bear Lounge",
    address: "1480 Mace Ave, Bronx, NY 10469",
    neighborhood: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Shell Gas Station Market",
    address: "1497 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "S&J Deli",
    address: "1572 Williamsbridge Rd, Bronx, NY 10461",
    neighborhood: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "24 Deli Grocery Inc.",
    address: "1801 Williamsbridge Rd, Bronx, NY 10467",
    neighborhood: "Williamsbridge",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Cafe Siraeta Corp",
    address: "1808 Hone Ave, Bronx, NY 10461",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Alsadi meat halal",
    address: "1883 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Allerton",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "F&M Organic Deli",
    address: "1903 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "IL Bel Cafe",
    address: "1967 Bronxdale Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Sals Deli",
    address: "1969 Bronxdale Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Dardania European Market",
    address: "2000 Continental Ave, Bronx, NY 10461",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "AM Convenience Smoke Shop",
    address: "2011A Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "AM gourmet deli",
    address: "2101 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Anna's Bakery",
    address: "2125 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "AM Family Discount",
    address: "2135 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Nick's European Market",
    address: "2137 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Noya Cafe",
    address: "2307 Arthur Ave, Bronx, NY 10458",
    neighborhood: "Belmont",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8485,
    lng: -73.8826,
  },
  {
    name: "413 Deli",
    address: "2315 Hughes Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "EuroALB Market",
    address: "2326 Arthur Ave, Bronx, NY 10458",
    neighborhood: "Belmont",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Briska Grocery",
    address: "2333 Arthur Ave # A, Bronx, NY 10458",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Richie Grocery",
    address: "2334 Washington Ave, Bronx, NY 10458",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Modern Market",
    address: "2385 Arthur Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Sami Deli & Grill",
    address: "2452 Williamsbridge Rd, Bronx, NY 10469",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Nora Pizza",
    address: "2456 Eastchester Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Holland Gourmet Deli",
    address: "2460 Holland Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Burning Beaks",
    address: "2462 Arthur Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Paradise Food Market",
    address: "2476 Williamsbridge Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Tony & Tina's Pizzaria",
    address: "2483 Arthur Ave, Bronx, NY 10458",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Casa Doro Gourment Deli",
    address: "2487 Eastchester Rd, Bronx, NY 10458",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Fine Fair Supermarkets",
    address: "2556 Boston Rd Allerton, Bronx, NY 10462",
    neighborhood: "Allerton",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Keyfood Fresh",
    address: "2711 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Allerton",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "99c plus discount",
    address: "2801 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Allerton",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Bedford Convenience Mart",
    address: "29 Bedford Park Blvd, Bronx, NY 10458",
    neighborhood: "Bedford Park",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8679,
    lng: -73.8851,
  },
  {
    name: "Pruzas Supermarket",
    address: "2937 Westchester Ave, Bronx, NY 10462",
    neighborhood: "Westchester Square",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Family International Market & Deli",
    address: "3006 Middletown Rd, Bronx, NY 10462",
    neighborhood: "Schuylerville",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Pioneer Supermarkets",
    address: "3035 white plains rd East, Bronx, NY 10462",
    neighborhood: "East Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Nonna's European Market",
    address: "3077 Westchester Ave, Bronx, NY 10462",
    neighborhood: "Westchester Square",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Sh & N Aga Inc",
    address: "3120 Bainbridge Ave, Bronx, NY 10462",
    neighborhood: "Norwood",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "European Mini Market",
    address: "371 E 204th St, Bronx, NY 10467",
    neighborhood: "Norwood",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Smoke shop",
    address: "40 N Middletown Rd, Nanuet, NY 10954",
    neighborhood: "Nanuet",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Greenland Deli & Grocery",
    address: "4313 Katonah Ave, Bronx, NY 10470",
    neighborhood: "Woodlawn Heights",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8876,
    lng: -73.8628,
  },
  {
    name: "AROMA CAF",
    address: "4331 Katonah Ave, Bronx, NY 10470",
    neighborhood: "Woodlawn Heights",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Mergimtari Deli & Grocery",
    address: "565 E 187th St, Bronx, NY 10458",
    neighborhood: "Belmont",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Habibi Deli Grocery",
    address: "576 E 187th St, Bronx, NY 10458",
    neighborhood: "Belmont",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Bravo Deli",
    address: "601 E 187th St, Bronx, NY 10458",
    neighborhood: "Belmont",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Luna's Cafe",
    address: "601E, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Antillana SuperFood Marketplace",
    address: "640 Pelham Pkwy S, Bronx, NY 10462",
    neighborhood: "Pelham Pkwy",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "New Spring Deli & Grocery",
    address: "655 E 187th St, Bronx, NY 10458",
    neighborhood: "Belmont",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Scalinada Grocery Store",
    address: "667 E 187th St, Bronx, NY 10462",
    neighborhood: "Belmont",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Zesty Deli and Grill",
    address: "673 Allerton Ave, Bronx, NY 10462",
    neighborhood: "Allerton",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Moses Bagels & More",
    address: "674 Allerton Ave East, Bronx, NY 10467",
    neighborhood: "Allerton",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Uncle Paul Pizzaria",
    address: "70 Vanderbuilt Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Adee Deli & Grocery",
    address: "700 Adee Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Roots & Fruits Town Market",
    address: "700 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "C3 Deli",
    address: "703 Burke Ave, Bronx, NY 10467",
    neighborhood: "Williamsbridge",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8712,
    lng: -73.8778,
  },
  {
    name: "Brave Deli",
    address: "712 Burke Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "European Meat Market",
    address: "720 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Astor Bar & Grill",
    address: "726 Astor Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Ock Exotic Deli",
    address: "734 Astor Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "JE Bakery",
    address: "743 Astor Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "New Morris Deli",
    address: "744 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "American Albanian Deli-Grocery",
    address: "745 Astor Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Dukagjini Burek",
    address: "758 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Ekosfere Bakery & Coffee",
    address: "766 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Metfresh of Morris Park",
    address: "775 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Lydig Gourment Deli",
    address: "798 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Empire State Deli",
    address: "804 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Afa Market",
    address: "809 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "New European Market",
    address: "810 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Alfakhamah Market",
    address: "855 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Meat Market",
    address: "869 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Lucky 4 Deli",
    address: "900 Allerton Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Salam Deli",
    address: "939 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "JSR Deli",
    address: "994 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Albanian Market",
    address: "3043 Buhre Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Katonah Family Deli Grocery",
    address: "4293 Katonah Ave, Bronx, NY 10470",
    neighborhood: "Woodlawn Heights",
    borough: "Bronx",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.8876,
    lng: -73.8628,
  },
  {
    name: "Fordham Convenience",
    address: "85 W Fordham Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Coffee Unique ",
    address: "69 Pondfield Rd, Bronxville, NY 10708",
    neighborhood: "Bronxville",
    borough: "",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.9403,
    lng: -73.8321,
  },
  {
    name: "Metropolitan European Food",
    address: "118-29 Metropolitan Ave, Kew Gardens, NY 11415",
    neighborhood: "Kew Gardens",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7145,
    lng: -73.8312,
  },
  {
    name: "Daniel's European Market ",
    address: "152 Norman Ave, Brooklyn, NY 11222",
    neighborhood: "Greenpoint",
    borough: "Brooklyn",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7295,
    lng: -73.9542,
  },
  {
    name: "Cardak",
    address: "2301 65th St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Si n'shpi",
    address: "2037 65th St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Iliria Food's",
    address: "2323 65th St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Arberia",
    address: "2325 65th St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Antonio's Pizza",
    address: "318 Flatbush Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "The Skyline Gourmet",
    address: "64 Willoughby St, Brooklyn, NY 11201",
    neighborhood: "Downtown Brooklyn",
    borough: "Brooklyn",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6924,
    lng: -73.9875,
  },
  {
    name: "Karzina Corp",
    address: "6629 Bay Pkwy, Brooklyn, NY 11204",
    neighborhood: "Bensonhurst",
    borough: "Brooklyn",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6178,
    lng: -73.9902,
  },
  {
    name: "European Delicatessen",
    address: "95-26 Metropolitan Ave, Middle Village, NY 11379",
    neighborhood: "Middle Village",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7281,
    lng: -73.8765,
  },
  {
    name: "Gino's Pizzeria",
    address: "931 Flatbush Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Vulajio's Restaurant",
    address: "2593 NY-52  , Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Beer & Smoke Convenience",
    address: "1058 E Jericho Turnpike, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "The Beer Store of Long Island",
    address: "1426 Montauk Hwy, Long Island, NY 10462",
    neighborhood: "Long Island",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Rumcajs Polish Deli",
    address: "441 US-6, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Gionnis Euro Market & Burek",
    address: "45 Secor Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Mike & Joe's Wood Fired Pizza & Pasta",
    address: "944 US-6, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Smoke Shop & Convenience Store",
    address: "1140 1st Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Uncle Vini's",
    address: "1140 First Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Famous Famiglia Pizza",
    address: "1248 Lexington Ave #2012, New York, NY 10028",
    neighborhood: "Upper East Side",
    borough: "Manhattan",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7732,
    lng: -73.9596,
  },
  {
    name: "Famous Famiglia Pizza",
    address: "1284 First Ave , Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "East Side Market",
    address: "1463 York Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "First on First Deli",
    address: "1756 1st Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "1773 Express Deli",
    address: "1773 York Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Famous Famiglia Pizza",
    address: "686 8th Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Sipsteria",
    address: "774 Amsterdam Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Forno's",
    address: "62 Welcher Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Mimoza Cafe",
    address: "30 Ave Astoria, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Euro Food Market Max",
    address: "6855 Forest Ave, Ridgewood, NY 11385",
    neighborhood: "Ridgewood",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7012,
    lng: -73.8952,
  },
  {
    name: "Argiros Market",
    address: "4112 Victory Blvd, Staten Island, NY 10301",
    neighborhood: "Travis",
    borough: "Staten Island",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6125,
    lng: -74.1852,
  },
  {
    name: "Bradley Bagels",
    address: "310 Bradley Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "J's Pizza",
    address: "98 7th Ave, New York, NY 10011",
    neighborhood: "Greenwich Village",
    borough: "Manhattan",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7395,
    lng: -74.0022,
  },
  {
    name: "Taravez Deli Corporation",
    address: "789 Old Country Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "V&B Fresh Market",
    address: "1036 McLean Ave, Yonkers, NY 10704",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Euro Eatery & Market",
    address: "883 Yonkers Ave, Yonkers, NY 10704",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "European Fresh Inc",
    address: "951 McLean Ave, Yonkers, NY 10704",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Stationary Deli",
    address: "998 McLean Ave, Yonkers, NY 10704",
    neighborhood: "Yonkers",
    borough: "",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.9632,
    lng: -73.8665,
  },
  {
    name: "G&G Euro Market & Burek",
    address: "1875 Commerce St, Yorktown Heights, NY 10598",
    neighborhood: "Yorktown Heights",
    borough: "",
    hours: "Mon-Sun: 7am-11pm",
    lat: 41.2706,
    lng: -73.7762,
  },
  {
    name: "Food Choice Market",
    address: "2224 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "C-Town of Morris Park",
    address: "1859 Bronxdale Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Food University",
    address: "2080 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Peggy's Stationary LLC",
    address: "2216 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Century Wholesale",
    address: "631 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Side by Side Pizza & Burek",
    address: "769 Astor Avenue Allerton, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Community Green Market",
    address: "2228 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "ShopRite",
    address: "1960 Deer Pk Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "J's Gourment Deli",
    address: "1881 McGraw Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "37 Convenience Deli Market",
    address: "37-02 30th Ave, Astoria, NY 11103",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7698,
    lng: -73.9185,
  },
  {
    name: "Besa Meat Market",
    address: "2902 Middletown Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Sad Boys Market",
    address: "3042 Buhre Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Era - New York",
    address: "589 11th Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "DVC Vending",
    address: "2 Lawrence St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "C-Town International Market",
    address: "34-12 34th Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Koha & Brothers Halal Meat Market",
    address: "319 Church Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Green Apple Market",
    address: "2187 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "UpperWest Candy Grocery",
    address: "2618 Broadway, New York, NY 10025",
    neighborhood: "Upper West Side",
    borough: "Manhattan",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7985,
    lng: -73.9698,
  },
  {
    name: "Jehora Deli Corp",
    address: "900 E Gun Hill Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Tomas Cherry Valley",
    address: "801 E Gun Hill Rd, NY ",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Bronxwood Food Center",
    address: "3600 Bronxwood Ave, Bronx, NY 10462",
    neighborhood: "Bronxwood",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "3724 Shak Deli",
    address: "3724 Bronxwood Ave, Bronx, NY 10462",
    neighborhood: "Bronxwood",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Richmond Bagels & Deli",
    address: "51 Richmond Hill Rd, Richmond Hill, NY 11418",
    neighborhood: "Richmond Hill",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6958,
    lng: -73.8272,
  },
  {
    name: "Homefield Deli & Restaurant",
    address: "970 Saw Mill Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Shop Fair Foods Warehouse",
    address: "410 W 207th St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Longo's Park Deli",
    address: "203 S Regent St, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Platinium Car Wash",
    address: "557 7th Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Drinkology NYC",
    address: "43-04 34th Ave, Astoria, NY 11101",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7572,
    lng: -73.9258,
  },
  {
    name: "Sunoco Food Mart",
    address: "1499 Route 9, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Farm Country Astoria",
    address: "37-15 31st Ave, Astoria, NY 11102",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7644,
    lng: -73.9235,
  },
  {
    name: "Bronx Park Convenience & Juice Bar",
    address: "2028 White Plains Rd, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Ditmars Candy & Grocery",
    address: "2805 Ditmars Blvd, Astoria, NY 11105",
    neighborhood: "Ditmars",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7752,
    lng: -73.9125,
  },
  {
    name: "Gourment Deli Lydig",
    address: "798 Lydig Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Bonavita Market",
    address: "2140 Holland Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Plata Grocery",
    address: "31-05 24th Ave, Astoria, NY 11102",
    neighborhood: "Astoria",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7725,
    lng: -73.9182,
  },
  {
    name: "Adyel Deli",
    address: "1403 Bronx River Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Lisbeth Food Coorporation",
    address: "1018 Morris Park Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "United We Stand Deli",
    address: "814 tenth Ave, Bronx, NY 10462",
    neighborhood: "Morris Park",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.6937,
    lng: -73.9931,
  },
  {
    name: "Parrot Coffee Market",
    address: "Queens, NY 11372",
    neighborhood: "Jackson Heights",
    borough: "Queens",
    hours: "Mon-Sun: 7am-11pm",
    lat: 40.7492,
    lng: -73.8825,
  },
  {
    name: "Frank's Pizzeria ",
    address: "2 W Cross St, Croton Falls, NY 10519",
    neighborhood: "Croton Falls",
    borough: "",
    hours: "Mon-Sun: 7am-11pm",
    lat: 41.3473,
    lng: -73.6593,
  },

]

// ======================================
// DOM Elements
// ======================================

const navbar = document.getElementById("navbar")
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navMenu = document.getElementById("navMenu")
const startQuizBtn = document.getElementById("startQuizBtn")
const quizModal = document.getElementById("quizModal")
const closeQuizBtn = document.getElementById("closeQuizBtn")
const quizModalOverlay = document.getElementById("quizModalOverlay")
const newsletterForm = document.getElementById("newsletterForm")
const newsletterSuccess = document.getElementById("newsletterSuccess")
const notifyForm = document.getElementById("notifyForm")
const notifySuccess = document.getElementById("notifySuccess")
const faqAccordion = document.getElementById("faqAccordion")
const currentYearElements = document.querySelectorAll("#currentYear")

// ======================================
// Utility Functions
// ======================================

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

// Smooth scroll to anchor
function smoothScroll(target) {
  const element = document.querySelector(target)
  if (element) {
    const navHeight = navbar.offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight - 20

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// ======================================
// Sticky Navbar on Scroll
// ======================================

let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// ======================================
// Mobile Menu Toggle
// ======================================

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("active")

    if (isOpen) {
      navMenu.classList.remove("active")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    } else {
      navMenu.classList.add("active")
      mobileMenuToggle.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"

      // Focus first link
      const firstLink = navMenu.querySelector(".nav-link")
      if (firstLink) firstLink.focus()
    }
  })

  // Close menu when clicking nav links
  const navLinks = navMenu.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    })
  })

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
      mobileMenuToggle.focus()
    }
  })
}

// ======================================
// Smooth Scrolling for Anchor Links
// ======================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href.length > 1) {
      e.preventDefault()
      smoothScroll(href)
    }
  })
})

// Handle anchor links on page load
window.addEventListener("load", () => {
  if (window.location.hash) {
    setTimeout(() => {
      smoothScroll(window.location.hash)
    }, 100)
  }
})

// ======================================
// Scroll Reveal Animations
// ======================================

const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
}

const revealElements = document.querySelectorAll(".reveal")

if (!prefersReducedMotion && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  revealElements.forEach((el) => revealObserver.observe(el))
} else {
  // If reduced motion, show all elements immediately
  revealElements.forEach((el) => el.classList.add("active"))
}

// ======================================
// Quiz Modal
// ======================================

let quizAnswers = []
let currentStep = 1

if (startQuizBtn && quizModal) {
  startQuizBtn.addEventListener("click", openQuiz)
  closeQuizBtn.addEventListener("click", closeQuiz)
  quizModalOverlay.addEventListener("click", closeQuiz)

  function openQuiz() {
    quizModal.classList.add("active")
    document.body.style.overflow = "hidden"
    closeQuizBtn.focus()
    resetQuiz()
  }

  function closeQuiz() {
    quizModal.classList.remove("active")
    document.body.style.overflow = ""
    startQuizBtn.focus()
  }

  function resetQuiz() {
    quizAnswers = []
    currentStep = 1

    document.querySelectorAll(".quiz-step").forEach((step) => {
      step.classList.remove("active")
    })
    document.querySelector('[data-step="1"]').classList.add("active")

    document.getElementById("quizResult").classList.remove("active")
  }

  // Quiz option clicks
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.addEventListener("click", function () {
      const answer = this.dataset.answer
      quizAnswers.push(answer)

      if (currentStep < 3) {
        // Move to next question
        document.querySelector(`[data-step="${currentStep}"]`).classList.remove("active")
        currentStep++
        document.querySelector(`[data-step="${currentStep}"]`).classList.add("active")
      } else {
        // Show result
        showQuizResult()
      }
    })
  })

  function showQuizResult() {
    // Count answers
    const peachCount = quizAnswers.filter((a) => a === "peach").length
    const multivitaminCount = quizAnswers.filter((a) => a === "multivitamin").length

    const result = peachCount >= multivitaminCount ? "peach" : "multivitamin"

    // Hide quiz steps
    document.querySelectorAll(".quiz-step").forEach((step) => {
      step.classList.remove("active")
    })

    // Show result
    const resultContainer = document.getElementById("quizResult")
    const resultImage = document.getElementById("resultImage")
    const resultFlavor = document.getElementById("resultFlavor")
    const resultDescription = document.getElementById("resultDescription")
    const resultLink = document.getElementById("resultLink")

    if (result === "peach") {
      resultImage.src = "/Asset_Cans/Peach_Front.png"
      resultImage.alt = "FAVE Peach"
      resultFlavor.textContent = "Peach Iced Tea"
      resultDescription.textContent = "Peach infused iced tea crafted for a fruity, refreshing, and perfectly balanced taste."
      resultLink.href = "/flavors.html#peach"
    } else {
      resultImage.src = "Asset_Cans/Multivitamin_Front.png"
      resultImage.alt = "FAVE Multivitamin"
      resultFlavor.textContent = "Multivitamin"
      resultDescription.textContent = "Tropical escape with a bright, tangy twist."
      resultLink.href = "/flavors.html#multivitamin"
    }

    resultContainer.classList.add("active")
  }

  // Keyboard navigation for quiz modal
  document.addEventListener("keydown", (e) => {
    if (quizModal.classList.contains("active") && e.key === "Escape") {
      closeQuiz()
    }
  })
}

// ======================================
// Newsletter Form with EmailJS
// ======================================

function initEmailJSIfReady() {
  if (typeof emailjs !== 'undefined' && EMAILJS_IS_CONFIGURED) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }
}
if (typeof emailjs !== 'undefined') {
  initEmailJSIfReady()
} else {
  window.addEventListener('load', () => { initEmailJSIfReady() })
}

function showNewsletterError(message) {
  const errEl = document.getElementById("newsletterError")
  if (errEl) {
    errEl.textContent = message
    errEl.style.display = "block"
  } else {
    alert(message)
  }
}
function hideNewsletterError() {
  const errEl = document.getElementById("newsletterError")
  if (errEl) errEl.style.display = "none"
}

if (newsletterForm && newsletterSuccess) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    hideNewsletterError()

    const emailInput = document.getElementById("newsletterEmail")
    const email = emailInput.value.trim()

    if (!email || !validateEmail(email)) {
      showNewsletterError("Please enter a valid email address.")
      return
    }

    const submitButton = newsletterForm.querySelector('button[type="submit"]')
    const originalButtonText = submitButton.textContent
    submitButton.textContent = "Subscribing..."
    submitButton.disabled = true

    try {
      const shouldSend = typeof emailjs !== 'undefined' && EMAILJS_IS_CONFIGURED
      if (shouldSend) {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            to_email: EMAILJS_CONFIG.receiveEmail,
            from_email: email,
            subject: "New FAVE Newsletter Subscription",
            message: `New newsletter subscription from: ${email}`,
            subscriber_email: email,
            date: new Date().toLocaleDateString()
          }
        )
      } else {
        console.log("[FAVE] Newsletter signup (no email sent):", email)
        if (!EMAILJS_IS_CONFIGURED) {
          console.log("[FAVE] To receive signups by email, set EMAILJS_CONFIG in main.js and add your EmailJS keys. See https://www.emailjs.com/")
        }
      }

      newsletterForm.style.display = "none"
      newsletterSuccess.classList.add("active")
      emailInput.value = ""
    } catch (error) {
      console.error("[FAVE] Newsletter signup error:", error)
      showNewsletterError("Couldn't subscribe. Please try again or email us at " + EMAILJS_CONFIG.receiveEmail)
      submitButton.textContent = originalButtonText
      submitButton.disabled = false
    }
  })
}

// ======================================
// Notify Form (Where to Buy page) with EmailJS
// ======================================

if (notifyForm && notifySuccess) {
  notifyForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const emailInput = document.getElementById("notifyEmail")
    const email = emailInput.value.trim()

    if (email && validateEmail(email)) {
      // Show loading state
      const submitButton = notifyForm.querySelector('button[type="submit"]')
      const originalButtonText = submitButton.textContent
      submitButton.textContent = "Subscribing..."
      submitButton.disabled = true

      try {
        const shouldSend = typeof emailjs !== 'undefined' && EMAILJS_IS_CONFIGURED
        if (shouldSend) {
          await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
              to_email: EMAILJS_CONFIG.receiveEmail,
              from_email: email,
              subject: "New FAVE Store Notification Request",
              message: `New store notification request from: ${email}`,
              subscriber_email: email,
              date: new Date().toLocaleDateString()
            }
          )
        } else {
          console.log("[FAVE] Store notify signup (no email sent):", email)
        }

        // Hide form
        notifyForm.style.display = "none"

        // Show success message
        notifySuccess.classList.add("active")

        // Reset form
        emailInput.value = ""

      } catch (error) {
        console.error("[FAVE] Store notify signup error:", error)
        alert("There was an error. Please try again or contact us at contact@drinkfave.com")
        submitButton.textContent = originalButtonText
        submitButton.disabled = false
      }
    } else {
      alert("Please enter a valid email address")
    }
  })
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// ======================================
// FAQ Accordion
// ======================================

if (faqAccordion) {
  const faqQuestions = faqAccordion.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true"

      // Close all other accordions
      faqQuestions.forEach((q) => {
        q.setAttribute("aria-expanded", "false")
      })

      // Toggle current accordion
      if (!isExpanded) {
        question.setAttribute("aria-expanded", "true")
      }
    })
  })
}

// ======================================
// Store Locator
// ======================================

const storeList = document.getElementById("storeList")
const storeMap = document.getElementById("storeMap")

// Set map URL if map element exists
if (storeMap && storeLocations.length > 0) {
  // Calculate center point (average of all coordinates) to center the map
  const centerLat = storeLocations.reduce((sum, s) => sum + s.lat, 0) / storeLocations.length
  const centerLng = storeLocations.reduce((sum, s) => sum + s.lng, 0) / storeLocations.length
  
  // Create a Google Maps URL with all store addresses
  // Since embed API doesn't support multiple markers easily, we'll create a search URL
  // that includes all addresses, which Google Maps will show as markers
  const allAddresses = storeLocations.map(s => s.address)
  
  // Build a Google Maps search URL with all addresses
  // This will show all locations when users interact with the map
  // For a better solution with custom markers, create a Google My Map at:
  // https://www.google.com/maps/d/ and embed that map
  const addressesQuery = allAddresses.slice(0, 10).map(addr => encodeURIComponent(addr)).join("|")
  
  // Create embed URL centered on calculated center with appropriate zoom
  // This centers the map on all store locations
  // For markers: Create a Google My Map at https://www.google.com/maps/d/
  // Add all store locations, then get the embed URL and replace this src
  const zoom = 11
  storeMap.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160894!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`
  
  // TO ADD MARKERS TO THE MAP:
  // 1. Go to https://www.google.com/maps/d/
  // 2. Click "Create a new map"
  // 3. For each store in storeLocations array, click "Add marker" and enter the address
  //    OR import from CSV (export storeLocations to CSV first)
  // 4. Once all locations are added, click "Share" → "Embed on my site"
  // 5. Copy the iframe src URL and replace the storeMap.src above
}

if (storeList) {
  renderStoreLocations()
}

function renderStoreLocations() {
  storeList.innerHTML = ""

  storeLocations.forEach((store) => {
    const storeCard = document.createElement("div")
    storeCard.className = "store-card"

    // Create Google Maps directions link using address
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`

    const locationLine = store.borough ? `${store.borough} • ${store.neighborhood}` : store.neighborhood
    storeCard.innerHTML = `
      <h3 class="store-name">${store.name}</h3>
      <p class="store-address">${store.address}</p>
      <span class="store-neighborhood">${locationLine}</span>
      <p class="store-hours">${store.hours}</p>
      <a href="${directionsUrl}" class="store-directions" target="_blank" rel="noopener">Get Directions →</a>
    `

    storeList.appendChild(storeCard)
  })
}

// ======================================
// Dynamic Footer Year
// ======================================

const currentYear = new Date().getFullYear()
currentYearElements.forEach((el) => {
  el.textContent = currentYear
})

// ======================================
// Console Log for Development
// ======================================

console.log("[v0] FAVE website initialized")
console.log("[v0] Store locations loaded:", storeLocations.length)
console.log("[v0] Reduced motion:", prefersReducedMotion)
