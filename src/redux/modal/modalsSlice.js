import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    // isOpenBarModal: false,
    // isOpenNotificationModal: false,
    // isOpenNotificationItemModal: false,
    // isSubscribeButton:true,
    activeModal:null,
    selectedItem:null
}
export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state,action) => {
      state.activeModal=action.payload
        },
        closeModal: (state) => {
           state.activeModal=null
        },
        toggleModal: (state,action) =>{
            state.activeModal=state.activeModal===action.payload?null:action.payload
        },
        setSelectedItem:(state,action)=>{
            state.selectedItem=action.payload
        }
    }
})

export const { openModal, closeModal,toggleModal,setSelectedItem } = modalsSlice.actions
export default modalsSlice.reducer

