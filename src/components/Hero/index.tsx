import { Link } from 'react-router-dom'

import logo from '../../asset/images/logo.svg'

import * as S from './styles'

const Hero = () => (
  <S.HeroBar>
    <Link to="/">
      <S.HeroLogo src={logo} alt="Logo do Restaurente Efood" />
    </Link>
    <S.HeroTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </S.HeroTitle>
  </S.HeroBar>
)

export default Hero
