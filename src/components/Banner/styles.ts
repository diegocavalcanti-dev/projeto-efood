import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    display: block;
    margin-bottom: 32px;
  }
`

export const Categoria = styled.p`
  font-size: 32px;
  padding-top: 26px;
  color: ${cores.branca};
  font-weight: 100;
`

export const Titulo = styled.p`
  font-size: 36px;
  color: ${cores.branca};
  padding-top: 156px;
`
