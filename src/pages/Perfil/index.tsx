import ItemsList from '../../components/ItemsList'
import MenuPerfil from '../../models/MenuPerfil'

import pizza from '../../asset/images/pizza.svg'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const cardapioPerfil: MenuPerfil[] = [
  {
    id: 1,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 2,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 3,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 4,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 5,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 6,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 7,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 8,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 9,
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <ItemsList
      menusItems={cardapioPerfil}
      title="Promoções"
      background="gray"
    />
    <Footer />
  </>
)

export default Perfil
