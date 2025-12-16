import { configureStore } from '@reduxjs/toolkit'
import modalsSlice from '../redux/modal/modalsSlice'

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
  },
})