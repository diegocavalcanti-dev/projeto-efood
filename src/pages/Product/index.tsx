import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import MenuPerfil from '../../models/MenuPerfil' // arquivo testee
import pizza from '../../asset/images/pizza.svg' // arquivo testee
import ItemsList from '../../components/ItemsList' // arquivo testee

const cardapioPerfil: MenuPerfil[] = [
  //// arquivo testee
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

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Banner />
      <div>Produto {id}</div>
      <ItemsList menusItems={cardapioPerfil} nameOrder="Promoções" />
      <Footer />
    </>
  )
}

export default Product

/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
/// ESSE ARQUIVO ESTÁ SENDO USADO PARA TESTE E APRENDIZADO PARA DEPOIS SER PASSADO PARA A PASTA PERFIL
