import React from 'react';
import { OrbitLoader } from '../loaders/OrbitLoader';
import { Github, Package, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-200/90 flex items-center justify-center">
                <OrbitLoader size={16} color="#0F766E" speed={1.2} />
              </div>
              <span className="text-base font-black text-slate-950 tracking-tight font-display">
                React Loader Studio
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-sm mt-1">
              Lightweight, customizable React loaders built for modern developer interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
            <a
              href="https://github.com/ryavee/react-loader-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.npmjs.com/package/react-loader-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-800 transition-colors"
            >
              <Package className="w-4 h-4" />
              <span>NPM</span>
            </a>
            <a
              href="#installation"
              className="flex items-center gap-1.5 hover:text-teal-800 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Docs</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            &copy; {currentYear} React Loader Studio. Released under MIT License.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
