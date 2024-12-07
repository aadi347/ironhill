/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'custom-biege': '#d38b58',
          'custom-green': '#8a2be2',
          
        },
        fontFamily: {
          aprila: ['Aprila', 'sans-serif'], 
        },
        boxShadow: {
          'custom-heavy': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
        },
      },
    },
  },
  plugins: [],
}

