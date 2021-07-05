import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/Global";
import { connect } from "../socket/socket";

function MyApp({ Component, pageProps }) {
  useEffect(connect, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
