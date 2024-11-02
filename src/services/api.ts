import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Request = {
  orderId: string
}

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteSelected: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<Request, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export default api
export const {
  useGetRestaurantesQuery,
  useGetRestauranteSelectedQuery,
  usePurchaseMutation
} = api
