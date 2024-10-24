import { AddCarrinho, Card, Descricao, Photo, Titulo } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  photoAlt: string
}

export const lowerDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}

const Items = ({ image, title, description, photoAlt }: Props) => (
  <Card>
    <Photo src={image} alt={photoAlt} />
    <Titulo>{title}</Titulo>
    <Descricao>{lowerDescription(description)}</Descricao>
    <AddCarrinho to="/" title="Clique aqui para adicionar ao carrinho">
      Adicionar ao carrinho
    </AddCarrinho>
  </Card>
)

export default Items
