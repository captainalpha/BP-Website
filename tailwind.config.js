module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        modalOpen: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        modalClose: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          
        },
        fragmentIn: {
          '0%': { opacity: 0, transform: 'translate(-50px, -50px)' },
          '100%': { opacity: 1, transform: 'translate(0, 0)' },
        },
        fragmentOut: {
          '0%': { opacity: 1, transform: 'translate(0, 0)' },
          '100%': { opacity: 0, transform: 'translate(50px, 50px)' },
        },
        
      },
      animation: {
        modalOpen: 'modalOpen 0.5s ease-out forwards',
        modalClose: 'modalClose 0.5s ease-in forwards',
        fragmentIn: 'fragmentIn 0.5s ease-out forwards',
        fragmentOut: 'fragmentOut 0.5s ease-in forwards',
      },
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
