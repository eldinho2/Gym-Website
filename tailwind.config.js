const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '800px'},
      'lg': {'max': '1170px'},
      'xl': {'max': '1400px'},
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
    },
  },
  plugins: [],
}