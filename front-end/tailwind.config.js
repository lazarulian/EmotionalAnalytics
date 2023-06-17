const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("daisyui")],
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    extend: {
      rotate: {
        360: "360deg",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInAndBounce: "fadeIn 3s ease-out",
      },
      willChange: {
        projectCard: "border-color, opacity, transform",
      },
    },
  },
  variants: {
    extend: {},
  },
};
