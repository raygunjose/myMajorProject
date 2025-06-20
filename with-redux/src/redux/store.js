import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './valueSlice';

const store = configureStore({
    reducer:{
        value: valueReducer,
    },
});

export default store;