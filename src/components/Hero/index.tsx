import { Link } from 'react-router-dom'
import { HeroBar, HeroLogo, HeroTitle } from './styles'

import logo from '../../asset/images/logo.svg'

const Hero = () => (
  <HeroBar>
    <Link to="/">
      <HeroLogo src={logo} alt="Logo do Restaurente Efood" />
    </Link>
    <HeroTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroTitle>
  </HeroBar>
)

export default Hero
