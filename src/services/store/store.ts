import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from '@src/features/CityFinder'

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
})

export default store
