import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CodeBlock } from '../ui/CodeBlock';
import { CopyButton } from '../ui/CopyButton';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Download, Package, Sparkles, Terminal } from 'lucide-react';

export const Installation: React.FC = () => {
  const [pkgManager, setPkgManager] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');

  const installCommands = {
    npm: 'npm install react-loader-studio',
    pnpm: 'pnpm add react-loader-studio',
    yarn: 'yarn add react-loader-studio',
    bun: 'bun add react-loader-studio',
  };

  const importExample = `// Import any of the 21 loader components directly
import { 
  OrbitLoader, 
  DNAHelixLoader, 
  QuantumSpinLoader, 
  VortexLoader, 
  GlitchCubeLoader 
} from 'react-loader-studio';`;

  const usageExample = `import React, { useState, useEffect } from 'react';
import { OrbitLoader } from 'react-loader-studio';

export default function UserProfile() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <OrbitLoader size={54} color="#0F766E" speed={1.2} />
      </div>
    );
  }

  return <div>Profile Data Loaded</div>;
}`;

  return (
    <section id="installation" className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GETTING STARTED"
          title="Quick & Effortless Installation"
          description="Integrate React Loader Studio into your application in under 60 seconds with full TypeScript support."
          align="center"
        />

        <div className="space-y-8">
          {/* Step 1: Install Package */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-100/80 border border-teal-300 text-teal-900 font-black flex items-center justify-center text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-950 font-display tracking-tight">Install via Package Manager</h3>
                  <p className="text-xs text-slate-500 font-medium">Choose your preferred package manager to add the library</p>
                </div>
              </div>

              {/* Package Manager Switcher Tabs */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/90 self-start sm:self-auto">
                {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((mgr) => (
                  <button
                    key={mgr}
                    onClick={() => setPkgManager(mgr)}
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      pkgManager === mgr
                        ? 'bg-white text-teal-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {mgr}
                  </button>
                ))}
              </div>
            </div>

            <CodeBlock
              code={installCommands[pkgManager]}
              language="bash"
              filename="terminal"
            />
          </div>

          {/* Step 2: Import & Use */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-100/80 border border-teal-300 text-teal-900 font-black flex items-center justify-center text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950 font-display tracking-tight">Import & Render in Your Components</h3>
                <p className="text-xs text-slate-500 font-medium">Clean ES module imports with zero boilerplate</p>
              </div>
            </div>

            <div className="space-y-4">
              <CodeBlock
                code={importExample}
                language="typescript"
                filename="App.tsx"
              />

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Complete Component Example:
                </span>
                <CodeBlock
                  code={usageExample}
                  language="tsx"
                  filename="UserProfile.tsx"
                  showLineNumbers={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
