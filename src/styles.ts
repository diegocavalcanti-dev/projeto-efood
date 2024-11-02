// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  lightCream: '#FFF8F2',
  darkCream: '#FFEBD9',
  white: '#FFFFFF',
  rose: '#fae0e4', // Cor do Rodapé por exemplo
  yellow: '#FFB930'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '570px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightCream};
    color: ${colors.orange}
  }
`
