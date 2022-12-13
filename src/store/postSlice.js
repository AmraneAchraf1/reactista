import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const getPost = createAsyncThunk("post/getPost", 

async (id,thunkApi) =>{
    
    const {rejectWithValue} = thunkApi
    try{
        const users = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        const res = await users.data
        return res
    }catch(err){
        return rejectWithValue(err.message)
    }

})

const postSlice = createSlice({
    name:'post',
    initialState :{data:[], isLoading:false , err:{msg:"",isRejected:false}},
    extraReducers : {
        // all Users
        [getPost.pending] : (state, action) => {
            state.isLoading = true
            state.err.isRejected = false
        },
        [getPost.fulfilled] : (state, action) => {
            
            state.isLoading = false
            state.err.isRejected = false
            state.data = [...action.payload]

        },
        [getPost.rejected] : (state, action) => {
            state.isLoading = false
            state.err.isRejected = true
            state.err.msg = "Data Not Found"
        },
    }
    
})

export default postSlice.reducer;
