import React, { useState } from 'react';
import {
  ShieldAlert,
  KeyRound,
  Smartphone,
  Fingerprint,
  BrainCircuit,
  Bot,
  Database,
  Cpu,
  Terminal,
  Zap,
  Server,
  Layers,
  Boxes,
  LayoutGrid,
  Activity,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Code2,
  Filter,
  Palette,
  Printer,
  Brush,
  Globe,
  Scissors,
} from 'lucide-react';
import { TechnicalSkill, SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: TechnicalSkill[];
}

const CATEGORY_LABELS: Record<string, string> = {
  'graphic-design': 'Graphic Design & Vectors',
  'apparel-production': 'Apparel & Screen Printing',
  'web-development': 'Web & Front-End Engineering',
  'brand-identity': 'Brand Identity & Eco Systems',
  'reverse-engineering': 'Reverse Engineering & Security',
  'ai-intelligent-systems': 'AI & Intelligent Systems',
  'automation-scraping': 'Automation & Scraping',
  'backend-cloud': 'Backend & Cloud',
  'frontend-fullstack': 'Frontend & Full-Stack',
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkillModal, setActiveSkillModal] = useState<TechnicalSkill | null>(null);

  const uniqueCategories = Array.from(new Set(skills.map((s) => s.category)));

  const categories: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Disciplines', count: skills.length },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      label: CATEGORY_LABELS[cat] || cat,
      count: skills.filter((s) => s.category === cat).length,
    })),
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'KeyRound': return KeyRound;
      case 'Smartphone': return Smartphone;
      case 'Fingerprint': return Fingerprint;
      case 'BrainCircuit': return BrainCircuit;
      case 'Bot': return Bot;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      case 'Terminal': return Terminal;
      case 'Zap': return Zap;
      case 'Server': return Server;
      case 'Layers': return Layers;
      case 'Boxes': return Boxes;
      case 'LayoutGrid': return LayoutGrid;
      case 'Activity': return Activity;
      case 'Palette': return Palette;
      case 'Printer': return Printer;
      case 'Brush': return Brush;
      case 'Globe': return Globe;
      case 'Scissors': return Scissors;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities &amp; Architecture Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Engineered for Extreme Reliability &amp; Precision
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              A comprehensive breakdown of core proficiencies across protocol reverse engineering, distributed automation, autonomous AI agent pipelines, and high-load backend infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tested in High-Stress Production Environments</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-emerald-500/30 text-emerald-200' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = getIcon(skill.iconName);
            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                onClick={() => setActiveSkillModal(skill)}
                className="group relative rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 p-5 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                        {skill.yearsOfExp} Yrs Exp
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-800/80">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-emerald-400/90 font-mono mt-1 mb-2 line-clamp-1">
                    ⚡ {skill.highlight}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Tags & Visual Progress */}
                <div className="pt-3 border-t border-slate-800/60 space-y-3">
                  {/* Proficiency Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  {/* Tags Pill List */}
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/60 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {skill.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800/50 text-slate-500">
                        +{skill.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        {activeSkillModal && (
          <div
            id="skill-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSkillModal(null)}
          >
            <div
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    {React.createElement(getIcon(activeSkillModal.iconName), { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{activeSkillModal.name}</h3>
                    <p className="text-xs text-slate-400 font-mono capitalize">
                      Category: {activeSkillModal.category.replace('-', ' ')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSkillModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300">
                ⭐ Highlight: {activeSkillModal.highlight}
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-300">Architectural Context &amp; Production Use:</div>
                <p className="text-sm text-slate-400 leading-relaxed">{activeSkillModal.description}</p>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2">Core Tools &amp; Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {activeSkillModal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-950/40 text-emerald-300 border border-emerald-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Production Proficiency: <strong className="text-emerald-400">{activeSkillModal.proficiency}%</strong></span>
                <span>Experience: <strong className="text-white">{activeSkillModal.yearsOfExp} Years</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
