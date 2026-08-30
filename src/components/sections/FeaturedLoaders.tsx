import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CopyButton } from '../ui/CopyButton';
import { Badge } from '../ui/Badge';
import { LOADERS_REGISTRY } from '../loaders';
import { Code, Play, SlidersHorizontal, Check, Eye } from 'lucide-react';
import { LoaderItem } from '../../types';

interface FeaturedLoadersProps {
  onSelectPlaygroundLoader?: (loaderId: string) => void;
}

export const FeaturedLoaders: React.FC<FeaturedLoadersProps> = ({
  onSelectPlaygroundLoader,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'preview' | 'code'>>({});
  const [cardColors, setCardColors] = useState<Record<string, string>>({});

  const categories = ['All', 'Geometric', 'Wave', 'Organic', 'Minimal'];

  const filteredLoaders =
    selectedCategory === 'All'
      ? LOADERS_REGISTRY
      : LOADERS_REGISTRY.filter((l) => l.category === selectedCategory);

  const toggleCardTab = (id: string, tab: 'preview' | 'code') => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  };

  const setLoaderColor = (id: string, color: string) => {
    setCardColors((prev) => ({ ...prev, [id]: color }));
  };

  const handleOpenInPlayground = (id: string) => {
    if (onSelectPlaygroundLoader) {
      onSelectPlaygroundLoader(id);
    }
    const elem = document.getElementById('playground');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const colorPalette = [
    { label: 'Deep Teal', hex: '#0F766E' },
    { label: 'Turquoise', hex: '#14B8A6' },
    { label: 'Indigo', hex: '#6366F1' },
    { label: 'Amber', hex: '#F59E0B' },
    { label: 'Slate', hex: '#334155' },
  ];

  return (
    <section id="loaders" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="COMPONENT SHOWCASE"
          title="Featured Loading Animations"
          description="Explore our modular loader collection. Fully responsive, customizable with SVG vector quality, and ready for immediate import."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-150 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950 border border-slate-200/90'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLoaders.map((item: LoaderItem) => {
            const LoaderComp = item.component;
            const currentTab = activeTabMap[item.id] || 'preview';
            const currentColor = cardColors[item.id] || item.defaultProps.color;
            const codeSnippet = `<${item.name}\n  size={${item.defaultProps.size}}\n  color="${currentColor}"\n  speed={1}\n/>`;

            return (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-400 transition-all duration-200 overflow-hidden group"
              >
                {/* Card Header & Tab Switcher */}
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    <span className="text-xs font-bold text-slate-950 font-mono tracking-tight">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
                    <button
                      onClick={() => toggleCardTab(item.id, 'preview')}
                      className={`px-2 py-0.5 text-[11px] font-bold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                        currentTab === 'preview'
                          ? 'bg-teal-100/70 text-teal-900'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                      title="Preview"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => toggleCardTab(item.id, 'code')}
                      className={`px-2 py-0.5 text-[11px] font-bold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                        currentTab === 'code'
                          ? 'bg-teal-100/70 text-teal-900'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                      title="View Code"
                    >
                      <Code className="w-3 h-3" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Card Stage / Preview or Code */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  {currentTab === 'preview' ? (
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center relative group-hover:bg-slate-100/60 transition-colors">
                        <LoaderComp
                          size={item.defaultProps.size}
                          color={currentColor}
                          speed={1}
                        />
                      </div>

                      {/* Quick Color Swatches */}
                      <div className="flex items-center gap-1.5 mt-3.5">
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mr-1">Color:</span>
                        {colorPalette.map((p) => (
                          <button
                            key={p.hex}
                            onClick={() => setLoaderColor(item.id, p.hex)}
                            className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                              currentColor === p.hex ? 'scale-125 ring-2 ring-teal-500 ring-offset-1' : 'hover:scale-110'
                            }`}
                            style={{ backgroundColor: p.hex }}
                            title={p.label}
                          />
                        ))}
                      </div>

                      <p className="text-xs text-slate-600 font-medium text-center mt-3 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full justify-between">
                      <div className="p-3 rounded-xl bg-[#0F172A] text-slate-200 text-xs font-mono overflow-x-auto h-36 flex flex-col justify-center">
                        <pre className="m-0 leading-relaxed">
                          <code className="text-teal-300 font-semibold">{codeSnippet}</code>
                        </pre>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <CopyButton textToCopy={codeSnippet} label="Copy JSX" />
                      </div>
                    </div>
                  )}

                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenInPlayground(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 cursor-pointer transition-colors"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Customize</span>
                    </button>
                    <CopyButton
                      textToCopy={`import { ${item.name} } from 'react-loader-studio';`}
                      label="Import"
                      showIconOnly={false}
                    />
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
