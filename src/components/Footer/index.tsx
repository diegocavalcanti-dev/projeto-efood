import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../asset/images/logo.svg'
import instagram from '../../asset/images/instagram.svg'
import facebook from '../../asset/images/facebook.svg'
import twitter from '../../asset/images/twitter.svg'

const Footer = () => (
  <S.Container>
    <Link to="/">
      <S.FooterLogo src={logo} alt="" />
    </Link>
    <S.SocialMedia>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </S.SocialMedia>
    <S.About>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.About>
  </S.Container>
)

export default Footer
