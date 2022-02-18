import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {homeApi} from "../home/home";

export const roomApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2:8081/api/",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().loginInfo.token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes:['Room'],
    endpoints: (builder) => ({
        getRooms: builder.query({
            query:(homeId) => ({
                url:`/rooms?homeId=${homeId}`,
                method:"GET",
            }),
            providesTags: ['Room'],
        }),
        getRoomById: builder.query({
            query:(id) =>({
                url:`rooms/${id}`,
            })
        }),
        addRoom :builder.mutation({
            query:({body,homeId}) =>({
                url:`/rooms?homeId=${homeId}`,
                method:"POST",
                body:body,
            }),
            invalidatesTags: ['Room'],
        }),
        deleteRoom:builder.mutation({
            query:(id) =>({
                url:`rooms/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['Room'],
        })
    }),
    reducerPath: "room",
});

export const {useGetRoomsQuery,useGetRoomByIdQuery,useAddRoomMutation} = roomApi;