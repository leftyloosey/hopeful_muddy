/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    // extend: {},
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        cinzel: ['Cinzel', 'sans-serif'],
        grotesk: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        // grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
