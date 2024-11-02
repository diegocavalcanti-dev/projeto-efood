import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ItemsList from '../../components/ItemsList'

import Cart from '../../components/Cart'
import { useGetRestauranteSelectedQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteSelectedQuery(id!)

  if (restaurante) {
    return (
      <>
        <Header />
        <Banner
          categoria={restaurante.tipo}
          titulo={restaurante.titulo}
          bannerImgUrl={restaurante.capa}
        />
        <ItemsList
          restaurante={restaurante}
          pedido={{
            id: 0,
            nome: '',
            foto: '',
            preco: 0
          }}
        />
        <Footer />
        <Cart />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Perfil
