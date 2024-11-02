import styled from 'styled-components'
import { colors } from '../../styles'
import { AddButton } from '../Cart/styles'

export const DeliverySection = styled.div`
  display: none;

  &.is-open {
    display: block;
  }
  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }
  .buttomContainer {
    margin-top: 24px;
  }
  color: ${colors.darkCream};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.is-open {
    display: block;
  }
  ${AddButton} {
    margin-top: 8px;
  }
`
export const InputGroup = styled.div`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.darkCream};
    border: 1px solid ${colors.darkCream};
    margin: 8px 0;
  }
`
export const PaymentSection = styled.div`
  color: ${colors.darkCream};
  display: none;
  &.is-open {
    display: block;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  .buttomContainer {
    margin-top: 24px;
    ${AddButton} {
      margin-bottom: 8px;
    }
  }
  .fieldContainer {
    display: flex;
    column-gap: 34px;
    #cardNumber {
      width: 228px;
    }
    #mesVencimento {
      width: 155px;
    }
  }
`
export const ConfirmedSection = styled.div`
  color: ${colors.darkCream};
  display: none;

  p {
    margin-bottom: 24px;
    font-size: 14px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 16px;
  }
  &.is-open {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
`
