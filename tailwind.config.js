/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mad-black": "#02040a",
        "mad-teal": "#35f5ff",
        "mad-muted": "#7b8b9b",
      },
    },
  },
  plugins: [],
};
