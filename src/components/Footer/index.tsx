import { Link } from 'react-router-dom'
import { Container, FooterLogo, About, SocialMedia } from './styles'
import logo from '../../asset/images/logo.svg'
import instagram from '../../asset/images/instagram.svg'
import facebook from '../../asset/images/facebook.svg'
import twitter from '../../asset/images/twitter.svg'

const Footer = () => (
  <Container>
    <Link to="/">
      <FooterLogo src={logo} alt="" />
    </Link>
    <SocialMedia>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </SocialMedia>
    <About>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </About>
  </Container>
)

export default Footer
