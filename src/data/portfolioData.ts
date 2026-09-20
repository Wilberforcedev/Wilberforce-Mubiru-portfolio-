/**
 * Portfolio Data Single Source of Truth
 * Featuring Mubiru Wilberforce (Graphic Artist & Web Developer based in Kampala, Uganda)
 * With toggle support for Tomoe (Systems & Security Engineer)
 */

import {
  UserProfile,
  TechnicalSkill,
  CodeRepository,
  ArchitectureProject,
  Testimonial,
  ExperienceItem,
} from '../types';

export const WILBERFORCE_PROFILE: UserProfile = {
  name: 'Wilberforce Mubiru',
  handle: 'wilberofficial',
  avatar: '/images/wilberforce_portrait.webp',
  primaryTitle: 'Graphic Artist',
  secondaryTitle: 'Web Developer & Brand Specialist',
  shortBio:
    'Graphic Artist and Web Developer based in Kampala, Uganda. Handling bulk apparel branding for NGOs (OXFAM, UKaid, Plan International, Belgium Partner in Development) and major runs (Kigorobya Archdeaconry Run, Tusimba Fundraising Run). Founder of Grin Mates.',
  fullBio:
    'I am Wilberforce Mubiru, a Graphic Artist and Web Developer based in Kampala. I work at Kleberson Wear UG as Graphic Artist handling bulk apparel branding for international NGOs like OXFAM, UKaid, Plan International, and Belgium Partner in Development, as well as major events like the Kigorobya Archdeaconry Run and Tusimba Fundraising Run. I am also the Founder of Grin Mates, an eco rewards platform that rewards people for sustainable actions through Green Points. From pre-press screen separations and DTF to responsive web development, I own the workflow from concept to final delivery.',
  location: 'Kampala, Uganda',
  timezone: 'UTC+3 (East Africa Time)',
  email: 'wilberofficial2001@gmail.com',
  phone: '+256 755943973',
  whatsAppUrl: 'https://wa.me/256755943973',
  instagramUrl: 'https://instagram.com/willinho23',
  instagramHandle: 'willinho23',
  company: 'Kleberson Wear UG',
  founderOf: 'Grin Mates (Eco Rewards Platform)',
  status: 'available',
  statusText: 'Available for bulk NGO & event branding • Kampala, Uganda',
  githubUrl: 'https://github.com/wilberofficial',
  vercelUrl: 'https://mubiruwilberforce.netlify.app',
  twitterUrl: 'https://twitter.com/wilberofficial',
  discordHandle: 'wilberofficial#2001',
  telegramUrl: 'https://t.me/wilberofficial',
  stats: {
    yearsExperience: 5,
    productionRepos: 24,
    uptimeSLA: '99.9%',
    totalThroughput: '7 NGOs',
    verifiedClients: 28,
  },
};

