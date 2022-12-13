import { createSlice } from "@reduxjs/toolkit";

const initialState = {isOpen:false}

const modalSlice = createSlice({
    name:'auth',
    initialState ,
    reducers : {
        openModal: (state, action) => {
            state.isOpen = true
            
          },
        closeModal: (state, action) => {
            state.isOpen = false
            
          },
        
    }
    
})

export const actions = modalSlice.actions
export default modalSlice.reducer;
