import { createSlice } from '@reduxjs/toolkit'

const initialState = { data: null }

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getItems(state, action) {
      state.data = action.payload
    },
  },
})

export const { getItems } = itemSlice.actions
export default itemSlice.reducer