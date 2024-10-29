import { useParams } from 'react-router-dom'

import ItemsList from '../../components/ItemsList'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
// import { useEffect, useState } from 'react'
// import { Restaurante } from '../Home'

import { useGetRestauranteSelectedQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante, isLoading } = useGetRestauranteSelectedQuery(id!)

  if (restaurante) {
    return (
      <>
        <Header />
        <Banner
          categoria={restaurante.tipo}
          titulo={restaurante.titulo}
          bannerImgUrl={restaurante.capa}
        />
        <ItemsList restaurante={restaurante.cardapio} />
        <Footer />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Perfil
