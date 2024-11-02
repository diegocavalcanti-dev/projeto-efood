import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../asset/images/logo.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { pedido } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div className="HeaderBarContainer">
        <S.Text>Restaurante</S.Text>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <S.CartButton onClick={openCart} href="#">
          {pedido.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
