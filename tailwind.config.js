/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Inter', 'serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#333333',
        highlight: '#f2f2f2'
      }
    },
  },
  plugins: [],
}
