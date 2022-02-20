import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const controllerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2:8081/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().loginInfo.token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization',` Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes:['Controller'],
    endpoints: (builder) => ({
        getControllers: builder.query({
            query:(roomId) => ({
                url:`/controllers?roomId=${roomId}`,
                method:"GET",
            }),
            providesTags: ['Controller'],
        }),
        addController :builder.mutation({
            query:({body,roomId}) =>({
                url:`/controllers?roomId=${roomId}`,
                method:"POST",
                body:body,
            }),
            invalidatesTags: ['Controller'],
        }),
        deleteController:builder.mutation({
            query:(id) =>({
                url:`rooms/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['Controller'],
        })
    }),
    reducerPath: "controller",
});
export const {useGetControllersQuery,useAddControllerMutation,useDeleteControllerMutation} = controllerApi;