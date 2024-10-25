import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 26px;
  object-fit: cover;

  .container {
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    display: block;
  }
`

export const Categoria = styled.p`
  font-size: 32px;
  color: ${cores.branca};
  font-weight: 100;
  line-height: 38px;
`

export const Titulo = styled.p`
  font-size: 32px;
  color: ${cores.branca};
  margin-top: 156px;
  font-weight: bold;
`
