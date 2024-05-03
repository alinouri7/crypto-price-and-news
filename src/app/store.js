import {configureStore , getDefaultMiddleware} from "@reduxjs/toolkit"

import { cryptoApi } from "../services/cryptoApi"
import { cryptoNewsApi } from "../services/cryptoNewsApi"
 
const middleware = [...getDefaultMiddleware(), cryptoApi.middleware, 
    cryptoNewsApi.middleware ]

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
    middleware,
})