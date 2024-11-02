import * as S from './styles'

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
  <S.Card>
    <S.Photo src={ItemImage} alt={ItemPhotoAlt} />
    <S.Title>{ItemTitle}</S.Title>
    <S.Description>{lowerDescription(ItemDescription)}</S.Description>
    <S.AddCarrinho to={''} title="Clique aqui para adicionar ao carrinho">
      Adicionar ao carrinho
    </S.AddCarrinho>
  </S.Card>
)

export default Items
