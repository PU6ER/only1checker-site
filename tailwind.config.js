/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "10xl": "1440px",
        1110: "1110px",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        only1: "url(/public/bg.jpg)",
      },
      textColor: {
        only1: "#A0A0A0",
        only1input: "#4E4E4E"
      },
      fontSize: {
        40: "40px",
      },
      colors: {
        only1input: "#4E4E4E",
        only1:"#A0A0A0"
      },
      content:{
        envelopeLight: "url(/public/envelope-light.svg)",
        envelope:"url(/public/envelope.svg)"
      }
    },
  },
  plugins: [],
};
