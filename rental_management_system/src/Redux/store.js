import { configureStore } from '@reduxjs/toolkit';
import allMoviesReducer from './allMovies/allMoviesSlice';
import singleProductReducer from './singleProduct/singleProductSlice';

const store = configureStore({
    reducer: {
        movies: allMoviesReducer,
        singleProduct: singleProductReducer, 
    }
});

export default store;