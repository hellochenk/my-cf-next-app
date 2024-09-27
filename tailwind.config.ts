import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        buttons: 'var(--color-buttons)',
        typography: 'var(--color-typography)',
      },
    },
  },
  plugins: [
    // addVariant()
    // plugin(function({ addVariant }) {
    //   addVariant('theme1', '.theme1 &') 
    //   addVariant('theme2', '.theme2 &') 
    //   addVariant('theme3', '.theme3 &') 
    // }),
  ],
};
export default config;
