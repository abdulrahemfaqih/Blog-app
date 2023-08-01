/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/views/*.html",
      "./app/views/**/*.html",
      "./app/views/**/**/*.html",
      "./app/views/**/**/**/*.html",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      container: {
         center: true,
         padding: "28px",
      },
      extend: {
         fontFamily: {
            poppins: "Poppins",
            jakarta: "Plus Jakarta Sans",
         },
         screens: {
            "2xl": "1260px",
         },
         colors: {
            headline: "#272343",
            background: "#FFFFFE",
            button: "#FFD803",
            paragraf: "#2D334A",
            buttonText: "#272343",
            stroke: "#272343",
            secondary: "#E3F6F5",
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
