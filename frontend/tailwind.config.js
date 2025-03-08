/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        accent: "#7fbc42", // Primary accent color
        secondary: "#d9d9d9", // Secondary color
        text: "#101820", // Text color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use Inter font
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};
