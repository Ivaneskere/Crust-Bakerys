import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    const raw = localStorage.getItem('cart')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const saveCart = (items) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items))
  } catch {
    void 0
  }
}

const initialState = {
  items: loadCart(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const p = action.payload
      const existing = state.items.find(i => i.id === p.id)
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1
      } else {
        state.items.push({ ...p, quantity: p.quantity || 1 })
      }
      saveCart(state.items)
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
      saveCart(state.items)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find(i => i.id === id)
      if (item) {
        item.quantity = Math.max(0, Number(quantity) || 0)
        if (item.quantity <= 0) state.items = state.items.filter(i => i.id !== id)
      }
      saveCart(state.items)
    },
    clearCart(state) {
      state.items = []
      saveCart(state.items)
    },
    setCart(state, action) {
      state.items = action.payload || []
      saveCart(state.items)
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart, setCart } = cartSlice.actions
export default cartSlice.reducer
