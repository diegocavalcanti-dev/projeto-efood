import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.darkCream};
  height: 298px;
  text-align: center;
`

export const FooterLogo = styled.img`
  margin-top: 40px;
  height: 58px;
  width: 126px;
`

export const SocialMedia = styled.div`
  margin-top: 32.5px;
  img {
    margin-right: 8px;
  }
`

export const About = styled.p`
  max-width: 480px;
  margin: 80px auto;
  line-height: 12px;
  width: 100%;
  font-size: 10px;
  font-weight: regular;
`
