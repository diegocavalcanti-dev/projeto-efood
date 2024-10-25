import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? cores.cremeEscuro : cores.laranja};
  // color: ${cores.cremeEscuro};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.laranja : cores.cremeEscuro};
  // background-color: ${cores.laranja};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  color: ${cores.cremeEscuro};
  background-color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
