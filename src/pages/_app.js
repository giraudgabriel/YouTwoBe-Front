import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/Global";
import { connect } from "../socket/socket";
import { Provider } from "react-redux";
import { StyledToast } from '../components/StyledToastContainer';

import store from "../store";

import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(connect, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledToast />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
