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
        primary: '#E1A6B4',
        background: '#FFFFFF',
        secondary: '#1F172A',
        accent: '#6B4E58',
        highlight: '#F7E7EC'
      }
    },
  },
  plugins: [],
}
