/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      }
    },
      fontWeight: {
        300: "300",
        600: "600",
        800: "800",
      },
      gridTemplateColumns: {
        "auto-fit" : "repeat(auto-fit, minmax(250px, 1fr))"
      }
  },
  plugins: [],
}