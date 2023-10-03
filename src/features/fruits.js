import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    addFruit: (state,action) => {
        state.value.push(action.payload)
    }
  },
})

export const { addFruit } = fruitsSlice.actions

export default fruitsSlice.reducer