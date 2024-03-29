import { configureStore } from '@reduxjs/toolkit'
import reducer from './gameSlice'

export const store = configureStore({
  reducer: reducer,
})
