import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './news-reducer'

export const store = configureStore({
    reducer: {
        news: newsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch