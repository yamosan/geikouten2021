const defaultTheme = require("tailwindcss/defaultTheme");

const SIDE_HEADER_WIDTH = "176px";
const TOP_HEADER_HEIGHT = "64px";
const SIDE_HEADER_UTILS = { shead: SIDE_HEADER_WIDTH };
const TOP_HEADER_UTILS = { thead: TOP_HEADER_HEIGHT };

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      green: {
        10: "#D3D977",
        20: "#BDCF72",
        30: "#A7C46C",
        40: "#91BA67",
        50: "#7CB061",
        60: "#66A65C",
        70: "#509B56",
        80: "#3A9151",
      },
      sky: "#DAF6FF",
      brown: "#353333",
      lightBrown: "#504746",
      gray: "#BFBFBF",
      lightGray: "#F2F2F2",
      white: "#FFFFFF",
      current: "currentColor",
      transparent: "transparent",

      menuBg: "rgba(80, 71, 70, 0.9)",
      // aliases
      bg: "#F2F2F2", // lightGray
      text: "#504746", // lightBrown
    },
    fontFamily: {
      sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
      genuine: ["Genuine", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      medium: "500",
      bold: "700",
      black: "900",
    },
    extend: {
      fontSize: {
        xxs: ".625rem", // 10px
      },
      dropShadow: {
        solid: "2px 2px 0px currentColor",
      },
      height: TOP_HEADER_UTILS,
      width: SIDE_HEADER_UTILS,
      margin: { ...TOP_HEADER_UTILS, ...SIDE_HEADER_UTILS },
      padding: { ...TOP_HEADER_UTILS, ...SIDE_HEADER_UTILS },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
