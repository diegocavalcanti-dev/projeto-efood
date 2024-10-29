import styled from 'styled-components'
import heroBackground from '../../asset/images/fundo.png'
import { breakpoints } from '../../styles'

export const HeroBar = styled.div`
  background-image: url(${heroBackground});
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 360px; // no figma apresenta 384px e -24px de Top
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    height: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 250px;
    padding: 0 16px;
  }
`

export const HeroLogo = styled.img`
  margin-top: 40px; // no figma apresenta 64px e -24px de Top
  height: 58px;
  width: 126px;
`

export const HeroTitle = styled.h4`
  font-weight: bold;
  max-width: 549px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`
