/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary-300':'#FF4820'
      },
      fontFamily:{
        'ManRope':['Manrope','sans-serif']
      },
      boxShadow:{
        'white':'0px 0px 20px 0px #FFF'
      },
      backgroundImage:{
        'Aboutus-page':'url("/assets/Images/Banners/AboutBanner.webp")',
      },
      screens:{
        xs:'479px',
        sm:'768px',
        md:'1024px',
        lg:'1600px'
  }
    },
  },
  plugins: [],
} 