import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  // linha de teste()
  return (
    <Container>
      <List>
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
      </List>
    </Container>
  )
}

export default RestaurantList
