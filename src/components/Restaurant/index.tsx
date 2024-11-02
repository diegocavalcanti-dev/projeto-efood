import Button from '../Button'
import Tag from '../Tag'
import { lowerDescription } from '../Items'

import estrela from '../../asset/images/estrela.svg'
import * as S from './styles'

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
    <S.Card>
      <img src={RestaurantImage} alt={RestaurantTitle} />
      <S.Categories>
        {RestaurantCategories.map((info) => {
          if (info) {
            return <Tag key={info}>{info}</Tag>
          }
        })}
      </S.Categories>
      <div className="ContainerTop">
        <S.Title>{RestaurantTitle}</S.Title>
        <S.Review>
          <h2>{RestaurantRate}</h2>
          <img src={estrela} alt="Estrela de Avaliação" />
        </S.Review>
      </div>
      <S.Description>{lowerDescription(RestaurantDescription)}</S.Description>
      <div className="botao">
        <Button type="button" to={`/perfil/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </div>
    </S.Card>
  )
}

export default Restaurant
