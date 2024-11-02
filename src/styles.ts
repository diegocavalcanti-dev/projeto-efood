// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  cremeClaro: '#FFF8F2',
  cremeEscuro: '#FFEBD9',
  branca: '#FFFFFF',
  rose: '#fae0e4', // Cor do Rodapé por exemplo
  amarelo: '#FFB930'
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
    background-color: ${cores.cremeClaro};
    color: ${cores.laranja}
  }
`
