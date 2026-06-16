/**
 * Auger Fabrication — Complete Product Catalog Data
 * All products, categories, subcategories, descriptions, specs, and metadata.
 */

const AUGER_CATALOG = {

  categories: [
    {
      id: 'vertical-augers',
      name: 'Vertical Augers',
      slug: 'vertical-augers',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M5 6c3-1 7-1 10 0"/><path d="M5 10c3-1 7-1 10 0"/><path d="M5 14c3-1 7-1 10 0"/><path d="M5 18c3-1 7-1 10 0"/></svg>`,
      description: 'Precision vertical auger systems for powder and granule filling in food, pharmaceutical, and chemical applications. Our vertical augers deliver consistent volumetric dosing with tight tolerances.',
      image: 'assets/product_vertical_auger.png',
      subcategories: [
        { id: 'free-flow', name: 'Free-Flow Augers' },
        { id: 'non-free-flow', name: 'Non-Free-Flow Augers' },
        { id: 'liquid-tooling', name: 'Liquid Tooling' },
        { id: 'auger-funnels', name: 'Auger Funnels' },
        { id: 'auger-shafts', name: 'Auger Shafts' },
        { id: 'vffs-tooling', name: 'VFFS Tooling' },
        { id: 'auger-hoppers', name: 'Auger Hoppers' },
        { id: 'accessories', name: 'Assorted Accessories' },
      ]
    },
    {
      id: 'horizontal-augers',
      name: 'Horizontal Augers',
      slug: 'horizontal-augers',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12"/><path d="M7 6c0 3 1 7 0 10"/><path d="M11 6c0 3 1 7 0 10"/><path d="M15 6c0 3 1 7 0 10"/><path d="M19 6c0 3 1 7 0 10"/></svg>`,
      description: 'Industrial horizontal auger conveyors for bulk material transfer. Designed for continuous-duty bulk powder, granule, and aggregate conveying across production floors.',
      image: 'assets/product_horizontal_auger.png',
      subcategories: []
    },
    {
      id: 'flighting',
      name: 'Flighting',
      slug: 'flighting',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 0 1 7.38 16.87"/><path d="M12 22A10 10 0 0 1 4.62 5.13"/><path d="M5 12H2"/><path d="M22 12h-3"/></svg>`,
      description: 'Custom-manufactured auger flighting in helicoid, sectional, ribbon, shaftless, and square stock configurations. Fabricated to your exact specifications for any material and application.',
      image: 'assets/product_flighting.png',
      subcategories: [
        { id: 'helicoid', name: 'Helicoid Flighting' },
        { id: 'sectional', name: 'Sectional Flighting' },
        { id: 'ribbon', name: 'Ribbon Flighting' },
        { id: 'shaftless', name: 'Shaftless Flighting' },
        { id: 'square-stock', name: 'Square Stock Flighting' },
      ]
    },
    {
      id: 'replacement-augers',
      name: 'Replacement Augers',
      slug: 'replacement-augers',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>`,
      description: 'Drop-in replacement augers and tooling for all major filling machine brands. We reverse-engineer and manufacture OEM-quality replacements at competitive lead times.',
      image: 'assets/product_replacement_auger.png',
      subcategories: []
    },
    {
      id: 'custom-augers',
      name: 'Custom Augers',
      slug: 'custom-augers',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      description: 'Fully engineered custom auger solutions for unique material handling challenges. We design, prototype, and manufacture one-of-a-kind auger systems from your drawings or requirements.',
      image: 'assets/product_custom_auger.png',
      subcategories: []
    },
    {
      id: 'maintenance-repairs',
      name: 'Auger Maintenance & Repairs',
      slug: 'maintenance-repairs',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      description: 'Expert auger refurbishment, reconditioning, and emergency repair services. We restore worn and damaged auger systems to original performance specifications, minimizing your downtime.',
      image: 'assets/product_auger_maintenance.png',
      subcategories: []
    }
  ],

  products: [

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — FREE-FLOW
    // ═══════════════════════════════════════════
    {
      id: 'free-flow-augers',
      name: 'Free-Flow Augers',
      slug: 'free-flow-augers',
      category: 'vertical-augers',
      subcategory: 'free-flow',
      tag: 'Most Popular',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision vertical augers engineered for free-flowing powders, granules, and particulates in food, dairy, and chemical filling applications.',
      description: 'Auger Fabrication\'s Free-Flow Augers are the industry standard for accurate volumetric dosing of free-flowing materials. Machined to ultra-precise tolerances from 304 or 316L stainless steel, these augers integrate seamlessly with all major VFFS and cup-filling machines. The optimized helical geometry ensures consistent fill weights with minimal product degradation, making them the first choice for high-speed packaging lines in food, dairy, coffee, spice, and chemical sectors.',
      features: [
        'Precision CNC-machined from 304 or 316L stainless steel',
        'Optimized helix pitch for consistent volumetric displacement',
        'Polished food-grade finish — Ra ≤ 0.8 µm (32 µin)',
        'Available in diameters from 1" to 6" (25mm–152mm)',
        'Compatible with all major VFFS machine brands',
        'Quick-change design for fast product changeovers',
        'Optional anti-static or PTFE-coated versions',
        'Traceable material certification included',
      ],
      applications: [
        'Protein powders and nutritional supplements',
        'Coffee grounds, tea, and spices',
        'Flour, sugar, salt, and dry ingredients',
        'Granulated chemicals and fertilizers',
        'Powdered detergents and cleaning agents',
        'Animal feed and pet food',
        'Seeds and granular agricultural products',
      ],
      specifications: {
        'Material': '304 SS / 316L SS (food grade)',
        'Diameter Range': '1" – 6" (25mm – 152mm)',
        'Surface Finish': 'Ra ≤ 0.8 µm electropolished',
        'Pitch Options': 'Standard, coarse, fine (custom available)',
        'Length': 'Up to 24" (610mm) standard, custom on request',
        'Lead Time': '5–15 business days standard',
        'Certifications': 'FDA, 3-A Sanitary Standards compliant',
        'Compatibility': 'All major VFFS and auger filler brands',
      },
      seoTitle: 'Free-Flow Augers | Precision Vertical Auger Fillers | AugerFeed',
      seoDesc: 'CNC-machined free-flow vertical augers in 304/316L SS for accurate powder dosing. Compatible with all VFFS machines. Food & FDA compliant.',
      relatedProducts: ['non-free-flow-augers', 'auger-funnels-collector', 'vffs-tooling', 'auger-shafts']
    },

    {
      id: 'non-free-flow-augers',
      name: 'Non-Free-Flow Augers',
      slug: 'non-free-flow-augers',
      category: 'vertical-augers',
      subcategory: 'non-free-flow',
      tag: 'Specialty',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Specially engineered augers for cohesive, sticky, or difficult-to-flow powders that require modified geometry and surface treatment.',
      description: 'Non-Free-Flow Augers from Auger Fabrication are purpose-built for challenging materials — cohesive powders, sticky substances, hygroscopic compounds, and highly aerated or compressible products. Using proprietary geometry modifications including altered pitch progression, specialized surface textures, and enhanced core diameters, these augers provide reliable, repeatable dosing even with the most difficult bulk materials. Each design is validated through material testing at our facility.',
      features: [
        'Modified helix geometry for cohesive material handling',
        'Available with PTFE, PFA or electropolished hard-coat finish',
        'Tighter core/OD ratio to reduce bridging and arching',
        'Progressive pitch options to manage compressibility',
        'Optional swept-back blade profiles for sticky materials',
        'Compatible with agitation systems for difficult powders',
        'Full material validation testing service available',
        'Custom solutions designed from your material samples',
      ],
      applications: [
        'Cocoa powder and chocolate mixes',
        'Whey protein and caseinate powders',
        'Powdered milk and dairy blends',
        'Pharmaceutical granulations and APIs',
        'Talc, clay, and mineral powders',
        'Starch and modified starches',
        'Hygroscopic chemicals and salts',
      ],
      specifications: {
        'Material': '316L SS with specialist surface treatment',
        'Surface Finish': 'PTFE / PFA / electropolished hard-coat',
        'Diameter Range': '1" – 5" (25mm – 127mm)',
        'Geometry': 'Progressive pitch, modified helix (custom)',
        'Lead Time': '10–20 business days',
        'Certifications': 'FDA, EHEDG, 3-A compliant available',
        'Testing': 'Material validation testing available',
        'Warranty': '12 months performance guarantee',
      },
      seoTitle: 'Non-Free-Flow Augers | Cohesive Powder Filling | AugerFeed',
      seoDesc: 'Specialty non-free-flow augers for cohesive, sticky, and difficult powders. PTFE/PFA coated. Pharmaceutical and food grade. Custom geometry.',
      relatedProducts: ['free-flow-augers', 'liquid-tooling', 'auger-hoppers', 'agitation-blades']
    },

    {
      id: 'liquid-tooling',
      name: 'Liquid Tooling',
      slug: 'liquid-tooling',
      category: 'vertical-augers',
      subcategory: 'liquid-tooling',
      tag: 'Specialized',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision liquid-filling tooling sets including nozzles, valves, and manifolds engineered for accurate viscous product dispensing on VFFS machines.',
      description: 'Auger Fabrication\'s Liquid Tooling systems extend the capability of your VFFS and pouch-filling machinery to handle liquids, semi-liquids, pastes, sauces, and high-viscosity products. Our complete tooling sets include dosing nozzles, shut-off valves, manifolds, and product-contact wetted parts — all machined from 316L stainless steel with sanitary tri-clamp connections. Available in single-lane and multi-lane configurations to match your machine and output requirements.',
      features: [
        '316L stainless steel wetted parts throughout',
        'Sanitary tri-clamp and hygienic connections',
        'Precision-ground nozzle tips for accurate fill volume',
        'Anti-drip shut-off valves with clean cutoff',
        'Single and multi-lane manifold options',
        'Compatible with gravity, peristaltic, and piston filling',
        'CIP/SIP-compatible design for hygienic cleaning',
        'Available in 2-ounce to gallon fill ranges',
      ],
      applications: [
        'Sauces, dressings, and condiments',
        'Juices, beverages, and liquid dairy',
        'Honey, syrups, and high-viscosity products',
        'Shampoo, lotions, and personal care liquids',
        'Pharmaceutical syrups and suspensions',
        'Chemical solutions and concentrates',
        'Automotive fluids and lubricants',
      ],
      specifications: {
        'Material': '316L SS — full wetted surface',
        'Connections': 'Tri-clamp, SMS, RJT sanitary fittings',
        'Viscosity Range': 'Up to 100,000 cP',
        'Fill Volume': '30ml – 5,000ml',
        'Accuracy': '±0.5% at calibrated flow rate',
        'Finish': 'Electropolished Ra ≤ 0.4 µm',
        'Certifications': 'FDA, EHEDG, HACCP compliant',
        'CIP': 'Full Clean-In-Place compatible',
      },
      seoTitle: 'Liquid Tooling | VFFS Liquid Filling Nozzles & Manifolds | AugerFeed',
      seoDesc: 'Complete liquid tooling sets for VFFS machines. 316L SS, sanitary tri-clamp, CIP-compatible. Sauces, liquids, pastes, and viscous products.',
      relatedProducts: ['free-flow-augers', 'drip-washers', 'vffs-tooling', 'clamp-rings']
    },

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — AUGER FUNNELS
    // ═══════════════════════════════════════════
    {
      id: 'auger-funnels-collector',
      name: 'Collector Funnels',
      slug: 'collector-funnels',
      category: 'vertical-augers',
      subcategory: 'auger-funnels',
      tag: 'Essential',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision-machined collector funnels that gather and direct powder flow from the hopper into the auger tube for consistent, controlled filling.',
      description: 'Collector Funnels from Auger Fabrication form the critical interface between the product hopper and the auger tube. Machined to exacting tolerances, these funnels ensure smooth, laminar powder flow with no dead zones or bridging points. The carefully designed cone angle and polished interior surface minimize powder retention between product runs, making them ideal for allergen-sensitive and multi-product filling environments. Available in a full range of sizes to match all standard auger tube diameters.',
      features: [
        'Precisely machined cone geometry for laminar flow',
        'Electropolished interior Ra ≤ 0.8 µm for minimal retention',
        'Full 304 or 316L stainless steel construction',
        'Available in a complete size range from ¾" to 6" tube ID',
        'Quick-release clamp connection for tool-free disassembly',
        'No-shadow corners — fully drainable design',
        'Matched sets available for consistent performance',
        'Custom angles and dimensions to OEM specifications',
      ],
      applications: [
        'Powdered food products and spices',
        'Pharmaceutical powders and granulations',
        'Chemical powders and detergents',
        'Nutraceutical and supplement filling',
        'Dairy and coffee powder packaging',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Surface Finish': 'Electropolished Ra ≤ 0.8 µm',
        'Size Range': '¾" – 6" tube ID compatibility',
        'Connection': 'Tri-clamp, custom flange',
        'Cone Angle': '30°, 45°, 60° standard (custom available)',
        'Lead Time': '3–10 business days',
        'Certifications': 'FDA, 3-A compliant',
        'Custom': 'OEM reverse-engineering available',
      },
      seoTitle: 'Collector Funnels | Auger Tube Inlet Funnels | AugerFeed Industrial',
      seoDesc: 'Precision collector funnels for auger fillers. 304/316L SS, electropolished. Quick-release. All sizes and OEM-compatible.',
      relatedProducts: ['straight-funnels', 'lip-funnels', 'free-flow-augers', 'clamp-rings']
    },

    {
      id: 'straight-funnels',
      name: 'Straight Funnels',
      slug: 'straight-funnels',
      category: 'vertical-augers',
      subcategory: 'auger-funnels',
      tag: 'Standard',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Standard straight-bore funnels for direct drop-filling applications where minimal product contact and maximum flow velocity are required.',
      description: 'Straight Funnels provide a direct, straight-bore discharge path for high-speed filling applications where product needs to transfer cleanly and quickly from the auger tube into the package. The straight cylindrical profile maximizes discharge velocity and minimizes turbulence, making these funnels ideal for fine powders, granules, and products that need to be placed precisely into narrow package openings. All manufactured in-house to OEM or custom specifications.',
      features: [
        'Straight-bore design for maximum discharge velocity',
        'Highly polished interior bore for clean release',
        'Precision-turned OD for exact auger tube fit',
        'Available in carbon steel, 304 SS, and 316L SS',
        'Matching clamp ring and gasket kits available',
        'Compatible with all major VFFS and filler brands',
        'Length options from 2" to 16"',
        'Tapered tip options for narrow bag necks',
      ],
      applications: [
        'Coffee and tea packaging',
        'Spice and seasoning filling',
        'Pharmaceutical powder capsule filling',
        'Narrow-form pouch filling',
        'High-speed multi-head filling systems',
      ],
      specifications: {
        'Material': '304 SS / 316L SS / carbon steel',
        'Bore Diameter': '½" – 4" (custom larger available)',
        'Length': '2" – 16" standard, custom on request',
        'Surface Finish': 'Interior polished Ra ≤ 0.8 µm',
        'Connection': 'Slip fit, threaded, or clamp',
        'Lead Time': '3–7 business days',
        'Standards': 'FDA contact-safe materials',
      },
      seoTitle: 'Straight Funnels | Auger Filler Straight Bore Funnels | AugerFeed',
      seoDesc: 'Precision straight-bore funnels for auger fillers. 304/316L SS. All sizes. OEM-compatible for fast, clean powder discharge.',
      relatedProducts: ['collector-funnels', 'lip-funnels', 'clamp-rings', 'free-flow-augers']
    },

    {
      id: 'lip-funnels',
      name: 'Lip Funnels',
      slug: 'lip-funnels',
      category: 'vertical-augers',
      subcategory: 'auger-funnels',
      tag: 'Anti-Drip',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Anti-drip lip funnels with precision-machined inner edge geometry to break product flow cleanly and prevent dusting or drip contamination.',
      description: 'Lip Funnels incorporate a precisely engineered inner lip geometry at the discharge end that creates a clean, decisive break in product flow when the auger stops. This eliminates tail-end dripping, dusting, and product smearing on bag seals — a critical requirement for food safety and seal integrity. Auger Fabrication\'s lip funnels are machined to exact dimensions with a proprietary lip angle and radius that outperforms standard OEM designs in independent testing.',
      features: [
        'Patented inner lip geometry for clean flow cutoff',
        'Eliminates dripping and dusting on bag seals',
        'Improves seal integrity and reduces product waste',
        'Machined from single piece of SS for strength and hygiene',
        'Available to match all major VFFS machine specifications',
        'Electropolished or brushed finish options',
        'Can be retrofitted onto existing auger tube assemblies',
        'Reduces seal contamination by up to 95% vs standard funnels',
      ],
      applications: [
        'Fine powder filling where seal contamination is a concern',
        'Coffee, protein powder, and flour packaging',
        'Pharmaceutical powder containment filling',
        'Allergen-sensitive product lines',
        'Dusty or lightweight powders',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Lip Geometry': 'Proprietary radius — custom available',
        'Diameter Range': '¾" – 5" OD',
        'Surface Finish': 'Electropolished Ra ≤ 0.4 µm',
        'Connection': 'Clamp ring standard',
        'Lead Time': '5–10 business days',
        'Performance': 'Reduces drip/dust by up to 95%',
      },
      seoTitle: 'Lip Funnels | Anti-Drip Auger Discharge Funnels | AugerFeed',
      seoDesc: 'Anti-drip lip funnels for auger fillers. Precision lip geometry eliminates bag seal contamination. 304/316L SS. OEM-compatible.',
      relatedProducts: ['straight-funnels', 'collector-funnels', 'drip-washers', 'clamp-rings']
    },

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — AUGER SHAFTS
    // ═══════════════════════════════════════════
    {
      id: 'auger-shafts',
      name: 'Auger Shafts',
      slug: 'auger-shafts',
      category: 'vertical-augers',
      subcategory: 'auger-shafts',
      tag: 'Precision',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'High-precision auger drive shafts and core tubes providing the mechanical foundation for reliable, concentric auger rotation and long service life.',
      description: 'Auger shafts are the precision-ground central spine of every vertical auger assembly. Auger Fabrication machines shafts to the tightest possible concentricity tolerances, ensuring vibration-free rotation at all operating speeds. Ground and polished to exact surface finishes, our shafts exhibit superior wear resistance and maintain their geometry over millions of cycles. Available as plain shafts, splined shafts, or complete shaft/auger assemblies ready for drop-in installation.',
      features: [
        'Precision-ground to ±0.0005" concentricity tolerance',
        'Through-hardened and surface-tempered for wear resistance',
        'Available in 304 SS, 316L SS, or hardened carbon steel',
        'Keyway, spline, and hex drive options',
        'Complete shaft assemblies with bearings and seals available',
        'Matched to auger bore for zero runout',
        'Custom lengths to 60" (1,524mm)',
        'Material certifications and test reports included',
      ],
      applications: [
        'Vertical auger filler main drive shafts',
        'High-speed dosing machine spindles',
        'Replacement shafts for worn OEM assemblies',
        'Custom auger machine builds',
      ],
      specifications: {
        'Material': '304 SS / 316L SS / hardened steel',
        'Concentricity': '±0.0005" (±0.013mm)',
        'Diameter Range': '¼" – 3" (6mm – 76mm)',
        'Surface Finish': 'Ground Rz ≤ 0.8 µm',
        'Max Length': '60" (1,524mm) standard',
        'Drive Options': 'Key, spline, hex, D-flat',
        'Lead Time': '5–15 business days',
      },
      seoTitle: 'Auger Shafts | Precision Ground Vertical Auger Drive Shafts | AugerFeed',
      seoDesc: 'Precision-ground auger drive shafts in 304/316L SS. ±0.0005" concentricity. Keyway, spline, hex options. Drop-in OEM replacement.',
      relatedProducts: ['free-flow-augers', 'non-free-flow-augers', 'replacement-augers', 'vffs-tooling']
    },

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — VFFS TOOLING
    // ═══════════════════════════════════════════
    {
      id: 'vffs-tooling',
      name: 'Vertical Form Fill & Seal (VFFS) Tooling',
      slug: 'vffs-tooling',
      category: 'vertical-augers',
      subcategory: 'vffs-tooling',
      tag: 'Complete Sets',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Complete VFFS tooling sets including forming collars, forming tubes, and all product-contact parts for every major VFFS machine brand.',
      description: 'Auger Fabrication supplies complete Vertical Form Fill & Seal tooling sets encompassing forming collars, forming tubes, auger assemblies, and all associated product-contact hardware. We manufacture tooling for Hayssen, Bosch, Ilapak, Ishida, ULMA, and all major VFFS brands — both as direct OEM replacements and as enhanced-performance upgrades. Our tooling is dimensionally verified against original machine specs and tested to ensure perfect film registration and precise dosing performance.',
      features: [
        'Complete tooling sets for all major VFFS machine brands',
        'Forming collars in all standard and custom widths',
        'Highly polished forming tubes for smooth film travel',
        'Auger assemblies matched to your target fill weight',
        'Complete change-part kits for multi-product lines',
        'Faster changeover with color-coded tooling sets',
        'Extended wear life vs. OEM parts (verified in-field)',
        'CAD drawings and installation guides supplied',
      ],
      applications: [
        'Powder and granule VFFS packaging',
        'Snack food and confectionery packaging lines',
        'Coffee and tea bag machines',
        'Nutritional supplement pouch filling',
        'Chemical and fertilizer bag machines',
      ],
      specifications: {
        'Compatibility': 'Hayssen, Bosch, Ilapak, Ishida, ULMA, + more',
        'Material': '304 SS / 316L SS forming surfaces',
        'Forming Collar Width': 'Standard bag widths + custom',
        'Tube Lengths': 'To match machine specification',
        'Film Compatibility': 'LDPE, OPP, laminates, foil',
        'Lead Time': '7–21 business days',
        'Documentation': 'CAD drawings + installation guide',
        'Warranty': '12 months',
      },
      seoTitle: 'VFFS Tooling | Forming Collars, Tubes & Auger Sets | AugerFeed',
      seoDesc: 'Complete VFFS tooling sets for all major brands. Forming collars, tubes, auger assemblies. 304/316L SS. Fast lead times.',
      relatedProducts: ['free-flow-augers', 'auger-shafts', 'collector-funnels', 'auger-hoppers']
    },

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — AUGER HOPPERS
    // ═══════════════════════════════════════════
    {
      id: 'auger-hoppers',
      name: 'Auger Hoppers',
      slug: 'auger-hoppers',
      category: 'vertical-augers',
      subcategory: 'auger-hoppers',
      tag: 'Custom',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Sanitary stainless steel auger hoppers engineered for optimal powder flow, minimal retention, and hygienic cleanability in food and pharma applications.',
      description: 'Auger Fabrication designs and fabricates stainless steel hoppers specifically optimized for use with vertical auger filling machines. Unlike generic hoppers, ours are engineered with the correct cone angle, polished surface, and discharge geometry to match the specific flow characteristics of your product. Available with optional agitation systems, vibration pads, load cells for level detection, and CIP spray balls — all built to 3-A Sanitary Standards.',
      features: [
        'Designed specifically for vertical auger filler integration',
        'Optimal cone angle calculated for your material bulk density',
        'Electropolished interior Ra ≤ 0.8 µm — minimal retention',
        'Full 304 or 316L stainless steel construction',
        'Optional agitator bridges for cohesive powders',
        'Optional load cell mounts for level/weight monitoring',
        'CIP/SIP spray ball fittings available',
        'Mounted legs, hanger brackets, or stand-alone frames',
      ],
      applications: [
        'Food powder and dry ingredient filling',
        'Pharmaceutical API and excipient hoppers',
        'Nutraceutical and supplement filling',
        'Chemical powder dosing systems',
        'Multi-head and multi-lane filling stations',
      ],
      specifications: {
        'Material': '304 SS / 316L SS (polished or brushed)',
        'Capacity': '10L – 1,000L (custom larger)',
        'Interior Finish': 'Ra ≤ 0.8 µm electropolished',
        'Cone Angle': 'Engineered to material bulk density',
        'Connections': 'Tri-clamp discharge, CIP spray balls',
        'Options': 'Agitator, load cells, vibration, insulation',
        'Standards': '3-A, FDA, EHEDG',
        'Lead Time': '15–30 business days',
      },
      seoTitle: 'Auger Hoppers | Sanitary SS Powder Hoppers for Auger Fillers | AugerFeed',
      seoDesc: 'Sanitary stainless steel hoppers engineered for auger fillers. 304/316L SS. 3-A certified. Agitators, load cells, CIP available.',
      relatedProducts: ['free-flow-augers', 'agitation-blades', 'restrictor-grids', 'non-free-flow-augers']
    },

    // ═══════════════════════════════════════════
    //  VERTICAL AUGERS — ACCESSORIES
    // ═══════════════════════════════════════════
    {
      id: 'drip-washers',
      name: 'Drip Washers',
      slug: 'drip-washers',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Accessory',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision-machined drip washers that seal the bottom of the auger tube, preventing product leakage and maintaining clean operation between fills.',
      description: 'Drip Washers are critical sealing components positioned at the base of the auger tube to prevent fine powder leakage between fill cycles. Machined to ultra-precise tolerances, Auger Fabrication drip washers form a positive shutoff that eliminates the product drift and seal contamination common with worn or poorly fitted OEM parts. Available in PTFE, UHMW-PE, and nylon compounds to match your product contact requirements.',
      features: [
        'Ultra-precise OD tolerance for positive tube seal',
        'Available in PTFE, UHMW-PE, Nylon, and Delrin',
        'FDA and EU food-contact compliant materials',
        'Extended wear life vs. standard OEM washers',
        'Multiple sizes for all standard auger tube diameters',
        'Anti-static compounds available for explosive powders',
        'Easy visual identification for quick QC checks',
        'Sold individually or in economical multi-packs',
      ],
      applications: [
        'All vertical auger filling machines',
        'Fine powder containment filling',
        'Pharmaceutical and food-grade operations',
        'Anti-static environments with combustible powders',
      ],
      specifications: {
        'Material': 'PTFE / UHMW-PE / Nylon / Delrin',
        'Compliance': 'FDA, EU 10/2011, 3-A food contact',
        'Size Range': 'All standard auger tube diameters',
        'Tolerance': 'OD ±0.001" press-fit tolerance',
        'Anti-static': 'Static-dissipative compound available',
        'Pack Quantity': '1, 5, 10, 25 piece kits',
        'Lead Time': '1–5 business days (stock items)',
      },
      seoTitle: 'Drip Washers | Auger Tube Sealing Washers | AugerFeed Industrial',
      seoDesc: 'Precision drip washers for auger fillers. PTFE, UHMW-PE, Nylon. FDA compliant. Eliminates product leakage between fills.',
      relatedProducts: ['clamp-rings', 'lip-funnels', 'free-flow-augers', 'restrictor-grids']
    },

    {
      id: 'restrictor-grids',
      name: 'Restrictor Grids',
      slug: 'restrictor-grids',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Flow Control',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Stainless steel restrictor grids installed above the auger intake to control product flow, prevent over-feeding, and condition difficult powders.',
      description: 'Restrictor Grids are installed in the hopper directly above the auger intake to control and condition product flow into the auger. By limiting the head pressure on the auger, they prevent over-compression of compressible powders, eliminate bridging above the auger inlet, and improve fill consistency. Auger Fabrication manufactures restrictor grids in a range of opening sizes and configurations to precisely tune the flow behavior of your specific product.',
      features: [
        'Laser-cut or wire-welded construction in 304/316L SS',
        'Available in square, rectangular, and round aperture patterns',
        'Aperture size from 4mm to 25mm to suit material particle size',
        'Quick-release design for fast cleaning and inspection',
        'Custom sizes to fit any hopper discharge diameter',
        'Reinforced frame for long-term structural integrity',
        'Sanitary finish with no crevices or entrapment areas',
        'Works in conjunction with agitation and vibration systems',
      ],
      applications: [
        'Compressible and aerated powder control',
        'High-bulk-density granule flow regulation',
        'Preventing bridging at auger inlet',
        'Conditioning product flow for accurate dosing',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Aperture Size': '4mm – 25mm (custom)',
        'Pattern': 'Square, rectangular, round, custom',
        'Frame': 'Quick-release clamp fit',
        'Finish': 'Brushed or electropolished',
        'Lead Time': '5–10 business days',
        'Custom': 'Any shape or aperture on request',
      },
      seoTitle: 'Restrictor Grids | Hopper Flow Control Screens | AugerFeed',
      seoDesc: 'Stainless steel restrictor grids for auger filler hoppers. Controls powder flow, prevents bridging. 304/316L SS. Custom sizes.',
      relatedProducts: ['auger-hoppers', 'agitation-blades', 'drip-washers', 'free-flow-augers']
    },

    {
      id: 'clamp-rings',
      name: 'Clamp Rings',
      slug: 'clamp-rings',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Connector',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision stainless steel clamp rings for secure, tool-free connection and alignment of auger tubes, funnels, and tooling assemblies.',
      description: 'Clamp Rings provide the primary mechanical connection between auger tubes, funnels, adapters, and machine interfaces. Auger Fabrication machines clamp rings to ensure perfect concentricity when mated, eliminating the misalignment that causes vibration, premature wear, and poor fill accuracy. Available in standard tri-clamp, Auger-ring, and custom styles — all with sanitary-compliant surface treatment.',
      features: [
        'Precision-machined bore for zero-misalignment assembly',
        'Quick-action lever lock — no tools required',
        'Full 304 or 316L stainless steel',
        'Sanitary-polished surfaces with no harborage points',
        'Standard tri-clamp and proprietary formats available',
        'Complete with PTFE or silicone gasket sets',
        'Sold individually or as matched assembly kits',
        'Compatible with all major auger machine manufacturers',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Gasket': 'PTFE or silicone (FDA compliant)',
        'Sizes': '1" – 6" tube OD (custom)',
        'Type': 'Tri-clamp, Auger-ring, custom',
        'Lock': 'Quick-action lever (tool-free)',
        'Finish': 'Electropolished',
        'Lead Time': '3–7 business days',
      },
      seoTitle: 'Clamp Rings | Sanitary Auger Tube Clamp Connectors | AugerFeed',
      seoDesc: 'Precision stainless steel clamp rings for auger filler assemblies. Quick-action lever lock. Tri-clamp standard. PTFE/silicone gaskets.',
      relatedProducts: ['drip-washers', 'collector-funnels', 'straight-funnels', 'lip-funnels']
    },

    {
      id: 'dividing-heads',
      name: 'Dividing Heads',
      slug: 'dividing-heads',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Multi-Lane',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Multi-outlet dividing heads that split a single auger discharge into two or more lanes for simultaneous multi-bag or multi-container filling.',
      description: 'Dividing Heads allow a single auger filler to simultaneously fill multiple bags, containers, or cavities by splitting the product stream into two, three, or four equal parallel paths. Auger Fabrication\'s dividing heads use precision-machined internal channel geometry to ensure equal flow distribution across all outlets, maintaining fill weight accuracy across all lanes. This dramatically increases machine output without additional capital investment.',
      features: [
        'Precision-machined internal channels for equal distribution',
        '2-way, 3-way, and 4-way outlet configurations',
        'Full 304 or 316L stainless steel construction',
        'Clean sweep interior with no dead zones',
        'Compatible with standard auger tube fittings',
        'Eliminates the need for multiple single-head machines',
        'Increases effective line output 2× to 4×',
        'Custom configurations for specialty applications',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Configurations': '2-way, 3-way, 4-way (custom)',
        'Outlet Diameter': 'Matched to auger tube size',
        'Flow Balance': '±2% across all outlets at design flow rate',
        'Connection': 'Tri-clamp inlet and outlets',
        'Lead Time': '10–20 business days',
      },
      seoTitle: 'Dividing Heads | Multi-Lane Auger Filler Heads | AugerFeed',
      seoDesc: 'Multi-outlet dividing heads for auger fillers. 2, 3, and 4-way configurations. Equal flow distribution. 304/316L SS.',
      relatedProducts: ['free-flow-augers', 'collector-funnels', 'auger-hoppers', 'clamp-rings']
    },

    {
      id: 'spinner-plates',
      name: 'Spinner Plates',
      slug: 'spinner-plates',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Agitation',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Rotating spinner plates mounted beneath the hopper to agitate and fluidize powder, ensuring consistent flow into the auger at all times.',
      description: 'Spinner Plates are high-speed rotating agitation discs installed at the hopper base, directly above the auger inlet. Driven by a dedicated motor, the spinner plate continuously agitates the product mass, preventing compaction, bridging, and rat-holing — ensuring a consistent, uniform powder head is always presented to the auger intake. Essential for cohesive powders, fine particle sizes, and temperature-sensitive products prone to clumping.',
      features: [
        'High-speed rotation (up to 1,500 RPM)',
        'Variable-speed drive for material-specific tuning',
        'Precision-balanced for vibration-free operation',
        'Available with flat, domed, and vaned plate profiles',
        'Machined from 304 or 316L stainless steel',
        'Quick-release drive coupling for cleaning',
        'Optional frequency drive control for automation integration',
        'Paired agitation blade sets available',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Rotation Speed': 'Up to 1,500 RPM (variable)',
        'Drive': 'Direct or belt — variable frequency',
        'Plate Profile': 'Flat, domed, vaned (custom)',
        'Diameter': 'Sized to hopper discharge diameter',
        'Lead Time': '10–15 business days',
      },
      seoTitle: 'Spinner Plates | Auger Hopper Agitation Plates | AugerFeed',
      seoDesc: 'Rotating spinner plates for auger filler hoppers. Prevents bridging and compaction. Variable speed. 304/316L SS.',
      relatedProducts: ['agitation-blades', 'auger-hoppers', 'non-free-flow-augers', 'restrictor-grids']
    },

    {
      id: 'agitation-blades',
      name: 'Agitation Blades',
      slug: 'agitation-blades',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Flow Aid',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Custom-profiled agitation blades for auger hoppers that continuously sweep and condition powder to maintain steady, uninterrupted material flow.',
      description: 'Agitation Blades are the direct-contact agitation elements that sweep through the product mass in the hopper to break down compaction, prevent caking, and maintain a steady, uniform flow into the auger. Auger Fabrication manufactures blades in flat, twisted, swept-back, and paddle configurations — each profile engineered for a specific material behavior. Available as replacement sets for existing agitators or as part of new auger hopper builds.',
      features: [
        'Custom blade profiles: flat, twisted, swept-back, paddle',
        'Machined or formed from 304 or 316L SS',
        'Powder-contact surfaces fully polished',
        'Bolt-on and quick-release mounting styles',
        'Sets designed for 2, 3, and 4 blade configurations',
        'Profiled to match specific material behaviors',
        'Compatible with all major hopper agitator drives',
        'Individual blades or complete replacement sets',
      ],
      specifications: {
        'Material': '304 SS / 316L SS',
        'Profiles': 'Flat, twisted, swept-back, paddle',
        'Mounting': 'Bolt-on, quick-release hub mount',
        'Configuration': '2, 3, or 4 blade sets',
        'Surface': 'Polished food-contact grade',
        'Lead Time': '5–10 business days',
        'Custom': 'Reverse-engineering of OEM blades',
      },
      seoTitle: 'Agitation Blades | Auger Hopper Agitator Blades | AugerFeed',
      seoDesc: 'Custom agitation blades for auger fillers and hoppers. Flat, twisted, sweep-back profiles. 304/316L SS. OEM replacements and custom.',
      relatedProducts: ['spinner-plates', 'auger-hoppers', 'non-free-flow-augers', 'restrictor-grids']
    },

    {
      id: 'cutoff-devices',
      name: 'Cutoff Devices',
      slug: 'cutoff-devices',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Precision Stop',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Precision pneumatic and mechanical cutoff devices that provide a clean, instantaneous product shutoff at the end of each fill cycle.',
      description: 'Cutoff Devices are the primary product shutoff mechanism on auger filling machines. Auger Fabrication manufactures both pneumatic slide-gate and mechanical rotating-disc cutoff devices that provide an instantaneous, clean shutoff at the end of each fill without product drool, smear, or over-fill. Critical for achieving tight fill weight tolerances and clean bag seals on high-speed packaging lines.',
      features: [
        'Instantaneous shutoff — eliminates over-fill and drool',
        'Pneumatic slide-gate and rotating disc configurations',
        'Actuator response time < 25ms',
        'Full 304/316L SS product contact surfaces',
        'Self-cleaning wiping action on disc-type cutoffs',
        'Adjustable cutoff timing for different auger speeds',
        'ATEX-rated pneumatic options for explosive atmospheres',
        'Replacement seal and blade kits available',
      ],
      specifications: {
        'Material': '304 SS / 316L SS product contact',
        'Type': 'Pneumatic slide, rotating disc',
        'Response Time': '< 25ms actuation',
        'Actuation': 'Compressed air 60–120 PSI',
        'Size Range': '1" – 4" tube ID',
        'ATEX': 'Zone 1/21 rated option available',
        'Lead Time': '7–14 business days',
      },
      seoTitle: 'Cutoff Devices | Auger Filler Shutoff Mechanisms | AugerFeed',
      seoDesc: 'Pneumatic and disc cutoff devices for auger fillers. <25ms response. Clean cutoff, no drool. 304/316L SS. ATEX options.',
      relatedProducts: ['drip-washers', 'lip-funnels', 'free-flow-augers', 'clamp-rings']
    },

    {
      id: 'left-hand-hardware',
      name: 'Left Hand Hardware',
      slug: 'left-hand-hardware',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Specialty',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Left-hand thread and reverse-helix hardware components for dual-head and counter-rotating auger filler configurations.',
      description: 'Left Hand Hardware encompasses all components designed with left-hand thread or reverse-helix geometry, required for dual-head auger fillers and counter-rotating configurations where the second head rotates in the opposite direction. Auger Fabrication maintains production capability for left-hand augers, shafts, funnels, and all associated fasteners — typically a specialty item with extended lead times from other suppliers, but stocked and fast-turned in our facility.',
      features: [
        'Complete left-hand auger screws, all standard diameters',
        'Left-hand threaded fasteners, lockouts, and collars',
        'Reverse-helix auger flights in all pitch options',
        'Left-hand shaft connections and drive adapters',
        'Custom LH tooling to OEM specifications',
        'Fast lead times — specialty capability in-house',
        'Clearly marked LH designation for safety',
        'Sets available to complement right-hand tooling',
      ],
      specifications: {
        'Thread': 'Left-hand (LH) metric and imperial',
        'Helix': 'Reverse (LH) helix direction',
        'Material': '304 SS / 316L SS',
        'Diameters': 'All standard auger sizes',
        'Marking': 'Clearly stamped LH identification',
        'Lead Time': '7–21 business days',
      },
      seoTitle: 'Left Hand Hardware | Reverse Helix Auger Components | AugerFeed',
      seoDesc: 'Left-hand thread and reverse-helix auger components for dual-head fillers. All sizes. 304/316L SS. In-house LH manufacturing.',
      relatedProducts: ['free-flow-augers', 'auger-shafts', 'clamp-rings', 'cutoff-devices']
    },

    {
      id: 'tool-cart',
      name: 'Tool Cart',
      slug: 'tool-cart',
      category: 'vertical-augers',
      subcategory: 'accessories',
      tag: 'Utility',
      image: 'assets/product_vertical_auger.png',
      shortDesc: 'Stainless steel tool carts designed to safely store, transport, and organize all auger tooling, funnels, and change parts at the filling machine.',
      description: 'Auger Fabrication\'s stainless steel Tool Carts are purpose-built for organizing and transporting auger change-parts, tooling sets, funnels, and accessories at the point of use. Designed to meet GMP requirements, these carts feature dedicated compartments for each tooling type, smooth-rolling casters for easy mobility, and open-frame construction for visual inspection of inventory. Essential for multi-product filling environments where changeover time and tooling integrity must be tightly controlled.',
      features: [
        'Full 304 stainless steel open-frame construction',
        'Dedicated slots and hooks for auger, funnel, and shaft storage',
        'Smooth-rolling, lockable swivel casters',
        'Open design for visual inventory inspection',
        'Meets GMP and pharmaceutical cleanroom requirements',
        'Labeled compartments for fast tooling location',
        'Easy-clean surfaces with no horizontal ledges',
        'Custom configurations for your specific tooling inventory',
      ],
      specifications: {
        'Material': '304 SS frame and shelves',
        'Casters': 'Lockable swivel, 4" diameter',
        'Dimensions': 'Custom to your tooling inventory',
        'Finish': 'Brushed electropolished',
        'Load Capacity': 'Up to 200 lbs (90 kg)',
        'Standards': 'GMP, FDA environment compatible',
        'Lead Time': '10–20 business days',
      },
      seoTitle: 'Stainless Steel Tool Cart | Auger Tooling Storage Cart | AugerFeed',
      seoDesc: 'GMP-grade stainless steel tool carts for auger change-parts. Lockable casters. Custom compartments. FDA environment compatible.',
      relatedProducts: ['free-flow-augers', 'vffs-tooling', 'clamp-rings', 'auger-shafts']
    },

    // ═══════════════════════════════════════════
    //  HORIZONTAL AUGERS
    // ═══════════════════════════════════════════
    {
      id: 'horizontal-augers',
      name: 'Horizontal Augers',
      slug: 'horizontal-augers',
      category: 'horizontal-augers',
      subcategory: null,
      tag: 'Bulk Conveying',
      image: 'assets/product_horizontal_auger.png',
      shortDesc: 'Heavy-duty horizontal auger conveyors engineered for continuous bulk material transfer of powders, granules, aggregates, and semi-solids.',
      description: 'Auger Fabrication\'s horizontal auger systems deliver reliable, continuous bulk material conveying for the most demanding industrial applications. Engineered to CEMA and customer-specific standards, our horizontal augers feature precision-machined flighting welded or press-fit to solid or pipe shafts, running inside bolted trough sections. Available in carbon steel, stainless steel, and abrasion-resistant alloys, with seal packages, drive specifications, and inlet/outlet configurations tailored to your process.',
      features: [
        'Fabricated to CEMA and custom engineering standards',
        'Solid shaft or pipe shaft construction',
        'Full range of flighting types and pitches',
        'Carbon steel, 304/316L SS, and AR steel options',
        'Modular trough sections for long conveyor runs',
        'Seal packages: packing gland, lip seal, mechanical',
        'Inlet and outlet configurations to match process layout',
        'Variable-speed electric drive integration',
      ],
      applications: [
        'Grain and agricultural product conveying',
        'Bulk chemical and mineral transfer',
        'Food ingredient conveying',
        'Construction materials: cement, sand, aggregates',
        'Pharmaceutical bulk granule handling',
        'Wastewater sludge and biosolids conveying',
      ],
      specifications: {
        'Material': 'Carbon steel, 304 SS, 316L SS, AR450',
        'Diameter Range': '4" – 24" (100mm – 610mm)',
        'Length': 'Up to 120 ft (36m) per section',
        'Capacity': 'Up to 10,000 CFH depending on size and pitch',
        'Drive': 'Electric motor with gearbox, variable speed',
        'Standard': 'CEMA, custom engineering',
        'Lead Time': '3–8 weeks',
        'Warranty': '12 months on fabrication',
      },
      seoTitle: 'Horizontal Augers | Screw Conveyor Systems | AugerFeed Industrial',
      seoDesc: 'Heavy-duty horizontal auger conveyors to CEMA standard. Carbon steel, 304/316L SS, AR steel. Custom sizes and capacities.',
      relatedProducts: ['helicoid-flighting', 'sectional-flighting', 'replacement-augers', 'custom-augers']
    },

    // ═══════════════════════════════════════════
    //  FLIGHTING
    // ═══════════════════════════════════════════
    {
      id: 'helicoid-flighting',
      name: 'Helicoid Flighting',
      slug: 'helicoid-flighting',
      category: 'flighting',
      subcategory: 'helicoid',
      tag: 'Standard',
      image: 'assets/product_flighting.png',
      shortDesc: 'One-piece continuous helicoid screw flighting cold-formed from flat steel strip — the most efficient and cost-effective flighting type for standard conveying.',
      description: 'Helicoid flighting is produced by cold-forming flat steel strip into a continuous helix in a single operation, creating a one-piece flight with no welds along its length. This continuous construction gives helicoid flighting excellent structural integrity and smooth, gap-free product contact surfaces. Auger Fabrication produces helicoid flighting in a wide range of materials, thicknesses, pitches, and inside/outside diameters to match any screw conveyor specification.',
      features: [
        'One-piece cold-formed construction — no welds along flight',
        'Uniform pitch and flight height over entire length',
        'Smooth, consistent product contact surface',
        'Available in carbon steel, 304 SS, 316L SS, AR steel',
        'Standard pitch (1× OD) and short pitch available',
        'Produced in sections up to 144" (3,658mm)',
        'Inside and outside diameters to CEMA standards and custom',
        'Can be welded to pipe or solid shafts in-house',
      ],
      specifications: {
        'Material': 'Carbon steel, 304 SS, 316L SS, AR450',
        'OD Range': '2" – 24" (50mm – 610mm)',
        'ID Range': 'Matched to shaft OD',
        'Pitch': 'Standard (1×OD), ½ pitch, custom',
        'Thickness': '3/16" – ½" (standard), custom heavier',
        'Section Length': 'Up to 144" (3,658mm)',
        'Lead Time': '5–15 business days',
      },
      seoTitle: 'Helicoid Flighting | Screw Conveyor Helicoid Flight | AugerFeed',
      seoDesc: 'One-piece cold-formed helicoid screw flighting. Carbon steel, 304/316L SS, AR450. All diameters and pitches. CEMA standard and custom.',
      relatedProducts: ['sectional-flighting', 'ribbon-flighting', 'shaftless-flighting', 'horizontal-augers']
    },

    {
      id: 'sectional-flighting',
      name: 'Sectional Flighting',
      slug: 'sectional-flighting',
      category: 'flighting',
      subcategory: 'sectional',
      tag: 'Heavy Duty',
      image: 'assets/product_flighting.png',
      shortDesc: 'Individual formed flight sections that are welded to the shaft — allowing for wear replacement of only the worn sections without full auger replacement.',
      description: 'Sectional flighting consists of individual flat-formed or die-formed flight sections (typically one half to one pitch per piece) that are welded directly to the auger shaft or pipe. This construction allows for targeted replacement of worn sections at any point along the auger length, dramatically reducing maintenance costs in high-wear conveying applications. Auger Fabrication manufactures sectional flights in a range of materials, thicknesses, and hardness levels for maximum wear resistance.',
      features: [
        'Section-by-section replacement reduces maintenance cost',
        'Available in standard, wear-hardened, and AR material',
        'Thicker stock than helicoid for high-abrasion applications',
        'Compatible with all standard auger shaft diameters',
        'Supplied with installation guide and shaft prep specs',
        'Available in 180° half-sections or full 360° turns',
        'Stainless, carbon steel, Hardox, and AR450 options',
        'Custom radial and axial profiles available',
      ],
      specifications: {
        'Material': 'Carbon steel, Hardox, AR450, 304/316L SS',
        'Thickness': '¼" – ¾"',
        'OD Range': '4" – 24"',
        'Pitch': '½ pitch to 2× OD (custom)',
        'Section': '180° or 360° turns',
        'Lead Time': '5–10 business days',
        'Certification': 'Mill certs available',
      },
      seoTitle: 'Sectional Flighting | Replaceable Screw Conveyor Flights | AugerFeed',
      seoDesc: 'Heavy-duty sectional screw flighting for high-wear applications. Hardox, AR450, carbon and SS. Section-by-section replacement.',
      relatedProducts: ['helicoid-flighting', 'shaftless-flighting', 'ribbon-flighting', 'horizontal-augers']
    },

    {
      id: 'ribbon-flighting',
      name: 'Ribbon Flighting',
      slug: 'ribbon-flighting',
      category: 'flighting',
      subcategory: 'ribbon',
      tag: 'Low Shear',
      image: 'assets/product_flighting.png',
      shortDesc: 'Open-center ribbon screw flights ideal for fragile, sticky, or lumpy materials that require gentle, low-shear conveying without core shaft contact.',
      description: 'Ribbon Flighting features a continuous helical strip supported by spokes from the center shaft — with an open center that prevents product from compacting or being crushed against the shaft core. This design is essential for fragile materials such as pasta, chips, crackers, and fresh produce, as well as sticky or viscous products like pastes and wet sludge that would otherwise clog a solid-core auger. Auger Fabrication fabricates ribbon flights from flat bar stock or formed strip in a range of materials.',
      features: [
        'Open center eliminates shaft contact with delicate products',
        'Gentle, low-shear conveying for fragile materials',
        'Ideal for sticky, viscous, and high-moisture products',
        'Supported by flat or round bar spokes from center shaft',
        'Self-cleaning action prevents buildup on the ribbon edge',
        'Available in carbon steel, 304 SS, 316L SS',
        'Custom pitch and ribbon width to optimize flow',
        'Sanitary ribbon profiles for food-contact applications',
      ],
      specifications: {
        'Material': 'Carbon steel, 304 SS, 316L SS',
        'OD Range': '4" – 24"',
        'Ribbon Width': '1" – 4" (custom)',
        'Spoke Material': 'Flat bar or round bar',
        'Pitch': 'Standard (1×OD) and custom',
        'Application': 'Fragile, sticky, viscous materials',
        'Lead Time': '7–15 business days',
      },
      seoTitle: 'Ribbon Flighting | Low-Shear Screw Conveyor Ribbon Flights | AugerFeed',
      seoDesc: 'Open-center ribbon screw flighting for fragile and sticky materials. Low-shear, gentle conveying. 304/316L SS and carbon steel.',
      relatedProducts: ['helicoid-flighting', 'shaftless-flighting', 'sectional-flighting', 'horizontal-augers']
    },

    {
      id: 'shaftless-flighting',
      name: 'Shaftless Flighting',
      slug: 'shaftless-flighting',
      category: 'flighting',
      subcategory: 'shaftless',
      tag: 'No Shaft',
      image: 'assets/product_flighting.png',
      shortDesc: 'Self-supporting shaftless screw spirals for conveying stringy, fibrous, or clogging materials without the obstruction of a center shaft.',
      description: 'Shaftless Flighting is a solid, self-supporting spiral manufactured without a central shaft. The thick, robust spiral is typically contained within a U-trough or tube liner and relies on the liner wall for support. This design is ideal for conveying stringy, fibrous, roping, or highly viscous materials that would wrap around, clog, or jam on a conventional center shaft. Widely used in wastewater sludge handling, biosolids, food waste, and fibrous agricultural waste conveying.',
      features: [
        'No center shaft — eliminates clogging with stringy materials',
        'Self-supporting thick-walled spiral construction',
        'Runs in UHMW-PE, 304 SS, or HDPE liner troughs',
        'Available in carbon steel, Hardox, and 304 SS',
        'Full-pitch and sub-pitch options for capacity control',
        'Custom OD to match existing trough liner',
        'High volumetric efficiency — fills the full trough cross-section',
        'Suitable for wet, corrosive, and abrasive materials',
      ],
      specifications: {
        'Material': 'Carbon steel, Hardox, 304 SS',
        'Spiral OD': '4" – 24"',
        'Wall Thickness': '½" – 1" depending on diameter',
        'Liner': 'UHMW-PE, 304 SS, HDPE (compatible)',
        'Application': 'Sludge, biosolids, fibrous waste, food waste',
        'Lead Time': '2–5 weeks',
        'Max Length': 'Custom — multi-section long runs available',
      },
      seoTitle: 'Shaftless Flighting | Shaftless Screw Conveyor Spirals | AugerFeed',
      seoDesc: 'Shaftless screw spirals for fibrous, stringy, and viscous materials. No shaft clogging. Carbon steel, Hardox, 304 SS. Custom sizes.',
      relatedProducts: ['helicoid-flighting', 'sectional-flighting', 'ribbon-flighting', 'horizontal-augers']
    },

    {
      id: 'square-stock-flighting',
      name: 'Square Stock Flighting',
      slug: 'square-stock-flighting',
      category: 'flighting',
      subcategory: 'square-stock',
      tag: 'Heavy Wear',
      image: 'assets/product_flighting.png',
      shortDesc: 'Extremely heavy-duty auger flighting formed from square bar stock, providing maximum wear resistance for highly abrasive bulk material applications.',
      description: 'Square Stock Flighting is fabricated by edge-bending square or rectangular steel bar into a helical flight profile. The resulting flight has an extremely wide, flat contact face and significantly greater cross-sectional mass than standard formed flighting, delivering exceptional wear resistance and structural integrity under high abrasive loads. Used in rock, ore, sand, gravel, and cement conveying where standard flighting fails prematurely.',
      features: [
        'Formed from square or rectangular bar stock',
        'Exceptional cross-sectional mass for wear resistance',
        'Flat face profile for effective material displacement',
        'Available in carbon steel, Hardox, AR400, and AR450',
        'Up to 4× the wear life of standard helicoid in abrasive service',
        'Available with carbide-face or hard-facing on wear surface',
        'Compatible with pipe and solid shaft mounting',
        'Custom stock size, pitch, and OD',
      ],
      specifications: {
        'Material': 'Carbon steel, Hardox, AR400, AR450',
        'Stock Size': '½"×½" to 2"×2" (custom)',
        'OD Range': '6" – 36"',
        'Hard-Facing': 'Carbide, Stellite, flame-hardened options',
        'Application': 'Rock, ore, sand, cement, abrasive bulk',
        'Lead Time': '2–5 weeks',
      },
      seoTitle: 'Square Stock Flighting | Heavy-Duty Abrasion-Resistant Screw Flights | AugerFeed',
      seoDesc: 'Square bar stock auger flighting for abrasive bulk materials. Hardox, AR400, AR450. Hard-facing options. Maximum wear life.',
      relatedProducts: ['sectional-flighting', 'helicoid-flighting', 'horizontal-augers', 'custom-augers']
    },

    // ═══════════════════════════════════════════
    //  REPLACEMENT AUGERS
    // ═══════════════════════════════════════════
    {
      id: 'replacement-augers',
      name: 'Replacement Augers',
      slug: 'replacement-augers',
      category: 'replacement-augers',
      subcategory: null,
      tag: 'OEM Match',
      image: 'assets/product_replacement_auger.png',
      shortDesc: 'Precision-manufactured replacement augers for all major filling machine brands — OEM-quality performance at competitive lead times and pricing.',
      description: 'Auger Fabrication manufactures drop-in replacement augers for virtually every vertical auger filling machine on the market today. Using reverse engineering, CAD modeling from customer-supplied originals, or direct OEM drawing matching, we produce replacement augers that meet or exceed original machine specifications. Our replacement program covers free-flow, non-free-flow, and specialty auger types — all manufactured and verified in-house with full dimensional inspection.',
      features: [
        'Covers all major VFFS and auger filler brands',
        'Reverse-engineered to match original auger geometry exactly',
        'CNC-machined for consistent dimensional accuracy',
        'Full material traceability and inspection certificates',
        'Same-day quoting with dimensional drawings provided',
        'Faster lead times than OEM in most cases',
        'Optional upgrade materials (e.g., 316L instead of 304)',
        'Guaranteed fit or we remake at no charge',
      ],
      applications: [
        'Hayssen, Bosch, Ilapak, and Rovema machine augers',
        'Ishida, Yamato, and Scale-Tron dosing augers',
        'Triangle, Woodman, Bartelt and all US VFFS brands',
        'All European and Asian VFFS machine brands',
        'Custom and proprietary machine auger replacements',
      ],
      specifications: {
        'Compatibility': 'All major VFFS and auger filler brands',
        'Material': '304 SS / 316L SS / carbon steel',
        'Verification': 'Full dimensional inspection report',
        'Quoting': 'Same-day quote with drawings',
        'Lead Time': '5–15 business days standard',
        'Guarantee': 'Fit guarantee — remake policy',
        'Traceability': 'Full material cert included',
      },
      seoTitle: 'Replacement Augers | OEM-Quality Vertical Auger Replacements | AugerFeed',
      seoDesc: 'Drop-in replacement augers for all VFFS and auger filler brands. OEM-match quality. Fast lead times. Fit guaranteed.',
      relatedProducts: ['free-flow-augers', 'auger-shafts', 'vffs-tooling', 'custom-augers']
    },

    // ═══════════════════════════════════════════
    //  CUSTOM AUGERS
    // ═══════════════════════════════════════════
    {
      id: 'custom-augers',
      name: 'Custom Augers',
      slug: 'custom-augers',
      category: 'custom-augers',
      subcategory: null,
      tag: 'Engineering',
      image: 'assets/product_custom_auger.png',
      shortDesc: 'Fully engineered custom auger solutions designed from your drawings, samples, or process requirements — no standard catalog item required.',
      description: 'When no standard auger product meets your needs, Auger Fabrication\'s custom engineering team designs, prototypes, and manufactures fully bespoke auger systems. From unusual material properties to non-standard machine interfaces, extreme environmental conditions, or entirely novel product concepts — our engineers apply decades of auger design experience to deliver a solution that works. Submit your drawings, send your samples, or simply describe the challenge.',
      features: [
        'Full custom design from drawings, samples, or specifications',
        'Engineering consultation — free initial assessment',
        'CAD modeling and DFM review before manufacturing',
        'Material selection for application-specific requirements',
        'Prototype and production quantities',
        'Complete documentation: drawings, reports, certs',
        'Post-delivery support and design iterations',
        'Non-disclosure agreements available',
      ],
      applications: [
        'Novel product formulations requiring unique geometry',
        'Non-standard machine interfaces and connections',
        'Extreme temperature or pressure environments',
        'Proprietary and confidential product developments',
        'Medical device and life sciences applications',
        'Defense and aerospace material handling',
      ],
      specifications: {
        'Starting Point': 'Drawing, sample, or description',
        'Material': 'Any machinable metal or engineered plastic',
        'Design': 'Full CAD + DFM engineering review',
        'Prototyping': 'Available — 5–15 business days',
        'Production': 'Single piece to volume runs',
        'Documentation': 'Full drawing pack + certs',
        'NDA': 'Available upon request',
      },
      seoTitle: 'Custom Augers | Bespoke Auger Engineering & Manufacturing | AugerFeed',
      seoDesc: 'Fully custom auger design and manufacturing. Submit drawings or samples. Engineering consultation, prototyping, full production.',
      relatedProducts: ['replacement-augers', 'free-flow-augers', 'horizontal-augers', 'maintenance-repairs']
    },

    // ═══════════════════════════════════════════
    //  MAINTENANCE & REPAIRS
    // ═══════════════════════════════════════════
    {
      id: 'maintenance-repairs',
      name: 'Auger Maintenance & Repairs',
      slug: 'maintenance-repairs',
      category: 'maintenance-repairs',
      subcategory: null,
      tag: 'Fast Turnaround',
      image: 'assets/product_auger_maintenance.png',
      shortDesc: 'Expert auger refurbishment, reconditioning, welding repair, and emergency turnaround services to get your production line running again fast.',
      description: 'Auger Fabrication\'s maintenance and repair service restores worn, damaged, or out-of-spec auger systems to original performance specifications. Our experienced technicians perform dimensional inspection, wear assessment, flight rebuilding, shaft straightening, and surface reconditioning — returning your auger to service at a fraction of the replacement cost. Emergency 24-48 hour turnarounds are available for critical line-down situations. Ship us your worn auger and we\'ll diagnose and quote within one business day.',
      features: [
        'Full dimensional inspection and wear assessment on arrival',
        'Flight repair: rebuilding, hard-facing, and replacement',
        'Shaft straightening and runout correction',
        'Surface reconditioning to original finish specification',
        'Complete reassembly and final inspection report',
        'Emergency 24–48 hour turnaround available',
        'Before/after dimensional reports provided',
        'Fixed price quotes — no hidden charges',
      ],
      applications: [
        'Worn vertical auger refurbishment',
        'Horizontal screw conveyor flight rebuild',
        'Emergency line-down repair service',
        'Preventive maintenance reconditioning program',
        'OEM warranty-expired equipment restoration',
      ],
      specifications: {
        'Turnaround': '24–48hr emergency, 5–10 days standard',
        'Services': 'Inspect, repair, recondition, rebuild',
        'Flight Repair': 'Rebuild, hard-face, replace',
        'Shaft Services': 'Straightening, re-grinding, re-plating',
        'Reporting': 'Dimensional before/after report',
        'Warranty': '6 months on all repaired components',
        'Quoting': '1 business day from receipt of auger',
      },
      seoTitle: 'Auger Maintenance & Repairs | Auger Reconditioning Services | AugerFeed',
      seoDesc: 'Expert auger repair and refurbishment. 24-48hr emergency turnaround. Flight rebuild, shaft straightening, surface reconditioning.',
      relatedProducts: ['replacement-augers', 'custom-augers', 'free-flow-augers', 'horizontal-augers']
    }

  ]
};

// Helper: get all products flat
function getAllProducts() {
  return AUGER_CATALOG.products;
}

// Helper: get products by category
function getProductsByCategory(categoryId) {
  return AUGER_CATALOG.products.filter(p => p.category === categoryId);
}

// Helper: get products by subcategory
function getProductsBySubcategory(subcategoryId) {
  return AUGER_CATALOG.products.filter(p => p.subcategory === subcategoryId);
}

// Helper: get product by id
function getProductById(id) {
  return AUGER_CATALOG.products.find(p => p.id === id);
}

// Helper: get related products for a product
function getRelatedProducts(product, limit = 3) {
  if (!product.relatedProducts) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter(Boolean)
    .slice(0, limit);
}

// Helper: search products
function searchProducts(query) {
  const q = query.toLowerCase();
  return AUGER_CATALOG.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.shortDesc.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    (p.features || []).some(f => f.toLowerCase().includes(q)) ||
    (p.applications || []).some(a => a.toLowerCase().includes(q))
  );
}
