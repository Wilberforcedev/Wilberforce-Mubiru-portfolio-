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
  primaryTitle: 'Graphic Artist & Web Developer',
  secondaryTitle: 'GYA Theirworld UK & Brand Specialist',
  shortBio:
    'Graphic Artist, Web Developer, and Global Youth Ambassador (GYA) at Theirworld UK (2026–2028) based in Kampala, Uganda. Handling bulk apparel branding for NGOs (OXFAM, UKaid, Plan International, Belgium Partner in Development) and major runs. Founder of Grin Mates.',
  fullBio:
    'I am Wilberforce Mubiru, a Graphic Artist, Web Developer, and Global Youth Ambassador (GYA) at Theirworld UK (2026–2028). I work at Kleberson Wear UG handling bulk apparel branding for international NGOs like OXFAM, UKaid, Plan International, and Belgium Partner in Development, as well as major events like the Kigorobya Archdeaconry Run and Tusimba Fundraising Run. Appointed to Theirworld UK’s Global Youth Ambassador network (2026–2028), I champion universal education access and youth empowerment through creative visual communications and digital tech. I am also the Founder of Grin Mates, an eco rewards platform rewarding sustainable community actions through Green Points.',
  location: 'Kampala, Uganda',
  timezone: 'UTC+3 (East Africa Time)',
  email: 'wilberofficial2001@gmail.com',
  phone: '+256 755943973',
  whatsAppUrl: 'https://wa.me/256755943973',
  linkedinUrl: 'https://www.linkedin.com/in/wilberforce-mubiru',
  linkedinHandle: 'wilberforce-mubiru',
  instagramUrl: 'https://instagram.com/willinho23',
  instagramHandle: 'willinho23',
  company: 'Kleberson Wear UG & Rogue Ventures',
  founderOf: 'Grin Mates (Eco Rewards Platform)',
  gyaRole: 'Global Youth Ambassador (GYA) • Theirworld UK (2026–2028)',
  status: 'available',
  statusText: 'GYA Theirworld UK (2026–2028) • Available for bulk NGO & event branding',
  githubUrl: 'https://github.com/Wilberforcedev',
  vercelUrl: 'https://mubiruwilberforce.netlify.app',
  twitterUrl: 'https://twitter.com/wilberofficial',
  discordHandle: 'wilberofficial#2001',
  telegramUrl: 'https://t.me/wilberofficial',
  stats: {
    yearsExperience: 5,
    productionRepos: 22,
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

export const WILBERFORCE_CODE_REPOSITORIES: CodeRepository[] = [
  {
    id: 'mam-tours-laravel',
    name: 'mam-tours-laravel',
    fullName: 'Wilberforcedev/mam-tours-laravel',
    description:
      'MAM Tours - Production car hire, tour vehicle reservation, and fleet scheduling web system. Features booking engine, driver roster dispatch, and automated billing for East African safari and city rentals.',
    category: 'fullstack',
    primaryLanguage: 'PHP',
    languageColor: '#4F5D95',
    stars: 5,
    forks: 2,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: true,
    topics: ['laravel', 'php', 'car-rental', 'booking-system', 'tour-operations', 'uganda', 'fleet-management'],
    license: 'MIT',
    version: 'v2.4.0',
    cloneUrl: 'https://github.com/Wilberforcedev/mam-tours-laravel.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/mam-tours-laravel',
    architectureOverview:
      'Engineered with Laravel and responsive modern frontend. Handles dynamic vehicle availability lookups, real-time rental quotation across seasonal peak safari rates, driver dispatch scheduling, and automated PDF contract generation.',
    keyFeatures: [
      'Dynamic vehicle fleet availability calendar preventing overlapping client bookings',
      'Flexible safari itinerary builder calculating multi-day mileage, driver per diem, and park transit fees',
      'Automated PDF invoice generation with payment status tracking (UGX / USD)',
      'Role-based admin console for fleet maintenance logs and driver dispatch rosters',
    ],
    files: [
      {
        filename: 'BookingReservationController.php',
        language: 'php',
        code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Vehicle;
use App\\Models\\Booking;
use Illuminate\\Http\\Request;
use Carbon\\Carbon;

class BookingReservationController extends Controller
{
    /**
     * Check vehicle availability and calculate safari rental quotation.
     */
    public function calculateQuote(Request $request)
    {
        $validated = $request->validate([
            'vehicle_id' => 'required|exists:vehicles,id',
            'pickup_date' => 'required|date|after_or_equal:today',
            'return_date' => 'required|date|after:pickup_date',
            'requires_driver' => 'boolean',
            'cross_border' => 'boolean',
        ]);

        $vehicle = Vehicle::findOrFail($validated['vehicle_id']);
        $days = Carbon::parse($validated['pickup_date'])
            ->diffInDays(Carbon::parse($validated['return_date']));

        $baseRate = $vehicle->daily_rate_ugx * $days;
        $driverAllowance = $validated['requires_driver'] ? ($days * 50000) : 0;
        $insurance = $days * 15000;

        $totalUGX = $baseRate + $driverAllowance + $insurance;

        return response()->json([
            'status' => 'available',
            'vehicle' => $vehicle->model_name,
            'rental_days' => $days,
            'daily_rate' => number_format($vehicle->daily_rate_ugx) . ' UGX',
            'driver_included' => (bool)$validated['requires_driver'],
            'total_ugx' => number_format($totalUGX) . ' UGX',
            'deposit_required_30pct' => number_format($totalUGX * 0.30) . ' UGX',
        ]);
    }
}`,
      },
    ],
  },
  {
    id: 'e-attendance-reporting-system',
    name: 'E-Attendance-Reporting-System-KCCA-Interns',
    fullName: 'Wilberforcedev/E-Attendance-Reorting-System-Kampala-Capital-City-Authority-Interns',
    description:
      'Web-based E-Attendance Reporting System (EARS) for tracking, managing, and reporting Kampala Capital City Authority (KCCA) intern attendance, supervisor sign-offs, and departmental activity logs.',
    category: 'fullstack',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 8,
    forks: 3,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: true,
    topics: ['kcca', 'attendance-system', 'intern-tracking', 'activity-reporting', 'kampala-city', 'administrative-tools'],
    license: 'MIT',
    version: 'v1.6.0',
    cloneUrl: 'https://github.com/Wilberforcedev/E-Attendance-Reorting-System-Kampala-Capital-City-Authority-Interns.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/E-Attendance-Reorting-System-Kampala-Capital-City-Authority-Interns',
    architectureOverview:
      'Replaces paper-based attendance log sheets across KCCA departments (Engineering, Public Health, Treasury, GIS). Provides weekly attendance verification, departmental supervisor approvals, and automated HR compliance summaries.',
    keyFeatures: [
      'Digital weekly timesheet submission replacing physical signatures and lost paperwork',
      'Supervisor approval queue with digital signature stamping and audit log tracking',
      'Automated HR compliance reports calculating attendance percentage across divisions (Central, Nakawa, Kawempe, Rubaga, Makindye)',
      'Exportable monthly clearance transcripts required for university internship grading',
    ],
    files: [
      {
        filename: 'internAttendanceValidator.js',
        language: 'javascript',
        code: `/**
 * KCCA Intern Attendance Verification & Departmental Sign-off Engine
 */
export function validateWeeklyTimesheet(internRecord, weeklyLogs) {
  const REQUIRED_HOURS_PER_WEEK = 40;
  let totalHours = 0;
  const daysPresent = [];

  for (const log of weeklyLogs) {
    if (log.checkIn && log.checkOut && !log.flaggedAbsent) {
      const hours = (new Date(log.checkOut) - new Date(log.checkIn)) / (1000 * 60 * 60);
      totalHours += Math.min(hours, 9); // capped at standard working day
      daysPresent.push(log.dayOfWeek);
    }
  }

  const attendancePercentage = (totalHours / REQUIRED_HOURS_PER_WEEK) * 100;
  const isEligibleForStipend = attendancePercentage >= 85.0;

  return {
    internId: internRecord.id,
    internName: internRecord.fullName,
    division: internRecord.kccaDivision, // Nakawa / Central / Kawempe
    department: internRecord.department,
    daysAttended: daysPresent.length,
    loggedHours: Number(totalHours.toFixed(1)),
    attendancePercentage: \`\${attendancePercentage.toFixed(1)}%\`,
    supervisorSignOffReady: daysPresent.length >= 4,
    hrStatus: isEligibleForStipend ? 'APPROVED_COMPLIANT' : 'REVIEW_REQUIRED',
  };
}`,
      },
    ],
  },
  {
    id: 'shaji-website-on-aqua',
    name: 'Shaji-website-on-Aqua',
    fullName: 'Wilberforcedev/Shaji-website-on-Aqua',
    description:
      'Scalable modern web application deployed on Aqua and Vercel featuring secure token authentication, real-time user dashboard, and responsive client interfaces.',
    category: 'frontend',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 5,
    forks: 1,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: true,
    topics: ['react', 'nextjs', 'aqua', 'vercel', 'authentication', 'tailwind-css', 'web-app'],
    license: 'MIT',
    version: 'v2.0.1',
    cloneUrl: 'https://github.com/Wilberforcedev/Shaji-website-on-Aqua.git',
    liveDemoUrl: 'https://shaji.vercel.app',
    architectureOverview:
      'Engineered with TypeScript, Tailwind CSS, and edge deployment on Aqua and Vercel. Features high-performance state handling, encrypted session validation, and dark/light adaptive aesthetics.',
    keyFeatures: [
      'Token-based session management and persistent user preference state',
      'Zero-layout-shift UI engineered for sub-second cold starts on mobile networks',
      'Live deployment connected to Vercel production edge endpoints (shaji.vercel.app)',
      'Multi-device responsive layout tested across Android and iOS mobile web',
    ],
    files: [
      {
        filename: 'authSessionManager.ts',
        language: 'typescript',
        code: `export interface UserSession {
  userId: string;
  email: string;
  role: 'member' | 'contributor' | 'admin';
  authToken: string;
  expiresAt: number;
}

export function verifyActiveSession(session: UserSession | null): boolean {
  if (!session || !session.authToken) return false;
  return Date.now() < session.expiresAt;
}

export async function refreshAuthCredentials(currentToken: string): Promise<string> {
  const res = await fetch('https://shaji.vercel.app/api/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: currentToken }),
  });
  const data = await res.json();
  return data.refreshedToken;
}`,
      },
    ],
  },
  {
    id: 'project-binance',
    name: 'project_binance',
    fullName: 'Wilberforcedev/project_binance',
    description:
      'Real-time crypto market data scraper and automated algorithmic tracking tool interfacing with Binance exchange APIs to monitor volatility, price alerts, and order book depth.',
    category: 'automation',
    primaryLanguage: 'Python',
    languageColor: '#3572A5',
    stars: 6,
    forks: 2,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: false,
    topics: ['binance', 'crypto-api', 'market-tracker', 'python', 'algorithmic-trading', 'websocket', 'quant'],
    license: 'MIT',
    version: 'v1.3.0',
    cloneUrl: 'https://github.com/Wilberforcedev/project_binance.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/project_binance',
    architectureOverview:
      'Connects directly to Binance public market data feeds via WebSocket streams. Tracks 24-hour ticker volume, spreads, moving averages, and emits structured threshold notifications.',
    keyFeatures: [
      'Low-latency WebSocket order book stream tracking with reconnection backoff',
      'Real-time calculation of EMA-20, EMA-50, and 14-period RSI indicator values',
      'Configurable price breakout triggers with Telegram alert webhooks',
      'Zero-overhead async daemon optimized for 24/7 VPS headless execution',
    ],
    files: [
      {
        filename: 'binance_stream_tracker.py',
        language: 'python',
        code: `import asyncio
import json
import websockets

BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@ticker"

async def monitor_market_ticker():
    """Connects to live Binance WebSocket stream and monitors volatility."""
    async with websockets.connect(BINANCE_WS_URL) as ws:
        print("[BINANCE AGENT] Stream connected. Monitoring BTC/USDT...")
        while True:
            raw_msg = await ws.recv()
            data = json.loads(raw_msg)
            
            symbol = data.get('s')
            last_price = float(data.get('c', 0))
            price_change_pct = float(data.get('P', 0))
            high_24h = float(data.get('h', 0))
            low_24h = float(data.get('l', 0))
            
            if abs(price_change_pct) >= 2.5:
                print(f"[ALERT] {symbol} Volatility Spike: {price_change_pct:+.2f}% | Current: \${last_price:,.2f}")

if __name__ == "__main__":
    asyncio.run(monitor_market_ticker())`,
      },
    ],
  },
  {
    id: 'payroll-management-system',
    name: 'Payroll_mgt-system-',
    fullName: 'Wilberforcedev/Payroll_mgt-system-',
    description:
      'Automated employee payroll calculation engine managing base salaries, statutory NSSF/PAYE tax deductions, overtime allowances, and payslip generation.',
    category: 'tools',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 4,
    forks: 1,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: false,
    topics: ['payroll', 'tax-deductions', 'paye', 'nssf', 'uganda-statutory-tax', 'hr-tools'],
    license: 'MIT',
    version: 'v1.2.0',
    cloneUrl: 'https://github.com/Wilberforcedev/Payroll_mgt-system-.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/Payroll_mgt-system-',
    architectureOverview:
      'Accurate tax computation engine tailored for Uganda statutory requirements. Implements Uganda Revenue Authority (URA) tiered PAYE brackets, 5% employee NSSF, and 10% employer contribution deductions.',
    keyFeatures: [
      'URA PAYE graduated income tax computation engine matching current tax brackets',
      'Employee 5% and employer 10% statutory NSSF contribution itemization',
      'Automated overtime hours, housing allowance, and net take-home calculation',
      'Print-ready professional payslip rendering with company seal placement',
    ],
    files: [
      {
        filename: 'ugandaTaxCalculator.js',
        language: 'javascript',
        code: `export function computeUgandaPayroll(grossSalary, allowances = 0) {
  // 1. Employee NSSF (5% of gross)
  const employeeNssf = grossSalary * 0.05;
  const employerNssf = grossSalary * 0.10;
  const taxableIncome = Math.max(0, grossSalary - employeeNssf + allowances);

  // 2. Uganda Revenue Authority (URA) PAYE Graduated Brackets
  let payeTax = 0;
  if (taxableIncome <= 235000) {
    payeTax = 0;
  } else if (taxableIncome <= 335000) {
    payeTax = (taxableIncome - 235000) * 0.10;
  } else if (taxableIncome <= 410000) {
    payeTax = 10000 + (taxableIncome - 335000) * 0.20;
  } else {
    payeTax = 25000 + (taxableIncome - 410000) * 0.30;
    if (taxableIncome > 10000000) {
      payeTax += (taxableIncome - 10000000) * 0.10; // 10% surtax
    }
  }

  const totalDeductions = employeeNssf + payeTax;
  const netTakeHome = grossSalary + allowances - totalDeductions;

  return {
    grossSalary,
    allowances,
    employeeNssf: Math.round(employeeNssf),
    employerNssf: Math.round(employerNssf),
    payeTax: Math.round(payeTax),
    totalDeductions: Math.round(totalDeductions),
    netTakeHome: Math.round(netTakeHome),
  };
}`,
      },
    ],
  },
  {
    id: 'currency-converter',
    name: 'Currency_converter',
    fullName: 'Wilberforcedev/Currency_converter',
    description:
      'Financial forex conversion tool calculating live conversions between Ugandan Shillings (UGX), US Dollar (USD), Euro (EUR), British Pound (GBP), and Kenya Shilling (KES).',
    category: 'tools',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 4,
    forks: 1,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: false,
    topics: ['currency-converter', 'forex-ugx', 'financial-calculator', 'vanilla-js', 'bank-rates'],
    license: 'MIT',
    version: 'v1.1.0',
    cloneUrl: 'https://github.com/Wilberforcedev/Currency_converter.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/Currency_converter',
    architectureOverview:
      'Lightweight, zero-dependency financial calculator with commercial bank spread simulation for cross-border African commerce and import/export budgeting.',
    keyFeatures: [
      'Two-way real-time forex conversions between UGX, USD, EUR, GBP, and KES',
      'Configurable bank spread margin (1.5% - 3.5%) to estimate realistic wire receipt sums',
      'Local caching of daily central bank reference rates in LocalStorage',
      'Accurate integer rounding and Uganda banking currency formatting',
    ],
    files: [
      {
        filename: 'forexExchangeEngine.js',
        language: 'javascript',
        code: `const BASE_RATES_TO_UGX = {
  USD: 3780.00,
  EUR: 4120.00,
  GBP: 4810.00,
  KES: 29.20,
  UGX: 1.00,
};

export function convertCurrency(amount, fromCurr, toCurr, spreadMarginPct = 0) {
  const fromRate = BASE_RATES_TO_UGX[fromCurr] || 1;
  const toRate = BASE_RATES_TO_UGX[toCurr] || 1;

  // Convert to intermediate UGX base
  const ugxValue = amount * fromRate;
  let converted = ugxValue / toRate;

  if (spreadMarginPct > 0) {
    converted = converted * (1 - spreadMarginPct / 100);
  }

  return {
    original: \`\${amount.toLocaleString()} \${fromCurr}\`,
    result: \`\${Number(converted.toFixed(2)).toLocaleString()} \${toCurr}\`,
    rate: \`1 \${fromCurr} = \${(fromRate / toRate).toFixed(4)} \${toCurr}\`,
  };
}`,
      },
    ],
  },
  {
    id: 'quality-education-portal',
    name: 'Quality_educationFinale',
    fullName: 'Wilberforcedev/Quality_educationFinale',
    description:
      'Interactive educational web portal advocating for UN Sustainable Development Goal (SDG 4: Quality Education), providing open learning resources and school outreach modules in Uganda.',
    category: 'frontend',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 3,
    forks: 1,
    openIssues: 0,
    updatedAt: 'Active',
    isStarred: false,
    topics: ['sdg4', 'quality-education', 'community-learning', 'uganda-schools', 'web-portal'],
    license: 'MIT',
    version: 'v1.5.0',
    cloneUrl: 'https://github.com/Wilberforcedev/Quality_educationFinale.git',
    liveDemoUrl: 'https://github.com/Wilberforcedev/Quality_educationFinale',
    architectureOverview:
      'Advocacy and educational resource distribution portal created for community learning hubs and academic outreach across Ugandan institutions.',
    keyFeatures: [
      'Accessible learning module catalog categorized by primary and secondary syllabi',
      'Volunteer educator sign-up flow and community workshop registration',
      'Interactive quiz modules with client-side score evaluation',
      'Ultra-lightweight static footprint optimized for low-bandwidth mobile devices',
    ],
    files: [
      {
        filename: 'educationPortal.js',
        language: 'javascript',
        code: `export const SDG4_MODULES = [
  { id: 'lit-1', title: 'Foundational Digital Literacy', level: 'Primary & Secondary', enrolled: 450 },
  { id: 'env-1', title: 'Community Waste Recycling & Tree Care', level: 'All Ages', enrolled: 890 },
  { id: 'stem-1', title: 'Introduction to Algorithms & Logic', level: 'Secondary & Tertiary', enrolled: 320 },
];

export function enrollStudentInModule(studentName, moduleId) {
  const mod = SDG4_MODULES.find(m => m.id === moduleId);
  if (!mod) return { success: false, msg: 'Module not found' };
  mod.enrolled += 1;
  return { success: true, confirmation: \`Enrolled \${studentName} in \${mod.title}\` };
}`,
      },
    ],
  },
  {
    id: 'wilberforce-mubiru-portfolio',
    name: 'Wilberforce-Mubiru-portfolio-',
    fullName: 'Wilberforcedev/Wilberforce-Mubiru-portfolio-',
    description:
      'Official portfolio website showcasing bulk NGO apparel branding, technical software engineering projects, code repositories, and WhatsApp ordering.',
    category: 'frontend',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 12,
    forks: 4,
    openIssues: 0,
    updatedAt: 'Just now',
    isStarred: true,
    topics: ['portfolio', 'react19', 'tailwind-css', 'vite', 'kampala-developer', 'graphic-artist'],
    license: 'MIT',
    version: 'v3.2.0',
    cloneUrl: 'https://github.com/Wilberforcedev/Wilberforce-Mubiru-portfolio-.git',
    liveDemoUrl: 'https://mubiruwilberforce.netlify.app',
    architectureOverview:
      'Engineered with React 19, TypeScript, and Tailwind CSS. Features high-resolution production image lightbox, interactive code inspector, and instant WhatsApp inquiry formatting.',
    keyFeatures: [
      'High-resolution production work gallery with full-screen lightbox modal for NGO apparel plates',
      'Direct WhatsApp quote inquiry generator pre-populating quantity and timeline details',
      'Filterable repository dashboard with live source code viewer and GitHub API integration',
      'Dynamic Pre-Press Canvas Studio for real-time spot color separation simulation',
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
    id: 'grin-mates-platform',
    name: 'grin-mates-platform',
    fullName: 'Wilberforcedev/grin-mates-platform',
    description:
      'Eco-action tracking and Green Points reward engine connecting sustainable community actions with merchant discounts. Built with React 19, TypeScript, and Node.',
    category: 'fullstack',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 18,
    forks: 5,
    openIssues: 1,
    updatedAt: 'Active',
    isStarred: true,
    topics: ['sustainability', 'green-points', 'react19', 'typescript', 'eco-rewards', 'kampala'],
    license: 'MIT',
    version: 'v2.1.0',
    cloneUrl: 'https://github.com/Wilberforcedev/grin-mates-platform.git',
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
];

export const TOMOE_CODE_REPOSITORIES: CodeRepository[] = [
  {
    id: 'phantom-mesh-engine',
    name: 'phantom-mesh-engine',
    fullName: 'TomoeGozen82/phantom-mesh-engine',
    description:
      'Distributed TLS fingerprint evasion proxy with automated ja3/ja4 profile synthesis and kernel-level socket shuffling.',
    category: 'reverse-engineering',
    primaryLanguage: 'Rust',
    languageColor: '#DEA584',
    stars: 1420,
    forks: 310,
    openIssues: 3,
    updatedAt: '2 hours ago',
    isStarred: true,
    topics: ['reverse-engineering', 'tls-fingerprint', 'ja4', 'anti-bot-evasion', 'rust', 'network-security'],
    license: 'Apache-2.0',
    version: 'v4.1.2',
    cloneUrl: 'https://github.com/TomoeGozen82/phantom-mesh-engine.git',
    liveDemoUrl: 'https://tomoe-engineer.vercel.app',
    architectureOverview:
      'Bypasses Cloudflare Turnstile, DataDome, and Akamai Bot Manager by forging native browser TLS handshakes at the TCP packet layer.',
    keyFeatures: [
      'Kernel-level eBPF socket routing bypassing OS-level fingerprinting',
      'Zero-copy TLS record rewriting with dynamic extension permutation',
      'Automated HTTP/2 SETTINGS frame spoofing mimicking Chrome 132',
      '99.98% clean pass rate across top enterprise WAFs',
    ],
    files: [
      {
        filename: 'tls_evasion.rs',
        language: 'rust',
        code: `pub struct Ja4Engine {
    ciphers: Vec<u16>,
    extensions: Vec<u16>,
}

impl Ja4Engine {
    pub fn synthesize_browser_fingerprint() -> Self {
        Self {
            ciphers: vec![0x1301, 0x1302, 0x1303, 0xc02b, 0xc02f],
            extensions: vec![0x0000, 0x0017, 0xff01, 0x000a, 0x000b],
        }
    }
}`,
      },
    ],
  },
  {
    id: 'sentinel-telemetry-core',
    name: 'sentinel-telemetry-core',
    fullName: 'TomoeGozen82/sentinel-telemetry-core',
    description:
      'High-throughput real-time streaming analytics engine processing 14.2M events/day with eBPF hooks and Prometheus exporters.',
    category: 'backend',
    primaryLanguage: 'Go',
    languageColor: '#00ADD8',
    stars: 980,
    forks: 145,
    openIssues: 1,
    updatedAt: '1 day ago',
    isStarred: true,
    topics: ['ebpf', 'telemetry', 'realtime-analytics', 'golang', 'low-latency', 'prometheus'],
    license: 'MIT',
    version: 'v2.8.0',
    cloneUrl: 'https://github.com/TomoeGozen82/sentinel-telemetry-core.git',
    architectureOverview:
      'Captures kernel-level network syscalls without userspace context switching, streaming sanitized metrics directly to memory-mapped buffers.',
    keyFeatures: [
      'Sub-millisecond packet introspection via XDP hooks',
      'Ring buffer architecture supporting 500,000 events/sec per CPU core',
      'Automated anomaly detection utilizing sliding window z-scores',
    ],
    files: [
      {
        filename: 'telemetry_sink.go',
        language: 'go',
        code: `package main

type TelemetryEvent struct {
    Timestamp int64   \`json:"ts"\`
    LatencyMs float64 \`json:"latency"\`
    Throughput int    \`json:"throughput"\`
}`,
      },
    ],
  },
];

export const CODE_REPOSITORIES: CodeRepository[] = WILBERFORCE_CODE_REPOSITORIES;

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
    id: 'kigorobya-merch-display',
    title: 'Kigorobya Archdeaconry Run',
    tagline: 'Onsite merch display and runner engagement at the marathon village',
    category: 'On-Site Merchandising',
    clientOrContext: 'Kigorobya Archdeaconry Athletics Secretariat',
    duration: 'Marathon Village Activation',
    role: 'Merchandise Director & Booth Architect',
    image: '/images/kigorobya_merch_display.jpg',
    tag: 'Event Merch',
    caption: 'Onsite merch display and runner engagement',
    problem:
      'Creating an engaging on-site visual booth capable of managing high-traffic race kit collection, runner registration inquiries, and promotional merchandise sales simultaneously.',
    solution:
      'Structured modular timber garment display fixtures, organized size-indexed distribution racks, and positioned high-impact vertical teardrop banners for 360-degree event visibility.',
    architectureWorkflow: [
      {
        title: 'Booth Spatial Layout',
        description: 'Arranging high-efficiency runner flow to prevent bottlenecks during peak morning registration.',
        icon: 'LayoutGrid',
      },
      {
        title: 'Display Merchandising',
        description: 'Showcasing official runner singlets, commemorative caps, and bib attachments with clear pricing.',
        icon: 'Boxes',
      },
      {
        title: 'Race Pack Handoff',
        description: 'Coordinated volunteer teams equipped with rapid size verification checklists.',
        icon: 'CheckCircle2',
      },
    ],
    benchmarks: [
      { label: 'Kits Dispatched', value: '500+ Units', sublabel: 'Zero queue delays during peak race morning' },
      { label: 'Display Visibility', value: '360°', sublabel: 'Teardrop banners visible across field grounds' },
      { label: 'Sales Conversion', value: '98%', sublabel: 'Commemorative apparel fully sold out' },
      { label: 'Client Feedback', value: 'Outstanding', sublabel: 'Commended by Archdeaconry leadership' },
    ],
    techStack: ['Event Display Architecture', 'Merchandise Logistics', 'Runner Flow Management', 'Point of Sale'],
  },
  {
    id: 'kigorobya-race-day',
    title: 'Kigorobya Run Race Day',
    tagline: 'Race day activation and branded apparel in action on the course',
    category: 'Field Activation',
    clientOrContext: 'Community Runners & Marathon Course Officials',
    duration: 'Live Event Execution',
    role: 'Creative Production & Course Signage Lead',
    image: '/images/kigorobya_race_day.jpg',
    tag: 'Event Production',
    caption: 'Race day activation and branded apparel in action',
    problem:
      'Ensuring event apparel performs under athletic conditions (sweat-wicking, non-chafing ink) while course directional signage remains legible to runners at speed.',
    solution:
      'Selected high-grade moisture-wicking micro-polyester with breathable water-based discharge ink formulations that allow unrestricted fabric aeration during 10K and 21K heats.',
    architectureWorkflow: [
      {
        title: 'Fabric Aeration Testing',
        description: 'Verifying breathability through ink layers under humid tropical racing conditions.',
        icon: 'Zap',
      },
      {
        title: 'Finish Line Arch Branding',
        description: 'Mounting weather-resistant banner wraps across the timing gantry and photo backdrops.',
        icon: 'LayoutGrid',
      },
      {
        title: 'VIP & Medal Ceremony Backdrop',
        description: 'Erecting sponsor-branded photo backdrops for community dignitaries and prize winners.',
        icon: 'Sparkles',
      },
    ],
    benchmarks: [
      { label: 'Course Coverage', value: '21 Kilometers', sublabel: 'Branded mile markers and hydration flags' },
      { label: 'Athletic Comfort', value: '100% Breathable', sublabel: 'Zero ink stifling on technical fabric' },
      { label: 'Media Coverage', value: 'National TV', sublabel: 'Crisp sponsor logo visibility on broadcast' },
      { label: 'Community Vibe', value: 'High Energy', sublabel: 'Unifying community through athletic identity' },
    ],
    techStack: ['Dry-Fit Textile Tech', 'Course Signage', 'Water-Based Inks', 'Sponsor Visibility'],
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
    tag: 'Fundraising Merch',
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
    id: 'tusimba-team-distribution',
    title: 'Tusimba Team Distribution',
    tagline: 'Bulk tee distribution and logistics for charity run',
    category: 'Bulk Production',
    clientOrContext: 'Tusimba Field Logistics Team & Volunteer Coordinators',
    duration: 'Fulfillment & Regional Packing',
    role: 'Production Logistics Lead',
    image: '/images/tusimba_distribution.jpg',
    tag: 'Bulk Production',
    caption: 'Bulk tee distribution and logistics for charity run',
    problem:
      'Packing and distributing 1,000+ shirts across 5 regional assembly points with exact size breakdowns without mix-ups or delivery delays.',
    solution:
      'Implemented color-coded size bundling, barcode-indexed batch labeling, and tamper-evident polybagging for expedited handoffs to team captains.',
    architectureWorkflow: [
      {
        title: 'Batch Sorting & Size Grading',
        description: 'Separating runs into XS, S, M, L, XL, XXL bundles with clear quantity tallies.',
        icon: 'Boxes',
      },
      {
        title: 'Quality Check & Polybagging',
        description: 'Individual garment steam-ironing, folding, and clear protective packaging.',
        icon: 'CheckCircle2',
      },
      {
        title: 'Dispatch Manifesting',
        description: 'Generating delivery manifests signed by team coordinators upon pickup.',
        icon: 'ShieldCheck',
      },
    ],
    benchmarks: [
      { label: 'Units Packed', value: '1,000 Pcs', sublabel: '100% size allocation accuracy' },
      { label: 'Dispatch Speed', value: 'Same-Day', sublabel: 'All regional bundles handed off on schedule' },
      { label: 'Shrinkage Rate', value: '0.0%', sublabel: 'Full accountability across all distribution hubs' },
      { label: 'Coordinator Rating', value: 'Flawless', sublabel: 'Praised by field event directors' },
    ],
    techStack: ['Fulfillment Logistics', 'Batch Sorting', 'Quality Assurance', 'Fleet Dispatch'],
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
    tag: 'Eco Brand Design',
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
    avatarUrl: '/images/client_ronald.jpg',
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
    avatarUrl: '/images/client_grace.jpg',
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
    avatarUrl: '/images/client_kasenene.jpg',
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
    avatarUrl: '/images/client_david.jpg',
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
    avatarUrl: '/images/client_sarah.jpg',
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
    avatarUrl: '/images/client_arthur.jpg',
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
    id: 'exp-gya-theirworld',
    role: 'Global Youth Ambassador (GYA)',
    company: 'Theirworld UK',
    period: '2026 — 2028',
    location: 'London, UK / Global (Uganda)',
    type: 'Ambassador',
    summary:
      'Appointed as a Global Youth Ambassador for Theirworld UK (2026–2028), joining a worldwide cohort of dedicated youth advocates campaigning to end the global education crisis, unlock potential for the next generation, and support early years education.',
    achievements: [
      'Amplifying Ugandan and East African youth voices across high-level international education summits and global campaign platforms.',
      'Deploying visual arts, digital storytelling, and creative technology to advocate for inclusive, equitable quality education (UN SDG 4).',
      'Collaborating with global youth champions and Theirworld campaign leadership to mobilize community-driven actions and education investments.',
      'Bridging grassroots education initiatives in Uganda with international policy dialogues, youth consultations, and digital advocacy campaigns.',
    ],
    technologies: ['Global Advocacy', 'Youth Leadership', 'Education Campaigns', 'Theirworld UK', 'Policy & Impact', 'Digital Storytelling', 'UN SDG 4'],
  },
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
