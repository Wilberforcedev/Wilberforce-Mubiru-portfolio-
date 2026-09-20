import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Sliders,
  Sparkles,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Printer,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

interface ColorChannel {
  id: string;
  name: string;
  colorHex: string;
  enabled: boolean;
  meshCount: string;
  inkType: string;
}

const SAMPLE_ARTWORKS = [
  {
    id: 'ukaid',
    title: 'UKaid Collection',
    client: 'UKaid Partner Projects',
    recommendedGarment: 'cotton-black',
    channels: [
      { id: 'underbase', name: 'White Underbase (1px Choke)', colorHex: '#FFFFFF', enabled: true, meshCount: '120T', inkType: 'Plastisol Discharge' },
      { id: 'blue', name: 'UKaid Union Blue (PMS 280 C)', colorHex: '#00247D', enabled: true, meshCount: '120T', inkType: 'Spot Plastisol' },
      { id: 'red', name: 'UKaid Crest Red (PMS 186 C)', colorHex: '#CF142B', enabled: true, meshCount: '120T', inkType: 'Spot Plastisol' },
      { id: 'white', name: 'UKaid Typography White', colorHex: '#F8FAFC', enabled: true, meshCount: '140T', inkType: 'High-Opaque Plastisol' },
    ],
  },
  {
    id: 'oxfam-ireland',
    title: 'OXFAM + Government of Ireland',
    client: 'OXFAM Uganda',
    recommendedGarment: 'reflector-lime',
    channels: [
      { id: 'underbase', name: 'Barrier Underbase Blockout', colorHex: '#E2E8F0', enabled: true, meshCount: '100T', inkType: 'Polyester Dye-Block' },
      { id: 'oxfam-green', name: 'OXFAM Emerald (PMS 368 C)', colorHex: '#00853F', enabled: true, meshCount: '120T', inkType: 'DTF Heat Transfer' },
      { id: 'ireland-orange', name: 'Ireland Gold (PMS 151 C)', colorHex: '#FF8200', enabled: true, meshCount: '120T', inkType: 'DTF Heat Transfer' },
      { id: 'black', name: 'Institutional Black Typography', colorHex: '#0F172A', enabled: true, meshCount: '140T', inkType: 'High-Density Plastisol' },
      { id: 'silver', name: 'ISO 20471 Reflective Tape Strip', colorHex: '#CBD5E1', enabled: true, meshCount: 'Specialty', inkType: 'Micro-Glass Bead Transfer' },
    ],
  },
  {
    id: 'kigorobya-run',
    title: 'Kigorobya Archdeaconry Run 2023',
    client: 'Kigorobya Athletics Secretariat',
    recommendedGarment: 'dryfit-white',
    channels: [
      { id: 'navy', name: 'Archdeaconry Navy (PMS 289 C)', colorHex: '#0A192F', enabled: true, meshCount: '120T', inkType: 'Water-Based Discharge' },
      { id: 'gold', name: 'Marathon Winner Gold (PMS 123 C)', colorHex: '#F59E0B', enabled: true, meshCount: '140T', inkType: 'Water-Based Elastic' },
      { id: 'cyan', name: 'Sponsor Emblem Cyan', colorHex: '#06B6D4', enabled: true, meshCount: '140T', inkType: 'Breathable Textile Ink' },
    ],
  },
  {
    id: 'tusimba-run',
    title: 'Tusimba Fundraising Run',
    client: 'Tusimba Initiative & Nivana Water',
    recommendedGarment: 'cotton-black',
    channels: [
      { id: 'underbase', name: 'White Base Underbase', colorHex: '#FFFFFF', enabled: true, meshCount: '100T', inkType: 'Soft-Hand Underbase' },
      { id: 'nivana-blue', name: 'Nivana Aqua Blue', colorHex: '#0284C7', enabled: true, meshCount: '120T', inkType: 'Plastisol Spot' },
      { id: 'kasenene-teal', name: 'Wellness Leaf Teal', colorHex: '#10B981', enabled: true, meshCount: '120T', inkType: 'Plastisol Spot' },
      { id: 'white-top', name: 'Sponsor Text Crisp White', colorHex: '#F1F5F9', enabled: true, meshCount: '140T', inkType: 'Flash Cured Top' },
    ],
  },
];

