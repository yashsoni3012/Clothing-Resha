/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        flipUp: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(90deg)",
          },
        },
      },
      animation: {
        slideLoopRight: "slideRight 40s linear infinite",
        flipCubeUp: "flipUp 0.6s ease-in-out forwards",
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};
