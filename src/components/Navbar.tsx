import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Code2,
  FolderGit2,
  Cpu,
  MessageSquareQuote,
  Briefcase,
  Mail,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  ChevronDown,
  UserCheck,
  Linkedin,
  Instagram,
  Github,
  Layers,
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentProfile: UserProfile;
  onOpenTerminal: () => void;
  onOpenCustomizer: () => void;
  onToggleProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onOpenTerminal,
  onOpenCustomizer,
  onToggleProfile,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['skills', 'repositories', 'architecture', 'prepress-studio', 'testimonials', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'repositories', label: 'Repositories', icon: FolderGit2 },
    { id: 'architecture', label: 'Architecture', icon: Code2 },
    { id: 'prepress-studio', label: 'Studio', icon: Layers },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Terminal Identifier */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/70 group-hover:bg-emerald-500/20 transition-all shadow-sm shadow-emerald-950">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold text-slate-200 tracking-tight flex items-center gap-1">
                <span className="text-emerald-400">{currentProfile.handle}</span>
                <span className="text-slate-500">@</span>
                <span className="text-cyan-400">
                  {currentProfile.handle === 'wilberofficial' ? 'artist' : 'engineer'}
                </span>
                <span className="text-slate-600">:~$</span>
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active • {currentProfile.location}</span>
              </span>
            </div>
          </a>

          {/* Identity Quick-Switcher Chip */}
          <button
            id="profile-toggle-pill"
            onClick={onToggleProfile}
            title="Switch between Wilberforce Mubiru and Tomoe profiles"
            className="hidden lg:flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-700/70 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
          >
            <UserCheck className="w-3 h-3 text-cyan-400" />
            <span>Profile: <strong className="text-emerald-300 font-medium">{currentProfile.name}</strong></span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">Switch</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & Terminal Button */}
        <div className="flex items-center gap-2">
          {/* LinkedIn Profile */}
          {currentProfile.linkedinUrl && (
            <a
              id="nav-linkedin-link"
              href={currentProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all"
              title="LinkedIn: Wilberforce Mubiru"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {/* Instagram Profile */}
          {currentProfile.instagramUrl && (
            <a
              id="nav-instagram-link"
              href={currentProfile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 hover:border-pink-500/40 transition-all"
              title="Instagram: @willinho23"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}

          {/* GitHub Profile */}
          {currentProfile.githubUrl && (
            <a
              id="nav-github-link"
              href={currentProfile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
              title={`GitHub: @${currentProfile.handle}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {/* Quick WhatsApp Action if available */}
          {currentProfile.whatsAppUrl && (
            <a
              id="nav-wa-link"
              href={currentProfile.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-xs font-medium transition-all"
              title="Chat on WhatsApp (+256 755943973)"
            >
              <span>WhatsApp</span>
            </a>
          )}

          {/* Interactive Terminal Trigger */}
          <button
            id="open-terminal-btn"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 text-xs font-mono transition-all"
            title="Open Interactive Engineer Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-900 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Profile Details Edit / Customizer */}
          <button
            id="customize-profile-btn"
            onClick={onOpenCustomizer}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs transition-all"
            title="Configure profile bio & links"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Customize</span>
          </button>

          {/* Hire Me CTA */}
          <button
            id="nav-cta-hire"
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-sm shadow-emerald-950 hover:shadow-emerald-900"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-5 mt-2 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-xs text-slate-400 font-mono">Current Profile:</span>
            <button
              onClick={() => {
                onToggleProfile();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/60"
            >
              <UserCheck className="w-3 h-3" />
              <span>{currentProfile.name} (Switch)</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium text-left hover:border-emerald-500/50"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive CLI</span>
            </button>
            <button
              onClick={() => {
                onOpenCustomizer();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Customize</span>
            </button>
          </div>

          {/* Mobile Social Links Row */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-around text-xs font-mono text-slate-400">
            {currentProfile.linkedinUrl && (
              <a
                href={currentProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}
            {currentProfile.instagramUrl && (
              <a
                href={currentProfile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-pink-400 hover:text-pink-300"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            )}
            {currentProfile.githubUrl && (
              <a
                href={currentProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {currentProfile.whatsAppUrl && (
              <a
                href={currentProfile.whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              >
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
