/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};