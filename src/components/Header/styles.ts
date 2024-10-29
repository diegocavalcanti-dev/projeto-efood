import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import heroBackground from '../../asset/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${heroBackground});
  height: 162px;
  display: flex;
  align-items: center;
  text-align: center;

  .HeaderBarContainer {
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      padding: 39px 10px;
    }
  }
`

export const Text = styled.p`
  color: ${cores.laranja};
  font-size: 18px;
  font-weight: bold;
`

export const HeaderLogo = styled.img`
  height: 58px;
  max-width: 126px;
  width: 100%;
`

export const CartButton = styled.a`
  color: ${cores.laranja};
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`
