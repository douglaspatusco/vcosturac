import GlobalStyle from '@/styles/GlobalStyles';
import { AppProps } from 'next/app';
import { Content } from './styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Component {...pageProps} />
      </Content>
    </>
  )
}

export default MyApp;
