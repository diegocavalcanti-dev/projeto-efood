import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Items from '../Items'

import { addItem, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import fechar from '../../asset/images/close-modal-icon.png'

import * as S from './styles'

export type Props = {
  restaurante: Restaurante
  pedido: Pedido
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
      <S.Container>
        <S.List>
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
        </S.List>
      </S.Container>
      <S.Modal className={modalEstaAberto ? 'visivel' : ''}>
        <S.ModalContent>
          <S.FoodImage src={modalItemImage} />
          <S.ModalContainer>
            <S.FoodTitle>{modalItemTitle}</S.FoodTitle>
            <S.FoodDescription>{modalItemDescription}</S.FoodDescription>
            <S.FoodDescription>{modalItemServe}</S.FoodDescription>
            <S.AddToCartButton onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(modalItemPrice)}{' '}
            </S.AddToCartButton>
          </S.ModalContainer>
          <S.CloseIcon
            src={fechar}
            alt="Fechar"
            onClick={() => setModalEstaAberto(false)}
          />
        </S.ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default ItemsList
