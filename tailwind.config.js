/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00f6ff",
        dark: "#050505"
      },
      boxShadow: {
        neon: "0 0 20px #00f6ff",
        neonSoft: "0 0 10px #00f6ff88"
      },
      keyframes: {
        pulseVertical: {
          "0%": { transform: "scaleY(1)", opacity: 0.7 },
          "50%": { transform: "scaleY(1.15)", opacity: 1 },
          "100%": { transform: "scaleY(1)", opacity: 0.7 }
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100px 100px" }
        }
      },
      animation: {
        pulseVertical: "pulseVertical 3s ease-in-out infinite",
        gridMove: "gridMove 12s linear infinite"
      }
    }
  },
  plugins: []
};
