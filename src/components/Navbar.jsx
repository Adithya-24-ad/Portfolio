import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '../utils/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-40 px-4"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3">
        <button
          className="focus-ring text-left text-sm font-bold text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {profile.name}
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="focus-ring rounded-md border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 grid max-w-7xl gap-1 rounded-lg p-2 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              className="focus-ring rounded-md px-3 py-3 text-left text-sm font-medium text-slate-200"
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </motion.header>
  );
}
