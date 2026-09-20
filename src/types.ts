export type SkillCategory =
  | 'graphic-design'
  | 'apparel-production'
  | 'web-development'
  | 'brand-identity'
  | 'reverse-engineering'
  | 'ai-intelligent-systems'
  | 'automation-scraping'
  | 'backend-cloud'
  | 'frontend-fullstack';

export interface TechnicalSkill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0 - 100
  yearsOfExp: number;
  highlight: string;
  iconName: string;
  tags: string[];
  description: string;
}

export interface RepoCodeFile {
  filename: string;
  language: string;
  code: string;
}

export interface CodeRepository {
  id: string;
  name: string;
  fullName: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'automation' | 'tools' | 'ai' | 'backend' | 'reverse-engineering';
  primaryLanguage: 'TypeScript' | 'JavaScript' | 'Python' | 'Go' | 'Rust' | 'C++' | 'HTML/CSS';
  languageColor: string;
  stars: number;
  forks: number;
  openIssues: number;
  updatedAt: string;
  isStarred?: boolean;
  topics: string[];
  license: string;
  version: string;
  cloneUrl: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  architectureOverview: string;
  keyFeatures: string[];
  files: RepoCodeFile[];
}

export interface ArchitectureProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  clientOrContext: string;
  duration: string;
  role: string;
  problem: string;
  solution: string;
  image?: string;
  caption?: string;
  tag?: string;
  architectureWorkflow: {
    title: string;
    description: string;
    icon: string;
  }[];
  benchmarks: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  techStack: string[];
  repoRefId?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
  category: 'ngo-partners' | 'event-organizers' | 'production-clients' | 'eco-initiatives' | 'cto-founders' | 'automation' | 'ai-startups' | 'security';
  projectDelivered: string;
  date: string;
  verified: boolean;
  linkedinUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Independent Consultant' | 'Founder';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  primaryTitle: string;
  secondaryTitle: string;
  shortBio: string;
  fullBio: string;
  location: string;
  timezone: string;
  email: string;
  phone?: string;
  whatsAppUrl?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  company?: string;
  founderOf?: string;
  status: 'available' | 'busy' | 'selective';
  statusText: string;
  githubUrl: string;
  vercelUrl: string;
  twitterUrl: string;
  discordHandle: string;
  telegramUrl: string;
  stats: {
    yearsExperience: number;
    productionRepos: number;
    uptimeSLA: string;
    totalThroughput: string;
    verifiedClients: number;
  };
}
