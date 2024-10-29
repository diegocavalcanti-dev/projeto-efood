import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ItemsList'

import {
  Overlay,
  CartContainer,
  AddButton,
  Sidebar,
  CartItem,
  InfosItem,
  InfosCart
} from './styles'

const Cart = () => {
  const { isOpen, pedido } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {pedido.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="Imagem do prato" />
              <InfosItem>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </InfosItem>
              <button type="button" onClick={() => deleteItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <InfosCart>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </InfosCart>
        <AddButton>Continuar com a entrega</AddButton>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
