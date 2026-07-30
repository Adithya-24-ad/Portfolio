import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../utils/animation';

export default function Section({ id, eyebrow, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{eyebrow}</h2>
      </motion.div>
      {children}
    </motion.section>
  );
}
