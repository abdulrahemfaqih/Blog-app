/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/views/*.php",
      "./app/views/**/*.php",
      "./app/views/**/**/*.php",
      "./app/views/**/**/**/*.php",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      container: {
         center: true,
         padding: "20px",
      },
      extend: {
         fontFamily: {
            poppins: "Poppins",
            jakarta: "Plus Jakarta Sans",
         },
         screens: {
            "2xl": "1360px",
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
