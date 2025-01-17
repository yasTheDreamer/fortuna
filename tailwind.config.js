/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "200px",
        xs: "400px",
        s: "500px",
        mobile: "634px",
        md: "1247px",
        xl: "1524px",
      },
      colors: {
        grey: "#E0E0E0",
        darkGrey: "#979797",
        darkerGray: "#292929",
        cardPink: "#FD7FE2",
        cardGreen: "#90EDD7",
        cardBlue: "#4594FF",
        textGray: "#7D7D7D",
      },
      backgroundImage: {
        "purple-underline": "url('../images/purple_underline.svg')",
        "green-underline": "url('../images/skills_underline.svg')",
        "green-underline-ipad": "url('../images/green-underline-ipad.svg')",
      },
    },
  },
  plugins: [],
};
