import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 38 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(canHover);

    const move = (event) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    if (canHover) window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] h-6 w-6 rounded-full border border-cyan-200/70 bg-cyan-200/10 mix-blend-screen"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}
