import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    categories: ["All", "Pizza", "Cakes", "Baking", "Хачапурі", "Sushi", "New"],
    selectedCategory: "All",
    items: [
        // Baking
            { id: 300, title: "Сонячник", category: "Baking", img: '/IMG/Baking/kzm_1.jpg' },
            { id: 301, title: "Мрія Пекаря", category: "Baking", img: '/IMG/Baking/sl_1.jpg' },
        // Хачапурі
            { id: 200, title: "Хачапурі сирне", category: "Хачапурі", img: '/IMG/Hachapuri/Khachapuri_with_Cheese.png' },
            { id: 201, title: "Хачапурі М'ясне", category: "Хачапурі", img: '/IMG/Hachapuri/Khachapuri_with_Meat.png' },
        // Pizza (examples)
            { id: 100, title: "Піца Салямі", category: "Pizza", img: '/IMG/Pizza/Pizza_Salami.png' },
            { id: 101, title: "Піца Кантарі", category: "Pizza", img: '/IMG/Pizza/Pizza_Kantari.png' },
            { id: 103, title: "Піца Баварська", category: "Pizza", img: '/IMG/Pizza/Pizza_Bavarian.png' },
            { id: 104, title: "Піца Чотири Сири", category: "Pizza", img: '/IMG/Pizza/Pizza_Four_cheeses.png' },
        // Sushi (examples)
            { id: 41, title: "Рол Філадельфія Де Люкс Лосось", category: "Sushi", img: '/IMG/Sushi/Roll_Philadelphia_De_luxe_Salmon.jpg' },
            { id: 42, title: "Рол Каліфорнія Манго", category: "Sushi", img: '/IMG/Sushi/Roll_California_mango.jpg' },
            { id: 43, title: "Рол Каліфорнія Зелений дракон", category: "Sushi", img: '/IMG/Sushi/Roll_California_Green_dragon.jpg' },
        // Tortu / Cakes
            { id: 500, title: "Торт Шер-Амі", category: "Cakes", img: '/IMG/Tortu/Tort_Sher_Ami.png' },
            { id: 501, title: "Торт Наполеон", category: "Cakes", img: '/IMG/Tortu/Tort_Napoleon.png' },
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
