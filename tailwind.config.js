module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "testimonial-bg": "url('/img/hero-pattern.svg')",
        "testimonial-bgs": "url('/')",
      },
      colors: {
        primary: "#013358",
        secondary: "#639FCB",
        primaryText: "#1D669C",
        orange: "#EC964C",
        glassEffect:
          "linear-gradient(105.47deg, #FFFFFF -13.63%, rgba(255, 255, 255, 0) 108.8%)",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    variants: {
      fill: ["hover", "focus"],
    },
    boxShadow: {
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
