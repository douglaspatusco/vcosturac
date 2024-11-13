import GlobalStyle from '@/styles/GlobalStyles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
