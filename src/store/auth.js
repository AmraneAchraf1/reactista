import { createSlice } from "@reduxjs/toolkit";

const initialState = {login:false}

const authSlice = createSlice({
    name:'auth',
    initialState ,
    reducers : {
        login: (state, action) => {
            state.login = true
            
          },
        logout: (state, action) => {
            state.login = false
            
          },
        
    }
    
})

export const actions = authSlice.actions
export default authSlice.reducer;
