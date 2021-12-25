import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import wrapper from "../redux";
import CustomHead from "../components/CustomHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomHead />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
