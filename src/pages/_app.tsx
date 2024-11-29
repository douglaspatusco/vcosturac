import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/store'

import GlobalStyle from '@/styles/GlobalStyles'
import { Content } from './styles'

import Footer from '@/components/Footer'
import Header from '@/components/Header'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Provider>
  )
}
