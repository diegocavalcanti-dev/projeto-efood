import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

import * as S from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  // linha de teste()
  return (
    <S.Container>
      <S.List>
        {restaurantes.map((menu) => (
          <Restaurant
            key={menu.id}
            id={menu.id.toString()}
            RestaurantCategories={[
              menu.tipo,
              menu.destacado ? 'Destaque da semana' : ''
            ]}
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
