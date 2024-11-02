import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? colors.darkCream : colors.orange};
  // color: ${colors.darkCream};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.orange : colors.darkCream};
  // background-color: ${colors.orange};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  color: ${colors.darkCream};
  background-color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
