import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth"
import modalSlice from "./modalSlice";
import postSlice from "./postSlice";
import userSlice from "./userSlice";
const store = configureStore({
    reducer:{
        auth:authSlice,
        modal:modalSlice,
        users:userSlice,
        post:postSlice
    }
})
export default store;