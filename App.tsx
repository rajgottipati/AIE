import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ReaderView } from './components/ReaderView';
import { ChatWidget } from './components/ChatWidget';
import { BOOK_CONTENT } from './data/bookContent';
import { MenuIcon } from './components/Icons';

export default function App() {
  // Default to the new Gap Analysis chapter to highlight the changes
  const [currentChapterId, setCurrentChapterId] = useState(BOOK_CONTENT.find(c => c.isNew)?.id || BOOK_CONTENT[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentChapter = BOOK_CONTENT.find(c => c.id === currentChapterId) || BOOK_CONTENT[0];

  return (
    <div className="flex h-screen bg-paper">
      <Sidebar 
        chapters={BOOK_CONTENT}
        currentChapterId={currentChapterId}
        onSelectChapter={setCurrentChapterId}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Menu Trigger */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-white rounded-lg shadow-lg border border-slate-200 text-slate-600"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 relative flex flex-col min-w-0">
        <ReaderView chapter={currentChapter} />
        <ChatWidget currentChapter={currentChapter} />
      </div>
    </div>
  );
}