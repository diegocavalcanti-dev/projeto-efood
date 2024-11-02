import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 60px 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 60px 20px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin: 0 10px;
    gap: 20px;
  }
`
