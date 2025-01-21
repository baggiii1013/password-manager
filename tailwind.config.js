/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a365d',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
          900: '#1C1C1C',
        },
        'custom-sub-text-color': '#0cffff99',
        'custom-white': '#598d8c91',
        'custom-blue': {
          light: '#60A5FA',
          DEFAULT: '#98d1d499',
          dark: '#2b3f3f5e',
        },
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'shine': 'shine 5s linear infinite',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'shine': {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
    },
  },
  plugins: [],
}