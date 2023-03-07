/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "10xl": "1440px",
        "1110": "1110px"
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage:{
        "only1":"url(/public/bg.jpg)"
      }
    },
  },
  plugins: [],
}
