import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  margin-bottom: 120px;
  margin: 80px auto;

  li {
    list-style: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
