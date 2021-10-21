import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews, setCurrentPage} from '../../redux/news-reducer'
import {RootState} from "../../redux/store";
import News from "./News";
import style from './ListOfNews.module.css'
import Preloader from "../Preloader/Preloader";

function ListOfNews() {
    const newsFromStore = useSelector((state: RootState) => state.news.news)
    const requestStatus = useSelector((state: RootState) => state.news.requestStatus)
    const currentPage = useSelector((state: RootState) => state.news.currentPage)
    const currentRequest = useSelector((state: RootState) => state.news.currentRequest)
    const dispatch = useDispatch()

    const news = newsFromStore.map(el => {
        return (
            <News {...el}/>
        )
    })

    const addNews = () => {
        dispatch(getNews(currentPage+1, 10 , currentRequest))
        dispatch(setCurrentPage({page: currentPage+1}))
    }

    return (
            <div className={style.listOfNews}>
                {news}
                <div className={style.listOfNews__buttonContainer}>
                    {newsFromStore.length && requestStatus === 'true'? <button className={style.listOfNews__button} onClick={addNews}> show more ...</button> : null}
                </div>
                <div className={style.listOfNews__preloader}>{requestStatus === 'false'? <Preloader/> : null}</div>
                <div className={style.listOfNews__error}>{requestStatus !== 'false' && requestStatus !== 'true'? requestStatus : null}</div>
            </div>
    );
}

export default ListOfNews;

