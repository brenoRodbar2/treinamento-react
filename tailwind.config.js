/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(99,247,213,1) 0%, rgba(108,223,227,1) 35%, rgba(25,238,227,1) 59%, rgba(126,175,255,1) 100%)",
      },
      boxShadow: {
        centered: "0px 0px 29.2px -10px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
