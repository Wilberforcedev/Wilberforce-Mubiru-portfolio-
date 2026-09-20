import React, { useState } from 'react';
import { X, Sparkles, UserCheck, RefreshCw, Check, ArrowRight } from 'lucide-react';
import { UserProfile } from '../types';
import { TOMOE_PROFILE, WILBERFORCE_PROFILE } from '../data/portfolioData';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: UserProfile;
  onSelectProfile: (profile: UserProfile) => void;
  onSaveCustomProfile: (profile: UserProfile) => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSelectProfile,
  onSaveCustomProfile,
}) => {
  const [name, setName] = useState(currentProfile.name);
  const [handle, setHandle] = useState(currentProfile.handle);
  const [primaryTitle, setPrimaryTitle] = useState(currentProfile.primaryTitle);
  const [secondaryTitle, setSecondaryTitle] = useState(currentProfile.secondaryTitle);
  const [shortBio, setShortBio] = useState(currentProfile.shortBio);
  const [email, setEmail] = useState(currentProfile.email);
  const [location, setLocation] = useState(currentProfile.location);
  const [statusText, setStatusText] = useState(currentProfile.statusText);
  const [githubUrl, setGithubUrl] = useState(currentProfile.githubUrl);

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...currentProfile,
      name,
      handle,
      primaryTitle,
      secondaryTitle,
      shortBio,
      email,
      location,
      statusText,
      githubUrl,
    };
    onSaveCustomProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleApplyPreset = (preset: UserProfile) => {
    setName(preset.name);
    setHandle(preset.handle);
    setPrimaryTitle(preset.primaryTitle);
    setSecondaryTitle(preset.secondaryTitle);
    setShortBio(preset.shortBio);
    setEmail(preset.email);
    setLocation(preset.location);
    setStatusText(preset.statusText);
    setGithubUrl(preset.githubUrl);
    onSelectProfile(preset);
  };

  return (
    <div
      id="profile-customizer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Portfolio Identity &amp; Profile</h3>
              <p className="text-xs text-slate-400">
                Switch presets or customize bio and credentials seamlessly.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Preset Selector Buttons */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Quick Persona Switcher:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Tomoe Preset Card */}
            <button
              type="button"
              onClick={() => handleApplyPreset(TOMOE_PROFILE)}
              className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                currentProfile.handle === 'TomoeGozen82'
                  ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/50'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <img
                src={TOMOE_PROFILE.avatar}
                alt="Tomoe"
                className="w-10 h-10 rounded-lg object-cover border border-slate-700"
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Tomoe</span>
                  {currentProfile.handle === 'TomoeGozen82' && (
                    <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {TOMOE_PROFILE.primaryTitle}
                </div>
              </div>
            </button>

            {/* Wilberforce Preset Card */}
            <button
              type="button"
              onClick={() => handleApplyPreset(WILBERFORCE_PROFILE)}
              className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                currentProfile.handle === 'wilberofficial'
                  ? 'bg-cyan-950/40 border-cyan-500/60 ring-1 ring-cyan-500/50'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <img
                src={WILBERFORCE_PROFILE.avatar}
                alt="Wilberforce"
                className="w-10 h-10 rounded-lg object-cover border border-slate-700"
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Mubiru Wilberforce</span>
                  {currentProfile.handle === 'wilberofficial' && (
                    <span className="text-[10px] font-mono text-cyan-400">ACTIVE</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {WILBERFORCE_PROFILE.primaryTitle}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Custom Edit Form */}
        <form onSubmit={handleSave} className="space-y-3.5 pt-2 border-t border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Fine-Tune Details:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Handle / Moniker</label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Primary Title</label>
              <input
                type="text"
                value={primaryTitle}
                onChange={(e) => setPrimaryTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Secondary Title</label>
              <input
                type="text"
                value={secondaryTitle}
                onChange={(e) => setSecondaryTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Short Headline Bio</label>
            <textarea
              rows={2}
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-sans"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Contact Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-emerald-950"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
