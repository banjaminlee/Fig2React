/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  
    extend: {
      colors : {
        "color-grey-100": "#F2EBEF",
        "white": "#FFFF",
        "color-grey-500": "#998E94",
        "color-grey-600": "#80737A",
        "color-grey-800" : "#262123",
        "color-grey-900" : "#1A1618",
        "color-bg-black" : "#0D0B0C",
        "color-glassy" : "rgba(109, 109, 112, 0.8)",
        "btn-purple": "#8932F6",
        "deep-black": "#000000",
        "tag-bg-color"  : "#EEEEFC",
        "tag-text-color" : "#5559DF"
      },
      backgroundImage : {
        'hero-mobile' : "url('./src/assets/hero-mobile.png')",
        "hero-desk" : "url('./src/assets/hero-desk.png')"
      }
    },
  },
  plugins: [],
}

