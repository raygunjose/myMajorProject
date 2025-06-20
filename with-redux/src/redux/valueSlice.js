import {createSlice} from '@reduxjs/toolkit';

const valueSlice = createSlice({
    name: 'value',
    initialState:{
        data: 'This is initial value'
    },
    reducers:{
        updateValue:(state, action) =>{
            state.data = action.payload;
        },
    },
});

export const {updateValue} = valueSlice.actions;
export default valueSlice.reducer;