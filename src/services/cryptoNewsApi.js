import {createApi,fetchBaseQuery  }from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders ={
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'e0ca2043cbmsh71e848fa0ba217fp1e5a6djsn08aea7a42b9a',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
   

   const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

   const createRequest = ( url)=> ({url, headers:cryptoNewsHeaders})


 export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewaApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
      getCryptoNews : builder.query({
        query:({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}
        &safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
      }),
      
    })
  })

  export const { useGetCryptoNewsQuery ,  } = cryptoNewsApi; 

 