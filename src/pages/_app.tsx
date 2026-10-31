import ThemeWrapper from "containers/theme-wrapper";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "redux/store";
import { GlobalStyle } from "../styles/globals";
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    if (window) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeWrapper component={<Component {...pageProps} />}>
          <GlobalStyle />
          {/* thông báo  */}
          <ToastContainer />
        </ThemeWrapper>
      </Provider>
    </SessionProvider>
  );
}

export default App;
