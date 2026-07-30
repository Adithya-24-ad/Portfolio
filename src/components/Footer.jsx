import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../utils/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.</p>
        <button
          className="focus-ring inline-flex w-max items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-slate-200 hover:bg-white/10"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={16} />
          Top
        </button>
      </div>
    </footer>
  );
}
