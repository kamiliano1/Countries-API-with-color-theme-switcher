/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "620px",
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      margin: {
        buttonClamp: "clamp(1rem, 3vw, 3rem)",
      },

      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fit-big": "minmax(350px, 2fr) 1fr 1fr",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fit-big": "repeat(4, min-content)",
        "min-content": "min-content",
      },
    },
    fontWeight: {
      300: "300",
      600: "600",
      800: "800",
    },
  },
  plugins: [],
};
