import { createSlice } from '@reduxjs/toolkit'

interface City {
  name: string
  lat: number
  long: number
  timezone_offset: number
}

const initialState: City = {
  name: '',
  lat: 0,
  long: 0,
  timezone_offset: 0,
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    saveCity: (state, action) => {
      state = action.payload
    },
  },
})

export const { saveCity } = citySlice.actions
export default citySlice.reducer
