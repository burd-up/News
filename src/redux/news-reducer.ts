import {createSlice} from '@reduxjs/toolkit'
import {newsType} from '../types/types';
import {AppDispatch} from './store';
import {apiNews} from "../api/api";

type initialStateType = {
    news: Array<newsType>
}

const initialState: initialStateType = {
    news: []
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state:initialStateType, action:{payload: { news: Array<newsType> }}) => {
            if (action.payload.news.length > 0) {
                state.news = [...state.news, ...action.payload.news]
            }
        },

    },

})

export const {setNews} = newsSlice.actions

//thunk
export const getNews = (page:number = 1, pageSize:number = 10, q:string) => {
    return async (dispatch: AppDispatch) => {
        let data = await apiNews.getNews(page, pageSize, q);
        data.status === 'ok' && dispatch(setNews({news: data.articles}));
    }
}

export default newsSlice.reducer