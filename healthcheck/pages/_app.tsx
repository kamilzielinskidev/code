import "../styles/vars.css";
import "../styles/global.css";

import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import { useReadLocalStorage } from "usehooks-ts";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { O } from "@mobily/ts-belt";
import { Container, Snackbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import createEmotionCache from "../lib/material-ui/createEmotionCache";
import theme from "../lib/material-ui/theme";
import { AppAlert } from "../modules/alert/components/AppAlert";
import { User } from "../modules/auth/domain/user";
import { useAuthState } from "../modules/auth/lib/useAuthState";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const localStorageUser = useReadLocalStorage<User>("user");
  const { setUser } = useAuthState();

  React.useEffect(() => setUser(O.fromNullable(localStorageUser)), []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Component {...pageProps} />
        </Container>
        <AppAlert />
      </ThemeProvider>
    </CacheProvider>
  );
}
