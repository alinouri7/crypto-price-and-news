import {createApi,fetchBaseQuery  }from "@reduxjs/toolkit/query/react"
 const cryptoApiHeaders ={
  'X-RapidAPI-Key': 'e0ca2043cbmsh71e848fa0ba217fp1e5a6djsn08aea7a42b9a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
 }
  
  const baseUrl = 'https://coinranking1.p.rapidapi.com';

  const createRequest = ( url)=> ({url, headers:cryptoApiHeaders})
 
  export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
      getCryptos : builder.query({
        query:(count)=> createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
        query: (coinId)=> createRequest(`/coin/${coinId}`)
       }),
       getCryptoHistory: builder.query({
        query: ({coinId,timePeriod})=> createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
       }),
       getCryptoExchange: builder.query({
        query: () => createRequest(`/coin/Qwsogvtv82FCd/exchanges`)
       }),

    })
  })
  
  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery ,
     useGetCryptoHistoryQuery , useGetCryptoExchangeQuery
  } = cryptoApi;



