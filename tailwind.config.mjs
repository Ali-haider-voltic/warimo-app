/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        main: ["Roboto", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'focus-red': '#FC5A3F',
        'primary':'#FC5A3F',
        'secondary':'#131313',
        'grey':'#A5A5A7',
        'lightGrey':'#6A6A6C'
      },
      fontSize: {
        'base-font':'12px',
        'large-font':'14px',
      },
    },
  },
  plugins: [],
};
