/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'xm': '500px',
        'xp' : '800px',
        'xlg': '1400px',
      },
      inset: {
        'by': '10000px'
      },
      borderRadius:{
        'bg': '0px 0px 20px 20px'
      },
      
    },
  },
  plugins: [],
}

