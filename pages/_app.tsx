import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import { theme } from "./theme";
import { FC } from "react";

const clientSideEmotionCache = createEmotionCache();

const App: FC<AppProps> = ({
  Component, 
  //@ts-ignore updated in version
  emotionCache = clientSideEmotionCache, pageProps,}) => {
    return ( 
      <CacheProvider value = {emotionCache}>
          <ThemeProvider theme = {theme} > </ThemeProvider>
          <Component {...pageProps} />;
      </CacheProvider>
    );
  }; 
