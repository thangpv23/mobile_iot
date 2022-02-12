import {combineReducers, createSlice, PayloadAction} from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'test',
    initialState: { token: null ,role:null},
    reducers: {
        setCredentials: (state, data) => {
            state.token = data.payload.id_token;
            state.role = data.payload.role[0];
        },
    },
});
export const { setCredentials } = authSlice.actions

export default authSlice.reducer
