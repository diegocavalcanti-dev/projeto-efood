import { AddCarrinho, Card, Descricao, Photo, Titulo } from './styles'

export type Props = {
  ItemImage: string
  ItemTitle: string
  ItemDescription: string
  ItemPhotoAlt: string
}

export const lowerDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}

const Items = ({
  ItemImage,
  ItemTitle,
  ItemDescription,
  ItemPhotoAlt
}: Props) => (
  <Card>
    <Photo src={ItemImage} alt={ItemPhotoAlt} />
    <Titulo>{ItemTitle}</Titulo>
    <Descricao>{lowerDescription(ItemDescription)}</Descricao>
    <AddCarrinho
      to={'/product/2'}
      title="Clique aqui para adicionar ao carrinho"
    >
      Adicionar ao carrinho
    </AddCarrinho>
  </Card>
)

export default Items
