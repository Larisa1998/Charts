import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountry: (state,action) => {
        state.value.push(action.payload)
    }
  },
})

export const { addCountry } = countriesSlice.actions

export default countriesSlice.reducer