import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  Check,
  Copy,
  Clock,
  Globe,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  Zap,
  Phone,
  MessageCircle,
  Instagram,
  FileText,
} from 'lucide-react';
import { UserProfile } from '../types';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Timezone clock in real-time
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const quickBriefText =
    'Hi Wilberforce! I need [quantity] custom branded [tees / vests / merchandise] for [organization / event] by [date]. Artwork is [ready / needs design]. Delivery in [location].';

  const copyQuickBrief = () => {
    navigator.clipboard.writeText(quickBriefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail.trim() || !formMessage.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries &amp; Bulk Orders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Let&apos;s Make Your Next Bulk Order Print Perfect
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
            Bulk tees, reflector vests, event kits, and NGO branding. Share your quantity, deadline, and artwork specifications. I reply fastest on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Channels & Status */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Priority Callout */}
            {profile.whatsAppUrl && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-slate-900 border border-emerald-500/40 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4" />
                    FASTEST RESPONSE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    &lt; 30 Mins
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  Direct WhatsApp Chat
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Send sketches, quantity requirements, or rush event dates directly. I will quote back immediately with lead time and color specs.
                </p>
                <a
                  id="contact-wa-link"
                  href={profile.whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-950"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({profile.phone || '+256 755943973'})</span>
                </a>
              </div>
            )}

            {/* Status & SLA Box */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">PRODUCTION STATUS</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Bulk Orders</span>
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-semibold text-white">
                  Kleberson Wear UG &amp; Grin Mates
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Based in Kampala, Uganda. Bulk delivery across East Africa and onsite activation available for marathons, conferences, and NGO field teams.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] mb-0.5">LOCATION</div>
                  <div className="font-bold text-emerald-400">{profile.location}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-500 text-[10px] mb-0.5">LOCAL TIME</div>
                  <div className="font-bold text-cyan-400">{currentTime || 'Active'}</div>
                </div>
              </div>
            </div>

            {/* Quick Copyable Brief Template */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>QUICK BRIEF TEMPLATE</span>
                </div>
                <button
                  id="copy-brief-btn"
                  onClick={copyQuickBrief}
                  className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedBrief ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed select-all">
                &ldquo;{quickBriefText}&rdquo;
              </p>
            </div>

            {/* Direct Copyable Email Box */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-400 mb-1">DIRECT INBOX</div>
                <div className="text-sm font-mono text-slate-200 truncate font-medium">
                  {profile.email}
                </div>
              </div>
              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Channel Links */}
            <div className="grid grid-cols-2 gap-3">
              {profile.instagramUrl ? (
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="text-xs font-mono">
                    <div className="text-slate-400 text-[10px]">INSTAGRAM</div>
                    <div className="text-slate-200 font-semibold group-hover:text-pink-400">
                      @{profile.instagramHandle || 'willinho23'}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                </a>
              ) : (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="text-xs font-mono">
                    <div className="text-slate-400 text-[10px]">GITHUB</div>
                    <div className="text-slate-200 font-semibold group-hover:text-emerald-400">
                      @{profile.handle}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                </a>
              )}

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
              >
                <div className="text-xs font-mono">
                  <div className="text-slate-400 text-[10px]">CODE REPOS</div>
                  <div className="text-slate-200 font-semibold group-hover:text-emerald-400">
                    @{profile.handle}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Send an Order Specification or Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below with your garment requirements, quantity, and deadlines for a formal quote.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-center space-y-2">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-semibold text-white">Inquiry Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-400">
                    Thank you for reaching out. Wilberforce will review your specifications and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        YOUR NAME / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Ronald Kigozi (OXFAM Partner)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="your.email@organization.org"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      PROJECT OR ORDER TYPE
                    </label>
                    <input
                      type="text"
                      required
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. 500 High-Vis Reflector Vests + Event Running Kits"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      SPECIFICATIONS &amp; DEADLINE DETAILS
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Specify garment types, quantities (e.g. 500 pcs), print technique (Screen / DTF / Embroidery), required delivery date, and whether vector artwork is ready..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Direct line to Mubiru Wilberforce • Confidential inquiry</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-950 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Dispatch...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Order Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
