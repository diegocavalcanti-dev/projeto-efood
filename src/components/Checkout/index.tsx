import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'
import {
  backtoCart,
  payment,
  confirmed,
  startCheckout,
  closeAndFinish
} from '../../store/reducers/cart'

import { AddButton } from '../Cart/styles'
import * as S from './styles'

type Props = {
  checkoutStart?: boolean
  priceTotal: number
}
const Checkout = ({ checkoutStart = false, priceTotal = 0 }: Props) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const { isPayment, isConfirmed } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(closeAndFinish())
  }
  const backCart = () => {
    dispatch(backtoCart())
  }
  const backAdress = () => {
    dispatch(startCheckout())
  }
  const activePayment = () => {
    if (
      form.values.receiver &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }
  const activeConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cardCode &&
      form.values.expiresYear &&
      form.values.expiresYear
    ) {
      dispatch(confirmed())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      locationPlusInfo: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            description: values.address,
            number: Number(values.number),
            zipCode: values.zipCode,
            complement: values.locationPlusInfo
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  const getErroMassage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }
  // DeliverContainer
  return (
    <form onSubmit={form.handleSubmit}>
      <S.DeliverySection className={checkoutStart ? 'is-open' : ''}>
        <h2>Entrega</h2>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            type="text"
            required
            id="receiver"
            name="receiver"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver}
          />
          <small>{getErroMassage('receiver', form.errors.receiver)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.address}
          />
          <small>{getErroMassage('address', form.errors.address)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            required
            id="city"
            name="city"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.city}
          />
          <small>{getErroMassage('city', form.errors.city)}</small>
        </S.InputGroup>
        <div className="CEPNumber">
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input
              type="number"
              required
              id="zipCode"
              name="zipCode"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.zipCode}
            />
            <small>{getErroMassage('zipCode', form.errors.zipCode)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="number"
              required
              id="number"
              name="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.number}
            />
            <small>{getErroMassage('number', form.errors.number)}</small>
          </S.InputGroup>
        </div>
        <S.InputGroup>
          <label htmlFor="locationPlusInfo">Complemento (opcional)</label>
          <input
            type="text"
            id="locationPlusInfo"
            name="locationPlusInfo"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.locationPlusInfo}
          />
          {/* <small>
            {getErroMassage('locationPlusInfo', form.errors.locationPlusInfo)}
          </small> */}
        </S.InputGroup>
        <div className="buttomContainer">
          <AddButton type="submit" onClick={activePayment}>
            Continuar com o pagamento
          </AddButton>
          <AddButton onClick={backCart}>Voltar ao carrinho</AddButton>
        </div>
      </S.DeliverySection>
      <S.PaymentSection className={isPayment ? 'is-open' : ''}>
        <p>Pagamento - Valor a pagar {parseToBrl(priceTotal)}</p>
        <S.InputGroup>
          <label htmlFor="cardName">Nome do cartão</label>
          <input
            type="text"
            required
            id="cardName"
            name="cardName"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardName}
          />
          <small>{getErroMassage('cardName', form.errors.cardName)}</small>
        </S.InputGroup>
        <div className="fieldContainer">
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="number"
              required
              id="cardNumber"
              name="cardNumber"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
            />
            <small>
              {getErroMassage('cardNumber', form.errors.cardNumber)}
            </small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input
              type="number"
              required
              id="cardCode"
              name="cardCode"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardCode}
            />
            <small>{getErroMassage('cardCode', form.errors.cardCode)}</small>
          </S.InputGroup>
        </div>
        <div className="fieldContainer">
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              type="number"
              required
              id="expiresMonth"
              name="expiresMonth"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.expiresMonth}
            />
            <small>
              {getErroMassage('expiresMonth', form.errors.expiresMonth)}
            </small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              type="number"
              required
              id="expiresYear"
              name="expiresYear"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.expiresYear}
            />
            <small>
              {getErroMassage('expiresYear', form.errors.expiresYear)}
            </small>
          </S.InputGroup>
        </div>
        <div className="buttomContainer">
          <AddButton type="submit" onClick={activeConfirmed}>
            Finalizar pagamento
          </AddButton>
          <AddButton onClick={backAdress}>
            Voltar para a edição do endereço
          </AddButton>
        </div>
      </S.PaymentSection>
      <S.ConfirmedSection className={isConfirmed && isSuccess ? 'is-open' : ''}>
        <h2>Pedido realizado - {data?.orderId} </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <div className="buttomContainer">
          <AddButton onClick={finish}>Concluir</AddButton>
        </div>
      </S.ConfirmedSection>
    </form>
  )
}
export default Checkout
