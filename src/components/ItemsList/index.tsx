import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Items from '../Items'
import { Pedido, Restaurante } from '../../pages/Home'
import { addItem, open } from '../../store/reducers/cart'

import {
  CloseIcon,
  Container,
  FoodDescription,
  FoodImage,
  FoodTitle,
  List,
  Modal,
  ModalContainer,
  AddToCartButton,
  ModalContent
} from './styles'

import fechar from '../../asset/images/close-modal-icon.png'

export type Props = {
  restaurante: Restaurante
  pedido: Pedido
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ItemsList = ({ restaurante, pedido }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalItemTitle, setItemTitle] = useState('')
  const [modalItemImage, setItemImage] = useState('')
  const [modalItemDescription, setItemDescription] = useState('')
  const [modalItemServe, setItemServe] = useState('')
  const [modalItemPrice, setItemPrice] = useState(0)

  const [itemId, setItemId] = useState(0)
  const dispatch = useDispatch()
  const addToCart = () => {
    pedido.id = itemId
    pedido.nome = modalItemTitle
    pedido.foto = modalItemImage
    pedido.preco = modalItemPrice
    dispatch(addItem(pedido))
    setModalEstaAberto(false)
    dispatch(open())
  }

  return (
    <>
      <Container>
        <List>
          {restaurante.cardapio.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                setModalEstaAberto(true)
                setItemTitle(menu.nome)
                setItemImage(menu.foto)
                setItemDescription(menu.descricao)
                setItemServe(menu.porcao)
                setItemPrice(menu.preco)
                setItemId(menu.id)
              }}
            >
              <Items
                key={menu.id}
                ItemImage={menu.foto}
                ItemTitle={menu.nome}
                ItemDescription={menu.descricao}
                ItemPhotoAlt={''}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent>
          <FoodImage src={modalItemImage} />
          <ModalContainer>
            <FoodTitle>{modalItemTitle}</FoodTitle>
            <FoodDescription>{modalItemDescription}</FoodDescription>
            <FoodDescription>{modalItemServe}</FoodDescription>
            <AddToCartButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(modalItemPrice)}{' '}
            </AddToCartButton>
          </ModalContainer>
          <CloseIcon
            src={fechar}
            alt="Fechar"
            onClick={() => setModalEstaAberto(false)}
          />
        </ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default ItemsList
