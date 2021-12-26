import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      family: string;
      size: {
        large: string;
        medium: string;
        regular: string;
        small: string;
        micro: string;
      };
      weight: {
        bold: string;
        semiBold: string;
        regular: string;
      };
    };
    colors: {
      white: string;
      lightWhite: string;
      darkWhite: string;
      pink: string;
      darkPink: string;
      darkGrey: string;
      grey: string;
      lightGery: string;
      // blue: "#73aace",
      yellow: string;
      orange: string;
      black: string;
      apricot: string;
      darkCyan: string;
      lightCyan: string;
      darkBlue: string;
      blue: string;
    };
    border: {
      bold: string;
      regular: string;
    };
    borderRadius: {
      bold: string;
      regular: string;
    };
    rotateImage: {
      size: string;
    };
    transition: {
      delay: string;
    };
    paddingSection: {
      pd: string;
    };
  }
}
