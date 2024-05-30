import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          _000000: "#000000",
          _171717: "#171717",
          _333236: "#333236",
          _4b4b4b: "#4b4b4b",
        },
        gray: {
          _787486: "#787486",
          _9fa6b2: "#9fa6b2",
          _d9d9d9: "#d9d9d9",
          _eeeeee: "#eeeeee",
          _fafafa: "#fafafa",
        },
        violet: {
          _5534da: "#5534da",
          _8: "#f1effd",
        },
        white: "#ffffff",
        red: "#d6173a",
        green: "#7ac555",
        purple: "#760dde",
        orange: "#ffa500",
        blue: "#76a6ea",
        pink: "#e876ea",
      },
      colors: {
        black: {
          _000000: "#000000",
          _171717: "#171717",
          _333236: "#333236",
          _4b4b4b: "#4b4b4b",
        },
        gray: {
          _787486: "#787486",
          _9fa6b2: "#9fa6b2",
          _d9d9d9: "#d9d9d9",
          _eeeeee: "#eeeeee",
          _fafafa: "#fafafa",
        },
        violet: {
          _5534da: "#5534da",
          _8: "#f1effd",
        },
        white: "#ffffff",
        red: "#d6173a",
        green: "#7ac555",
        purple: "#760dde",
        orange: "#ffa500",
        blue: "#76a6ea",
        pink: "#e876ea",
      },
    },
  },
  plugins: [],
};
export default config;
