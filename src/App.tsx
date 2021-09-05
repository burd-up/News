import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import {getNews} from "./redux/news-reducer";

function App() {

    const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => {
            dispatch(getNews(1, 15, 'new'));
        }}>
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
