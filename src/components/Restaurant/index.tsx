import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../asset/images/estrela.svg'

import { Card, Titulo, Descriçao, Categories, Review } from './styles'
import { lowerDescription } from '../Items'

type Props = {
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantCategories: string[]
  RestaurantDescription: string
  RestaurantImage: string
  id: string
}

const Restaurant = ({
  RestaurantTitle,
  RestaurantCategories,
  RestaurantDescription,
  RestaurantImage,
  RestaurantRate,
  id
}: Props) => {
  return (
    <Card>
      <img src={RestaurantImage} alt={RestaurantTitle} />
      <Categories>
        {RestaurantCategories.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Categories>
      <div className="ContainerTop">
        <Titulo>{RestaurantTitle}</Titulo>
        <Review>
          <h2>{RestaurantRate}</h2>
          <img src={estrela} alt="Estrela de Avaliação" />
        </Review>
      </div>
      <Descriçao>{lowerDescription(RestaurantDescription)}</Descriçao>
      <div className="botao">
        <Button type="button" to={`/perfil/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </div>
    </Card>
  )
}

export default Restaurant
