import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isOpenBarModal: false,
    isOpenNotificationModal: false,
    isOpenNotificationItemModal: false,
    isSubscribeButton:true,

}
export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpenBarModal = true;
            state.isOpenNotificationItemModal = true;
        },
        closeModal: (state) => {
            state.isOpenNotificationItemModal = false;
            state.isOpenBarModal = false;
            state.isSubscribeButton=false;

        },
        closeNotificationaModal: (state) =>{
            state.isOpenNotificationModal = false;
        },
        openNotificationaModal: (state) =>{
            state.isOpenNotificationModal = true;
        }
    }
})

export const { openModal, closeModal,closeNotificationaModal ,openNotificationaModal } = modalsSlice.actions
export default modalsSlice.reducer

