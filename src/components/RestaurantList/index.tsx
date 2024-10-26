import MenuHome from '../../models/MenuHome'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  menus: MenuHome[]
}

const RestaurantList = ({ menus }: Props) => {
  // linha de teste const precisaSerCriado = aaaa()

  return (
    <Container>
      <List>
        {menus.map((menu) => (
          <Restaurant
            key={menu.id}
            id={menu.id.toString()}
            RestaurantCategories={menu.categories}
            RestaurantDescription={menu.description}
            RestaurantImage={menu.image}
            RestaurantTitle={menu.title}
            RestaurantRate={menu.rate}
          />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
