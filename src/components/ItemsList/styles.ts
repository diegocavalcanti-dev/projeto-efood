import styled from 'styled-components'
import { cores } from '../../styles'
import { AddCarrinho } from '../Items/styles'

export const Container = styled.section`
  max-width: 1024px;
  margin-bottom: 120px;
  margin: 80px auto;

  li {
    list-style: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
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
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.laranja};
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${AddCarrinho} {
    margin: 0;
  }
`
export const FoodImage = styled.img`
  margin-right: 24px;
  object-fit: cover;
  max-width: 280px;
  widht: 100%;
  max-height: 280px;
  height: 280px;
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.cremeClaro};
  margin-bottom: 16px;
`
export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  cursor: pointer;
`

export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.cremeClaro};
  line-height: 22px;
  margin-bottom: 16px;
`

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: none;
//   align-items: center;
//   justiry-content: center;
//   z-index: 2;

//   &.visible {
//     display: flex;
//   }

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `

// export const ModalContent = styled.div`
//   margin: 0 auto;
//   max-width: 1024px;
//   background-color: ${cores.laranja};
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   z-index: 3;
// `
// export const FoodImage = styled.img`
//   object-fit: cover;
//   max-width: 280px;
//   max-height: 280px;
//   margin: 32px 24px 32px 32px;
//   object-fit: cover;
// `
// export const ModalContainer = styled.div`
//   max-width: 656px;
//   width: 100%;
//   margin-top: 32px;
// `

// export const FoodTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 900;
//   color: ${cores.cremeEscuro};
//   line-height: 21.09px;
//   display: block;
// `
// export const FoodDescription = styled.p`
//   font-size: 14px;
//   font-weight: 400;
//   color: ${cores.cremeEscuro};
//   line-height: 22px;
//   width: 100%;
//   margin: 16px 0 16px 0;
//   p {
//     margin-top: 16px;
//   }
// `
// export const CloseIcon = styled.img`
//   max-width: 16px;
//   max-height: 16px;
//   width: 100%;
//   margin: 8px;
//   cursor: pointer;
// `
// export const AddCartButton = styled.button`
//   background-color: ${cores.rose};
//   color: ${cores.laranja};
//   border: none;
//   padding: 4px 7px;
//   font-weight: 700;
//   text-decoration: none;
//   text-align: center;
//   font-size: 14px;
//   cursor: pointer;
// `
