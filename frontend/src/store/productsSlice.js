import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_URL } from '../api/config'

const initialState = {
  categories: ["Khachapuri", "Baking", "Pizza", "Cake", "Sushi"],
  selectedCategory: "All",
  items: [],
  status: 'idle',
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch(`${API_URL}/products`)
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'success'
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  },
})

export const { setCategory } = productsSlice.actions
export default productsSlice.reducer
