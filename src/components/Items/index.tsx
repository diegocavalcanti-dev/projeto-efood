import { AddCarrinho, Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Items = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <AddCarrinho to="">Adicionar ao carrinho</AddCarrinho>
  </Card>
)

export default Items
