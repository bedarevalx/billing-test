import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './slices/CountriesSlice';

const store = configureStore({
  reducer: {
    country: CountriesReducer,
  },
});

export default store;
