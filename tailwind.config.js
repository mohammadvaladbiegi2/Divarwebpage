/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      'headerShadow' : '0 1px 2px 0 rgba(0,0,0,.12)' 
    }
  },
  plugins: [],
};
