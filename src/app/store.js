import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../features/countries'
import fruitsReducer from '../features/fruits'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    fruits: fruitsReducer
  },
})