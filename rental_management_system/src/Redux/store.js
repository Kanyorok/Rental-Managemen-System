import { configureStore } from '@reduxjs/toolkit';
import allMoviesReducer from './allMovies/allMoviesSlice';
import singleProductReducer from './singleProduct/singleProductSlice';
import registerReducer from './Auth/registerUser';

const store = configureStore({
    reducer: {
        movies: allMoviesReducer,
        singleProduct: singleProductReducer,
        registereduser: registerReducer, 
    }
});

export default store;