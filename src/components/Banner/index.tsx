import { Categoria, Imagem, Titulo } from './styles'

type Props = {
  categoria: string // Para a categoria
  titulo: string // Para o título
  bannerImgUrl: string // Para a imagem do banner
}

const Banner = ({ categoria, titulo, bannerImgUrl }: Props) => (
  <Imagem style={{ backgroundImage: `url(${bannerImgUrl})` }}>
    <div className="container">
      <div>
        <Categoria>{categoria}</Categoria>
        <Titulo>{titulo}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
