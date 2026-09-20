/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { RepoDashboard } from './components/RepoDashboard';
import { ProjectShowcase } from './components/ProjectShowcase';
import { InteractivePrepressStudio } from './components/InteractivePrepressStudio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { DynamicBackgroundCanvas } from './components/DynamicBackgroundCanvas';
import { LiveTelemetryHud } from './components/LiveTelemetryHud';

import {
  TOMOE_PROFILE,
  WILBERFORCE_PROFILE,
  TECHNICAL_SKILLS,
  CODE_REPOSITORIES,
  WILBERFORCE_CODE_REPOSITORIES,
  TOMOE_CODE_REPOSITORIES,
  ARCHITECTURE_SHOWCASES,
  TESTIMONIALS,
  EXPERIENCE_TIMELINE,
} from './data/portfolioData';
import { UserProfile } from './types';

export default function App() {
  // Load saved profile preference or default to Wilberforce Mubiru
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_active_profile_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return WILBERFORCE_PROFILE;
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dynamically select repositories based on selected profile
  const activeRepos = profile.name.toLowerCase().includes('tomoe')
    ? TOMOE_CODE_REPOSITORIES
    : WILBERFORCE_CODE_REPOSITORIES;

  // Switch between Wilberforce & Tomoe if desired
  const handleToggleProfile = () => {
    const next = profile.name.toLowerCase().includes('tomoe') ? WILBERFORCE_PROFILE : TOMOE_PROFILE;
    setProfile(next);
    try {
      localStorage.setItem('portfolio_active_profile_v2', JSON.stringify(next));
    } catch {}
  };

  const handleSelectProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('portfolio_active_profile_v2', JSON.stringify(newProfile));
    } catch {}
  };

  const handleSaveCustomProfile = (customProfile: UserProfile) => {
    setProfile(customProfile);
    try {
      localStorage.setItem('portfolio_active_profile_v2', JSON.stringify(customProfile));
    } catch {}
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      {/* Ambient Particle Matrix Background */}
      <DynamicBackgroundCanvas />

      {/* Top Sticky Navigation Bar */}
      <Navbar
        currentProfile={profile}
        onOpenTerminal={() => setIsCommandPaletteOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onToggleProfile={handleToggleProfile}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero & Value Proposition */}
        <HeroSection
          profile={profile}
          onExploreRepos={() => scrollToSection('repositories')}
          onExploreSkills={() => scrollToSection('skills')}
          onExploreTestimonials={() => scrollToSection('testimonials')}
          onContact={() => scrollToSection('contact')}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* 2. Technical Capabilities Matrix */}
        <SkillsSection skills={TECHNICAL_SKILLS} />

        {/* 3. Code Repositories Dashboard */}
        <RepoDashboard repositories={activeRepos} />

        {/* 4. Flagship Architecture Case Studies */}
        <ProjectShowcase projects={ARCHITECTURE_SHOWCASES} />

        {/* 5. Dynamic Interactive Pre-Press Studio & Separations Simulator */}
        <InteractivePrepressStudio />

        {/* 6. Verified Client & Peer Testimonials */}
        <TestimonialsSection initialTestimonials={TESTIMONIALS} />

        {/* 7. Professional Track Record & Milestones */}
        <ExperienceSection experience={EXPERIENCE_TIMELINE} />

        {/* 8. Direct Collaboration & Contact Hub */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Real-Time Telemetry HUD Overlay */}
      <LiveTelemetryHud profile={profile} />

      {/* Interactive CLI Terminal Drawer */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        profile={profile}
        repositories={activeRepos}
        skills={TECHNICAL_SKILLS}
        onNavigateSection={(sectionId) => {
          setIsTerminalOpen(false);
          scrollToSection(sectionId);
        }}
      />

      {/* Global Command Palette Modal (Ctrl+K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        profile={profile}
        repositories={activeRepos}
        showcases={ARCHITECTURE_SHOWCASES}
        onNavigateSection={(sectionId) => {
          setIsCommandPaletteOpen(false);
          scrollToSection(sectionId);
        }}
        onOpenTerminal={() => {
          setIsCommandPaletteOpen(false);
          setIsTerminalOpen(true);
        }}
        onToggleProfile={handleToggleProfile}
      />

      {/* Profile Persona & Customization Drawer */}
      <ProfileCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentProfile={profile}
        onSelectProfile={handleSelectProfile}
        onSaveCustomProfile={handleSaveCustomProfile}
      />
    </div>
  );
}
