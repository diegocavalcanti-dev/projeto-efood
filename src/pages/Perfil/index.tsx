import { useParams } from 'react-router-dom'

import ItemsList from '../../components/ItemsList'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (!Array.isArray(res)) {
          res = [res]
        }
        setRestaurante(res[0])
      })
  }, [id])
  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner
        categoria={restaurante.tipo}
        titulo={restaurante.titulo}
        bannerImgUrl={restaurante.capa}
      />
      <div>Produto {id}</div>
      <ItemsList restaurante={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil

// titulo, bannerImgUrl
