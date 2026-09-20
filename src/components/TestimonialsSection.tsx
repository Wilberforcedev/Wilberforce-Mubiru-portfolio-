import React, { useState, useEffect } from 'react';
import {
  MessageSquareQuote,
  Star,
  CheckCircle2,
  PlusCircle,
  Building2,
  Calendar,
  Sparkles,
  Send,
  UserCheck,
} from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  initialTestimonials: Testimonial[];
}

const TESTIMONIAL_CATEGORY_LABELS: Record<string, string> = {
  'ngo-partners': 'NGO & Development Partners',
  'event-organizers': 'Marathons & Event Organizers',
  'production-clients': 'Apparel & Production Clients',
  'eco-initiatives': 'Eco Initiatives & Conservation',
  'security': 'Security & Anti-Bot',
  'ai-startups': 'AI & LLM Startups',
  'automation': 'High-Volume Automation',
  'cto-founders': 'Founders & Directors',
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  initialTestimonials,
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);

  useEffect(() => {
    setTestimonials(initialTestimonials);
  }, [initialTestimonials]);

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // New testimonial form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formProject, setFormProject] = useState('');
  const [formCategory, setFormCategory] = useState<Testimonial['category']>('production-clients');
  const [formRating, setFormRating] = useState(5);
  const [formContent, setFormContent] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const uniqueCategories = Array.from(new Set(testimonials.map((t) => t.category)));

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      label: TESTIMONIAL_CATEGORY_LABELS[cat] || cat,
      count: testimonials.filter((t) => t.category === cat).length,
    })),
  ];

  const filteredTestimonials =
    selectedFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === selectedFilter);

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContent.trim()) return;

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      name: formName.trim(),
      role: formRole.trim() || 'Engineering Lead',
      company: formCompany.trim() || 'Tech Collaborator',
      avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80`,
      content: formContent.trim(),
      rating: formRating,
      category: formCategory,
      projectDelivered: formProject.trim() || 'Software Engineering Advisory',
      date: 'Just now',
      verified: true,
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);

    try {
      const savedUserOnly = updated.filter((t) => t.id.startsWith('custom-'));
      localStorage.setItem('portfolio_user_testimonials', JSON.stringify(savedUserOnly));
    } catch {}

    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowSubmitModal(false);
      // Reset form
      setFormName('');
      setFormRole('');
      setFormCompany('');
      setFormProject('');
      setFormContent('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Verified Client &amp; Peer Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Endorsements &amp; Industry Trust
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Feedback from CTOs, security directors, and venture-backed founders on system reliability, low-latency performance, and anti-bot bypass execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="add-testimonial-btn"
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 text-xs font-medium transition-all shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Leave a Recommendation</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                id={`testimonial-filter-${cat.id}`}
                onClick={() => setSelectedFilter(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {t.verified && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/70 text-[10px] font-mono text-emerald-300">
                      <UserCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified Client</span>
                    </div>
                  )}
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Client Info & Project Tag */}
              <div className="pt-4 border-t border-slate-800/70">
                <div className="flex items-center gap-3 mb-2.5">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-xl object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">
                      {t.role} • <span className="text-slate-300">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span className="text-emerald-400 truncate max-w-[200px]" title={t.projectDelivered}>
                    ⚡ {t.projectDelivered}
                  </span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Recommendation Modal */}
        {showSubmitModal && (
          <div
            id="submit-testimonial-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowSubmitModal(false)}
          >
            <div
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Add a Testimonial</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Share feedback from an engineering collaboration or production delivery.
                  </p>
                </div>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-base font-semibold text-white">Thank You for the Endorsement!</h4>
                  <p className="text-xs text-slate-400">Your review has been verified and added to the dashboard.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTestimonial} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Role</label>
                      <input
                        type="text"
                        value={formRole}
                        onChange={(e) => setFormRole(e.target.value)}
                        placeholder="e.g. VP of Engineering"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Team</label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="e.g. Apex Scale AI"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Project Category</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      >
                        <option value="security">Security &amp; Anti-Bot</option>
                        <option value="ai-startups">AI &amp; LLM Startups</option>
                        <option value="automation">High-Volume Automation</option>
                        <option value="cto-founders">Founders &amp; CTOs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Delivered</label>
                    <input
                      type="text"
                      value={formProject}
                      onChange={(e) => setFormProject(e.target.value)}
                      placeholder="e.g. Go Anti-Bot Proxy Mesh / RAG Pipeline"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Rating</label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormRating(num)}
                          className="p-1 text-slate-600 hover:text-amber-400"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              num <= formRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono text-slate-400 ml-2">{formRating}.0 / 5.0</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Recommendation / Review *</label>
                    <textarea
                      required
                      rows={4}
                      value={formContent}
                      onChange={(e) => setFormContent(e.target.value)}
                      placeholder="Describe the engineering challenge, Tomoe's solution, and overall delivery outcome..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Recommendation</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
