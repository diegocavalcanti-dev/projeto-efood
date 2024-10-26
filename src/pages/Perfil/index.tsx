import { useParams } from 'react-router-dom'

import ItemsList from '../../components/ItemsList'
import MenuPerfil from '../../models/MenuPerfil'

import pizza from '../../asset/images/pizza.svg'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const cardapioPerfil: MenuPerfil[] = [
  {
    id: 1,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  },
  {
    id: 2,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  },
  {
    id: 3,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  },
  {
    id: 4,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  },
  {
    id: 5,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  },
  {
    id: 6,
    // categories: ['Destaque da semana', 'Japonesa'],
    itemDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    itemTitle: 'Pizza Marguerita',
    itemImage: pizza,
    itemPhotoAlt: 'Pizza',
    itemServe: '',
    itemPrice: 0
  }
]

export const foodSelected = {
  id: 1,
  itemTitleSelected: 'Pizza Marguerita',
  itemDescriptionSelected:
    'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabores inigualável. Ela é fit com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
  itemImageSelected: pizza,
  itemPhotoAltSelected: 'Imagem Pizza marguerita',
  itemServeSelected: 'de 2 a 3 pessoas',
  itemPriceSelected: 60.9
}

const Perfil = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Banner />
      <div>Produto {id}</div>
      <ItemsList menusItems={cardapioPerfil} />
      <Footer />
    </>
  )
}

export default Perfil