export const TOMOE_PROFILE: UserProfile = {
  name: 'Tomoe Gozen',
  handle: 'TomoeGozen82',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  primaryTitle: 'Principal Reverse Engineer',
  secondaryTitle: 'AI Systems Architect & Security Researcher',
  shortBio:
    'Specializing in low-level network protocol reverse engineering, anti-bot evasion algorithms, and enterprise AI agent orchestration.',
  fullBio:
    'I architect ultra-low-latency automation backends, reverse-engineer anti-bot defenses (Akamai, DataDome, Cloudflare), and deploy self-correcting AI agent platforms with real-time telemetry.',
  location: 'Tokyo, Japan (UTC+9)',
  timezone: 'UTC+9 (JST)',
  email: 'tomoe.security.architect@proton.me',
  status: 'available',
  statusText: 'Available for Advisory & Anti-Bot Contracts',
  githubUrl: 'https://github.com/TomoeGozen82',
  vercelUrl: 'https://tomoe-engineer.vercel.app',
  twitterUrl: 'https://twitter.com/TomoeGozen82',
  discordHandle: 'tomoe_systems#0082',
  telegramUrl: 'https://t.me/tomoegozen82',
  stats: {
    yearsExperience: 7,
    productionRepos: 48,
    uptimeSLA: '99.98%',
    totalThroughput: '14.2M/day',
    verifiedClients: 34,
  },
};

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  // 1. Graphic Design & Pre-Press
  {
    id: 'graphic-design-prepress',
    name: 'Adobe Illustrator, Photoshop & InDesign',
    category: 'graphic-design',
    proficiency: 98,
    yearsOfExp: 5,
    highlight: 'Mastery in vector identity design, spot-color separations, and pre-press prep',
    iconName: 'Sparkles',
    tags: ['Illustrator', 'Photoshop', 'InDesign', 'Vector Art', 'Pantone Matching'],
    description:
      'Crafting scalable vector logos, complex typography lockups, and pixel-perfect pre-press print files optimized for high-volume textile and paper reproduction.',
  },
  {
    id: 'color-separation-dtf',
    name: 'Spot Color Separation & DTF Film Setup',
    category: 'graphic-design',
    proficiency: 96,
    yearsOfExp: 5,
    highlight: 'Zero-bleed CMYK & simulated spot-color channel separations',
    iconName: 'Layers',
    tags: ['Simulated Process', 'Spot Channels', 'Halftones', 'Choke & Spread', 'RIP Software'],
    description:
      'Preparing precise halftone underbases, traps, and film positives for automated screen carousels and direct-to-film (DTF) transfer printers.',
  },
  {
    id: 'brand-identity-guidelines',
    name: 'Corporate Brand Systems & Visual Manuals',
    category: 'brand-identity',
    proficiency: 94,
    yearsOfExp: 4,
    highlight: 'Comprehensive brand books adhering to strict NGO & institutional guidelines',
    iconName: 'ShieldAlert',
    tags: ['Brand Manuals', 'Co-Branding', 'Typography Hierarchy', 'Asset Toolkits'],
    description:
      'Designing strict identity guidelines that govern multi-partner NGO branding (OXFAM, UKaid, Plan International, Government of Ireland), ensuring zero brand dilution.',
  },

  // 2. Apparel & Merch Production
  {
    id: 'bulk-screen-printing',
    name: 'Bulk Screen Printing & Textile Inks',
    category: 'apparel-production',
    proficiency: 96,
    yearsOfExp: 5,
    highlight: '50,000+ units delivered across plastisol, discharge, and water-based inks',
    iconName: 'Cpu',
    tags: ['Plastisol', 'Water-Based Inks', 'Discharge', 'Curing & Mesh Tension', 'Carousels'],
    description:
      'Expertise in high-volume textile printing, mesh tension management, ink viscosity, flash curing, and wash-fastness durability testing for institutional uniforms.',
  },
  {
    id: 'reflector-vest-safety',
    name: 'High-Vis Reflector Vest & Safety Apparel',
    category: 'apparel-production',
    proficiency: 97,
    yearsOfExp: 4,
    highlight: 'Safety gear branding compliant with international NGO field visibility standards',
    iconName: 'ShieldAlert',
    tags: ['EN ISO 20471', 'Reflective Vinyl', 'Heat Transfer', 'Safety Kits', 'Durability'],
    description:
      'Custom branding on high-visibility safety vests and tactical apparel for international humanitarian response teams operating in rugged field environments.',
  },
  {
    id: 'marathon-event-kits',
    name: 'Marathon & Sports Event Merchandising',
    category: 'apparel-production',
    proficiency: 95,
    yearsOfExp: 4,
    highlight: 'End-to-end event kits: moisture-wicking tees, bibs, banners & medals',
    iconName: 'Activity',
    tags: ['Dry-Fit Tees', 'Race Bibs', 'Teardrop Banners', 'Sublimation', 'Podium Kits'],
    description:
      'Managing full event production pipelines for 500+ runner events (Kigorobya Archdeaconry Run, Tusimba Fundraising Run), from design to runner pack fulfillment.',
  },

  // 3. Web Development & Digital Engineering
  {
    id: 'react-typescript-vite',
    name: 'React 19, TypeScript & Tailwind CSS',
    category: 'web-development',
    proficiency: 92,
    yearsOfExp: 4,
    highlight: 'Lightning-fast, mobile-first web applications with zero layout shift',
    iconName: 'LayoutGrid',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion Animations'],
    description:
      'Building performant, responsive web apps and digital portals with modular component architecture, accessible color contrast, and seamless mobile interactivity.',
  },
  {
    id: 'node-express-apis',
    name: 'Node.js, Express & RESTful APIs',
    category: 'web-development',
    proficiency: 88,
    yearsOfExp: 3,
    highlight: 'Lightweight backend services for order tracking, inventory, and webhooks',
    iconName: 'Server',
    tags: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL / JSON', 'JWT Auth'],
    description:
      'Architecting API services for e-commerce checkouts, event registration counters, and eco rewards transaction ledgers.',
  },
  {
    id: 'eco-rewards-architecture',
    name: 'Grin Mates Platform & Green Points Engine',
    category: 'brand-identity',
    proficiency: 93,
    yearsOfExp: 2,
    highlight: 'Gamified sustainability platform rewarding climate-positive actions',
    iconName: 'Boxes',
    tags: ['Grin Mates', 'Green Points', 'Eco Rewards', 'Community Portals', 'PWA'],
    description:
      'Founding and building the Grin Mates digital architecture—connecting eco-conscious consumers with partner merchants through verifiable green action points.',
  },
];

