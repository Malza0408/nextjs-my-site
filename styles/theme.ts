import styled, { DefaultTheme } from "styled-components";

const fonts = {
  family: `'Roboto', 'sans-serif'`,
  size: {
    large: "4.8rem",
    medium: "2.8rem",
    regular: "1.8rem",
    small: "1.6rem",
    micro: "1.4rem",
  },
  weight: {
    bold: "700",
    semiBold: "600",
    regular: "500",
  },
};

const colors = {
  white: "#ffffff",
  lightWhite: "#eeeeee",
  darkWhite: "#eeeeee",
  pink: "#fe918d",
  darkPink: "#ff6863",
  darkGrey: "#474646",
  grey: "#575757",
  lightGery: "#7c7971",
  // blue: "#73aace",
  yellow: "#fff7d1",
  orange: "#feb546",
  black: "#000000",
  apricot: "#faa370",
  darkCyan: "#81b9bf",
  lightCyan: "#4bacb8",
  darkBlue: "#5daddb",
  blue: "#9ccbd6",
};

const border = {
  bold: "0.4rem",
  regular: "0.2rem",
};

const borderRadius = {
  bold: "0.4rem",
  regular: "0.2rem",
};

const rotateImage = {
  size: "30rem",
};

const transition = {
  delay: "0.4s",
};

const paddingSection = {
  pd: "4rem",
};

const theme: DefaultTheme = {
  fonts,
  colors,
  border,
  borderRadius,
  rotateImage,
  transition,
  paddingSection,
};

export default theme;
