// Mock data for Luxe Springs website
export const products = [
  {
    id: 1,
    size: "300ml",
    title: "Premium 300ml Custom-Labeled",
    description: "Perfect for high-tea setups, wedding welcome kits, boutique hotels, guest lounges, private parties, and luxury gifting hampers.",
    image: "https://images.unsplash.com/photo-1638688569176-5b6db19f9d2a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHdhdGVyJTIwYm90dGxlc3xlbnwwfHx8fDE3NTYxMTA5ODN8MA&ixlib=rb-4.1.0&q=85",
    features: ["Petite and chic design", "Elegant waterproof labels", "Matte or gloss finish", "Eco-friendly options"],
    priceRange: "₹7-₹9",
    idealFor: "Wedding kits, boutique hotels, luxury gifting",
    badge: "300ml"
  },
  {
    id: 2,
    size: "500ml",
    title: "Standard 500ml Custom-Labeled",
    description: "Ideal for conferences, gyms, spas, restaurants, car showrooms, product launches, and day-to-day hydration with your branding.",
    image: "https://images.unsplash.com/photo-1695793303287-d5f4005ed721?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85",
    features: ["Perfect conference size", "Premium PET material", "Custom branding display", "Screw cap design"],
    priceRange: "₹9-₹12",
    idealFor: "Corporate events, gyms, showrooms",
    badge: "500ml"
  },
  {
    id: 3,
    size: "1000ml",
    title: "Large 1000ml Custom-Labeled",
    description: "Perfect for hotel suites, restaurants & dining setups, wellness centres, and corporate events where extended use is valued.",
    image: "https://images.unsplash.com/photo-1655079343782-f0fc4704753e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85",
    features: ["Extended use size", "Premium finish options", "Generous servings", "Restaurant-grade quality"],
    priceRange: "₹15-₹17",
    idealFor: "Hotel suites, dining setups, wellness centres",
    badge: "1000ml"
  }
];

export const features = [
  {
    id: 1,
    title: "Premium Natural Mineral Water",
    description: "Fresh-tasting natural mineral water sourced from certified vendors with strict quality control.",
    image: "https://images.unsplash.com/photo-1655079343782-f0fc4704753e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Custom Label Design",
    description: "High-quality, waterproof custom labels with matte or gloss finish options that act as premium brand advertisements.",
    image: "https://images.unsplash.com/photo-1695793303287-d5f4005ed721?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Flexible Solutions",
    description: "Multiple size options and sustainability-driven packaging to suit different events and hospitality needs.",
    image: "https://images.unsplash.com/photo-1596629095299-544ddf11b6f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdhdGVyJTIwYm90dGxlc3xlbnwwfHx8fDE3NTYxMTA5ODN8MA&ixlib=rb-4.1.0&q=85"
  }
];

export const contactInfo = {
  phones: [
    { number: "+91 94831 44487", person: "Prakash N - Director" },
    { number: "+91 99865 12102", person: "Harshit Innani - Director" }
  ],
  email: "info@luxesprings.com",
  location: "Raichur, Karnataka, India",
  social: "@luxesprings",
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    saturday: "Saturday: 10:00 AM - 4:00 PM EST",
    sunday: "Sunday: Closed"
  }
};

export const stats = {
  monthlyTarget: "10K+",
  yearlyRevenue: "₹1.8 CR",
  citiesFocus: "Tier 2/3",
  quality: "Premium"
};

export const marketStats = {
  cagr: "78%",
  marketSize: "₹3000+ CR",
  demand: "Untapped"
};

export const companyStats = {
  monthlyOrders: "10,000+",
  revenueTarget: "₹1.8 CR",
  citiesServed: "Tier 2/3",
  teamMembers: "4"
};

export const subscriptionPlans = [
  {
    title: "Fixed Monthly Bottle Plan",
    description: "Commit to a minimum monthly order quantity at a discounted rate for 6 months.",
    benefits: [
      "Up to 5-10% off",
      "Discounted rates for bulk orders",
      "Predictable monthly supply",
      "6-month commitment",
      "Ideal for regular needs"
    ],
    idealFor: "Hotels, showrooms, gyms, salons, and offices"
  },
  {
    title: "Prepaid Bulk Subscription",
    description: "Pay upfront for large volume delivered in scheduled installments over 6 months.",
    benefits: [
      "Up to 15-20% off",
      "Higher discount rates",
      "Flexible delivery schedule",
      "Storage optimization",
      "Early renewal bonus"
    ],
    idealFor: "Large hotels, corporate parks, caterers"
  }
];

export const subscriptionAddOns = [
  "Label design refresh service every 6 months",
  "Limited-edition festive labels for special occasions",
  "Dedicated account manager for subscription clients"
];