export const CODE_REPOSITORIES: CodeRepository[] = [
  {
    id: 'grin-mates-platform',
    name: 'grin-mates-platform',
    fullName: 'wilberofficial/grin-mates-platform',
    description:
      'Eco-action tracking and Green Points reward engine connecting sustainable community actions with merchant discounts. Built with React 19, TypeScript, and Node.',
    category: 'fullstack',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 342,
    forks: 68,
    openIssues: 1,
    updatedAt: '1 day ago',
    isStarred: true,
    topics: ['sustainability', 'green-points', 'react19', 'typescript', 'eco-rewards', 'kampala'],
    license: 'MIT',
    version: 'v2.1.0',
    cloneUrl: 'https://github.com/wilberofficial/grin-mates-platform.git',
    liveDemoUrl: 'https://mubiruwilberforce.netlify.app',
    architectureOverview:
      'A responsive web application and PWA architecture where community members log recycling, tree planting, and cleanup events to earn Green Points redeemable at partner outlets.',
    keyFeatures: [
      'Interactive Green Points calculator and verified eco-action ledger',
      'Mobile-first responsive dashboard tailored for East African mobile web bandwidth',
      'Partner merchant redemption QR verification engine',
      'Offline-capable service worker for logging actions in remote field areas',
    ],
    files: [
      {
        filename: 'rewardEngine.ts',
        language: 'typescript',
        code: `export interface EcoAction {
  id: string;
  userId: string;
  type: 'tree-planting' | 'plastic-recycling' | 'clean-up-run';
  verifiedUnits: number;
  timestamp: string;
}

export function calculateGreenPoints(action: EcoAction): number {
  const multipliers: Record<EcoAction['type'], number> = {
    'tree-planting': 50,
    'plastic-recycling': 15,
    'clean-up-run': 35,
  };
  return Math.round(action.verifiedUnits * (multipliers[action.type] || 10));
}

export async function issueRewardBadge(userId: string, points: number) {
  return {
    userId,
    pointsAwarded: points,
    status: 'CONFIRMED',
    issuedAt: new Date().toISOString(),
  };
}`,
      },
    ],
  },
  {
    id: 'kleberson-prepress-toolkit',
    name: 'kleberson-prepress-toolkit',
    fullName: 'wilberofficial/kleberson-prepress-toolkit',
    description:
      'Automated pre-flight artwork validator, spot color separator, and Pantone simulation script for bulk screen printing and DTF production.',
    category: 'tools',
    primaryLanguage: 'Python',
    languageColor: '#3572A5',
    stars: 215,
    forks: 42,
    openIssues: 0,
    updatedAt: '3 days ago',
    isStarred: true,
    topics: ['prepress', 'color-separation', 'dtf', 'screen-printing', 'pantone', 'automation'],
    license: 'MIT',
    version: 'v1.8.4',
    cloneUrl: 'https://github.com/wilberofficial/kleberson-prepress-toolkit.git',
    architectureOverview:
      'Processes vector and raster artworks, detects thin lines below print resolution, isolates CMYK vs spot Pantone layers, and calculates accurate ink consumption estimates.',
    keyFeatures: [
      'Automated stroke width audit ensuring minimum 0.5pt line-weight for screen burning',
      'Spot color channel separation with customizable halftone dot angles and LPI settings',
      'Underbase generator with automated 1px choke to prevent white ink halos on dark garments',
      'Batch export of registration mark film positives ready for direct-to-screen output',
    ],
    files: [
      {
        filename: 'separator.py',
        language: 'python',
        code: `import cv2
import numpy as np

def generate_underbase(artwork_path: str, choke_pixels: int = 1) -> np.ndarray:
    """Generates a choked white underbase mask for dark garment printing."""
    image = cv2.imread(artwork_path, cv2.IMREAD_UNCHANGED)
    alpha = image[:, :, 3] if image.shape[2] == 4 else cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Binary mask of printed pixels
    _, mask = cv2.threshold(alpha, 10, 255, cv2.THRESH_BINARY)
    
    # Apply choke erosion to prevent white fringe on fabric
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    choked_underbase = cv2.erode(mask, kernel, iterations=choke_pixels)
    
    return choked_underbase`,
      },
    ],
  },
  {
    id: 'mubiru-wilberforce-portfolio',
    name: 'mubiru-wilberforce-portfolio',
    fullName: 'wilberofficial/mubiru-wilberforce-portfolio',
    description:
      'Official portfolio website showcasing bulk NGO apparel branding, technical software engineering projects, code repositories, and WhatsApp ordering.',
    category: 'frontend',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 189,
    forks: 31,
    openIssues: 0,
    updatedAt: 'Just now',
    isStarred: true,
    topics: ['portfolio', 'react19', 'tailwind-css', 'vite', 'kampala-designer', 'showcase'],
    license: 'MIT',
    version: 'v3.0.0',
    cloneUrl: 'https://github.com/wilberofficial/mubiru-wilberforce-portfolio.git',
    liveDemoUrl: 'https://mubiruwilberforce.netlify.app',
    architectureOverview:
      'Engineered with React 19, TypeScript, and Tailwind CSS v4. Features high-resolution production image lightbox, interactive code inspector, and instant WhatsApp inquiry formatting.',
    keyFeatures: [
      'High-resolution production work gallery with full-screen lightbox modal',
      'Direct WhatsApp quote inquiry generator pre-populating quantity and timeline details',
      'Filterable repository dashboard with live source code viewer',
      'Optimized WebP image delivery and sub-second cold load time',
    ],
    files: [
      {
        filename: 'whatsappLink.ts',
        language: 'typescript',
        code: `export function buildWhatsAppInquiry(details: {
  service: string;
  quantity?: number;
  deadline?: string;
}): string {
  const phone = '256755943973';
  const text = encodeURIComponent(
    \`Hello Wilberforce! I am reaching out regarding \${details.service}. \` +
    \`Quantity: \${details.quantity || 'Flexible'} | Deadline: \${details.deadline || 'Upcoming'}. \` +
    \`Let's discuss artwork specifications and printing.\`
  );
  return \`https://wa.me/\${phone}?text=\${text}\`;
}`,
      },
    ],
  },
  {
    id: 'uganda-eco-campaign-kits',
    name: 'uganda-eco-campaign-kits',
    fullName: 'wilberofficial/uganda-eco-campaign-kits',
    description:
      'Open-source vector design kit, banner templates, and event bib generators for environmental cleanup drives and marathon organizers across East Africa.',
    category: 'tools',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 145,
    forks: 29,
    openIssues: 0,
    updatedAt: '1 week ago',
    isStarred: false,
    topics: ['eco-design', 'open-source', 'svg', 'event-kits', 'marathon-bibs', 'uganda'],
    license: 'CC-BY-4.0',
    version: 'v1.4.0',
    cloneUrl: 'https://github.com/wilberofficial/uganda-eco-campaign-kits.git',
    architectureOverview:
      'A lightweight client-side SVG generator creating customized, print-ready marathon numbers, safety instructions, and sponsor logo banners.',
    keyFeatures: [
      'Dynamic SVG vector bib layout with customizable runner names and barcode numbers',
      'Standardized teardrop banner templates configured to large-format dye-sublimation dimensions',
      'Pre-formatted sponsor grid lockups ensuring equal visual hierarchy for NGO partners',
    ],
    files: [
      {
        filename: 'bibGenerator.js',
        language: 'javascript',
        code: `export function generateSvgBib(bibNumber, runnerName, eventTitle) {
  return \`<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#ffffff" stroke="#10b981" stroke-width="8"/>
    <text x="50%" y="80" font-size="32" font-family="sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">\${eventTitle}</text>
    <text x="50%" y="360" font-size="180" font-family="monospace" font-weight="900" fill="#10b981" text-anchor="middle">\${bibNumber}</text>
    <text x="50%" y="480" font-size="36" font-family="sans-serif" fill="#64748b" text-anchor="middle">\${runnerName.toUpperCase()}</text>
  </svg>\`;
}`,
      },
    ],
  },
  {
    id: 'ngo-apparel-mockup-engine',
    name: 'ngo-apparel-mockup-engine',
    fullName: 'wilberofficial/ngo-apparel-mockup-engine',
    description:
      'Canvas-based interactive 2D mockup visualizer for reflector vests and bulk tees with accurate Pantone color simulation.',
    category: 'frontend',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 120,
    forks: 22,
    openIssues: 0,
    updatedAt: '2 weeks ago',
    isStarred: false,
    topics: ['canvas', 'apparel-mockup', 'reflector-vest', 'pantone', 'typescript'],
    license: 'MIT',
    version: 'v1.2.0',
    cloneUrl: 'https://github.com/wilberofficial/ngo-apparel-mockup-engine.git',
    architectureOverview:
      'Renders photorealistic textile textures and reflective stripe sheen in real time, allowing NGO project leads to preview logo placement before approving physical bulk prints.',
    keyFeatures: [
      'Drag-and-drop vector/PNG logo positioning with real-world centimeter scaling',
      'Fluorescent yellow and safety orange garment simulation with true-to-life reflections',
      'One-click client proof PDF generation with Pantone color callouts',
    ],
    files: [
      {
        filename: 'canvasRenderer.ts',
        language: 'typescript',
        code: `export function renderGarmentMockup(ctx: CanvasRenderingContext2D, baseImg: HTMLImageElement, logoImg: HTMLImageElement, x: number, y: number, scale: number) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(baseImg, 0, 0, ctx.canvas.width, ctx.canvas.height);
  
  // Composite logo with fabric blend mode
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  const logoW = logoImg.width * scale;
  const logoH = logoImg.height * scale;
  ctx.drawImage(logoImg, x - logoW / 2, y - logoH / 2, logoW, logoH);
  ctx.restore();
}`,
      },
    ],
  },
  {
    id: 'kampala-event-merch-pos',
    name: 'kampala-event-merch-pos',
    fullName: 'wilberofficial/kampala-event-merch-pos',
    description:
      'Lightweight offline-first inventory tracker and runner pack dispatch system for race-day distribution desks.',
    category: 'fullstack',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 98,
    forks: 18,
    openIssues: 0,
    updatedAt: '3 weeks ago',
    isStarred: false,
    topics: ['pos', 'offline-first', 'indexeddb', 'event-distribution', 'marathon-logistics'],
    license: 'MIT',
    version: 'v1.1.2',
    cloneUrl: 'https://github.com/wilberofficial/kampala-event-merch-pos.git',
    architectureOverview:
      'Operates seamlessly with zero internet connection during field marathon registrations, synchronizing size inventory (S, M, L, XL, XXL) as soon as connectivity resumes.',
    keyFeatures: [
      'Instant barcode scanner integration using device camera or Bluetooth laser',
      'Real-time remaining size inventory counter avoiding kit stockouts',
      'Exportable CSV reconciliation report for race organizing committees',
    ],
    files: [
      {
        filename: 'inventorySync.ts',
        language: 'typescript',
        code: `export interface KitItem {
  id: string;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  bibNumber: number;
  dispatched: boolean;
}

export function markKitDispatched(inventory: KitItem[], bibNumber: number): KitItem[] {
  return inventory.map(item => 
    item.bibNumber === bibNumber ? { ...item, dispatched: true } : item
  );
}`,
      },
    ],
  },
];

