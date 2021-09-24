import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "./redux/news-reducer";
import RequestField from './views/RequestField/RequestField';
import ListOfNews from "./views/ListOfNews/ListOfNews";
import Preloader from "./views/Preloader/Preloader";
import {RootState} from "./redux/store";

function App() {
    const requestStatus = useSelector((state: RootState) => state.news.requestStatus)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <div className="container">
                <header className={'header'}>
                    <RequestField/>
                </header>
                <ListOfNews/>
            </div>
        </div>
    );
}

export default App;
