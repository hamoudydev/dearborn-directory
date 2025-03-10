import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Sans"],
      },
      colors: {
        primary: colors.emerald,
        secondary: colors.teal,
        gray: colors.slate,
      },
    },
  },
};
