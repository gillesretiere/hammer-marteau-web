/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // 'class' permet de basculer manuellement
  theme: {
    extend: {
      boxShadow: {
        'custom-card': 'var(--card-shadow)',
      },
      colors: {
        // Ces noms ne changent jamais, seule la valeur CSS change
        brand: {
          bg: 'var(--bg)',
          surface: 'var(--surface)',
          primary: 'var(--primary)',
          hover: 'var(--primary-hover)',
          heading: 'var(--text-h)',
          body: 'var(--text-b)',
          muted: 'var(--text-m)', // Pour les captions
          border: 'var(--border)',
        }
      },
      fontFamily: {
        primary: ["articulat-cf, sans-serif"],
        secondary: ["artifex-cf, serif"],
      },
      animation: { 'marquee': 'marquee 30s linear infinite' },
      keyframes: { marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } } },
    },
  },
  plugins: [],
}