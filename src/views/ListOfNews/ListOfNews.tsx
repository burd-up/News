import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import News from "../News";
import style from './ListOfNews.module.css'
import Preloader from "../Preloader/Preloader";

function ListOfNews() {
    const newsFromStore = useSelector((state: RootState) => state.news.news)
    const requestStatus = useSelector((state: RootState) => state.news.requestStatus)
    const dispatch = useDispatch()

    const news = newsFromStore.map(el => {
        return(
        <News {...el}/>
        )
    })
    let [request, setRequest] = useState('')

    return (
        <div className={style.listOfNews}>
        {
            requestStatus ? <div>{news}</div> : <Preloader/>
        }
        </div>
    );
}

export default ListOfNews;

