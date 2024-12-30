import { createSlice } from "@reduxjs/toolkit";
const { VITE_URL_API } = import.meta.env;


export const productsSlice = createSlice({
    name: "tasks",
    initialState: {
        allProducts: [],
        productsByCategory: [],
    },
    reducers: {
        getAllProducts: (state,action) => {
            state.allProducts = action.payload
        },
        getAllProductByCategory: (state, action) => state.productsByCategory = action.payload,

    }
});

export const { getAllProducts, getAllProductByCategory } = productsSlice.actions;

export default productsSlice.reducer;