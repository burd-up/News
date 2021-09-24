import React from 'react';
import style from './Preloader.module.css';

function Preloader() {

    return (
        <div className={style.preloader}>
            <div className={style.preloader__elements}>
                <span className={style.preloader__element}></span>
                <span className={style.preloader__element}></span>
            </div>
            <div className={style.preloader__elements + ' ' + style.elements2}>
                <span className={style.preloader__element}></span>
                <span className={style.preloader__element}></span>
            </div>
        </div>
    );
}

export default Preloader;

