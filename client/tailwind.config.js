/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-550": '550px', // Custom media query
        "custom-1360":"1360px"
      },
    },
  },
  plugins: [],
};
