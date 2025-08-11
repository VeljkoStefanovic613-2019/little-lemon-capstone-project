/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Added JSX/TSX for React support
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4CE14",
        secondary: "#495E57"
      }
    },
  },
  plugins: [],
}