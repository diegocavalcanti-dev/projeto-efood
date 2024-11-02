import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orange};
  color: ${colors.darkCream};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 10px' : '4px 6px')};
`
