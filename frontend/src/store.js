import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemSlice.js'

export const store = configureStore({
  reducer: {
    items: itemReducer,
  }
})
