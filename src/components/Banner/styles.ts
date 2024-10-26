import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 26px;
  position: relative;

  .container {
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    display: block;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
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
