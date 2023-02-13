import Header from "components/header";
import ThemeWrapper from "containers/theme-wrapper";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "redux/store";
import { GlobalStyle } from "../styles/globals";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    if (window) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeWrapper component={<Component {...pageProps} />}>
        <GlobalStyle />
        {/* <Header/> */}
        <ToastContainer />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
