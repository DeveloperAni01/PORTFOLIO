/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'], // Add Gilroy to the fontFamily
        satisfy: ['Satisfy', 'sans-serif'],
        meddon: ['Meddon', 'sans-serif']
      },
    },
  },
  plugins: [],
}

