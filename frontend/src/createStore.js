import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemReducer.js'

const store = configureStore({
  reducer: itemReducer,
})

export default store