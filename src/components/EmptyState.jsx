import { motion } from 'framer-motion';
import React from 'react';
import { FileText } from 'lucide-react';
import { fadeUp } from '../utils/animation';

export default function EmptyState({ label }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass rounded-lg p-6 text-sm leading-6 text-slate-300"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
        <FileText size={18} aria-hidden="true" />
      </div>
      <p>{label} is not available.</p>
    </motion.div>
  );
}
