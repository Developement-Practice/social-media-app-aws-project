import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import Head from "next/head";
import React, { useEffect } from "react";
// import Header from "../components/Header";
import Amplify from "aws-amplify";
import type { AppProps } from "next/app";
import theme from "../theme";

import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Social Media App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <Header /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
