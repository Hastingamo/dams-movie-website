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
      },
      inset: {
        'by': '10000px'
      }
    },
  },
  plugins: [],
}

