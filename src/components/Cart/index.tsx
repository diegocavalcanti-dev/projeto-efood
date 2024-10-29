import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import pizza from '../../asset/images/pizza.svg'
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
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={pizza} alt="" />
              <InfosItem>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </InfosItem>
              <button type="button" />
            </CartItem>
          ))}
          <CartItem>
            <img src={pizza} alt="" />
            <InfosItem>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </InfosItem>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="" />
            <InfosItem>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </InfosItem>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="" />
            <InfosItem>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </InfosItem>
            <button type="button" />
          </CartItem>
        </ul>
        <InfosCart>
          <p>Valor total</p>
          <span>R$ 182,70</span>
        </InfosCart>
        <AddButton>Continuar com a entrega</AddButton>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
