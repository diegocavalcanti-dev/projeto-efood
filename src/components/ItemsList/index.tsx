// import { useState } from 'react'
import MenuPerfil from '../../models/MenuPerfil'
import Items from '../Items'

import { Container, List } from './styles'

import pizza from '../../asset/images/pizza.svg' // arquivo testee

export type Props = {
  nameOrder: string
  menusItems: MenuPerfil[]
}

// type Gal = {
//   title: string
//   menusItems: MenuPerfil[]
// }

// const mock = [
//   {

//   }
// ]

const ItemsList = ({ nameOrder, menusItems }: Props) => {
  // const agua = useState()

  return (
    <>
      <Container>
        {/* <div>{title}</div> */}
        <List>
          {menusItems.map((menu) => (
            <li key={menu.id}>
              <Items
                key={menu.id}
                image={menu.image}
                title={menu.title}
                description={menu.description}
                photoAlt={menu.alt}
              />
            </li>
          ))}
        </List>
      </Container>
      <div>
        <img src={pizza} />
      </div>
    </>
  )
}

export default ItemsList
