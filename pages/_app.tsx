
import React, { useEffect, FC } from "react";
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import { EmotionCache } from "@emotion/cache";
import createEmotionCache from '../src/createEmotionCache';
import { CacheProvider } from "@emotion/react";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

const App: FC<AppProps> = ({
  Component, 
  //@ts-ignore updated in version
  emotionCache = clientSideEmotionCache, pageProps,}) => {
    return ( 
      <CacheProvider value = {emotionCache}>
          <ThemeProvider theme = {theme}> 
          </ThemeProvider>
          <Component {...pageProps} />;
      </CacheProvider>
    );
  }; 

  export default App;