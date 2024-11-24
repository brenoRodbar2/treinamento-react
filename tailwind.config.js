/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(99,247,213,1) 0%, rgba(108,223,227,1) 35%, rgba(25,238,227,1) 59%, rgba(126,175,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
