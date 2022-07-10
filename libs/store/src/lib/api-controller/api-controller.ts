import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiController = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    tagTypes: ['USER-INFO'],
    endpoints: (builder) => ({
        getUserInfo: builder.query({
            query: () => '/user-info',
            providesTags: ['USER-INFO']
        })
    })
});
