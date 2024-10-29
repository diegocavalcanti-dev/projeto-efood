import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, Text } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

import logo from '../../asset/images/logo.svg'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="HeaderBarContainer">
        <Text>Restaurante</Text>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <CartButton onClick={openCart} href="#">
          0 produto(s) no carinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
