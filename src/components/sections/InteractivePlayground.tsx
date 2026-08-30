import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CodeBlock } from '../ui/CodeBlock';
import { CopyButton } from '../ui/CopyButton';
import { LOADERS_REGISTRY } from '../loaders';
import {
  Sliders,
  RotateCcw,
  Palette,
  Maximize2,
  Gauge,
  Layers,
  Sun,
  Moon,
  Grid,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
} from 'lucide-react';

interface InteractivePlaygroundProps {
  selectedLoaderId?: string;
  onSelectLoaderId?: (id: string) => void;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({
  selectedLoaderId = 'orbit',
  onSelectLoaderId,
}) => {
  const [currentId, setCurrentId] = useState<string>(selectedLoaderId);
  const [size, setSize] = useState<number>(56);
  const [color, setColor] = useState<string>('#0F766E');
  const [customHex, setCustomHex] = useState<string>('#0F766E');
  const [speed, setSpeed] = useState<number>(1);
  const [canvasBg, setCanvasBg] = useState<'white' | 'slate' | 'dark' | 'grid'>('white');

  // Keep state synced if parent passes a new selectedLoaderId
  useEffect(() => {
    if (selectedLoaderId) {
      setCurrentId(selectedLoaderId);
      const matched = LOADERS_REGISTRY.find((l) => l.id === selectedLoaderId);
      if (matched) {
        setSize(matched.defaultProps.size || 56);
      }
    }
  }, [selectedLoaderId]);

  const currentIndex = LOADERS_REGISTRY.findIndex((l) => l.id === currentId);
  const activeLoader = LOADERS_REGISTRY[currentIndex >= 0 ? currentIndex : 0];
  const LoaderComponent = activeLoader.component;

  const handleSelectLoader = (id: string) => {
    setCurrentId(id);
    const matched = LOADERS_REGISTRY.find((l) => l.id === id);
    if (matched) {
      setSize(matched.defaultProps.size || 56);
    }
    if (onSelectLoaderId) onSelectLoaderId(id);
  };

  const handlePrevLoader = () => {
    const prevIndex = (currentIndex - 1 + LOADERS_REGISTRY.length) % LOADERS_REGISTRY.length;
    handleSelectLoader(LOADERS_REGISTRY[prevIndex].id);
  };

  const handleNextLoader = () => {
    const nextIndex = (currentIndex + 1) % LOADERS_REGISTRY.length;
    handleSelectLoader(LOADERS_REGISTRY[nextIndex].id);
  };

  const colorPresets = [
    { name: 'Primary Teal', hex: '#0F766E' },
    { name: 'Light Turquoise', hex: '#14B8A6' },
    { name: 'Accent Mint', hex: '#2DD4BF' },
    { name: 'Indigo Blue', hex: '#4F46E5' },
    { name: 'Sky Blue', hex: '#0EA5E9' },
    { name: 'Amber Orange', hex: '#F59E0B' },
    { name: 'Rose Red', hex: '#F43F5E' },
    { name: 'Dark Slate', hex: '#1E293B' },
  ];

  const handleColorChange = (newHex: string) => {
    setColor(newHex);
    setCustomHex(newHex);
  };

  const handleCustomHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomHex(val);
    if (/^#[0-9A-F]{6}$/i.test(val) || /^#[0-9A-F]{3}$/i.test(val)) {
      setColor(val);
    }
  };

  const resetDefaults = () => {
    setSize(activeLoader.defaultProps.size || 56);
    setColor(activeLoader.defaultProps.color || '#0F766E');
    setCustomHex(activeLoader.defaultProps.color || '#0F766E');
    setSpeed(1);
    setCanvasBg('white');
  };

  const generatedJsx = `<${activeLoader.name}
  size={${size}}
  color="${color}"
  speed={${speed}}
/>`;

  const canvasBgClasses = {
    white: 'bg-white text-slate-900 border-slate-200',
    slate: 'bg-slate-100 text-slate-900 border-slate-300',
    dark: 'bg-[#0B1320] text-white border-slate-800 shadow-inner',
    grid: 'bg-[#F8FAFC] text-slate-900 border-slate-200',
  }[canvasBg];

  // Group loaders by category for the dropdown
  const categories = [
    { key: 'Geometric', label: 'Geometric Loaders' },
    { key: 'Wave', label: 'Wave & Frequency Loaders' },
    { key: 'Organic', label: 'Organic & Bio Loaders' },
    { key: 'Minimal', label: 'Minimal & Particle Loaders' },
  ];

