import {combineReducers, createSlice, PayloadAction} from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'test',
    initialState: { token: null ,role:null,isLogin:false},
    reducers: {
        setCredentials: (state, data) => {
            state.token = data.payload.id_token;
            state.isLogin = true;
        },
    },
});
export const { setCredentials } = authSlice.actions

export default authSlice.reducer
