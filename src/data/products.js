export const COMPANY_INFO = {
  brand: "Clixer®",
  tagline: "great outlook for your floor.",
  subtitle: "Channel Drainer & Tile Leveling Systems",
  material: "AISI 304 Premium Quality Stainless Steel",
  marketedBy: "SACO TRADING COMPANY",
  address: "VIII/123, Thalappara, Moonniyur, Malappuram, Kerala, Pin: 676311",
  phone: "+91 9946852916",
  email: "sacoclixer@gmail.com",
  whatsapp: "919946852916"
};

export const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "channel-drainers", label: "Channel Drainers" },
  { id: "premium-square-drains", label: "Premium Square Drains" },
  { id: "tile-insert", label: "Tile Insert" },
  { id: "flat-cut", label: "Flat Cut" },
  { id: "other-products", label: "Other Products" }
];

export const products = [
  // --- CHANNEL DRAINERS ---
  {
    id: "clx-8002",
    model: "CLX 8002",
    name: "CLX 8002",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8002.png",
    colorsImage: "/images/products/clx-8002-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: [
      '1 FT / 100 × 300 mm (4" × 12")',
      '1.5 FT / 100 × 450 mm (4" × 18")',
      '2 FT / 100 × 600 mm (4" × 24")',
      '2.5 FT / 100 × 750 mm (4" × 30")',
      '3 FT / 100 × 900 mm (4" × 36")',
      '4 FT / 100 × 1200 mm (4" × 48")'
    ],
    sizeShort: "1 FT • 1.5 FT • 2 FT • 2.5 FT • 3 FT • 4 FT",
    startingPrice: "₹2,832",
    priceMatrix: {
      "1 FT": { SATIN: 2832, "GOLD / R GOLD": 4248, BLACK: 4720 },
      "1.5 FT": { SATIN: 4248, "GOLD / R GOLD": 6372, BLACK: 7080 },
      "2 FT": { SATIN: 5664, "GOLD / R GOLD": 8496, BLACK: 9440 },
      "2.5 FT": { SATIN: 7080, "GOLD / R GOLD": 10620, BLACK: 11800 },
      "3 FT": { SATIN: 8496, "GOLD / R GOLD": 12744, BLACK: 14160 },
      "4 FT": { SATIN: 11328, "GOLD / R GOLD": 16992, BLACK: 18880 }
    },
    priceTable: [
      { size: '1 FT / 100 × 300 mm', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100 × 450 mm', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100 × 600 mm', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100 × 750 mm', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100 × 900 mm', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100 × 1200 mm', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },
  {
    id: "clx-8005",
    model: "CLX 8005",
    name: "CLX 8005",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8005.png",
    colorsImage: "/images/products/clx-8005-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: [
      '1 FT / 100 × 300 mm (4" × 12")',
      '1.5 FT / 100 × 450 mm (4" × 18")',
      '2 FT / 100 × 600 mm (4" × 24")',
      '2.5 FT / 100 × 750 mm (4" × 30")',
      '3 FT / 100 × 900 mm (4" × 36")',
      '4 FT / 100 × 1200 mm (4" × 48")'
    ],
    sizeShort: "1 FT • 1.5 FT • 2 FT • 2.5 FT • 3 FT • 4 FT",
    startingPrice: "₹2,832",
    priceMatrix: {
      "1 FT": { SATIN: 2832, "GOLD / R GOLD": 4248, BLACK: 4720 },
      "1.5 FT": { SATIN: 4248, "GOLD / R GOLD": 6372, BLACK: 7080 },
      "2 FT": { SATIN: 5664, "GOLD / R GOLD": 8496, BLACK: 9440 },
      "2.5 FT": { SATIN: 7080, "GOLD / R GOLD": 10620, BLACK: 11800 },
      "3 FT": { SATIN: 8496, "GOLD / R GOLD": 12744, BLACK: 14160 },
      "4 FT": { SATIN: 11328, "GOLD / R GOLD": 16992, BLACK: 18880 }
    },
    priceTable: [
      { size: '1 FT / 100 × 300 mm', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100 × 450 mm', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100 × 600 mm', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100 × 750 mm', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100 × 900 mm', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100 × 1200 mm', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },
  {
    id: "clx-8004",
    model: "CLX8004",
    name: "CLX8004",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8004.png",
    colorsImage: "/images/products/clx-8004-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: [
      '1 FT / 100 × 300 mm',
      '1.5 FT / 100 × 450 mm',
      '2 FT / 100 × 600 mm',
      '2.5 FT / 100 × 750 mm',
      '3 FT / 100 × 900 mm',
      '4 FT / 100 × 1200 mm'
    ],
    sizeShort: "1 FT • 1.5 FT • 2 FT • 2.5 FT • 3 FT • 4 FT",
    startingPrice: "₹2,832",
    priceMatrix: {
      "1 FT": { SATIN: 2832, "GOLD / R GOLD": 4248, BLACK: 4720 },
      "1.5 FT": { SATIN: 4248, "GOLD / R GOLD": 6372, BLACK: 7080 },
      "2 FT": { SATIN: 5664, "GOLD / R GOLD": 8496, BLACK: 9440 },
      "2.5 FT": { SATIN: 7080, "GOLD / R GOLD": 10620, BLACK: 11800 },
      "3 FT": { SATIN: 8496, "GOLD / R GOLD": 12744, BLACK: 14160 },
      "4 FT": { SATIN: 11328, "GOLD / R GOLD": 16992, BLACK: 18880 }
    },
    priceTable: [
      { size: '1 FT / 100 × 300 mm', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100 × 450 mm', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100 × 600 mm', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100 × 750 mm', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100 × 900 mm', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100 × 1200 mm', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },

  // --- PREMIUM SQUARE DRAINS ---
  {
    id: "clx-801-premium",
    model: "CLX 801 Premium",
    name: "CLX 801 Premium",
    category: "premium-square-drains",
    categoryLabel: "Premium Square Drain",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-801.png",
    colorsImage: "/images/products/clx-801-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")'],
    sizeShort: '150 × 150 mm (6" × 6")',
    startingPrice: "₹710",
    priceMatrix: {
      '150 × 150 mm': { SATIN: 710, "GOLD / R GOLD": 2125, BLACK: 2520 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },
  {
    id: "clx-802-premium",
    model: "CLX 802 Premium",
    name: "CLX 802 Premium",
    category: "premium-square-drains",
    categoryLabel: "Premium Square Drain",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-802.png",
    colorsImage: "/images/products/clx-802-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")'],
    sizeShort: '150 × 150 mm (6" × 6")',
    startingPrice: "₹710",
    priceMatrix: {
      '150 × 150 mm': { SATIN: 710, "GOLD / R GOLD": 2125, BLACK: 2520 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },
  {
    id: "clx-807-premium",
    model: "CLX807 Premium",
    name: "CLX807 Premium",
    category: "premium-square-drains",
    categoryLabel: "Premium Square Drain",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-807.png",
    colorsImage: "/images/products/clx-807-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")'],
    sizeShort: '150 × 150 mm (6" × 6")',
    startingPrice: "₹710",
    priceMatrix: {
      '150 × 150 mm': { SATIN: 710, "GOLD / R GOLD": 2125, BLACK: 2520 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },

  // --- TILE INSERT ---
  {
    id: "clx-804-premium",
    model: "CLX804 Premium",
    name: "CLX804 Premium",
    category: "tile-insert",
    categoryLabel: "Tile Insert",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-804.png",
    colorsImage: "/images/products/clx-804-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")'],
    sizeShort: '150 × 150 mm (6" × 6")',
    startingPrice: "₹1,849",
    priceMatrix: {
      '150 × 150 mm': { SATIN: 1849, "GOLD / R GOLD": 3540, BLACK: 4327 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹1,849", goldRgold: "₹3,540", black: "₹4,327" }
    ]
  },

  // --- FLAT CUT SERIES ---
  {
    id: "clx-101-flat-cut",
    model: "CLX 101 Flat Cut",
    name: "CLX 101 Flat Cut",
    category: "flat-cut",
    categoryLabel: "Flat Cut",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-101.png",
    colorsImage: "/images/products/clx-101-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")', '127 × 127 mm (5" × 5")'],
    sizeShort: "150 × 150 mm • 127 × 127 mm",
    startingPrice: "₹490",
    priceMatrix: {
      "150 × 150 mm": { SATIN: 549, "GOLD / R GOLD": 1590, BLACK: 1950 },
      "127 × 127 mm": { SATIN: 490, "GOLD / R GOLD": 1490, BLACK: 1850 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127 × 127 mm (5" × 5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-102-flat-cut",
    model: "CLX 102 Flat Cut",
    name: "CLX 102 Flat Cut",
    category: "flat-cut",
    categoryLabel: "Flat Cut",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-102.png",
    colorsImage: "/images/products/clx-102-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")', '127 × 127 mm (5" × 5")'],
    sizeShort: "150 × 150 mm • 127 × 127 mm",
    startingPrice: "₹490",
    priceMatrix: {
      "150 × 150 mm": { SATIN: 549, "GOLD / R GOLD": 1590, BLACK: 1950 },
      "127 × 127 mm": { SATIN: 490, "GOLD / R GOLD": 1490, BLACK: 1850 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127 × 127 mm (5" × 5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-103-flat-cut",
    model: "CLX 103 Flat Cut",
    name: "CLX 103 Flat Cut",
    category: "flat-cut",
    categoryLabel: "Flat Cut",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-103.png",
    colorsImage: "/images/products/clx-103-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")', '127 × 127 mm (5" × 5")'],
    sizeShort: "150 × 150 mm • 127 × 127 mm",
    startingPrice: "₹490",
    priceMatrix: {
      "150 × 150 mm": { SATIN: 549, "GOLD / R GOLD": 1590, BLACK: 1950 },
      "127 × 127 mm": { SATIN: 490, "GOLD / R GOLD": 1490, BLACK: 1850 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127 × 127 mm (5" × 5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-110-flat-cut",
    model: "CLX 110 Flat Cut",
    name: "CLX 110 Flat Cut",
    category: "flat-cut",
    categoryLabel: "Flat Cut",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-110.png",
    colorsImage: "/images/products/clx-110-colors.png",
    finishes: ["SATIN", "GOLD / R GOLD", "BLACK"],
    sizes: ['150 × 150 mm (6" × 6")', '127 × 127 mm (5" × 5")'],
    sizeShort: "150 × 150 mm • 127 × 127 mm",
    startingPrice: "₹490",
    priceMatrix: {
      "150 × 150 mm": { SATIN: 549, "GOLD / R GOLD": 1590, BLACK: 1950 },
      "127 × 127 mm": { SATIN: 490, "GOLD / R GOLD": 1490, BLACK: 1850 }
    },
    priceTable: [
      { size: '150 × 150 mm (6" × 6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127 × 127 mm (5" × 5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },

  // --- OTHER PRODUCTS ---
  {
    id: "cockroach-bowl",
    model: "COCKROACH BOWL",
    name: "COCKROACH BOWL",
    category: "other-products",
    categoryLabel: "Other Products",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/cockroach-bowl.png",
    finishes: ["SATIN"],
    sizes: ["Standard Drain Outlet"],
    sizeShort: "Standard Drain Outlet",
    startingPrice: "On Request",
    priceMatrix: null,
    priceTable: null
  }
];
