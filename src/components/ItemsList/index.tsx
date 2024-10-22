import MenuPerfil from '../../models/MenuPerfil'
import Items from '../Items'

import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
  menusItems: MenuPerfil[]
}

const ItemsList = ({ background, title, menusItems }: Props) => (
  <Container>
    <List>
      {menusItems.map((menu) => (
        <Items
          key={menu.id}
          image={menu.image}
          title={menu.title}
          description={menu.description}
        />
      ))}
    </List>
  </Container>
)

export default ItemsList
