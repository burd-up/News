import React from 'react';
import {newsType} from "../types/types";

function News(props:newsType) {

    return (
        <div>
            <img src={props.media}/>
            <div>{props.author}</div>
            <div>{props.title}</div>
        </div>
    );
}

export default News;

