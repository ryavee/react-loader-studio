import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
  showIconOnly?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  className = '',
  label = 'Copy',
  copiedLabel = 'Copied!',
  showIconOnly = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
        copied
          ? 'bg-teal-50 text-teal-700 border border-teal-300'
          : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs'
      } ${className}`}
      title={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-teal-600 animate-in zoom-in" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-slate-500" />
      )}
      {!showIconOnly && <span>{copied ? copiedLabel : label}</span>}
    </button>
  );
};
