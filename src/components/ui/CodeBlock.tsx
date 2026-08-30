import React from 'react';
import { CopyButton } from './CopyButton';
import { Terminal, FileCode } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
  showLineNumbers = false,
  className = '',
}) => {
  const lines = code.trim().split('\n');

  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-[#0B1320] text-slate-200 overflow-hidden shadow-lg transition-all ${className}`}
    >
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F172A]/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {filename ? (
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <FileCode className="w-3.5 h-3.5 text-teal-400" />
              <span>{filename}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-teal-400" />
              <span className="uppercase text-[10px] tracking-wider text-slate-400 font-semibold">{language}</span>
            </div>
          )}
        </div>
        <CopyButton
          textToCopy={code.trim()}
          className="bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-700 hover:border-slate-600 text-xs"
        />
      </div>

      {/* Code Content Area */}
      <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed selection:bg-teal-600/40">
        <pre className="m-0 font-mono">
          <code>
            {lines.map((line, idx) => (
              <div key={idx} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell select-none pr-4 text-right text-xs text-slate-600 font-mono w-6">
                    {idx + 1}
                  </span>
                )}
                <span className="table-cell whitespace-pre text-slate-200">
                  {/* Highlight common tokens */}
                  {highlightSyntax(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Lightweight client-side syntax styling helper
function highlightSyntax(line: string, lang: string): React.ReactNode {
  if (lang === 'bash' || lang === 'sh') {
    if (line.startsWith('#')) {
      return <span className="text-slate-500 italic">{line}</span>;
    }
    if (line.startsWith('npm') || line.startsWith('pnpm') || line.startsWith('yarn') || line.startsWith('bun')) {
      const parts = line.split(' ');
      const cmd = parts[0];
      const rest = parts.slice(1).join(' ');
      return (
        <>
          <span className="text-teal-400 font-semibold">{cmd} </span>
          <span className="text-emerald-300">{rest}</span>
        </>
      );
    }
  }

  // Handle JS/TS/JSX import lines
  if (line.includes('import ') && line.includes('from ')) {
    const match = line.match(/^(import\s+)(.*?)(\s+from\s+)(['"].*?['"]);?$/);
    if (match) {
      return (
        <>
          <span className="text-teal-400 font-semibold">{match[1]}</span>
          <span className="text-sky-300">{match[2]}</span>
          <span className="text-teal-400 font-semibold">{match[3]}</span>
          <span className="text-amber-300">{match[4]}</span>;
        </>
      );
    }
  }

  // Handle JSX tags
  if (line.trim().startsWith('<') || line.includes('/>')) {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: line
            .replace(/(&lt;|<)([A-Za-z0-9_]+)/g, '<span class="text-teal-400 font-semibold">&lt;$2</span>')
            .replace(/([a-zA-Z0-9_-]+)=/g, '<span class="text-sky-300">$1</span>=')
            .replace(/"([^"]*)"/g, '<span class="text-amber-300">"$1"</span>')
            .replace(/(\/&gt;|\/&gt;|>|\/>)/g, '<span class="text-teal-400 font-semibold">$1</span>'),
        }}
      />
    );
  }

  return line;
}
