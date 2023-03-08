import { configureStore } from "@reduxjs/toolkit";
import appSlice from './reducers'

const store = configureStore({
    reducer : {
        app : appSlice
    }
})

export default store;