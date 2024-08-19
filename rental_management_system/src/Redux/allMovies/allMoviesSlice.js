import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    error: null,
    success: false,
    loading: false,
}

export const displayMovies = createAsyncThunk('showMovies/all', async () => {
        const baseAPI = 'https://fakestoreapi.com/products';
        try {
            const response = await axios.get(baseAPI);
            
            return response.data;
        } catch (error) {
            console.error('Error fetching series:', error);
            return [];
        }
    },
)

const allMoviesSlice = createSlice({
    name: 'showAllMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(displayMovies.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(displayMovies.fulfilled, (state, action)=> {
                state.movies = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(displayMovies.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default allMoviesSlice.reducer;

