import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 90%;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }
  }
`

export const Text = styled.p`
  color: ${colors.orange};
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderLogo = styled.img`
  height: 58px;
  max-width: 126px;
  width: 100%;
`

export const CartButton = styled.a`
  color: ${colors.orange};
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`
