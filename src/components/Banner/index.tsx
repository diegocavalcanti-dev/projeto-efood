import { Categoria, Imagem, Titulo } from './styles'

import bannerImg from '../../asset/images/italiana_banner.svg'

// export type Props = {
//   restaurant: Restaurant
// }

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Categoria>Italiana</Categoria>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
