import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const getUsers = createAsyncThunk("users/getUsers", 

async (_,thunkApi) =>{
    
    const {rejectWithValue} = thunkApi
    try{
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        const res = await users.data
        return res
    }catch(err){
        return rejectWithValue(err.message)
    }

})

export const getUserById = createAsyncThunk("users/getUserById", 

async (id,thunkApi) =>{
    
    const {rejectWithValue} = thunkApi
    try{
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const res = await users.data
        return res
    }catch(err){
        return rejectWithValue(err.message)
    }

})

const userSlice = createSlice({
    name:'users',
    initialState :{data:[], isLoading:false , err:{msg:"",isRejected:false}},
    extraReducers : {
        // all Users
        [getUsers.pending] : (state, action) => {
            state.isLoading = true
            state.err.isRejected = false
        },
        [getUsers.fulfilled] : (state, action) => {
            
            state.isLoading = false
            state.err.isRejected = false
            state.data = [...action.payload]

        },
        [getUsers.rejected] : (state, action) => {
            state.isLoading = false
            state.err.isRejected = true
            state.err.msg = "Data Not Found"
        },
        // By Id
        [getUserById.pending] : (state, action) => {
            state.isLoading = true
            state.err.isRejected = false
        },
        [getUserById.fulfilled] : (state, action) => {
            
            state.isLoading = false
            state.err.isRejected = false
            state.data = [action.payload]

        },
        [getUserById.rejected] : (state, action) => {
            state.isLoading = false
            state.err.isRejected = true
            state.err.msg = "User Not Found"
            console.log(state.err.msg);
        },
    }
    
})

export default userSlice.reducer;
