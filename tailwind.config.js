
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
        cursive: ['"Pinyon Script"', 'cursive'],
      },
      colors: {
        brand: {
          gold: '#B08D55',
          dark: '#0F0F0F',      
          charcoal: '#1A1A1A',
          alabaster: '#F5F2EB', 
          gray: '#8C8C8C'
        }
      }
    }
  },
  plugins: [],
}
