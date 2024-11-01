import { useSelector, useDispatch } from 'react-redux'

import Checkout from '../Checkout'

import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import { formataPreco } from '../ItemsList'

import {
  Overlay,
  CartContainer,
  AddButton,
  Sidebar,
  CartItem,
  InfosItem,
  InfosCart,
  CartStage
} from './styles'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  const activeCheckout = () => {
    dispatch(startCheckout())
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  // console.log('isCart: ' + isCart)
  // console.log('isCart: ' + isCart)
  // console.log('isCart: ' + isCart)
  // console.log('isCart: ' + isCart)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartStage className={!isCart ? 'is-checkout' : ''}>
          <ul>
            {pedido.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="Imagem do prato" />
                {/* img foi estilizado dentro da const CartItem  */}
                <InfosItem>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </InfosItem>
                <button type="button" onClick={() => deleteItem(item.id)} />
                {/* button foi estilizado dentro da const CartItem */}
              </CartItem>
            ))}
          </ul>
          <InfosCart>
            <p>Valor total</p>
            <span>{formataPreco(getTotalPrice())}</span>
          </InfosCart>
          <AddButton onClick={activeCheckout}>
            Continuar com a entrega
          </AddButton>
        </CartStage>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
