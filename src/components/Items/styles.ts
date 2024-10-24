import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.cremeEscuro};
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const Photo = styled.img`
  max-width: 304px;
  max-height: 167px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const AddCarrinho = styled(Link)`
  background-color: ${cores.cremeEscuro};
  color: ${cores.laranja};
  border: none;
  padding: 4px 7px;

  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
