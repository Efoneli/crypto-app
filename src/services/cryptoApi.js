import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
const cryptoApiHeaders ={
    'X-RapidAPI-Key': '30d6f31d29msh80d0e602bfcb291p10394ajsnd9fc5b2e08a2',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'   
}

const baseUrl = 'coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'createApi',
    baseQuery: fetchBaseQuery*=({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('./exchanges')
        })
    })
})