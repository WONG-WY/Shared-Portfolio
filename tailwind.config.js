/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50:  '#FFFDF9',
          100: '#FAF7F2',
          200: '#F2EAE0',
          300: '#E5D8CC',
          400: '#D4C4B4',
        },
        brand: {
          warm: '#C4916A',
          cool: '#A87BA0',
        }
      }
    },
  },
  plugins: [],
}
