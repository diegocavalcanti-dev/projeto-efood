import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../asset/images/estrela.svg'

import { Card, Titulo, Descriçao, Categories, Review } from './styles'
import { lowerDescription } from '../Items'

type Props = {
  title: string
  rate: number
  categories: string[]
  description: string
  image: string
}

const Restaurant = ({ title, categories, description, image, rate }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Categories>
        {categories.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Categories>
      <div className="ContainerTop">
        <Titulo>{title}</Titulo>
        <Review>
          <h2>{rate}</h2>
          <img src={estrela} alt="Estrela de Avaliação" />
        </Review>
      </div>
      <Descriçao>{lowerDescription(description)}</Descriçao>
      <div className="botao">
        <Button type="link" to="/perfil" title="Saiba mais">
          Saiba mais
        </Button>
      </div>
    </Card>
  )
}

export default Restaurant
