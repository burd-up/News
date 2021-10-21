import {createSlice} from '@reduxjs/toolkit'
import {newsType} from '../types/types';
import {AppDispatch} from './store';
import {apiNews} from "../api/api";

type initialStateType = {
    currentRequest: string
    currentPage: number
    requestStatus: string
    news: Array<newsType>
}

const initialState: initialStateType = {
    currentRequest: '',
    currentPage: 0,
    requestStatus: 'true',
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
        },
        changeRequestStatus: (state: initialStateType, action:{payload:{isRedy: string}}) => {
            state.requestStatus = action.payload.isRedy
        },
        setCurrentPage: (state:initialStateType, action: {payload:{page: number}}) => {
            state.currentPage = action.payload.page
        },
        setCurrentRequest: (state:initialStateType, action: {payload:{request: string}}) => {
            state.currentRequest = action.payload.request
        }


    },

})

export const {setNews, deleteAllNews, changeRequestStatus, setCurrentPage, setCurrentRequest} = newsSlice.actions

//thunk
export const getNews = (page:number = 1, pageSize:number = 10, q:string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(changeRequestStatus({isRedy:'false'}))
        let data = await apiNews.getNews(page, pageSize, q);

        data.status === 'ok' && dispatch(changeRequestStatus({isRedy:'true'}));
        data.status === 'ok' && dispatch(setNews({news: data.articles}));
        (data.status && data.status !== 'ok') && dispatch(changeRequestStatus({isRedy:data.status}));
    }
}

export default newsSlice.reducer