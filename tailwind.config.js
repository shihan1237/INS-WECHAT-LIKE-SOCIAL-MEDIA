/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}",'./public/**/*.html','./styles/**/*.css', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        'commentBlue': '#8c99c1'
      }
    },
  },
  plugins: [],
}
