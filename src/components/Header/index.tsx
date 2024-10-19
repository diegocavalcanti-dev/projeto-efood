import { Link } from 'react-router-dom'

import { HeaderBar, HeaderCart, Text } from './styles'

import logo from '../../asset/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <div className="HeaderBarContainer">
      <Text>Restaurante</Text>
      <Link to="/">
        <img src={logo} alt="Efood Logo" />
      </Link>
      <HeaderCart href="#">0 produto(s) no carinho</HeaderCart>
    </div>
  </HeaderBar>
)

export default Header
