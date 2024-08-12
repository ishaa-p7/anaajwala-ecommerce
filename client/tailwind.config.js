/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu VIC WA NT Beginner"', 'sans-serif'],
        lilita: ['"Lilita One"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
      },
    },
  },

  plugins: [
    flowbite.plugin(),
  ],
}

