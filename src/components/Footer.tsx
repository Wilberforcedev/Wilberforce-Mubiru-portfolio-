import React from 'react';
import { Terminal, ArrowUp, ShieldCheck, Heart, Github, ExternalLink } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090f] border-t border-slate-800/80 text-slate-400 py-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Left: Brand Moniker */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-200 font-semibold">{profile.name}</span>
              <span className="text-slate-500"> • </span>
              <span className="text-emerald-400">{profile.primaryTitle}</span>
            </div>
          </div>

          {/* Center: System Status */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All Systems Operational (99.98% SLA)</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {profile.name} (@{profile.handle}). Engineered with precision.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">build-sha: 4e82b9f</span>
            <span>•</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={profile.vercelUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Vercel Site</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
