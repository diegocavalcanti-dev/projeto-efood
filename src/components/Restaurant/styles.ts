import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: solid 1px ${cores.laranja};

  img {
    max-width: 472px;
    width: 100%;
    object-fit: cover;
    max-height: 217px;
    height: 217px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 472px;
      width: 100%;
      object-fit: cover;
    }
  }

  .botao {
    padding: 0 0 10px 8px;
  }

  .ContainerTop {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
  }

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Descriçao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  padding: 8px;
`
export const Categories = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Review = styled.div`
  display: flex;

  h2,
  img {
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
  }

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
