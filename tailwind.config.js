/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      'var(--bg)',
          card:    'var(--bg-card)',
          surface: 'var(--surface)',
          primary: 'var(--primary)',
          hover:   'var(--primary-hover)',
          heading: 'var(--text-h)',
          body:    'var(--text-b)',
          muted:   'var(--text-m)',
          border:  'var(--border)',
          accent:  'var(--accent)',
          accent2: 'var(--accent2)',
        }
      },
      fontFamily: {
        primary:   ['articulat-cf', 'sans-serif'],
        secondary: ['artifex-cf',   'serif'],
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
      animation:  { marquee: 'marquee 30s linear infinite' },
      keyframes:  { marquee: { '0%': { transform:'translateX(0%)' }, '100%': { transform:'translateX(-100%)' } } },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
