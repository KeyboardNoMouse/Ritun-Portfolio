/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0a0a0e',
          soft: '#111116',
          raised: '#17171d',
          line: '#232329',
        },
        blade: '#f4f4f2',
        steel: '#9a9aa3',
        sakura: {
          DEFAULT: '#ffb7c5',
          deep: '#ff7a93',
          soft: '#ffe1e7',
        },
      },
      fontFamily: {
        display: ['"Zen Kaku Gothic New"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 183, 197, 0.35)',
        'glow-sm': '0 0 16px rgba(255, 183, 197, 0.45)',
      },
      backgroundImage: {
        'blade-gradient': 'linear-gradient(90deg, transparent, #ffb7c5, transparent)',
      },
    },
  },
  plugins: [],
}
