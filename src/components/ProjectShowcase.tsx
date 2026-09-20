import React, { useState } from 'react';
import {
  Code2,
  ShieldCheck,
  Binary,
  Network,
  Database,
  Scissors,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  GitFork,
  BellRing,
  ArrowRight,
  TrendingUp,
  Server,
  Layers,
  Cpu,
  Boxes,
  LayoutGrid,
  ExternalLink,
  ZoomIn,
  X,
  MessageCircle,
} from 'lucide-react';
import { ArchitectureProject } from '../types';

interface ProjectShowcaseProps {
  projects: ArchitectureProject[];
  onInspectRepo?: (repoId: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0]?.id || '');
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    caption: string;
    tag?: string;
  } | null>(null);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Binary': return Binary;
      case 'Network': return Network;
      case 'Database': return Database;
      case 'Scissors': return Scissors;
      case 'Search': return Search;
      case 'CheckCircle2': return CheckCircle2;
      case 'Sparkles': return Sparkles;
      case 'Zap': return Zap;
      case 'Code2': return Code2;
      case 'GitFork': return GitFork;
      case 'BellRing': return BellRing;
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      case 'Boxes': return Boxes;
      case 'LayoutGrid': return LayoutGrid;
      default: return Server;
    }
  };

  // Projects that have real photographic production plates
  const photoPlates = projects.filter((p) => p.image);

  return (
    <section id="architecture" className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Real Production Output &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Featured Work &amp; Production Plates
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Every plate is real production work for international NGOs (OXFAM, UKaid, Belgium, Plan), major athletic runs, and eco-initiatives. Tap any plate to inspect full resolution.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Kampala • Bulk Delivery Active</span>
          </div>
        </div>

        {/* 1. Interactive Visual Plate Grid (Matching mubiruwilberforce.netlify.app) */}
        {photoPlates.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoPlates.map((plate) => (
                <div
                  key={plate.id}
                  id={`plate-${plate.id}`}
                  onClick={() => {
                    setActiveProjectId(plate.id);
                    setLightboxImage({
                      src: plate.image!,
                      title: plate.title,
                      caption: plate.caption || plate.tagline,
                      tag: plate.tag,
                    });
                  }}
                  className={`group relative rounded-2xl overflow-hidden bg-slate-900/90 border transition-all cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 ${
                    plate.id === activeProject.id
                      ? 'border-emerald-500/60 ring-2 ring-emerald-500/20'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <img
                      src={plate.image}
                      alt={plate.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Tag Badge */}
                    {plate.tag && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 border border-slate-700 text-emerald-300 backdrop-blur-sm shadow">
                        {plate.tag}
                      </div>
                    )}

                    {/* Zoom Icon overlay */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-slate-700">
                      <ZoomIn className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-emerald-400 font-medium">{plate.category}</span>
                      <span>{plate.benchmarks[0]?.value}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {plate.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {plate.caption || plate.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Flagship Production Case Studies & Architecture Breakdown */}
        <div className="pt-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Detailed Case Studies
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Production Architecture &amp; Delivery Workflows
              </h3>
            </div>
          </div>

          {/* Project Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
            {projects.map((proj) => {
              const isActive = proj.id === activeProject.id;
              return (
                <button
                  key={proj.id}
                  id={`arch-tab-${proj.id}`}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Project Card */}
          {activeProject && (
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 overflow-hidden shadow-2xl">
              {/* Top Bar */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-emerald-400">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {activeProject.category}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">{activeProject.clientOrContext}</span>
                    <span>•</span>
                    <span className="text-slate-400">{activeProject.duration}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{activeProject.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start lg:self-auto">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/90 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body: Problem vs Solution & Benchmarks */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Visual split if image exists */}
                {activeProject.image && (
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 flex flex-col sm:flex-row items-center gap-5">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full sm:w-48 h-36 rounded-xl object-cover border border-slate-800 shadow"
                    />
                    <div className="space-y-2 text-left">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Production Verified Specimen</span>
                      </div>
                      <h4 className="text-base font-semibold text-white">
                        {activeProject.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {activeProject.caption || activeProject.tagline}
                      </p>
                      <a
                        href={`https://wa.me/256755943973?text=${encodeURIComponent(`Hi Wilberforce, inquiring about ${activeProject.title}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire about similar bulk order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-red-950/15 border border-red-900/30">
                    <div className="text-xs font-mono uppercase text-red-400 mb-2 font-semibold">
                      The Production Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-950/15 border border-emerald-900/30">
                    <div className="text-xs font-mono uppercase text-emerald-400 mb-2 font-semibold">
                      The Engineered Solution
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Benchmarks Counter Grid */}
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Quality Metrics &amp; Delivery Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {activeProject.benchmarks.map((bm) => (
                      <div
                        key={bm.label}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800/80"
                      >
                        <div className="text-xs text-slate-400 mb-1">{bm.label}</div>
                        <div className="text-2xl font-bold font-mono text-emerald-300">
                          {bm.value}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">{bm.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Workflow Flow */}
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5" />
                    <span>Production Execution Pipeline</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeProject.architectureWorkflow.map((step, idx) => {
                      const StepIcon = getStepIcon(step.icon);
                      return (
                        <div
                          key={step.title}
                          className="relative p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 group hover:border-emerald-500/40 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10">
                              <StepIcon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500">
                              STAGE 0{idx + 1}
                            </span>
                          </div>
                          <h4 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Production Plates */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div>
                {lightboxImage.tag && (
                  <span className="text-xs font-mono text-emerald-400 mr-2 uppercase">
                    [{lightboxImage.tag}]
                  </span>
                )}
                <span className="font-semibold text-white text-sm sm:text-base">
                  {lightboxImage.title}
                </span>
              </div>
              <button
                id="close-lightbox-btn"
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black/60 p-2">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Footer with WhatsApp order action */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <p className="text-slate-400 text-center sm:text-left">
                {lightboxImage.caption}
              </p>
              <a
                id="lightbox-wa-btn"
                href={`https://wa.me/256755943973?text=${encodeURIComponent(
                  `Hi Wilberforce, I saw your work "${lightboxImage.title}" on your portfolio and I would like to make an inquiry.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shrink-0 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Similar on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
