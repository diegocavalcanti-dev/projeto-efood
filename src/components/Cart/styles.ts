import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import bin from '../../asset/images/bin.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`

export const AddButton = styled.button`
  background-color: ${cores.cremeEscuro};
  color: ${cores.laranja};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`

export const CartItem = styled.li`
  background-color: ${cores.cremeEscuro};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  button {
    width: 16px;
    cursor: pointer;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${bin});
    background-color: transparent;
    border: none;
  }
`

export const InfosItem = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }
  span {
    margin: 16px 0 33px 0;
    font-weight: 400;
    font-size: 14px;
  }
`

export const InfosCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  color: ${cores.cremeClaro};
  weight: 700;
  font-size: 14px;
`

export const CartStage = styled.div`
  display: block;
  &.is-checkout {
    display: none;
  }
`
