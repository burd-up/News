import {createSlice} from '@reduxjs/toolkit'
import {newsType} from '../types/types';
import {AppDispatch} from './store';
import {apiNews} from "../api/api";

type initialStateType = {
    requestStatus: boolean
    news: Array<newsType>
}

const initialState: initialStateType = {
    requestStatus: true,
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
        deleteAllNews: (state:initialStateType) => {
            state.news = []
        }, changeRequestStatus: (state: initialStateType, action:{payload:{isRedy: boolean}}) => {
            state.requestStatus = action.payload.isRedy
        }

    },

})

export const {setNews, deleteAllNews, changeRequestStatus} = newsSlice.actions

//thunk
export const getNews = (page:number = 1, pageSize:number = 10, q:string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(changeRequestStatus({isRedy:false}))
        let data = await apiNews.getNews(page, pageSize, q);
        data.status === 'ok' && dispatch(changeRequestStatus({isRedy:true}));
        data.status === 'ok' && dispatch(setNews({news: data.articles}));
    }
}

export default newsSlice.reducer