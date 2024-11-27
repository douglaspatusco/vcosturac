import { AppProps } from 'next/app';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import GlobalStyle from '@/styles/GlobalStyles';
import { Content } from './styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  )
}

export default MyApp;
