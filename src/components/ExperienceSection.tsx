import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 bg-[#090c13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career, Global Advocacy &amp; Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Professional Experience &amp; Impact
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
            Track record spanning global youth ambassadorship, international NGO apparel branding, pre-press color separations, and sustainable community platforms.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-10">
          {experience.map((item) => {
            const isAmbassador = item.type === 'Ambassador' || item.type === 'Global Fellowship';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Timeline marker node */}
                <div
                  className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 ${
                    isAmbassador
                      ? 'border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 shadow-md shadow-amber-950'
                      : 'border-emerald-500 group-hover:bg-emerald-500 group-hover:scale-125 shadow-md shadow-emerald-950'
                  } transition-all`}
                />

                <div
                  className={`p-6 rounded-2xl ${
                    isAmbassador
                      ? 'bg-slate-900/80 border-amber-500/40 hover:border-amber-400/70 shadow-lg shadow-amber-950/20'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  } border transition-all space-y-4`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.role}
                        </h3>
                        {isAmbassador && (
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            <Award className="w-3 h-3 text-amber-400" />
                            Honorary Appointment
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-sm font-semibold font-mono ${
                          isAmbassador ? 'text-amber-400' : 'text-emerald-400'
                        }`}
                      >
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {item.location}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-lg flex items-center gap-1 text-xs border ${
                          isAmbassador
                            ? 'bg-amber-950/60 text-amber-300 border-amber-500/50 font-semibold'
                            : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
                        }`}
                      >
                        {isAmbassador && <Award className="w-3 h-3 text-amber-400" />}
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables &amp; Outcomes:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isAmbassador ? 'text-amber-400' : 'text-emerald-400'
                            }`}
                          />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack / Domain Chips */}
                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          isAmbassador
                            ? 'bg-amber-950/30 text-amber-200 border-amber-800/60'
                            : 'bg-slate-950 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