const GARMENTS = [
  { id: 'reflector-lime', name: 'Safety Reflector Vest', color: '#B6EE2C', fabric: 'Fluorescent Micro-Mesh' },
  { id: 'cotton-black', name: 'Heavy Cotton Crew Tee', color: '#111318', fabric: '100% Combed Ringspun' },
  { id: 'dryfit-white', name: 'Technical Marathon Singlet', color: '#F8FAFC', fabric: 'Moisture-Wicking DryFit' },
  { id: 'polo-navy', name: 'Executive Pique Polo', color: '#0F172A', fabric: 'Double Pique Knit' },
];

export const InteractivePrepressStudio: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(SAMPLE_ARTWORKS[0]);
  const [selectedGarment, setSelectedGarment] = useState(GARMENTS[1]);
  const [channels, setChannels] = useState<ColorChannel[]>(SAMPLE_ARTWORKS[0].channels);
  const [meshTension, setMeshTension] = useState<number>(24); // N/cm
  const [halftoneLpi, setHalftoneLpi] = useState<number>(55);
  const [chokePixels, setChokePixels] = useState<number>(1);
  const [showHalftoneSimulation, setShowHalftoneSimulation] = useState<boolean>(false);
  const [jobTicketGenerated, setJobTicketGenerated] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync channels when artwork changes
  const handleSelectArtwork = (art: typeof SAMPLE_ARTWORKS[0]) => {
    setSelectedArtwork(art);
    setChannels(art.channels);
    const matchedGarment = GARMENTS.find((g) => g.id === art.recommendedGarment) || GARMENTS[0];
    setSelectedGarment(matchedGarment);
  };

  const toggleChannel = (channelId: string) => {
    setChannels((prev) =>
      prev.map((c) => (c.id === channelId ? { ...c, enabled: !c.enabled } : c))
    );
  };

  // Canvas drawing simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 560);
    const height = (canvas.height = 420);

    // 1. Draw Garment Background
    ctx.fillStyle = selectedGarment.color;
    ctx.fillRect(0, 0, width, height);

    // Subtle Fabric Texture Lines
    ctx.strokeStyle = selectedGarment.id === 'cotton-black' || selectedGarment.id === 'polo-navy' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 6) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Garment Outline/Collar Indicator
    ctx.strokeStyle = selectedGarment.id === 'cotton-black' ? '#222834' : 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width / 2, -20, 90, 0, Math.PI);
    ctx.stroke();

    // 2. If Reflector Vest, draw reflective bands
    if (selectedGarment.id === 'reflector-lime') {
      ctx.fillStyle = '#E2E8F0';
      // Horizontal bands
      ctx.fillRect(40, 290, width - 80, 32);
      ctx.fillRect(40, 340, width - 80, 32);
      // Vertical harness strips
      ctx.fillRect(120, 60, 28, 230);
      ctx.fillRect(width - 148, 60, 28, 230);
    }

    // 3. Render Enabled Artwork Channels
    const printAreaX = width / 2 - 130;
    const printAreaY = 120;
    const printAreaW = 260;
    const printAreaH = 150;

    // Boundary guide box
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(printAreaX - 10, printAreaY - 10, printAreaW + 20, printAreaH + 20);
    ctx.setLineDash([]);

    // Channel 1: Underbase Mask
    const underbase = channels.find((c) => c.id === 'underbase');
    if (underbase && underbase.enabled) {
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 4;
      const chokeInset = chokePixels;
      ctx.fillRect(
        printAreaX + chokeInset,
        printAreaY + chokeInset,
        printAreaW - chokeInset * 2,
        printAreaH - chokeInset * 2
      );
      ctx.restore();
    }

    // Active Color Channels
    channels.forEach((channel, idx) => {
      if (channel.id === 'underbase' || !channel.enabled) return;

      ctx.save();
      ctx.fillStyle = channel.colorHex;

      if (showHalftoneSimulation) {
        // Draw halftone dot simulation
        const dotRadius = Math.max(1.2, 5 - (halftoneLpi / 65) * 2.5);
        const spacing = 12;
        const offsetY = idx * 26;

        ctx.beginPath();
        for (let dy = printAreaY + offsetY; dy < printAreaY + offsetY + 24; dy += spacing) {
          for (let dx = printAreaX + 10; dx < printAreaX + printAreaW - 10; dx += spacing) {
            ctx.moveTo(dx, dy);
            ctx.arc(dx, dy, dotRadius, 0, Math.PI * 2);
          }
        }
        ctx.fill();
      } else {
        // Crisp print layer
        const bandHeight = Math.floor(printAreaH / Math.max(2, channels.filter((c) => c.id !== 'underbase').length));
        const posY = printAreaY + (idx - 1) * bandHeight;
        ctx.fillRect(printAreaX + 15, posY + 5, printAreaW - 30, bandHeight - 8);

        // Client Artwork Emblem Placeholder Text inside channel
        ctx.fillStyle = channel.colorHex === '#FFFFFF' || channel.colorHex === '#F8FAFC' ? '#0F172A' : '#FFFFFF';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `${selectedArtwork.title.toUpperCase()} • ${channel.name.split(' ')[0]}`,
          width / 2,
          posY + bandHeight / 2 + 4
        );
      }
      ctx.restore();
    });

    // Registration Marks in Corners
    const drawRegMark = (cx: number, cy: number) => {
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.moveTo(cx - 9, cy);
      ctx.lineTo(cx + 9, cy);
      ctx.moveTo(cx, cy - 9);
      ctx.lineTo(cx, cy + 9);
      ctx.stroke();
    };

    drawRegMark(printAreaX - 4, printAreaY - 4);
    drawRegMark(printAreaX + printAreaW + 4, printAreaY - 4);
    drawRegMark(printAreaX - 4, printAreaY + printAreaH + 4);
    drawRegMark(printAreaX + printAreaW + 4, printAreaY + printAreaH + 4);
  }, [selectedArtwork, selectedGarment, channels, meshTension, halftoneLpi, chokePixels, showHalftoneSimulation]);

  const activeChannelsCount = channels.filter((c) => c.enabled).length;

  const whatsappInquiryUrl = `https://wa.me/256755943973?text=${encodeURIComponent(
    `Hello Wilberforce! I am reviewing the Pre-Press Separation for ${selectedArtwork.title}. Garment: ${selectedGarment.name}. Active Print Channels: ${activeChannelsCount}. Mesh Tension: ${meshTension} N/cm. Please send quote for 500 units.`
  )}`;

  return (
    <section id="prepress-studio" className="py-20 border-b border-slate-800/80 bg-[#080a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive JavaScript Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Pre-Press Separation &amp; Garment Studio
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Test spot color channel separations, screen mesh tension, underbase choking, and halftone dot frequency in real-time. Designed for bulk NGO orders and marathon production runs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="prepress-wa-btn"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-all shadow-md shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire with These Specs</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Canvas Stage */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-slate-200 font-semibold">{selectedArtwork.title}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span>FABRIC: <strong className="text-cyan-400">{selectedGarment.fabric}</strong></span>
                  <span>CHANNELS: <strong className="text-emerald-400">{activeChannelsCount} Active</strong></span>
                </div>
              </div>

              {/* Dynamic HTML5 Canvas */}
              <div className="flex justify-center bg-slate-950 rounded-xl p-2 border border-slate-800/50 shadow-inner">
                <canvas
                  ref={canvasRef}
                  className="w-full max-w-full h-auto rounded-lg shadow-lg cursor-crosshair"
                />
              </div>

              {/* Canvas Action Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-slate-200">
                    <input
                      type="checkbox"
                      checked={showHalftoneSimulation}
                      onChange={(e) => setShowHalftoneSimulation(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500/20"
                    />
                    <span>Halftone Dot Sim ({halftoneLpi} LPI)</span>
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setChannels(selectedArtwork.channels);
                      setMeshTension(24);
                      setHalftoneLpi(55);
                      setChokePixels(1);
                    }}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Parameters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Garment Fabric Switcher */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Garment &amp; Fabric Weave:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {GARMENTS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGarment(g)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs ${
                      selectedGarment.id === g.id
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-200 truncate">{g.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{g.fabric}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pre-Press Color Separations & Mesh Controls */}
          <div className="lg:col-span-5 space-y-4">
            {/* Artwork Selector */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase">Client Artwork Production Plate:</span>
              <select
                value={selectedArtwork.id}
                onChange={(e) => {
                  const found = SAMPLE_ARTWORKS.find((a) => a.id === e.target.value);
                  if (found) handleSelectArtwork(found);
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-emerald-500"
              >
                {SAMPLE_ARTWORKS.map((art) => (
                  <option key={art.id} value={art.id}>
                    {art.title} ({art.client})
                  </option>
                ))}
              </select>
            </div>

            {/* Spot Color Channel Isolator */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase">Color Separation Channels:</span>
                <span className="text-[11px] font-mono text-slate-500">Toggle layer visibility</span>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {channels.map((ch) => (
                  <div
                    key={ch.id}
                    onClick={() => toggleChannel(ch.id)}
                    className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      ch.enabled
                        ? 'bg-slate-950 border-slate-700/80'
                        : 'bg-slate-950/40 border-slate-800/40 opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: ch.colorHex }}
                      />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">{ch.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          Mesh: {ch.meshCount} • {ch.inkType}
                        </div>
                      </div>
                    </div>

                    <button
                      className="text-slate-400 hover:text-white"
                      title={ch.enabled ? 'Mute Channel' : 'Enable Channel'}
                    >
                      {ch.enabled ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Calibration Sliders */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 text-xs font-mono">
              <span className="text-xs text-slate-400 uppercase block pb-1 border-b border-slate-800">
                Screen Printing Press Calibration
              </span>

              {/* Mesh Tension */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>SCREEN MESH TENSION:</span>
                  <span className="text-emerald-400 font-bold">{meshTension} N/cm</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="30"
                  value={meshTension}
                  onChange={(e) => setMeshTension(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>16 (Manual)</span>
                  <span>24 (Standard DTF)</span>
                  <span>30 (High Precision)</span>
                </div>
              </div>

              {/* Underbase Choke */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>UNDERBASE CHOKE EROSION:</span>
                  <span className="text-cyan-400 font-bold">{chokePixels} px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  value={chokePixels}
                  onChange={(e) => setChokePixels(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0px (Risk of white halo)</span>
                  <span>1px (Optimal)</span>
                  <span>3px (Aggressive)</span>
                </div>
              </div>

              {/* Halftone Frequency */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>HALFTONE FREQUENCY (LPI):</span>
                  <span className="text-amber-400 font-bold">{halftoneLpi} LPI</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="65"
                  value={halftoneLpi}
                  onChange={(e) => setHalftoneLpi(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Job Ticket Generator Button */}
              <button
                id="generate-job-ticket-btn"
                onClick={() => setJobTicketGenerated(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Generate Production Job Ticket</span>
              </button>

              {jobTicketGenerated && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-[11px] space-y-1.5 text-slate-300 animate-in fade-in">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>JOB TICKET COMPILED</span>
                  </div>
                  <div>Client: <strong>{selectedArtwork.client}</strong></div>
                  <div>Item: <strong>{selectedGarment.name} ({selectedGarment.fabric})</strong></div>
                  <div>Choke: <strong>{chokePixels}px</strong> • Mesh: <strong>{meshTension} N/cm</strong> • LPI: <strong>{halftoneLpi}</strong></div>
                  <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                    Lead Artist: Wilberforce Mubiru • Kleberson Wear Studio Kampala
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
