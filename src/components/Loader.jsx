import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-5 h-16 w-16 rounded-full border border-cyan-200/30 border-t-cyan-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Adithya V
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
