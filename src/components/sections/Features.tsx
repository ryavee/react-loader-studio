import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Feather, Sliders, ShieldCheck, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Feather,
      title: 'Lightweight',
      description: 'Optimized components with minimal bundle size. Zero external runtime dependencies for maximum loading performance.',
      badge: '< 2KB Gzip',
    },
    {
      icon: Sliders,
      title: 'Customizable',
      description: 'Control size, color, animation speed, and stroke width with simple, strongly typed React props.',
      badge: '100% Typed',
    },
    {
      icon: ShieldCheck,
      title: 'Production Ready',
      description: 'Designed for dashboards, SaaS platforms and modern web apps with accessibility labels and SSR support.',
      badge: 'React 18 & 19',
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Install from npm and start using loaders in seconds. Works out of the box with Next.js, Vite, Remix, and CRA.',
      badge: 'Plug & Play',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50/60 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHY CHOOSE REACT LOADER STUDIO"
          title="Built for Developers, Designed for Modern Interfaces"
          description="Every loader is created with simplicity, performance and consistency in mind so you can focus on building your application."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0F766E] group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-950 mb-2 group-hover:text-teal-900 transition-colors font-display tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
