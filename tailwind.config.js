
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        cursive: ['"Pinyon Script"', 'cursive'],
      },
      colors: {
        brand: {
          gold: '#C6A87C',      // AA Compliant on dark backgrounds
          goldDark: '#997B4D',  // AA Compliant on light backgrounds
          dark: '#0A0A0A',      // Deepest Black
          charcoal: '#1C1C1C',  // Off-black for cards/sections
          alabaster: '#F2F0E9', // Warm white base
          gray: '#525252'       // Accessible gray text
        }
      }
    }
  },
  plugins: [],
}
