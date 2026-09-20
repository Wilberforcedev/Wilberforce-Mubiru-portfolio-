import React, { useState, useEffect } from 'react';
import {
  Search,
  Terminal,
  FolderGit2,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  X,
  Layers,
  Cpu,
  UserCheck,
} from 'lucide-react';
import { UserProfile, CodeRepository, ArchitectureProject } from '../types';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  repositories: CodeRepository[];
  showcases: ArchitectureProject[];
  onNavigateSection: (id: string) => void;
  onOpenTerminal: () => void;
  onToggleProfile: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  profile,
  repositories,
  showcases,
  onNavigateSection,
  onOpenTerminal,
  onToggleProfile,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredRepos = repositories.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredShowcases = showcases.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.tagline.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div className="w-full max-w-2xl bg-[#090c14] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-4 h-4 text-emerald-400 mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search repos, projects, social profiles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 px-2 mb-1.5">
              Quick Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Launch Interactive Terminal (CLI)</span>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                  CLI
                </span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onNavigateSection('prepress-studio');
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Open Pre-Press &amp; Garment Simulator</span>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                  STUDIO
                </span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onToggleProfile();
                }}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-purple-400" />
                  <span>Switch Profile Persona (Wilberforce / Tomoe)</span>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                  SWITCH
                </span>
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 px-2 mb-1.5">
              Verified Social Channels
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span className="truncate">LinkedIn Profile</span>
                </a>
              )}

              {profile.instagramUrl && (
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span className="truncate">Instagram (@willinho23)</span>
                </a>
              )}

              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span className="truncate">GitHub (@{profile.handle})</span>
                </a>
              )}

              {profile.whatsAppUrl && (
                <a
                  href={profile.whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">WhatsApp (+256 755943973)</span>
                </a>
              )}
            </div>
          </div>

          {/* Repositories */}
          {filteredRepos.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 px-2 mb-1.5">
                Repositories ({filteredRepos.length})
              </div>
              <div className="space-y-1">
                {filteredRepos.slice(0, 5).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.liveDemoUrl || repo.cloneUrl || `https://github.com/${repo.fullName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <FolderGit2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-slate-200">{repo.name}</span>
                      <span className="text-slate-500 truncate text-[11px]">{repo.description}</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 shrink-0">{repo.primaryLanguage}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Showcases */}
          {filteredShowcases.length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 px-2 mb-1.5">
                Client Artwork &amp; Case Studies
              </div>
              <div className="space-y-1">
                {filteredShowcases.slice(0, 4).map((caseStudy) => (
                  <button
                    key={caseStudy.id}
                    onClick={() => {
                      onClose();
                      onNavigateSection('architecture');
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors text-left"
                  >
                    <div className="truncate">
                      <span className="font-semibold text-slate-200">{caseStudy.title}</span>
                      <span className="text-slate-500 ml-2 text-[11px] truncate">
                        {caseStudy.tagline}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 shrink-0">
                      {caseStudy.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
