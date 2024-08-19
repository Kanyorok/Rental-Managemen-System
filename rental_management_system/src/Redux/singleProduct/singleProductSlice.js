import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: {},
    success: false,
    error: null,
    loading: false
}

export const displaySingleProduct = createAsyncThunk('displayProduct/single', async (id)=> {
    const baseAPI = 'https://fakestoreapi.com/products';
        try {
            const response = await axios.get(`${baseAPI}/${id}`);
            const singleProd = response.data;
            return singleProd;
        } catch (error) {
            console.error('Error fetching single series:', error);
            return [];
        }
});


const singleProductSlice = createSlice({
    name: 'showSingleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(displaySingleProduct.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(displaySingleProduct.fulfilled, (state, action)=> {
                state.product = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(displaySingleProduct.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default singleProductSlice.reducer;

