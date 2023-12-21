import { createSlice } from '@reduxjs/toolkit'
import { City } from '@src/types'

const initialState: City[] = [
  {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
    timezone_offset: 0,
  },
]

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    saveCity: (state, action) => {
      state = [...state, action.payload]
    },
  },
})

export const { saveCity } = citySlice.actions
export default citySlice.reducer
