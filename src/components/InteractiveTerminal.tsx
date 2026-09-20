import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { UserProfile, CodeRepository, TechnicalSkill } from '../types';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  repositories: CodeRepository[];
  skills: TechnicalSkill[];
  onNavigateSection: (sectionId: string) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  profile,
  repositories,
  skills,
  onNavigateSection,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'sysinfo',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            ⚡ Welcome to {profile.name}&apos;s Interactive Systems Console [v4.2.0-release]
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-400 font-bold">help</span> to list available commands. Try <span className="text-cyan-400 font-bold">repos</span>, <span className="text-cyan-400 font-bold">skills</span>, or <span className="text-cyan-400 font-bold">sudo hire</span>.
          </p>
        </div>
      ),
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  // Keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = inputVal.trim();
    if (!raw) return;

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 font-mono">
              <div><span className="text-emerald-400 font-bold">whoami</span> — Display engineer identity &amp; bio</div>
              <div><span className="text-emerald-400 font-bold">skills</span> — List technical capabilities &amp; stack</div>
              <div><span className="text-emerald-400 font-bold">repos</span> — Output code repositories with star counts</div>
              <div><span className="text-emerald-400 font-bold">testimonials</span> — View verified client recommendations</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — Get direct contact links (Email/Telegram)</div>
              <div><span className="text-emerald-400 font-bold">stats</span> — Display system uptime &amp; throughput metrics</div>
              <div><span className="text-emerald-400 font-bold">goto &lt;sec&gt;</span> — Jump to section (e.g. goto repos)</div>
              <div><span className="text-emerald-400 font-bold">sudo hire</span> — Initiate priority collaboration session</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — Wipe terminal output history</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p><strong className="text-emerald-400">{profile.name}</strong> (@{profile.handle})</p>
            <p className="text-slate-400">{profile.primaryTitle} &amp; {profile.secondaryTitle}</p>
            <p className="text-slate-300 italic">{profile.fullBio}</p>
            <p className="text-cyan-400">Location: {profile.location} | Status: {profile.statusText}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">CORE TECHNICAL DISCIPLINES ({skills.length}):</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              {skills.map((s) => (
                <div key={s.id} className="p-1.5 rounded bg-slate-950/70 border border-slate-800">
                  <div className="flex justify-between text-slate-200">
                    <span className="font-semibold text-emerald-400">{s.name}</span>
                    <span className="text-slate-400">{s.proficiency}%</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">{s.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'repos':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">FEATURED CODE REPOSITORIES ({repositories.length}):</p>
            <div className="space-y-1 font-mono">
              {repositories.map((r) => (
                <div key={r.id} className="flex items-center justify-between text-slate-300 border-b border-slate-900 pb-1">
                  <span className="text-emerald-400 font-semibold">{r.name}</span>
                  <span className="text-slate-500">{r.primaryLanguage}</span>
                  <span className="text-amber-400">★ {r.stars}</span>
                  <span className="text-slate-400 text-[11px]">{r.license}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'stats':
        outputNode = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Production Experience:</span>{' '}
              <strong className="text-white">{profile.stats.yearsExperience}+ Years</strong>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400">System SLA Uptime:</span>{' '}
              <strong className="text-emerald-400">{profile.stats.uptimeSLA}</strong>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Daily Pipeline Throughput:</span>{' '}
              <strong className="text-cyan-400">{profile.stats.totalThroughput}</strong>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Verified Clients:</span>{' '}
              <strong className="text-amber-400">{profile.stats.verifiedClients}+ Organizations</strong>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-bold">COMMUNICATION ENDPOINTS:</p>
            <p>Email: <a href={`mailto:${profile.email}`} className="text-emerald-400 underline">{profile.email}</a></p>
            <p>GitHub: <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{profile.githubUrl}</a></p>
            <p>Telegram: <span className="text-cyan-400">{profile.telegramUrl}</span></p>
            <p>Discord: <span className="text-slate-300">{profile.discordHandle}</span></p>
          </div>
        );
        break;

      case 'goto':
        const target = arg || 'repositories';
        onNavigateSection(target);
        outputNode = (
          <p className="text-xs text-emerald-400">
            Navigated to section: <strong className="text-white">#{target}</strong>
          </p>
        );
        break;

      case 'sudo':
        if (arg.includes('hire')) {
          onNavigateSection('contact');
          outputNode = (
            <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-mono">
              [ROOT ACCESS GRANTED]: Priority contract flow initiated. Redirecting to direct contact terminal...
            </div>
          );
        } else {
          outputNode = <p className="text-xs text-red-400">Permission denied: user not in sudoers file. Try &quot;sudo hire&quot;.</p>;
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs text-red-400 font-mono">
            Command not found: &ldquo;{raw}&rdquo;. Type <strong className="text-cyan-400">help</strong> to see all available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: raw, output: outputNode }]);
    setInputVal('');
  };

  return (
    <div
      id="terminal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isExpanded ? 'max-w-6xl h-[85vh]' : 'max-w-3xl h-[560px]'
        } bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono transition-all duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity" />
            <button onClick={() => setIsExpanded(!isExpanded)} className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-60" />
            <span className="text-xs text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.handle.toLowerCase()}@production-cli: ~</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white transition-colors"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-semibold">{profile.name.toLowerCase()}</span>
                <span className="text-slate-600">in</span>
                <span className="text-amber-400">~</span>
                <span className="text-slate-200 font-bold">$ {item.command}</span>
              </div>
              <div className="pl-4 pt-0.5">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 text-xs"
        >
          <span className="text-emerald-400 font-bold pl-2">➜</span>
          <span className="text-cyan-400 font-semibold">{profile.name.toLowerCase()}:$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'repos', 'stats', 'sudo hire'..."
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono"
            autoFocus
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1"
          >
            <span>Enter</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
