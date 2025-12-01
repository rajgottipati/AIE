import React from 'react';
import { Chapter } from '../types';
import { BookOpenIcon, ChevronRightIcon } from './Icons';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  chapters, 
  currentChapterId, 
  onSelectChapter,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed top-0 left-0 bottom-0 z-50 w-72 bg-slate-900 text-slate-300 flex flex-col
          transform transition-transform duration-300 ease-in-out border-r border-slate-800
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}
      >
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <BookOpenIcon className="w-6 h-6 text-brand-500 mr-3" />
          <span className="font-bold text-white tracking-tight">AI Engineering</span>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {chapters.map((chapter) => {
            const isActive = currentChapterId === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => {
                  onSelectChapter(chapter.id);
                  onClose();
                }}
                className={`
                  w-full flex items-center p-3 rounded-lg text-sm text-left transition-all duration-200 group
                  ${isActive 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/20' 
                    : 'hover:bg-slate-800 hover:text-white'
                  }
                  ${chapter.isNew ? 'ring-1 ring-amber-500/50' : ''}
                `}
              >
                <span className={`
                  flex items-center justify-center w-6 h-6 rounded mr-3 text-xs font-bold
                  ${isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300'}
                  ${chapter.isNew && !isActive ? 'text-amber-500' : ''}
                `}>
                  {chapter.number}
                </span>
                <div className="flex-1">
                  <div className="font-medium line-clamp-1">{chapter.title}</div>
                  {chapter.isNew && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mt-1 block">
                      New • 2025 Edition
                    </span>
                  )}
                </div>
                {isActive && <ChevronRightIcon className="w-4 h-4 ml-2 opacity-75" />}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 bg-slate-950">
          <p>Updated for 2025</p>
          <p className="mt-1">By Raj Gottipati</p>
        </div>
      </aside>
    </>
  );
};