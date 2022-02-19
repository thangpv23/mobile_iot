import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const deviceApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2:8081/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().loginInfo.token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes:['Device'],
    endpoints: (builder) => ({
        getDevices: builder.query({
            query:() => ({
                url:"/devices",
                method:"GET",
            }),
            providesTags: ['Device'],
        }),
        getDeviceById: builder.query({
            query:(id) =>({
                url:`devices/${id}`,
            })
        }),

        deleteDevice: builder.mutation({
            query:(id) =>({
                url:`devices/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['Device'],
        }),
        putDevice: builder.mutation({
            query:(body) =>({
                url:"/devices",
                method:"POST",
                body:body,
            }),
            invalidatesTags: ['Device'],
        })
    }),
    reducerPath: "device",
});
export const {useGetDevicesQuery,useGetDeviceByIdQuery,usePutDeviceMutation,useDeleteDeviceMutation,useAddDeviceMutation} = deviceApi;
