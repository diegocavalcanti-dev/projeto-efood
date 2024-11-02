import * as S from './styles'

type Props = {
  categoria: string
  titulo: string
  bannerImgUrl: string
}

const Banner = ({ categoria, titulo, bannerImgUrl }: Props) => (
  <S.Image style={{ backgroundImage: `url(${bannerImgUrl})` }}>
    <div className="container">
      <div>
        <S.Category>{categoria}</S.Category>
        <S.Title>{titulo}</S.Title>
      </div>
    </div>
  </S.Image>
)

export default Banner
