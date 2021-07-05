import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/Global";
import { connect } from "../socket/socket";
import { Provider } from "react-redux";

import store from "../store";

function MyApp({ Component, pageProps }) {
  useEffect(connect, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
