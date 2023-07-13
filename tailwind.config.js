/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    
    extend: {
      colors:{
        "beige" : "#FAEBD7",
        "abu" : "#A9A9A9",
        "white" : "#F8F8FF",
        "gray" : "#DCDCDC",

      },

      spacing:{
        "96" : "600px",
        "92" : "550px"

      },

      boxShadow:{
        "costum" : "8px 10px 1px 0px #535252",
        "costum2" : "8px 10px 1px 0px #1E293B",
      }

    
      
    },
  },
  plugins: [],
}