export const ARCHITECTURE_SHOWCASES: ArchitectureProject[] = [
  {
    id: 'oxfam-ireland-vests',
    title: 'OXFAM + Government of Ireland',
    tagline: 'High-visibility safety reflector vest branding for international NGO field operations',
    category: 'NGO Safety Apparel',
    clientOrContext: 'OXFAM Uganda & Government of Ireland Development Cooperation',
    duration: 'Bulk Production & Quality Inspection',
    role: 'Lead Graphic Artist & Pre-Press Director',
    image: '/images/oxfam_ireland.jpg',
    tag: 'OXFAM • Ireland',
    caption: 'High vis reflector vest branding. Bulk NGO safety apparel',
    problem:
      'International NGO field personnel require safety apparel compliant with high-visibility standards while featuring high-durability co-branded sponsor lockups that withstand harsh outdoor field conditions without flaking or fading.',
    solution:
      'Engineered a dual-layer heat transfer and direct-to-film (DTF) bonding method with specialized industrial adhesive. Verified logo margins, reflective strip clearances, and crisp multi-partner typography on fluorescent garments.',
    architectureWorkflow: [
      {
        title: 'Institutional Brand Audit',
        description: 'Vetting OXFAM and Government of Ireland emblem guidelines, clear zones, and Pantone specifications.',
        icon: 'ShieldCheck',
      },
      {
        title: 'DTF Film & Adhesive Prep',
        description: 'High-density digital film separation with polyurethane hot-melt powder for maximum textile adherence.',
        icon: 'Layers',
      },
      {
        title: 'Industrial Heat Press Bonding',
        description: 'Precise 160°C temperature regulation at 5-bar pressure to ensure permanent bond with micro-mesh polyester.',
        icon: 'Zap',
      },
      {
        title: 'ISO Quality & Wash Check',
        description: 'Sample testing through industrial wash cycles to guarantee zero cracking, peeling, or color bleeding.',
        icon: 'CheckCircle2',
      },
    ],
    benchmarks: [
      { label: 'Units Delivered', value: '1,500+', sublabel: 'Safety vests across regional field hubs' },
      { label: 'Adhesion Rating', value: '100%', sublabel: 'Zero delamination across 50+ wash tests' },
      { label: 'Turnaround Time', value: '7 Days', sublabel: 'From approved proof to field dispatch' },
      { label: 'Defect Rate', value: '0.0%', sublabel: 'Strict pre-flight QC inspection' },
    ],
    techStack: ['Adobe Illustrator', 'Direct-to-Film (DTF)', 'Reflective Vinyl', 'Spot Color Separation', 'QC Pre-flight'],
  },
  {
    id: 'ukaid-field-collection',
    title: 'UKaid Collection',
    tagline: 'Bulk screen printing and DTF production for humanitarian outreach teams',
    category: 'NGO Field Kits',
    clientOrContext: 'UKaid Partner Projects & Kleberson Wear UG',
    duration: 'High-Volume Production Run',
    role: 'Graphic Artist & Production Specialist',
    image: '/images/ukaid_collection.jpg',
    tag: 'UKaid',
    caption: 'Bulk screen printing and DTF. NGO field team kits',
    problem:
      'Producing high volumes of field shirts across multiple garment colors while maintaining identical logo opacity, color vibrance, and clean edge definition across 800+ cotton tees.',
    solution:
      'Developed custom spot-color separations with a flash-cured white underbase. Calibrated carousel screen tension to eliminate misregistration during high-speed multi-color printing.',
    architectureWorkflow: [
      {
        title: 'Vector Artwork Separation',
        description: 'Isolating the UKaid emblem into precision spot color channels with micro-choke traps.',
        icon: 'Scissors',
      },
      {
        title: 'High-Tension Screen Burning',
        description: 'Exposing 120T mesh screens with direct capillary emulsions for ultra-sharp letter edges.',
        icon: 'Binary',
      },
      {
        title: 'Carousel Production Run',
        description: 'Automated wet-on-flash-on-wet screen printing with specialized soft-feel plastisol inks.',
        icon: 'Cpu',
      },
      {
        title: 'Conveyor Oven Curing',
        description: 'Calibrated tunnel heat curing at 165°C ensuring complete molecular crosslinking of pigments.',
        icon: 'Zap',
      },
    ],
    benchmarks: [
      { label: 'Volume Printed', value: '850+ Pcs', sublabel: 'Field shirts delivered in single dispatch' },
      { label: 'Registration Accuracy', value: '0.1mm', sublabel: 'Zero color bleed across 4-color lockups' },
      { label: 'Client Approval', value: 'First Proof', sublabel: 'Immediate sign-off on pre-production sample' },
      { label: 'On-Time Rate', value: '100%', sublabel: 'Delivered ahead of mission deployment date' },
    ],
    techStack: ['Plastisol Printing', 'DTF Heat Transfer', 'Spot Color Trapping', 'Screen Emulsion', 'Kleberson Wear UG'],
  },
  {
    id: 'belgium-plan-international',
    title: 'Belgium Partner in Development x Plan International',
    tagline: 'Co-branded tees for international bilateral development partners',
    category: 'Development Partner Apparel',
    clientOrContext: 'Belgium Development Agency (Enabel) & Plan International',
    duration: 'Bilateral Campaign Run',
    role: 'Senior Graphic Artist',
    image: '/images/belgium_plan.jpg',
    tag: 'Belgium • Plan',
    caption: 'Co branded tees for development partners. Production run',
    problem:
      'Balancing two distinct institutional visual identities with conflicting logo aspect ratios, color restrictions, and mandatory European development disclaimer text in a clean, wearable garment layout.',
    solution:
      'Engineered a balanced dual-chest and sleeve co-branding architectural template. Created custom vector assets maintaining legibility of micro-text down to 6pt while preserving bold front visual hierarchy.',
    architectureWorkflow: [
      {
        title: 'Bilateral Logo Lockup',
        description: 'Creating proportional visual balance adhering to Belgian governmental & Plan International manuals.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Pantone Precision Match',
        description: 'Custom ink formulation matching Belgian flag colors and Plan signature cyan blue.',
        icon: 'Sparkles',
      },
      {
        title: 'Pre-Production Proofing',
        description: 'Full-scale textile mockups submitted to institutional project coordinators for review.',
        icon: 'CheckCircle2',
      },
      {
        title: 'Batch Inspection & Packing',
        description: 'Size sorting, polybagging, and labeled shipping boxes for rapid field deployment.',
        icon: 'Boxes',
      },
    ],
    benchmarks: [
      { label: 'Partner Compliance', value: '100%', sublabel: 'Passed all institutional brand guidelines' },
      { label: 'Total Output', value: '600+ Tees', sublabel: 'Distributed across project districts' },
      { label: 'Text Legibility', value: '6pt Sharp', sublabel: 'Zero blur on developmental legal footnotes' },
      { label: 'Satisfaction', value: '5/5 Stars', sublabel: 'Commended by country directors' },
    ],
    techStack: ['Adobe Illustrator', 'Pantone Formula Guide', 'DTF Printing', 'Soft-Feel Inks', 'Brand Manuals'],
  },
  {
    id: 'kigorobya-archdeaconry-run',
    title: 'Kigorobya Archdeaconry Run 2023',
    tagline: 'Complete event kit architecture: tees, tear-drop banners, runner bibs, and stage branding',
    category: 'Marathon Event Branding',
    clientOrContext: 'Archdeaconry Organizing Committee & Community Athletics',
    duration: 'Event Branding & Onsite Merchandising',
    role: 'Lead Designer & Merchandising Director',
    image: '/images/kigorobya_run_2023.jpg',
    tag: 'Kigorobya Run',
    caption: 'Full event kit: tees, banners, bibs. 500 plus participants',
    problem:
      'Organizers needed an inspiring, unified visual identity for an inaugural major community marathon event with 500+ runners, requiring durable running apparel, large venue banners, and numbered timing bibs on a compressed timeline.',
    solution:
      'Designed the official run insignia, energetic dynamic runner graphics, and delivered a complete turnkey merchandise kit: breathable dry-fit running shirts, weatherproof teardrop banners, and participant bibs with sponsor branding.',
    architectureWorkflow: [
      {
        title: 'Event Identity & Insignia',
        description: 'Designing the official emblem capturing the spirit of endurance, faith, and community wellness.',
        icon: 'Sparkles',
      },
      {
        title: 'Runner Kit Production',
        description: 'Screen printing 500+ moisture-wicking technical running tops with high-contrast event graphics.',
        icon: 'Cpu',
      },
      {
        title: 'Large-Format Signage',
        description: 'Dye-sublimation printing on tear-drop flags and finish-line archway banners.',
        icon: 'LayoutGrid',
      },
      {
        title: 'Race Pack Logistics',
        description: 'Packaging runner bibs, safety pins, and branded event tees into individual participant packs.',
        icon: 'Boxes',
      },
    ],
    benchmarks: [
      { label: 'Active Runners', value: '500+', sublabel: 'Wearing official branded event apparel' },
      { label: 'Event Signage', value: '18 Units', sublabel: 'Teardrop banners, backdrops & finish arch' },
      { label: 'Sell-Through', value: '100%', sublabel: 'All merchandise packs claimed before race start' },
      { label: 'Community Reach', value: '5,000+', sublabel: 'Spectators and race participants engaged' },
    ],
    techStack: ['Event Identity', 'Dry-Fit Screen Printing', 'Large-Format Dye-Sublimation', 'Race Kit Logistics'],
  },
  {
    id: 'tusimba-fundraising-run',
    title: 'Tusimba Fundraising Run',
    tagline: 'Fundraising cause campaign featuring Dr. Kasenene and Nivana Natural Mineral Water',
    category: 'Charity Campaign Apparel',
    clientOrContext: 'Tusimba Initiative & Health Partners (Nivana & Dr. Kasenene)',
    duration: 'Branding & Distribution Campaign',
    role: 'Creative Director & Production Head',
    image: '/images/tusimba_fundraising.jpg',
    tag: 'Tusimba Run',
    caption: 'Fundraising tees ft. Dr. Kasenene and Nivana. Cause campaign',
    problem:
      'Coordinating a high-visibility charity fundraising run with prominent health leaders and corporate beverage sponsors requiring immaculate brand placement on technical athletic garments.',
    solution:
      'Created an iconic campaign visual motif centered on vitality and community health. Produced premium shirts featuring prominent sponsor placement for Nivana Water and Dr. Kasenene with exceptional color brilliance.',
    architectureWorkflow: [
      {
        title: 'Campaign Visual Direction',
        description: 'Formulating the core Tusimba graphic emblem and sponsor lockup hierarchy.',
        icon: 'Sparkles',
      },
      {
        title: 'Sponsor Integration',
        description: 'Embedding corporate sponsor logos (Nivana Water, Dr. Kasenene) with exact brand guidelines.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Bulk Textile Printing',
        description: 'Executing high-speed multi-station screen printing on 100% combed ringspun cotton tees.',
        icon: 'Cpu',
      },
      {
        title: 'On-Site Distribution',
        description: 'Managing registration desk kit handoffs and VIP sponsor presentation packs.',
        icon: 'CheckCircle2',
      },
    ],
    benchmarks: [
      { label: 'Tees Produced', value: '1,000+', sublabel: 'Distributed to charity supporters' },
      { label: 'Sponsor Satisfaction', value: '100%', sublabel: 'Commended by Nivana & Dr. Kasenene' },
      { label: 'Funds Raised', value: 'Record High', sublabel: 'Exceeded event fundraising target' },
      { label: 'Print Longevity', value: 'Wash-Proof', sublabel: 'High-density plastisol formulation' },
    ],
    techStack: ['Screen Printing', 'Sponsor Architecture', 'Textile Finishing', 'Event Kit Fulfillment'],
  },
  {
    id: 'grassland-guardian-uganda',
    title: 'Grassland Guardian Uganda',
    tagline: 'Eco brand visuals and conservation identity system',
    category: 'Eco Brand Identity',
    clientOrContext: 'Grassland Conservation Network Uganda',
    duration: 'Identity Design & Uniform Production',
    role: 'Brand Specialist & Eco Apparel Consultant',
    image: '/images/grassland_guardian.jpg',
    tag: 'Grassland Guardian',
    caption: 'Eco brand visuals. Conservation identity system',
    problem:
      'Wildlife conservation project needed an earthy, recognizable brand identity and field apparel that represented their mission while adhering to eco-conscious production methods.',
    solution:
      'Designed a hand-crafted conservation badge emblem, developed water-based ink separation techniques to minimize environmental footprint, and printed durable field ranger shirts.',
    architectureWorkflow: [
      {
        title: 'Ecosystem Identity Design',
        description: 'Creating organic vector illustrations inspired by Uganda savannas and endangered wildlife.',
        icon: 'Sparkles',
      },
      {
        title: 'Water-Based Ink Formulation',
        description: 'Utilizing eco-friendly water-based discharge inks with zero harsh chemicals or solvents.',
        icon: 'Layers',
      },
      {
        title: 'Ranger Uniform Printing',
        description: 'Applying field-durable prints to heavy-duty cotton twill and canvas ranger uniforms.',
        icon: 'Cpu',
      },
      {
        title: 'Conservation Kit Launch',
        description: 'Providing digital collateral and branded uniforms for conservation summits in Kampala.',
        icon: 'CheckCircle2',
      },
    ],
    benchmarks: [
      { label: 'Eco Footprint', value: 'Zero VOC', sublabel: '100% water-based ink formulation' },
      { label: 'Field Uniforms', value: '350+ Units', sublabel: 'Ranger and field officer kits' },
      { label: 'Brand Recognition', value: 'National', sublabel: 'Adopted across Uganda conservation hubs' },
      { label: 'Durability', value: 'Field-Tested', sublabel: 'Tested under savanna UV radiation' },
    ],
    techStack: ['Eco Inks', 'Vector Art', 'Conservation Identity', 'Water-Based Discharge', 'Organic Cotton'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ronald Kigozi',
    role: 'Operations & Field Logistics Coordinator',
    company: 'OXFAM Uganda Partner Project',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    content:
      'Wilberforce and the Kleberson Wear team delivered 1,500 high-visibility reflector vests for our community outreach teams with flawless logo placement and reflective durability. Even with tight delivery windows, every single vest met international safety guidelines. The fastest and most reliable graphic artist in Kampala.',
    rating: 5,
    category: 'ngo-partners',
    projectDelivered: 'OXFAM + Government of Ireland High-Vis Vests',
    date: 'February 2026',
    verified: true,
  },
  {
    id: 't-2',
    name: 'Grace Tumusiime',
    role: 'Organizing Chairperson',
    company: 'Kigorobya Archdeaconry Run 2023 Committee',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    content:
      'From the first runner kit mockups to the final banners on race day, Wilberforce brought unmatched energy and professionalism. Over 500 runners praised the quality and feel of the running tees. The merchandise display booth was a highlight of the entire event!',
    rating: 5,
    category: 'event-organizers',
    projectDelivered: 'Kigorobya Run 2023 Full Event Kit & Teardrop Banners',
    date: 'December 2025',
    verified: true,
  },
  {
    id: 't-3',
    name: 'Dr. Paul Kasenene & Campaign Secretariat',
    role: 'Health Advocate & Organizing Lead',
    company: 'Tusimba Fundraising Run (Nivana & Wellness)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    content:
      'Balancing multiple corporate sponsors like Nivana and community stakeholders required sharp attention to detail. Wilberforce ensured every logo was crisp, color-accurate, and aligned with our cause. A gifted artist who understands both design and production logistics.',
    rating: 5,
    category: 'event-organizers',
    projectDelivered: 'Tusimba Fundraising Run Campaign Tees & Sponsor Branding',
    date: 'November 2025',
    verified: true,
  },
  {
    id: 't-4',
    name: 'David Mukasa',
    role: 'Head of Production',
    company: 'Kleberson Wear UG',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    content:
      'Wilberforce owns the pre-press process. His color separations, vector prep, and spot-channel management eliminate print errors before ink touches fabric. Having him lead artwork preparation guarantees our bulk runs ship on time every single time.',
    rating: 5,
    category: 'production-clients',
    projectDelivered: 'Continuous Pre-Press & Screen Separation Leadership',
    date: 'October 2025',
    verified: true,
  },
  {
    id: 't-5',
    name: 'Sarah Nansubuga',
    role: 'Youth Program Officer',
    company: 'Plan International Uganda Collaboration',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    content:
      'Co-branding development partners like Belgium Partner in Development and Plan International requires strict brand compliance. Wilberforce produced tees that met every single partner brand manual. Exceptional communication and craft.',
    rating: 5,
    category: 'ngo-partners',
    projectDelivered: 'Belgium x Plan International Co-Branded Apparel',
    date: 'August 2025',
    verified: true,
  },
  {
    id: 't-6',
    name: 'Arthur Byaruhanga',
    role: 'Conservation Field Coordinator',
    company: 'Grassland Guardian Uganda',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
    content:
      'Wilberforce crafted our conservation identity from scratch. His passion for eco-conscious design also shines through in his work with Grin Mates. He doesn’t just design—he builds systems that inspire action.',
    rating: 5,
    category: 'eco-initiatives',
    projectDelivered: 'Grassland Guardian Uganda Brand & Field Ranger Kits',
    date: 'June 2025',
    verified: true,
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Graphic Artist & Production Specialist',
    company: 'Kleberson Wear UG',
    period: '2021 — Present',
    location: 'Kampala, Uganda',
    type: 'Full-time',
    summary:
      'Managing pre-press, spot color separation, DTF digital transfers, and bulk screen printing for international NGOs, institutional partners, and major sporting events.',
    achievements: [
      'Delivered 50,000+ custom branded apparel units for OXFAM, UKaid, Plan International, and Belgium Partner in Development.',
      'Engineered prepress quality control workflows eliminating misprints and achieving a 99.9% on-time delivery record.',
      'Pioneered specialized high-visibility reflector vest branding compliant with international NGO field safety standards.',
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'DTF Heat Transfer', 'Screen Printing', 'Pantone Matching', 'Pre-Press'],
  },
  {
    id: 'exp-2',
    role: 'Founder & Creative Director',
    company: 'Grin Mates (Eco Rewards Platform)',
    period: '2023 — Present',
    location: 'Kampala, Uganda',
    type: 'Founder',
    summary:
      'Founded the Grin Mates platform, turning sustainability and community eco-actions into tangible Green Points rewards with partner merchants.',
    achievements: [
      'Designed the full brand identity, mobile-responsive web platform, and merchant redemption portal.',
      'Engaged over 1,200 community members in recycling, tree planting, and eco-marathon campaigns across Uganda.',
      'Architected the web application using React 19, TypeScript, and Tailwind CSS with offline PWA capabilities.',
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'PWA', 'Brand Identity', 'Node.js', 'Vite'],
  },
  {
    id: 'exp-3',
    role: 'Lead Merchandising & Race Kit Director',
    company: 'Kigorobya Archdeaconry Run & Tusimba Charity Runs',
    period: '2023 — 2024',
    location: 'Uganda',
    type: 'Contract',
    summary:
      'Directed the visual identity and apparel production for major community marathons, including participant kits, teardrop banners, and timing bibs.',
    achievements: [
      'Equipped 500+ runners with high-performance moisture-wicking tees and custom numbered timing bibs.',
      'Coordinated corporate brand placements for prominent sponsors including Nivana Natural Mineral Water and Dr. Kasenene.',
      'Managed on-site merchandise booth and logistics, achieving a 100% sell-through rate on race day.',
    ],
    technologies: ['Sports Apparel', 'Dye Sublimation', 'Race Bibs', 'Teardrop Banners', 'Logistics POS'],
  },
  {
    id: 'exp-4',
    role: 'Independent Graphic Artist & Web Developer',
    company: 'Freelance & Brand Consultant',
    period: '2020 — 2022',
    location: 'Kampala, Uganda',
    type: 'Independent Consultant',
    summary:
      'Delivered bespoke visual identities, marketing collateral, and responsive web applications for businesses, startups, and community initiatives.',
    achievements: [
      'Created vector brand guidelines and corporate identity packages for over 20 East African small businesses.',
      'Built fast, mobile-friendly landing pages and portfolio websites using modern web standards.',
      'Provided prepress consulting for local commercial print shops in Kampala.',
    ],
    technologies: ['Graphic Design', 'Vector Illustration', 'HTML5/CSS3', 'JavaScript', 'Tailwind CSS', 'Brand Systems'],
  },
];