  return (
    <section id="playground" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INTERACTIVE STUDIO"
          title="Loader Configuration Playground"
          description="Customize dimensions, colors, animation speeds, and preview in real-time side by side with instant JSX code generation."
          align="center"
        />

        {/* Main Side-by-Side Playground Card */}
        <div className="mt-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          {/* Studio Header Bar */}
          <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                <Sliders className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">Customizer Studio</span>
                <span className="text-xs text-slate-400 font-normal">|</span>
                <span className="text-xs font-mono font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60">
                  {activeLoader.name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs"
                title="Reset all settings to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>
          </div>

          {/* Side-by-Side Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* LEFT COLUMN: Controls & Dropdown Selector */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-7 bg-white">
              {/* 1. Loader Dropdown Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="loader-select-dropdown" className="block text-xs font-black uppercase tracking-widest text-slate-900">
                    Select Loader
                  </label>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md font-mono">
                    {currentIndex + 1} of {LOADERS_REGISTRY.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Styled Dropdown Select */}
                  <div className="relative flex-1">
                    <select
                      id="loader-select-dropdown"
                      value={currentId}
                      onChange={(e) => handleSelectLoader(e.target.value)}
                      className="w-full appearance-none pl-3.5 pr-10 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-900 text-sm font-bold border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all cursor-pointer font-sans"
                    >
                      {categories.map((cat) => {
                        const items = LOADERS_REGISTRY.filter(
                          (l) => l.category.toLowerCase() === cat.key.toLowerCase()
                        );
                        if (items.length === 0) return null;
                        return (
                          <optgroup key={cat.key} label={`— ${cat.label} —`}>
                            {items.map((loader) => (
                              <option key={loader.id} value={loader.id} className="py-1">
                                {loader.name.replace('Loader', '')} ({loader.category})
                              </option>
                            ))}
                          </optgroup>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Previous / Next Quick Steppers */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevLoader}
                      aria-label="Previous loader"
                      className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-all cursor-pointer shadow-2xs"
                      title="Previous loader"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextLoader}
                      aria-label="Next loader"
                      className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-all cursor-pointer shadow-2xs"
                      title="Next loader"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-500 leading-normal">
                  {activeLoader.description}
                </p>
              </div>

              {/* 2. Size Control & Quick Pills */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-700" />
                    <span>Size ({size}px)</span>
                  </label>
                  <div className="flex gap-1.5">
                    {[32, 48, 64, 96].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                          size === s
                            ? 'bg-teal-800 text-white border-teal-800'
                            : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {s}px
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="range"
                  min="24"
                  max="120"
                  step="2"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-700"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-medium mt-1">
                  <span>24px (compact)</span>
                  <span>64px (standard)</span>
                  <span>120px (hero)</span>
                </div>
              </div>

              {/* 3. Color & Preset Palette */}
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-1.5 mb-2.5">
                  <Palette className="w-3.5 h-3.5 text-teal-700" />
                  <span>Color & Palette</span>
                </label>

                {/* Preset Chips */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.hex}
                      onClick={() => handleColorChange(preset.hex)}
                      className={`flex items-center gap-1.5 p-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        color.toLowerCase() === preset.hex.toLowerCase()
                          ? 'border-teal-600 bg-teal-50 shadow-2xs ring-1 ring-teal-500 text-teal-950'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-md shrink-0 border border-black/10"
                        style={{ backgroundColor: preset.hex }}
                      />
                      <span className="truncate text-[11px]">{preset.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Color Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="w-9 h-9 rounded-xl border border-slate-200 p-0.5 cursor-pointer bg-white"
                  />
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={customHex}
                      onChange={handleCustomHexChange}
                      placeholder="#0F766E"
                      className="w-full px-3 py-1.5 text-xs font-mono font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Animation Speed Multiplier */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-teal-700" />
                    <span>Speed ({speed}x)</span>
                  </label>
                  <div className="flex gap-1.5">
                    {[0.5, 1, 1.5, 2].map((sp) => (
                      <button
                        key={sp}
                        onClick={() => setSpeed(sp)}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                          speed === sp
                            ? 'bg-teal-800 text-white border-teal-800'
                            : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {sp}x
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="range"
                  min="0.25"
                  max="3"
                  step="0.25"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-700"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-medium mt-1">
                  <span>0.25x (gentle)</span>
                  <span>1.0x (standard)</span>
                  <span>3.0x (rapid)</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Stage & Generated Code */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-slate-50/50 space-y-6">
              <div>
                {/* Canvas Backdrop Selector Header */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Live Stage Environment
                  </span>
                  <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
                    <button
                      onClick={() => setCanvasBg('white')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        canvasBg === 'white' ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Light canvas"
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => setCanvasBg('slate')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        canvasBg === 'slate' ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Slate canvas"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Slate</span>
                    </button>
                    <button
                      onClick={() => setCanvasBg('dark')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        canvasBg === 'dark' ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Dark canvas"
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span>Dark</span>
                    </button>
                    <button
                      onClick={() => setCanvasBg('grid')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                        canvasBg === 'grid' ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="Checkered grid"
                    >
                      <Grid className="w-3.5 h-3.5" />
                      <span>Grid</span>
                    </button>
                  </div>
                </div>

                {/* Centered Live Loader Preview Stage */}
                <div
                  className={`relative min-h-[260px] sm:min-h-[300px] rounded-2xl border flex flex-col items-center justify-center p-8 transition-colors duration-300 ${canvasBgClasses}`}
                  style={
                    canvasBg === 'grid'
                      ? {
                          backgroundImage: 'radial-gradient(#CBD5E1 1.2px, transparent 1.2px)',
                          backgroundSize: '16px 16px',
                        }
                      : {}
                  }
                >
                  <div className="transition-all duration-200">
                    <LoaderComponent size={size} color={color} speed={speed} />
                  </div>

                  {/* Stage Info Badge */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs opacity-75">
                    {size}px &bull; {speed}x &bull; {color}
                  </div>
                </div>
              </div>

              {/* Code Snippet Box directly side-by-side */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
                      Generated Code
                    </span>
                  </div>
                  <CopyButton
                    textToCopy={generatedJsx}
                    label="Copy JSX"
                    className="bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700"
                  />
                </div>
                <CodeBlock code={generatedJsx} language="tsx" filename="LoaderSnippet.tsx" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

