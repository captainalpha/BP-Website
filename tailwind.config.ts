
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1b1d23",
        foreground: "#e6e6eb",
        primary: "#6a5acd", 
        secondary: "#00c9ff", 
        accent: "#9b59b6",
        btn: {
          bg: "#292b33",
          hover: "#3a3d47",
          text: "#ffffff",
        },
        card: "#24262e",
        border: "#383b45",
        link: {
          base: "#00c9ff",
          hover: "#6a5acd",
        },
        scrollbar: {
          thumb: "#6a5acd",
          track: "#1b1d23",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-10px) translateX(10px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        floatX: "floatX 3s ease-in-out infinite",
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        interLight: 'var(--font-inter-light)',
        geist: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
        manrope: 'var(--font-manrope)',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
