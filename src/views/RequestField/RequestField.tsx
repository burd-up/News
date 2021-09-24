import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getNews, deleteAllNews} from "../../redux/news-reducer";
import search from '../../images/search.svg';
import style from './RequestField.module.css'

function RequestField() {

    const dispatch = useDispatch()

    const [request, setRequest] = useState('')
    const [placeholder, setPlaceholder] = useState({text: 'What are you looking for...', error: false})

    const makeRequest = () => {
        if(request === ''){
            setPlaceholder({text: 'Please enter your request', error: true})
        } else {
            dispatch(deleteAllNews());
            dispatch(getNews(1, 15, request));
            setPlaceholder({text: 'What are you looking for...', error: false})
        }
    }

  return (
    <div className={style.inputField}>
      <input type={"text"} placeholder={placeholder.text} className={style.inputField__input} value={request} onChange={e => setRequest(e.target.value)}/>
      <button className={style.inputField__button} onClick={makeRequest}>
          <img className={style.inputField__img} src={search}/>
      </button>
    </div>
  );
}

export default RequestField;
