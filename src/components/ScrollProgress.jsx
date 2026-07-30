import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-950/20" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
