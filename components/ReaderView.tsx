import React from 'react';
import { Chapter } from '../types';

interface ReaderViewProps {
  chapter: Chapter;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ chapter }) => {
  return (
    <main className="flex-1 h-screen overflow-y-auto bg-paper selection:bg-brand-200">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        {/* Chapter Header */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-2 text-brand-600 font-bold tracking-wider text-sm uppercase mb-3">
            <span>Chapter {chapter.number}</span>
            {chapter.isNew && (
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] border border-amber-200">
                New Update
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">
            {chapter.title}
          </h1>
          <p className="text-xl text-slate-500 font-serif leading-relaxed italic">
            {chapter.summary}
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-12">
          {chapter.sections.map((section, idx) => (
            <section key={idx} className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-sans tracking-tight">
                {section.title}
              </h2>
              <div className="text-slate-700 font-serif leading-8 whitespace-pre-wrap">
                {/* Simple render of markdown-ish text */}
                {section.content.split('\n').map((line, i) => {
                  if (line.trim().startsWith('- ')) {
                    return (
                      <li key={i} className="ml-4 list-disc pl-2 mb-2">
                        {renderBold(line.substring(2))}
                      </li>
                    );
                  }
                  if (line.trim().length === 0) {
                    return <div key={i} className="h-4" />;
                  }
                  return <p key={i} className="mb-4">{renderBold(line)}</p>;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer for Reader */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm">
          AI Engineering • Raj Gottipati • 2025 Expanded Edition
        </div>
      </div>
    </main>
  );
};

// Simple helper to bold text wrapped in **
const renderBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};