/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        'mobile': '250px',  // Mobile phones and up
      },
    },
  },
  plugins: [],
}
