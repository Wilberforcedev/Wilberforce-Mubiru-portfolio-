import React, { useState, useEffect } from 'react';
import { Activity, Globe, Wifi, GitPullRequest, Clock, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { UserProfile } from '../types';

interface LiveTelemetryHudProps {
  profile: UserProfile;
}

export const LiveTelemetryHud: React.FC<LiveTelemetryHudProps> = ({ profile }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [latency, setLatency] = useState<number>(18);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [gitStatus, setGitStatus] = useState<string>('Syncing...');

  useEffect(() => {
    // Real-time Kampala clock
    const updateTime = () => {
      const now = new Date();
      // East Africa Time (UTC+3)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Kampala',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      try {
        setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
      } catch {
        setCurrentTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Dynamic latency jitter
    const pingTimer = setInterval(() => {
      setLatency(Math.floor(14 + Math.random() * 8));
    }, 4000);

    // Simulated GitHub branch sync
    const gitTimer = setTimeout(() => {
      setGitStatus('Synced • main @ 4e82b9f');
    }, 1500);

    return () => {
      clearInterval(timer);
      clearInterval(pingTimer);
      clearTimeout(gitTimer);
    };
  }, []);

  return (
    <aside
      aria-label="Live System Telemetry"
      className="fixed bottom-4 right-4 z-40 font-mono text-xs select-none transition-all duration-300"
    >
      <div className="bg-[#090c14]/95 border border-slate-800 backdrop-blur-md rounded-xl shadow-2xl shadow-black/80 overflow-hidden max-w-xs sm:max-w-sm">
        {/* Header Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-3.5 py-2 hover:bg-slate-800/60 transition-colors text-slate-300 border-b border-slate-800/60"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">NODE: KAMPALA-EAT</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="text-emerald-400">{latency}ms</span>
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </div>
        </button>

        {/* Collapsible Details Body */}
        {isExpanded && (
          <div className="p-3.5 space-y-2.5 text-[11px] text-slate-400 bg-slate-950/40 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>COORDINATES:</span>
              </span>
              <span className="text-slate-200 font-medium">0.3476° N, 32.5825° E</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>LOCAL TIME (EAT):</span>
              </span>
              <span className="text-emerald-300 font-semibold">{currentTime || '12:00:00'} EAT</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Wifi className="w-3 h-3 text-cyan-400" />
                <span>EDGE LATENCY:</span>
              </span>
              <span className="text-cyan-300">{latency} ms to Cloudflare Edge</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400">
                <GitPullRequest className="w-3 h-3 text-purple-400" />
                <span>GITHUB REPO:</span>
              </span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-purple-300 hover:text-purple-200 underline font-medium"
              >
                {profile.handle}
              </a>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
              <span className="flex items-center gap-1 text-slate-500">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>KLEBERSON SHOP STATUS</span>
              </span>
              <span className="text-emerald-400 font-medium">PRE-PRESS QUEUE READY</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
