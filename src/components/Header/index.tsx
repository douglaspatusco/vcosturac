'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/reducers/cartSlice'
import { RootState } from '@/store'
import { calculateTotalQuantity } from '@/utils/cartUtils'

import {
  Carrinho,
  CartLength,
  Content,
  HeaderContainer,
  LogoLink,
  Logotipo,
  Menu,
} from './styles'
import ShoppingCart from '../ShoppingCart'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const totalQuantity = calculateTotalQuantity(cartItems)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderContainer $pageIsScrolled={isScrolled}>
      <Content>
        <LogoLink href="/">
          <Logotipo
            $headerIsShort={isScrolled}
            width={100}
            height={100}
            alt="Logotipo"
            src="https://i.imgur.com/byPn7fb.png"
          />
        </LogoLink>
        <Menu>
          <ul>
            <li>
              <Link href="/loja">Loja</Link>
            </li>
            <li>
              <Link href="/galeria">Galeria</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </Menu>
        <Carrinho
          onClick={() => dispatch(toggleCart())}
          role="button"
          aria-label="Abrir carrinho"
        >
          <ShoppingCart />
          <CartLength>{totalQuantity}</CartLength>
        </Carrinho>
      </Content>
    </HeaderContainer>
  )
}

export default Header
