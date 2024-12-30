/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'color-blue': '#7bdff2',
        'color-lightBlue': '#b2f7ef',
        'color-white': '#eff7f6',
        'color-lightPink': '#f7d6e0',
        'color-pink': '#f2b5d4',
      }

    },
  },
  plugins: [],
}

