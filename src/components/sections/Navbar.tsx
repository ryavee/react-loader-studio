import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Github, Menu, X, Terminal, ExternalLink, Sparkles, Check } from 'lucide-react';
import { OrbitLoader } from '../loaders/OrbitLoader';

interface NavbarProps {
  onSelectPlaygroundLoader?: (loaderId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyInstall = () => {
    navigator.clipboard?.writeText('npm i react-loader-studio');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Loaders', href: '#loaders' },
    { label: 'Installation', href: '#installation' },
    { label: 'Playground', href: '#playground' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200/90 flex items-center justify-center shadow-2xs group-hover:border-teal-400 group-hover:bg-teal-100/60 transition-all duration-150">
            <OrbitLoader size={24} color="#0F766E" speed={1.2} />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black text-slate-950 tracking-tight group-hover:text-teal-800 transition-colors font-display">
              React Loader Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 rounded-full px-3 py-1 text-sm font-bold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-slate-950 hover:bg-white transition-all duration-150 tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Install Snippet Button */}
          <button
            onClick={copyInstall}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-all cursor-pointer"
            title="Click to copy install command"
          >
            <Terminal className="w-3.5 h-3.5 text-teal-600" />
            <span>npm i react-loader-studio</span>
            {copiedInstall ? (
              <Check className="w-3 h-3 text-teal-600" />
            ) : (
              <span className="text-[10px] text-slate-400 font-sans font-medium uppercase tracking-wider">copy</span>
            )}
          </button>

          {/* GitHub Action */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all"
          >
            <Github className="w-4 h-4 text-slate-800" />
            <span>Star</span>
            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md text-[11px] font-mono">1.2k</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={copyInstall}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-teal-600" />
                <span>npm i react-loader-studio</span>
              </div>
              <span className="text-[11px] font-sans font-medium text-teal-700">
                {copiedInstall ? 'Copied!' : 'Copy'}
              </span>
            </button>
            <a
              href="https://github.com/ryavee/react-loader-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl shadow-xs"
            >
              <Github className="w-4 h-4 text-slate-800" />
              <span>GitHub (1.2k stars)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
