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
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  },
  {
    id: 2,
    // categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  },
  {
    id: 3,
    // categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  },
  {
    id: 4,
    // categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  },
  {
    id: 5,
    // categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  },
  {
    id: 6,
    // categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    alt: 'Pizza'
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <ItemsList menusItems={cardapioPerfil} nameOrder="Promoções" />
    <Footer />
  </>
)

export default Perfil
