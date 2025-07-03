/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#090F13",
        primary: "#75CFFF",
        secondary: "#1A1D21",
        textcolor: "#FFFAF7"
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(ellipse 80% 100% at 110% -50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "9xl": "10rem",
        "10xl": "12rem",
        "11xl": "14rem",
        "12xl": "16rem",
        "name": "12rem",
      },
    },
  },
  plugins: [],
}

