/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#020523',
        secondary: '#8B8C9C',
        accent: '#E6E6E9',
        complimentary: '#353852',
        gradient: 'from-primary to-accent',
      },
      
      fontFamily: {
        chakra: ['Chakra Petch', 'sans'],
      },

      fontSize: {
        'base': '18px',   // 18px
        'caption': '0.667rem',
        'button': '0.778rem',
        'h6': '1.278rem',
        'h5': '1.556rem',
        'h4': '1.944rem',
        'h3': '2.444rem',
        'h2': '3.056rem',
        'h1': '3.833rem',
      },
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1440px',
    },
  },
  plugins: [],
}

