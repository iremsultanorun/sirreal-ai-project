import { configureStore } from '@reduxjs/toolkit'
// import modalBarSlice from '../features/modal/modalBarSlice'
// import modalNotificationSlice from '../features/modal/modalNotificationSlice'
// import modalNotificationItemSlice from '../features/modal/modalNotificationItemSlice'
// import closeSlice from '../features/closeSlice'
import modalsSlice from '../features/modal/modalsSlice'



export const store = configureStore({
  reducer: {
  
    modals: modalsSlice,
  },
})