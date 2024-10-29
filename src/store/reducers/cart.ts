import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido, Restaurante } from '../../pages/Home'

type CartState = {
  items: Restaurante[]
  pedido: Pedido[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  pedido: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante>) => {
      state.items.push(action.payload)
    },
    addItem: (state, action: PayloadAction<Pedido>) => {
      const p = state.pedido.find((pe) => pe.id === action.payload.id)
      if (!p) {
        state.pedido.push(action.payload)
      } else {
        alert('Pedido já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pedido = state.pedido.filter((p) => p.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, addItem, remove } = cartSlice.actions
export default cartSlice.reducer
