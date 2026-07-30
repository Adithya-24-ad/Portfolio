/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#050814',
        panel: 'rgba(12, 20, 36, 0.72)',
        cyanGlow: '#22d3ee',
        blueGlow: '#3b82f6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.22)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 10%, rgba(34,211,238,.18), transparent 28%), radial-gradient(circle at 80% 0%, rgba(59,130,246,.20), transparent 28%), linear-gradient(135deg, #050814 0%, #08111f 45%, #061826 100%)',
      },
    },
  },
  plugins: [],
};
