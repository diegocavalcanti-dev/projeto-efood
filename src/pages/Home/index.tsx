import RestaurantList from '../../components/RestaurantList'

import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
// import { useEffect, useState } from 'react'

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurante = {
  bannerImgUrl: string
  nome: string
  categoria: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero />
      <RestaurantList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
