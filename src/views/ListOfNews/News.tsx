import React from 'react';
import {newsType} from "../../types/types";
import style from './ListOfNews.module.css'
import {dataFormatting} from "../../utils/dateFormatting";
import emptyImg from '../../images/emptyImg.png'

function News(props: newsType) {

    let img = props.media

    return (
        <div className={style.news}>
            <div className={style.news__description}>
                <a className={style.news__title} href={props.link}>{props.title}</a>
                <div className={style.news__summary}>
                    {props.summary? props.summary : <a href={props.link}>follow the link to learn more</a>}
                </div>
                <div className={style.news__date}>{dataFormatting(props.published_date)}</div>
            </div>
            <a href={props.link}>
                <img className={style.news__img} src={img? img : emptyImg}/>
                <a className={style.news__clean_url}>{props.clean_url}</a>
            </a>
        </div>
    );
}

export default News;

