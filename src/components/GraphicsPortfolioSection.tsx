import React, { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Filter, ImageOff, Search, X, ZoomIn } from 'lucide-react';
import { GRAPHICS_PORTFOLIO, GraphicsPortfolioItem } from '../data/graphicsPortfolio';

const categories = ['All', ...Array.from(new Set(GRAPHICS_PORTFOLIO.map((item) => item.category)))];

export const GraphicsPortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<GraphicsPortfolioItem | null>(null);
  const [imageFailed, setImageFailed] = useState<Record<string, boolean>>({});

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GRAPHICS_PORTFOLIO.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const haystack = [item.title, item.category, item.role, item.context, item.description, ...item.methods]
        .join(' ')
        .toLowerCase();
      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [activeCategory, query]);

  const featured = GRAPHICS_PORTFOLIO.filter((item) => item.featured);

  const markImageFailed = (id: string) =>
    setImageFailed((current) => ({ ...current, [id]: true }));

  return (
    <section id="graphics-portfolio" className="relative border-b border-slate-800/80 bg-[#080b12] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Graphics • Apparel • Print • Brand Production</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Graphics &amp; Print Portfolio
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              A curated body of practical design work spanning NGO and institutional apparel,
              screen printing, DTF, sublimation, vinyl, packaging, promotional merchandise and
              campaign visuals. The focus is not only on the artwork, but on how it translates
              into production-ready physical output.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 px-4 py-3 text-xs text-slate-300">
            <div className="font-mono text-emerald-300">POSITIONING</div>
            <div className="mt-1 font-semibold text-white">Graphic Artist • Brand Production Specialist</div>
            <div className="text-slate-400">Apparel &amp; Print Designer</div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, methods, clients or categories..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              aria-label="Search graphics portfolio"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-2 scrollbar-none">
            <Filter className="ml-2 h-4 w-4 shrink-0 text-emerald-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? 'whitespace-nowrap rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300'
                    : 'whitespace-nowrap rounded-xl border border-transparent px-3 py-2 text-xs text-slate-400 hover:border-slate-700 hover:text-white'
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['32', 'Curated projects'],
            ['NGO', 'Institutional apparel'],
            ['DTF', 'Transfer production'],
            ['Print', 'Physical production'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="font-mono text-xl font-bold text-emerald-300">{value}</div>
              <div className="mt-1 text-[11px] text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {activeCategory === 'All' && !query && (
          <div className="mb-12">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Selected work</div>
                <h3 className="mt-1 text-xl font-bold text-white">Featured production plates</h3>
              </div>
              <span className="text-xs text-slate-500">{featured.length} highlighted projects</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  failed={imageFailed[item.id]}
                  onError={() => markImageFailed(item.id)}
                  onOpen={() => setSelected(item)}
                />
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">Complete catalog</div>
              <h3 className="mt-1 text-xl font-bold text-white">
                {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
              </h3>
            </div>
            <div className="hidden text-right text-xs text-slate-500 sm:block">
              Click any project to inspect its role, context and production methods.
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                failed={imageFailed[item.id]}
                onError={() => markImageFailed(item.id)}
                onOpen={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 p-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">{selected.category}</div>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{selected.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{selected.context}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-xl border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-white"
                aria-label="Close project"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid max-h-[calc(92vh-90px)] overflow-y-auto lg:grid-cols-[1.35fr_1fr]">
              <div className="flex min-h-[300px] items-center justify-center bg-black/40 p-3 sm:p-6">
                {imageFailed[selected.id] ? (
                  <MissingImage />
                ) : (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-h-[65vh] w-full rounded-2xl object-contain"
                    onError={() => markImageFailed(selected.id)}
                  />
                )}
              </div>

              <div className="space-y-6 p-5 sm:p-7">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Role</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{selected.role}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Project description</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{selected.description}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Production methods</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.methods.map((method) => (
                      <span key={method} className="rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                {selected.note && (
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-5 text-amber-200/80">
                    {selected.note}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const PortfolioCard: React.FC<{
  item: GraphicsPortfolioItem;
  failed?: boolean;
  onError: () => void;
  onOpen: () => void;
}> = ({ item, failed, onError, onOpen }) => (
  <article
    className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-slate-900"
  >
    <button onClick={onOpen} className="block w-full text-left">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
        {failed ? (
          <MissingImage />
        ) : (
          <>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={onError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute left-3 top-3 rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[10px] font-mono text-emerald-300 backdrop-blur">
              {item.category}
            </div>
            <div className="absolute bottom-3 right-3 rounded-lg border border-slate-700 bg-slate-950/80 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <ZoomIn className="h-4 w-4 text-emerald-400" />
            </div>
          </>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{item.context}</div>
          <h4 className="mt-1 text-base font-bold text-white transition-colors group-hover:text-emerald-300">{item.title}</h4>
        </div>
        <p className="line-clamp-2 text-xs leading-5 text-slate-400">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.methods.slice(0, 3).map((method) => (
            <span key={method} className="rounded-md bg-slate-800 px-2 py-1 text-[10px] text-slate-400">
              {method}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-500">
          <span>{item.role}</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
        </div>
      </div>
    </button>
  </article>
);

const MissingImage: React.FC = () => (
  <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center bg-slate-950 text-center">
    <ImageOff className="h-8 w-8 text-slate-700" />
    <p className="mt-3 text-xs font-mono text-slate-500">Production image pending upload</p>
    <p className="mt-1 max-w-[220px] text-[10px] leading-4 text-slate-600">
      The portfolio entry is ready; the source image will populate this plate when uploaded.
    </p>
  </div>
);
