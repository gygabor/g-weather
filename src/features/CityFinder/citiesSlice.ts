import { createSlice } from '@reduxjs/toolkit'
import { City } from '@src/types'

const initialState: City[] = []

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    saveCity: (state, action) => {
      return [...state, action.payload]
    },
  },
})

export const { saveCity } = citiesSlice.actions
export default citiesSlice.reducer
