/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlayFair: ['Playfair Display','serif'],
        JosefinSans:['Josefin Sans','sans-serif'],
        DancingScript:['Dancing Script','cursive' ],
      }
    },
  },
  plugins: [],
}