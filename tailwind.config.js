/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#e9ecef",
        primary: "rgb(var(--color-primary))",
        "main-1": "#4c6ef5",
        "main-2": "#748ffc",
        "main-3": "#91a7ff",
        "main-4": "#bac8ff",
        "main-5": "#dbe4ff",
        "grey-1": "#495057",
        "grey-2": "#adb5bd",
        "grey-3": "#b9b9b9",
        accent: "#dbbb3b",
      },
      fontFamily: {
        aeonik: ["aeonik", "sans-serif"],
        blogh: ["blogh", "sans-serif"],
        hubot: ["hubot", "sans-serif"],
        mona: ["mona", "sans-serif"],
      },
      keyframes: {
        "rotate-clockwise": {
          "0%": {
            transform: " rotate(-360deg)",
          },
        },
        "rotate-anticlockwise": {
          "0%": {
            transform: "rotate(360deg)",
          },
        },
        "bounce-right": {
          "0%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
        "rotate-clockwise": "rotate-clockwise 1s infinite linear",
        "rotate-clockwise-20": "rotate-clockwise 20s infinite linear",
        "rotate-clockwise-40": "rotate-clockwise 40s infinite linear",
        "rotate-clockwise-60": "rotate-clockwise 60s infinite linear",
        "rotate-clockwise-80": "rotate-clockwise 80s infinite linear",
        "rotate-anticlockwise": "rotate-anticlockwise 40s infinite linear",
        "rotate-anticlockwise-20": "rotate-anticlockwise 20s infinite linear",
        "rotate-anticlockwise-40": "rotate-anticlockwise 40s infinite linear",
        "rotate-anticlockwise-60": "rotate-anticlockwise 60s infinite linear",
        "rotate-anticlockwise-80": "rotate-anticlockwise 80s infinite linear",
      },
    },
  },
  plugins: [],
};
