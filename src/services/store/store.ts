import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from '@src/features/SaveCity'

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
})

export default store
