import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 99%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    marginright: 40px;
    max-width: 99%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
