import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    categories: ["Baking", "Pizza", "Cakes"],
    items: [
        { id: 1, title: "Bread", category: "Baking" },
        { id: 2, title: "Croissant", category: "Baking" },
        { id: 3, title: "Pizza Margherita", category: "Pizza" },
        { id: 4, title: "Pepperoni", category: "Pizza" },
        { id: 5, title: "Chocolate Cake", category: "Cakes" },
    ],


}
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export const { addItem, deleteItem } = productsSlice.actions;

export default productsSlice.reducer;
