import React, { useState, useMemo } from 'react';
import {
  FolderGit2,
  Search,
  Star,
  GitFork,
  FileCode,
  ExternalLink,
  Copy,
  Check,
  Code2,
  Terminal,
  Clock,
  Sparkles,
  Layers,
  ArrowUpDown,
  BookOpen,
} from 'lucide-react';
import { CodeRepository } from '../types';

interface RepoDashboardProps {
  repositories: CodeRepository[];
}

export const RepoDashboard: React.FC<RepoDashboardProps> = ({ repositories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'stars' | 'forks' | 'updated'>('stars');
  const [starredMap, setStarredMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('portfolio_starred_repos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeRepoModal, setActiveRepoModal] = useState<CodeRepository | null>(null);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  // Toggle star
  const handleToggleStar = (repoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStarredMap((prev) => {
      const next = { ...prev, [repoId]: !prev[repoId] };
      try {
        localStorage.setItem('portfolio_starred_repos', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const copyCloneCmd = (repo: CodeRepository, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${repo.cloneUrl}`);
    setCopiedCloneId(repo.id);
    setTimeout(() => setCopiedCloneId(null), 2000);
  };

  // Filter & Sort Repositories
  const filteredRepos = useMemo(() => {
    return repositories
      .filter((repo) => {
        const matchesSearch =
          searchQuery.trim() === '' ||
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesLang =
          selectedLanguage === 'all' || repo.primaryLanguage.toLowerCase() === selectedLanguage.toLowerCase();

        const matchesCat =
          selectedCategory === 'all' || repo.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesLang && matchesCat;
      })
      .sort((a, b) => {
        const aStarred = starredMap[a.id] ? 1 : 0;
        const bStarred = starredMap[b.id] ? 1 : 0;
        const aEffectiveStars = a.stars + aStarred;
        const bEffectiveStars = b.stars + bStarred;

        if (sortBy === 'stars') return bEffectiveStars - aEffectiveStars;
        if (sortBy === 'forks') return b.forks - a.forks;
        return 0; // default initial order
      });
  }, [repositories, searchQuery, selectedLanguage, selectedCategory, sortBy, starredMap]);

  // Aggregate stats
  const totalStars = useMemo(() => {
    return repositories.reduce((acc, r) => acc + r.stars + (starredMap[r.id] ? 1 : 0), 0);
  }, [repositories, starredMap]);

  const totalForks = useMemo(() => {
    return repositories.reduce((acc, r) => acc + r.forks, 0);
  }, [repositories]);

  return (
    <section id="repositories" className="py-20 border-b border-slate-800/80 bg-[#090c13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Open-Source &amp; Production Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Code Repositories Dashboard
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Explore production architectures, anti-bot evasion engines, agentic RAG frameworks, and high-concurrency automation tools with in-browser source code inspection.
            </p>
          </div>

          {/* Aggregate Telemetry Pill Bar */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-2 rounded-xl self-start md:self-auto font-mono text-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 text-amber-300 border border-amber-800/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{totalStars.toLocaleString()} Stars</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-800/60">
              <GitFork className="w-3.5 h-3.5" />
              <span>{totalForks.toLocaleString()} Forks</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>{repositories.length} Active Repos</span>
            </div>
          </div>
        </div>

        {/* Search, Language Filters & Sort Controls */}
        <div className="space-y-4 mb-8">
          {/* Top Row: Search Input & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="repo-search-input"
                type="text"
                placeholder="Search repositories by name, topic, or keyword (e.g. Akamai, JA4, RAG, Go)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-slate-300">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span>Sort:</span>
                <select
                  id="repo-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-emerald-400 focus:outline-none cursor-pointer"
                >
                  <option value="stars">Most Stars</option>
                  <option value="forks">Most Forks</option>
                  <option value="updated">Recently Updated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Row: Language & Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-slate-500 uppercase mr-1">Language:</span>
            {[
              { id: 'all', label: 'All Languages' },
              { id: 'go', label: 'Go (Golang)', color: '#00ADD8' },
              { id: 'python', label: 'Python', color: '#3572A5' },
              { id: 'typescript', label: 'TypeScript', color: '#3178C6' },
            ].map((lang) => {
              const isActive = selectedLanguage === lang.id;
              return (
                <button
                  key={lang.id}
                  id={`repo-lang-filter-${lang.id}`}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-slate-800 text-emerald-300 border border-emerald-500/50 shadow-sm'
                      : 'bg-slate-950/70 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {lang.color && (
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                  )}
                  <span>{lang.label}</span>
                </button>
              );
            })}

            <div className="hidden sm:block w-px h-4 bg-slate-800 mx-2" />

            <span className="text-xs font-mono text-slate-500 uppercase mr-1 hidden sm:inline">Category:</span>
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'reverse-engineering', label: 'Reverse Eng' },
              { id: 'ai', label: 'AI & RAG' },
              { id: 'automation', label: 'Automation' },
              { id: 'backend', label: 'Distributed Backend' },
            ].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`repo-cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/50'
                      : 'bg-slate-950/50 text-slate-400 hover:text-slate-300 border border-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Repositories Grid */}
        {filteredRepos.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/50 border border-slate-800">
            <FolderGit2 className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No repositories match your filter</h3>
            <p className="text-xs text-slate-400 mt-1">Try broadening your search term or clearing filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('all');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredRepos.map((repo) => {
              const isStarred = starredMap[repo.id];
              const starCount = repo.stars + (isStarred ? 1 : 0);

              return (
                <div
                  key={repo.id}
                  id={`repo-card-${repo.id}`}
                  className="group rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 p-5 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40"
                >
                  <div>
                    {/* Top row: Name & Star action */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                          <FolderGit2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h3
                            onClick={() => {
                              setSelectedFileIndex(0);
                              setActiveRepoModal(repo);
                            }}
                            className="text-base font-semibold font-mono text-white group-hover:text-emerald-400 transition-colors truncate cursor-pointer hover:underline"
                          >
                            {repo.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-500">
                            {repo.version} • {repo.license}
                          </span>
                        </div>
                      </div>

                      {/* Star Button */}
                      <button
                        id={`star-btn-${repo.id}`}
                        onClick={(e) => handleToggleStar(repo.id, e)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                          isStarred
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/80'
                        }`}
                        title={isStarred ? 'Unstar repository' : 'Star repository'}
                      >
                        <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                        <span>{starCount}</span>
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3">
                      {repo.description}
                    </p>

                    {/* Topics Pill List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/70 text-slate-400 border border-slate-800/80 hover:text-slate-200 transition-colors"
                        >
                          #{topic}
                        </span>
                      ))}
                      {repo.topics.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                          +{repo.topics.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Meta & Actions */}
                  <div className="pt-3 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                        <span className="text-slate-300">{repo.primaryLanguage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-slate-500" />
                        <span>{repo.forks}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1 text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{repo.updatedAt}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        id={`copy-clone-${repo.id}`}
                        onClick={(e) => copyCloneCmd(repo, e)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="Copy git clone URL"
                      >
                        {copiedCloneId === repo.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {repo.liveDemoUrl && (
                        <a
                          href={repo.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        id={`inspect-repo-${repo.id}`}
                        onClick={() => {
                          setSelectedFileIndex(0);
                          setActiveRepoModal(repo);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Inspect Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Deep-Dive Repository Code Inspection Modal */}
        {activeRepoModal && (
          <div
            id="repo-inspect-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveRepoModal(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 border border-slate-700">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold font-mono text-white">
                        {activeRepoModal.fullName}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                        {activeRepoModal.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {activeRepoModal.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyCloneCmd(activeRepoModal)}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700"
                  >
                    {copiedCloneId === activeRepoModal.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>git clone</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setActiveRepoModal(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body: Architecture Notes & Code File Viewer */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
                {/* Architectural Breakdown */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>SYSTEM ARCHITECTURE OVERVIEW</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeRepoModal.architectureOverview}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Engineering Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {activeRepoModal.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Explorer Window */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
                  {/* File Tabs Bar */}
                  <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 border-b border-slate-800 overflow-x-auto">
                    <div className="flex items-center gap-1">
                      {activeRepoModal.files.map((file, idx) => (
                        <button
                          key={file.filename}
                          onClick={() => setSelectedFileIndex(idx)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                            selectedFileIndex === idx
                              ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                          }`}
                        >
                          <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{file.filename}</span>
                        </button>
                      ))}
                    </div>

                    <div className="text-[11px] font-mono text-slate-500">
                      {activeRepoModal.files[selectedFileIndex]?.language.toUpperCase()}
                    </div>
                  </div>

                  {/* Code Snippet Container */}
                  <div className="p-4 overflow-x-auto max-h-72 text-xs font-mono leading-relaxed text-slate-200">
                    <pre>
                      <code>{activeRepoModal.files[selectedFileIndex]?.code}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>clone: git clone {activeRepoModal.cloneUrl}</span>
                </div>
                <button
                  onClick={() => setActiveRepoModal(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
