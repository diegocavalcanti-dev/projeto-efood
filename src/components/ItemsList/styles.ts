import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { AddCarrinho } from '../Items/styles'

export const Container = styled.section`
  max-width: 1024px;
  margin-bottom: 120px;
  margin: 80px auto;

  li {
    list-style: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 20px 10px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 40px 10px;
    row-gap: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    margin: 40px 10px;
    row-gap: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    margin: 40px 10px;
    row-gap: 30px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${colors.orange};
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${AddCarrinho} {
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const FoodImage = styled.img`
  margin-right: 24px;
  object-fit: cover;
  max-width: 280px;
  widht: 100%;
  max-height: 280px;
  height: 280px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;
  }
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.lightCream};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 12px;
  }
`
export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  top: 8px;
  right: 8px;
  width: 100%;
  cursor: pointer;
  position: absolute;

  @media (max-width: ${breakpoints.tablet}) {
    z-index: 1;
    position: absolute;
    right: 4px;
    top: 4px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    z-index: 1;
    position: absolute;
    right: 4px;
    top: 4px;
  }
`

export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.lightCream};
  line-height: 22px;
  margin-bottom: 16px;
`

export const AddToCartButton = styled.button`
  background-color: ${colors.darkCream};
  color: ${colors.orange};
  border: none;
  cursor: pointer;
  padding: 4px 7px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
