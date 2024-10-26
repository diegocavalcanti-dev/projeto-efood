import { useState } from 'react'

import MenuPerfil from '../../models/MenuPerfil'
import Items from '../Items'

import { foodSelected } from '../../pages/Perfil' //PODERÁ SER ALTERADO

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

import pizza from '../../asset/images/pizza.svg' // arquivo testee
import fechar from '../../asset/images/close-modal-icon.png' // arquivo testee
import { AddCarrinho } from '../Items/styles'

export type Props = {
  menusItems: MenuPerfil[]
}

const menusItems: MenuPerfil[] = [
  {
    id: 1,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  },
  {
    id: 2,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  },
  {
    id: 3,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  },
  {
    id: 4,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  },
  {
    id: 5,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  },
  {
    id: 6,
    itemTitle: 'Pizza Marquerita',
    itemDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza marguerita',
    itemServe: 'de 2 a 3 pessoas',
    itemPrice: 60.9
  }
]

const ItemsList = ({ menusItems }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalItemTitle, setItemTitle] = useState('')
  const [modalItemImage, setItemImage] = useState('')
  const [modalItemDescription, setItemDescription] = useState('')
  const [modalItemPhotoAlt, setItemPhotoAlt] = useState('')
  const [modalItemServe, setItemServe] = useState('')
  const [modalItemPrice, setItemPrice] = useState(0)

  return (
    <>
      <Container>
        {/* <div>{title}</div> */}
        <List>
          {menusItems.map((menu) => (
            <li
              key={menu.id}
              onClick={() => {
                setModalEstaAberto(true)
                setItemTitle(menu.itemTitle)
                setItemImage(menu.itemImage)
                setItemDescription(menu.itemDescription)
                setItemPhotoAlt(menu.itemPhotoAlt)
                setItemServe(menu.itemServe)
                setItemPrice(menu.itemPrice)
              }}
            >
              <Items
                key={menu.id}
                ItemImage={menu.itemImage}
                ItemTitle={menu.itemTitle}
                ItemDescription={menu.itemDescription}
                ItemPhotoAlt={menu.itemPhotoAlt}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent>
          <FoodImage
            src={foodSelected.itemImageSelected}
            alt={foodSelected.itemPhotoAltSelected}
          />
          <ModalContainer>
            <FoodTitle>{foodSelected.itemTitleSelected}</FoodTitle>
            <FoodDescription>
              {foodSelected.itemDescriptionSelected}
            </FoodDescription>
            <FoodDescription>{foodSelected.itemServeSelected}</FoodDescription>
            <AddCarrinho to={''}>
              Adicionar ao carrinho - R$ {foodSelected.itemPriceSelected}
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
