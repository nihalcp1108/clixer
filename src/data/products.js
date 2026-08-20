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
  { id: "designer-drainers", label: "Designer Drainers" },
  { id: "floor-drainers", label: "Floor Drainers" },
  { id: "cockroach-bowl", label: "Cockroach Trap Bowl" },
  { id: "tile-leveling", label: "Tile Leveling Jack" }
];

export const products = [
  // --- CHANNEL DRAINERS ---
  {
    id: "clx-8002",
    model: "CLX 8002",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    name: "CLX 8002 Linear Channel Drainer",
    tagline: "Square Perforated High-Flow Linear Channel",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8002.png",
    colorsImage: "/images/products/clx-8002-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Architectural AISI 304 stainless steel linear channel drainer engineered with precision square perforations. Designed for luxury wetrooms, walk-in showers, and commercial applications requiring high water flow and modern aesthetic appeal.",
    highlights: [
      "Heavy-duty AISI 304 grade stainless steel construction",
      "Available in 6 standard lengths from 1 FT to 4 FT",
      "4 premium architectural surface finishes",
      "High volume water evacuation design"
    ],
    priceTable: [
      { size: '1 FT / 100x300mm (4"x12")', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100x450mm (4"x18")', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100x600mm (4"x24")', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100x750mm (4"x30")', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100x900mm (4"x36")', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100x1200mm (4"x48")', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },
  {
    id: "clx-8005",
    model: "CLX 8005",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    name: "CLX 8005 Wave Channel Drainer",
    tagline: "Fluid S-Wave Perforated Linear Channel",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8005.png",
    colorsImage: "/images/products/clx-8005-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Premium AISI 304 linear channel drainer featuring an organic S-wave slot pattern. Perfect for contemporary bathroom interiors requiring smooth water drainage with refined artistic styling.",
    highlights: [
      "Curved S-wave slot perforation geometry",
      "Corrosion-resistant AISI 304 stainless steel",
      "6 length options ranging from 300mm to 1200mm",
      "Satin, Gold, Rose Gold, and Black metallic finishes"
    ],
    priceTable: [
      { size: '1 FT / 100x300mm (4"x12")', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100x450mm (4"x18")', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100x600mm (4"x24")', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100x750mm (4"x30")', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100x900mm (4"x36")', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100x1200mm (4"x48")', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },
  {
    id: "clx-8004",
    model: "CLX 8004",
    category: "channel-drainers",
    categoryLabel: "Channel Drainer",
    name: "CLX 8004 Tile Insert Channel Drainer",
    tagline: "Invisible Seamless Tile-In Linear Drainer",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/clx-8004.png",
    colorsImage: "/images/products/clx-8004-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Frameless tile insert channel drainer designed to hold matching floor tile directly inside the top tray. Provides a virtually invisible drainage solution where only a subtle perimeter slot is visible.",
    highlights: [
      "Direct tile-in tray design for flush seamless integration",
      "Heavy-duty AISI 304 stainless steel base and channel",
      "4 perimeter frame colors to match ceramic & marble tiles",
      "Supports 300mm up to 1200mm wet room installations"
    ],
    priceTable: [
      { size: '1 FT / 100x300mm (4"x12")', satin: "₹2,832", goldRgold: "₹4,248", black: "₹4,720" },
      { size: '1.5 FT / 100x450mm (4"x18")', satin: "₹4,248", goldRgold: "₹6,372", black: "₹7,080" },
      { size: '2 FT / 100x600mm (4"x24")', satin: "₹5,664", goldRgold: "₹8,496", black: "₹9,440" },
      { size: '2.5 FT / 100x750mm (4"x30")', satin: "₹7,080", goldRgold: "₹10,620", black: "₹11,800" },
      { size: '3 FT / 100x900mm (4"x36")', satin: "₹8,496", goldRgold: "₹12,744", black: "₹14,160" },
      { size: '4 FT / 100x1200mm (4"x48")', satin: "₹11,328", goldRgold: "₹16,992", black: "₹18,880" }
    ]
  },

  // --- DESIGNER DRAINERS ---
  {
    id: "clx-801",
    model: "CLX 801",
    tier: "Premium",
    category: "designer-drainers",
    categoryLabel: "Designer Drainer",
    name: "CLX 801 Cross-Hatch Square Drainer",
    tagline: "4-Quadrant Directional Line Pattern",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm (6"x6")',
    image: "/images/products/clx-801.png",
    colorsImage: "/images/products/clx-801-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Luxury square floor drainer featuring a geometric 4-quadrant cross-hatch linear grate pattern. Precision laser-cut from high-grade AISI 304 stainless steel with laser engraved branding.",
    highlights: [
      "Laser cut 4-quadrant line design",
      "Standard 150x150mm (6x6 inch) tile dimension",
      "Stamped 304 steel grade quality seal",
      "Satin, Gold, Rose Gold, and Matt Black PVD finishes"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },
  {
    id: "clx-802",
    model: "CLX 802",
    tier: "Premium",
    category: "designer-drainers",
    categoryLabel: "Designer Drainer",
    name: "CLX 802 Grid Dot Square Drainer",
    tagline: "Matrix Square Dot Perforated Grate",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm (6"x6")',
    image: "/images/products/clx-802.png",
    colorsImage: "/images/products/clx-802-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Modern square floor drainer with a uniform matrix grid of square perforations. Crafted for high drainage performance and sleek architectural aesthetics.",
    highlights: [
      "Balanced matrix perforation pattern",
      "Premium AISI 304 corrosion resistance",
      "Fits standard 6x6 inch tile openings",
      "Available in 4 luxurious metallic surface treatments"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },
  {
    id: "clx-807",
    model: "CLX 807",
    tier: "Premium",
    category: "designer-drainers",
    categoryLabel: "Designer Drainer",
    name: "CLX 807 Chevron Square Drainer",
    tagline: "V-Shaped Chevron Radial Grate Pattern",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm (6"x6")',
    image: "/images/products/clx-807.png",
    colorsImage: "/images/products/clx-807-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Dynamic V-shaped chevron patterned floor drainer. Engineered to guide water flow towards the center trap while presenting a bold visual motif for modern shower floors.",
    highlights: [
      "Symmetrical V-chevron flow pattern",
      "Thick gauge 304 stainless steel faceplate",
      "Resistant to cleaning chemicals and tarnishing",
      "Satin, Gold, Rose Gold, and Black finishes"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹710", goldRgold: "₹2,125", black: "₹2,520" }
    ]
  },
  {
    id: "clx-804",
    model: "CLX 804",
    tier: "Premium",
    category: "designer-drainers",
    categoryLabel: "Designer Drainer",
    name: "CLX 804 Square Tile Insert Drainer",
    tagline: "Recessed Tile-In Square Drainer with Trap Cup",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm (6"x6")',
    image: "/images/products/clx-804.png",
    colorsImage: "/images/products/clx-804-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Square tile-in floor drainer system supplied complete with an internal stainless steel anti-odor / anti-cockroach drainage trap assembly. Accepts matching floor tile inside the top tray.",
    highlights: [
      "Integrated drainage bowl & anti-insect trap",
      "Seamless tile inlay tray",
      "150x150mm (6x6 inch) tile size profile",
      "Satin, Gold, Rose Gold, and Deep Black finishes"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹1,849", goldRgold: "₹3,540", black: "₹4,327" }
    ]
  },

  // --- FLOOR DRAINERS (FLAT CUT) ---
  {
    id: "clx-101",
    model: "CLX 101",
    tier: "Flat Cut",
    category: "floor-drainers",
    categoryLabel: "Floor Drainer",
    name: "CLX 101 Flat Cut Drainer",
    tagline: "4-Quadrant Directional Flat Cut Floor Grate",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm & 127x127 mm',
    image: "/images/products/clx-101.png",
    colorsImage: "/images/products/clx-101-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Precision flat-cut floor drainer featuring 4-quadrant slotted pattern. Available in both 6x6 inch and 5x5 inch square sizes.",
    highlights: [
      "Ultra-flat profile with flush cut edges",
      "Offered in 2 sizes: 150x150mm (6\"x6\") and 127x127mm (5\"x5\")",
      "AISI 304 durable grade steel",
      "4 color options: Satin, Gold, Rose Gold, Black"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127x127 mm (5"x5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-102",
    model: "CLX 102",
    tier: "Flat Cut",
    category: "floor-drainers",
    categoryLabel: "Floor Drainer",
    name: "CLX 102 Flat Cut Grid Drainer",
    tagline: "Square Perforated Flat Cut Floor Grate",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm & 127x127 mm',
    image: "/images/products/clx-102.png",
    colorsImage: "/images/products/clx-102-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Flat-cut square floor drainer featuring a high-density matrix of square perforations for rapid water clearance.",
    highlights: [
      "Square dot matrix perforation grid",
      "2 size formats (6x6 inch & 5x5 inch)",
      "304 stainless steel strength and corrosion resistance",
      "4 metallic luxury surface options"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127x127 mm (5"x5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-103",
    model: "CLX 103",
    tier: "Flat Cut",
    category: "floor-drainers",
    categoryLabel: "Floor Drainer",
    name: "CLX 103 Flat Cut Frame Drainer",
    tagline: "Concentric Square Frame Geometric Grate",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm & 127x127 mm',
    image: "/images/products/clx-103.png",
    colorsImage: "/images/products/clx-103-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Geometric flat-cut floor drainer presenting concentric square frames. Blends clean minimalism with reliable water intake.",
    highlights: [
      "Concentric square cutouts design",
      "Dual size choices (6x6 inch & 5x5 inch)",
      "Premium AISI 304 stainless steel",
      "Available in Satin, Gold, Rose Gold, and Matt Black"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127x127 mm (5"x5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },
  {
    id: "clx-110",
    model: "CLX 110",
    tier: "Flat Cut",
    category: "floor-drainers",
    categoryLabel: "Floor Drainer",
    name: "CLX 110 Flat Cut Slotted Drainer",
    tagline: "Horizontal Slotted Linear Pattern Floor Grate",
    material: "AISI 304 Stainless Steel",
    dimensions: '150x150 mm & 127x127 mm',
    image: "/images/products/clx-110.png",
    colorsImage: "/images/products/clx-110-colors.png",
    finishes: ["Satin", "Gold", "Rose Gold (R Gold)", "Black"],
    description: "Flat-cut floor drainer featuring horizontal slotted openings designed for quick drainage and easy maintenance.",
    highlights: [
      "Linear horizontal slot array",
      "Offered in 150x150mm (6\"x6\") and 127x127mm (5\"x5\")",
      "AISI 304 stainless steel",
      "Satin, Gold, Rose Gold, and Matt Black surface finishes"
    ],
    priceTable: [
      { size: '150x150 mm (6"x6")', satin: "₹549", goldRgold: "₹1,590", black: "₹1,950" },
      { size: '127x127 mm (5"x5")', satin: "₹490", goldRgold: "₹1,490", black: "₹1,850" }
    ]
  },

  // --- COCKROACH BOWL ---
  {
    id: "cockroach-bowl",
    model: "COCKROACH BOWL",
    category: "cockroach-bowl",
    categoryLabel: "Anti-Insect Trap Bowl",
    name: "Clixer Stainless Steel Cockroach Trap Bowl",
    tagline: "Gravity Counterweight Automatic Closure Drain Bowl",
    material: "AISI 304 Stainless Steel",
    image: "/images/products/cockroach-bowl.png",
    finishes: ["Stainless Steel Silver"],
    description: "Specially engineered stainless steel drainage bowl equipped with a weighted automatic trap flap door mechanism. Prevents cockroaches, pests, bad sewer odors, and gases from entering the bathroom while allowing high-flow drainage when water runs.",
    highlights: [
      "Automatic gravity trap flap door opens with water flow and shuts tight when dry",
      "Blocks cockroaches, insects, sewer backflow, and foul odors",
      "Fits standard floor drain outlets",
      "Removable top strainer for effortless hair and debris cleaning",
      "Constructed from 100% AISI 304 grade stainless steel"
    ],
    specifications: [
      { label: "Material", value: "AISI 304 Stainless Steel" },
      { label: "Mechanism", value: "Gravity Flap Counterweight Trap Door" },
      { label: "Function", value: "Anti-Cockroach, Anti-Odor, Anti-Pest, Anti-Backflow" },
      { label: "Maintenance", value: "Tool-free removable hair trap cup" }
    ]
  },

  // --- TILE LEVELING JACK ---
  {
    id: "tile-leveling-system",
    model: "TILE LEVELING JACK",
    category: "tile-leveling",
    categoryLabel: "Tile Accessories",
    name: "Clixer Professional Tile Leveling System",
    tagline: "Positioning / Leveling / Leveling Seams / Pasting Flat Tiles",
    material: "High-Density Polymer & Stainless Steel Tools",
    image: "/images/products/tile-leveling-hero.png",
    finishes: ["Standard Orange & Red High-Visibility Tone"],
    description: "Professional grade tile alignment and leveling kit designed for perfect lippage-free floor and wall tile installation. Guarantees flat seam alignment and consistent grout joint spacing across ceramic, porcelain, and heavy marble tiles.",
    highlights: [
      "Eliminates tile lippage completely on floors and walls",
      "Accelerates tile setting speed and reduces installer fatigue",
      "Heavy-duty adjustable steel pliers tool included",
      "Precision Wedges, Clips, and Cross Spacers available in 2mm, 3mm, and 4mm sizes"
    ],
    components: [
      {
        name: "WEDGES",
        image: "/images/products/tile-leveling-wedges.png",
        options: "2 mm | 3 mm | 4 mm",
        desc: "Reusable heavy-duty serrated leveling wedges."
      },
      {
        name: "CLIP",
        image: "/images/products/tile-leveling-clip.png",
        options: "Single use disposable clip design",
        desc: "Precision breakout tile leveling clips for clean grout seams."
      },
      {
        name: "SPACER",
        image: "/images/products/tile-leveling-spacer.png",
        options: "Cross Spacer Grid Pack",
        desc: "Uniform tile joint cross spacers for perfectly straight tile rows."
      }
    ]
  }
];
