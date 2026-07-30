export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const viewport = { once: true, amount: 0.18 };
