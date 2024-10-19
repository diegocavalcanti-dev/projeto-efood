import Menu from '../../models/Menu'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
  menus: Menu[]
}

const RestaurantList = ({ background, title, menus }: Props) => (
  <Container>
    <List>
      {menus.map((menu) => (
        <Restaurant
          key={menu.id}
          categories={menu.categories}
          description={menu.description}
          image={menu.image}
          title={menu.title}
          rate={menu.rate}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
