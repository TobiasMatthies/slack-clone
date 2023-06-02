/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue1: "#5764F2",
        green_online: "#21A559",
        green1: "248046",
        pink_error: "#ED1E79",
        dark1: "#303338",
        dark2: "#2A2D31",
        dark3: "#1E1F22",
        bg_gray: "#3F4248",
        gray_icon: "80848E",
        gray_text: "#B5BAC0",
        gray_button: "4D5057",
        light_text: "#F2F3F5",
      },

      boxShadow: {
        card: "0px 2px 6px 0px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};

