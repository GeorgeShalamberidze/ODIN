/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "animateModal 0.2s forwards",
      },
      keyframes: {
        animateModal: {
          "0%": {
            right: "-100%",
          },
          "100%": {
            right: 0,
          },
        },
      },
      backgroundImage: {
        linearPrimary: "linear-gradient(88deg, #370AD4 5.66%, #6E41ED 95.15%)",
      },
    },
    screens: {
      xs: "350px",
      "2xs": "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
