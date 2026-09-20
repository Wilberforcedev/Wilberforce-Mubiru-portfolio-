import React, { useState } from 'react';
import {
  Terminal,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
  Cpu,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  MessageSquareQuote,
  Zap,
  Globe,
  Download,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  Award,
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeroSectionProps {
  profile: UserProfile;
  onExploreRepos: () => void;
  onExploreSkills: () => void;
  onExploreTestimonials: () => void;
  onContact: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onExploreRepos,
  onExploreSkills,
  onExploreTestimonials,
  onContact,
  onOpenTerminal,
}) => {
  const [copiedCurl, setCopiedCurl] = useState(false);
  const curlCommand = `curl -s https://${profile.handle.toLowerCase()}.dev/summary | jq .skills`;

  const copyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] ambient-glow-emerald pointer-events-none -z-10 blur-3xl opacity-70" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] ambient-glow-cyan pointer-events-none -z-10 blur-3xl opacity-50" />
      <div className="absolute inset-0 grid-bg-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge & Global Ambassador Honors */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm shadow-emerald-950/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.statusText}</span>
          </div>

          {profile.gyaRole && (
            <a
              href="#experience"
              id="hero-gya-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/50 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-mono shadow-sm transition-all group"
              title="Global Youth Ambassador (GYA) Theirworld UK 2026 - 2028"
            >
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">{profile.gyaRole}</span>
            </a>
          )}

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Two-Column Grid: Hero Copy & Engineer Terminal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
                <span>
                  {profile.handle === 'wilberofficial'
                    ? '[ Graphic Artist • Web Dev • GYA Theirworld UK 2026–2028 ]'
                    : '[ Systems, AI & Security ]'}
                </span>
                <span className="text-slate-600">—</span>
                <span className="text-slate-400">{profile.handle}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
                Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{profile.name}</span>.
              </h1>
              
              <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-300">
                {profile.primaryTitle} &amp; <span className="text-emerald-400">{profile.secondaryTitle}</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {profile.fullBio || profile.shortBio}
            </p>

            {/* Quick Interactive Command Bar */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs flex items-center justify-between gap-3 max-w-xl group shadow-inner">
              <div className="flex items-center gap-2 overflow-x-auto text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-slate-200 select-all">{curlCommand}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  id="copy-curl-cmd"
                  onClick={copyCurl}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy curl command"
                >
                  {copiedCurl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  id="hero-launch-cli"
                  onClick={onOpenTerminal}
                  className="px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-[11px] flex items-center gap-1 transition-colors"
                  title="Run directly in web CLI"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Run</span>
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {profile.whatsAppUrl && (
                <a
                  id="hero-cta-whatsapp"
                  href={profile.whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-950/50 hover:shadow-emerald-900/60"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <button
                id="hero-cta-repos"
                onClick={onExploreRepos}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  profile.whatsAppUrl
                    ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-950/50'
                }`}
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Repositories</span>
                {!profile.whatsAppUrl && <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                id="hero-cta-skills"
                onClick={onExploreSkills}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 text-sm font-medium transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Technical Skills</span>
              </button>

              <button
                id="hero-cta-testimonials"
                onClick={onExploreTestimonials}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 text-sm font-medium transition-all"
              >
                <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
                <span>Testimonials</span>
              </button>

              <button
                id="hero-cta-contact"
                onClick={onContact}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Verified Social Networks & Direct Reach Bar */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 mr-1">CONNECT:</span>

              {profile.linkedinUrl && (
                <a
                  id="hero-linkedin-pill"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-blue-500/50 transition-all shadow-sm"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              )}

              {profile.instagramUrl && (
                <a
                  id="hero-instagram-pill"
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 hover:border-pink-500/50 transition-all shadow-sm"
                  title="Follow on Instagram (@willinho23)"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              )}

              {profile.githubUrl && (
                <a
                  id="hero-github-pill"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-500/50 transition-all shadow-sm"
                  title={`GitHub: @${profile.handle}`}
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>
              )}

              {profile.whatsAppUrl && (
                <a
                  id="hero-whatsapp-pill"
                  href={profile.whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 hover:bg-emerald-950/70 text-emerald-300 hover:text-emerald-200 border border-emerald-800/60 hover:border-emerald-500/60 transition-all shadow-sm"
                  title="Chat on WhatsApp (+256 755943973)"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp (+256)</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry & Specs Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl p-5 sm:p-6 backdrop-blur-md">
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>architect-node-01.sys</span>
                </div>
              </div>

              {/* Engineering Profile Summary */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-emerald-500/30 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-white">{profile.name}</h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">@{profile.handle}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{profile.secondaryTitle}</p>
                </div>
              </div>

              {/* Core System Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                    <span>Experience</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {profile.stats.yearsExperience}+ <span className="text-xs font-normal text-slate-400">Years</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">High-load systems</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                    <span>Code Repos</span>
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {profile.stats.productionRepos} <span className="text-xs font-normal text-slate-400">Public &amp; Private</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Go, Python, TypeScript</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                    <span>Throughput</span>
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {profile.stats.totalThroughput}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Crawler &amp; event traffic</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                    <span>Reliability</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {profile.stats.uptimeSLA}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">SLA production standard</div>
                </div>
              </div>

              {/* Specialization Tags Pill Grid */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span>
                    {profile.handle === 'wilberofficial' ? 'CORE PRODUCTION SPECIALIZATIONS' : 'SPECIALIZED RESEARCH DOMAINS'}
                  </span>
                  <span className="text-emerald-400">100% OPERATIONAL</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.handle === 'wilberofficial'
                    ? [
                        'Bulk Apparel',
                        'Screen Printing & DTF',
                        'Reflector Vests',
                        'NGO Branding',
                        'Marathon Kits',
                        'React 19 & Vite',
                        'Grin Mates (Eco)',
                        'Pre-Press Separations',
                      ]
                    : ['Akamai BMP', 'DataDome Bypass', 'JA3/JA4 TLS', 'RAG Agents', 'Goroutines', 'Playwright Stealth', 'FastAPI', 'React 19']
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
