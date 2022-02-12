import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./auth/auth";
import {homeApi} from "./home/home"
import {setupListeners} from "@reduxjs/toolkit/query";
import authReducer from "./auth/authSlice";
import {roomApi} from "./Room/room";
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [homeApi.reducerPath]: homeApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,
        loginInfo:authReducer,
    },
    middleware: (gDM) => gDM().concat(authApi.middleware,homeApi.middleware,roomApi.middleware),
    devTools:true,
});
setupListeners(store.dispatch)
