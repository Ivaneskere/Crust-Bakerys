import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    categories: ["Baking", "Pizza", "Cakes", "Sushi"],
    selectedCategory: "All",
    items: [
        { id: 1, title: "Hachapuri", category: "Baking", img: './IMG/Hachapuri/Kh_2.png'  },
        { id: 2, title: "Sushi1", category: "Sushi", img: './IMG/Sushi/Roll_1.jpg' },
        { id: 3, title: "Sushi2", category: "Sushi", img: './IMG/Sushi/Roll_2.jpg' },
        { id: 4, title: "Sushi3", category: "Sushi", img: './IMG/Sushi/Roll_3.jpg' },
        { id: 5, title: "Sushi4", category: "Sushi", img: './IMG/Sushi/Roll_4.jpg' },
        { id: 6, title: "Pizza1", category: "Pizza", img: './IMG/Pizza/Pizza_1.png' },
        { id: 7, title: "Pizza2", category: "Pizza", img: './IMG/Pizza/Pizza_2.png' },
        { id: 8, title: "Pizza3", category: "Pizza", img: './IMG/Pizza/Pizza_3.png' },
        { id: 9, title: "Pizza4", category: "Pizza", img: './IMG/Pizza/Pizza_4.png' },
        { id: 10, title: "Chocolate Cake1", category: "Cakes", img: './IMG/Tortu/Tort_1.png' },
        { id: 11, title: "Chocolate Cake2", category: "Cakes", img: './IMG/Tortu/Tort_2.png' },
        { id: 12, title: "Chocolate Cake3", category: "Cakes", img: './IMG/Tortu/Tort_3.png' },
        { id: 13, title: "Chocolate Cake4", category: "Cakes", img: './IMG/Tortu/Tort_4.png' },
    ],
   


}
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory(state,action){
            state.selectedCategory = action.payload
        }

    }
})

export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;
