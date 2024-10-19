import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.cremeEscuro};
  background-color: ${cores.laranja};
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
