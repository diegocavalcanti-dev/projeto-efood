import { useState } from 'react'
import { Restaurante } from '../../pages/Home'
import Loader from '../Loader'
import Restaurant from '../Restaurant'

import * as S from './styles'

type Props = {
  restaurantes: Restaurante[]
  isLoading?: boolean
}

const RestaurantList = ({ restaurantes, isLoading }: Props) => {
  const [destaque] = useState('Destaque da semana')
  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container>
      <S.List>
        {restaurantes.map((menu) => (
          <Restaurant
            key={menu.id}
            id={menu.id.toString()}
            RestaurantCategories={[menu.tipo, menu.destacado ? destaque : '']}
            RestaurantDescription={menu.descricao}
            RestaurantImage={menu.capa}
            RestaurantTitle={menu.titulo}
            RestaurantRate={Number(menu.avaliacao)}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default RestaurantList
