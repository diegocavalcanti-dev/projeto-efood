// import { useState } from 'react'
import MenuPerfil from '../../models/MenuPerfil'
import Items from '../Items'

import { Container, List } from './styles'

export type Props = {
  title: string
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

const ItemsList = ({ title, menusItems }: Props) => {
  // const agua = useState()

  return (
    <Container title="Promoções">
      {/* <div>{title}</div> */}
      <List>
        {menusItems.map((menu) => (
          //   <li
          //   key={food.id}
          //   onClick={() => {
          //     setShowModal(true)
          //     setfoodTitle(menu.nome)
          //     setfoodDescription(menu.descricao)
          //     setfoodServe(menu.porcao)
          //     setfoodPrice(menu.preco)
          //     setfoodPhotoAlt(menu.nome)
          //     setfoodPhoto(menu.foto)
          //     setFoodId(menu.id)
          //   }}
          // >
          <Items
            key={menu.id}
            image={menu.image}
            title={menu.title}
            description={menu.description}
            photoAlt={menu.alt}
          />
        ))}
      </List>
    </Container>
  )
}

export default ItemsList
