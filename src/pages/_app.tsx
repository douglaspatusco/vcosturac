import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/store'

import GlobalStyle from '@/styles/GlobalStyles'
import { Content } from './styles'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Cart from '@/components/Cart'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
      <Cart />
    </Provider>
  )
}
