import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import Checkout from '../Checkout'

import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const [showWarning, setShowWarning] = useState(false) // Adicionando o estado showWarning

  const closeCart = () => {
    dispatch(close())
  }

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 3000)
    }
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CartStage className={!isCart ? 'is-checkout' : ''}>
          <ul>
            {pedido.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt="Imagem do prato" />
                <S.InfosItem>
                  <h3>{item.nome}</h3>
                  <span>{parseToBrl(item.preco)}</span>
                </S.InfosItem>
                <button type="button" onClick={() => deleteItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <S.InfosCart>
            <p>Valor total</p>
            <span>{parseToBrl(getTotalPrice())}</span>
          </S.InfosCart>
          {showWarning && (
            <S.WarningMessage>Não há itens no carrinho</S.WarningMessage>
          )}
          <S.AddButton onClick={activeCheckout}>
            Continuar com a entrega
          </S.AddButton>
        </S.CartStage>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
