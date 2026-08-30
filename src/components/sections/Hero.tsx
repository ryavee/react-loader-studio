import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Github, Sparkles, Play, Sliders, Check, Copy } from 'lucide-react';
import { OrbitLoader } from '../loaders/OrbitLoader';
import { PulseLoader } from '../loaders/PulseLoader';
import { ECGLoader } from '../loaders/ECGLoader';
import { HeartbeatLoader } from '../loaders/HeartbeatLoader';
import { LOADERS_REGISTRY } from '../loaders';

interface HeroProps {
  onSelectPlaygroundLoader?: (loaderId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPlaygroundLoader }) => {
  const [activePreviewId, setActivePreviewId] = useState('orbit');
  const [previewColor, setPreviewColor] = useState('#0F766E');
  const [previewSpeed, setPreviewSpeed] = useState(1);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeLoaderItem = LOADERS_REGISTRY.find((l) => l.id === activePreviewId) || LOADERS_REGISTRY[0];
  const ActiveComponent = activeLoaderItem.component;

  const currentCodeSnippet = `<${activeLoaderItem.name} size={64} color="${previewColor}" speed={${previewSpeed}} />`;

  const copyCode = () => {
    navigator.clipboard?.writeText(currentCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleTestInPlayground = (id: string) => {
    if (onSelectPlaygroundLoader) {
      onSelectPlaygroundLoader(id);
    }
    const elem = document.getElementById('playground');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Teal Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-100/40 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-44 right-10 w-[350px] h-[350px] bg-cyan-100/30 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[1.05] text-balance">
              Craft Stunning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#14B8A6]">
                Loading Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              A lightweight, highly customizable React loader library crafted for modern web applications, SaaS dashboards, and fluid developer workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a href="#loaders">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Browse Loaders
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" icon={<Github className="w-4 h-4" />}>
                  GitHub Repository
                </Button>
              </a>
            </div>

            {/* Quick Metrics / Value Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/90 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-black text-slate-950 font-display">&lt; 2 KB</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Gzipped Bundle</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 font-display">Zero Deps</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Pure SVG & CSS</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 font-display">TypeScript</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">100% Typed</div>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Product Loader Showcase Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300">
              {/* Showcase Window Header */}
              <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-medium ml-2">
                    components/loaders/{activeLoaderItem.name}.tsx
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live 60 FPS
                  </span>
                </div>
              </div>

              {/* Main Featured Loader Display Stage */}
              <div className="p-8 sm:p-10 flex flex-col items-center justify-center bg-radial from-slate-50 to-white min-h-[220px] relative">
                {/* Background grid pattern */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative z-10 p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-md backdrop-blur-xs transition-transform duration-300 hover:scale-105">
                  <ActiveComponent size={64} color={previewColor} speed={previewSpeed} />
                </div>

                <div className="mt-4 text-center z-10">
                  <h3 className="text-base font-bold text-slate-900">{activeLoaderItem.name}</h3>
                  <p className="text-xs text-slate-500 max-w-xs">{activeLoaderItem.description}</p>
                </div>
              </div>

              {/* Secondary Thumbnails Selector Row */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-200/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span>Quick Select Preview</span>
                  <button
                    onClick={() => handleTestInPlayground(activePreviewId)}
                    className="text-teal-700 hover:text-teal-900 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Open in Playground</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {LOADERS_REGISTRY.slice(0, 6).map((item) => {
                    const Comp = item.component;
                    const isSelected = activePreviewId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActivePreviewId(item.id)}
                        className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-teal-600 shadow-xs ring-2 ring-teal-500/20'
                            : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="h-8 flex items-center justify-center">
                          <Comp size={22} color={isSelected ? '#0F766E' : '#64748B'} speed={1} />
                        </div>
                        <span className={`text-[10px] font-bold truncate max-w-full ${isSelected ? 'text-teal-900' : 'text-slate-600'}`}>
                          {item.name.replace('Loader', '')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Code Ribbon */}
              <div className="px-4 py-2.5 bg-slate-900 text-slate-300 text-xs font-mono flex items-center justify-between border-t border-slate-800">
                <span className="truncate pr-2">{currentCodeSnippet}</span>
                <button
                  onClick={copyCode}
                  className="shrink-0 flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 font-sans font-medium cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy JSX'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
