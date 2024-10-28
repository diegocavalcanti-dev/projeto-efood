import { useState } from 'react'
import Items from '../Items'
import {
  CloseIcon,
  Container,
  FoodDescription,
  FoodImage,
  FoodTitle,
  List,
  Modal,
  ModalContainer,
  ModalContent
} from './styles'
import fechar from '../../asset/images/close-modal-icon.png'
import { AddCarrinho } from '../Items/styles'

// Definindo o tipo correto para os itens de cardápio
export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  restaurante: CardapioItem[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ItemsList = ({ restaurante }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalItemTitle, setItemTitle] = useState('')
  const [modalItemImage, setItemImage] = useState('')
  const [modalItemDescription, setItemDescription] = useState('')
  const [modalItemServe, setItemServe] = useState('')
  const [modalItemPrice, setItemPrice] = useState(0)

  return (
    <>
      <Container>
        <List>
          {restaurante.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                setModalEstaAberto(true)
                setItemTitle(menu.nome)
                setItemImage(menu.foto)
                setItemDescription(menu.descricao)
                setItemServe(menu.porcao)
                setItemPrice(menu.preco)
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
            <AddCarrinho to={''}>
              Adicionar ao carrinho - {formataPreco(modalItemPrice)}{' '}
            </AddCarrinho>
          </ModalContainer>
          <CloseIcon
            src={fechar}
            alt=""
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
