import React from 'react';
import style from './Preloader.module.css'

type PreloaderPropsType = {
};

const Preloader = (props: PreloaderPropsType) => {
    return (
            <div className={style.container}>
                <svg width="50px" height="50px" viewBox="0 0 50 50" className={style.svg}>
                    <circle className={style.bg} cx="25" cy="25" r="23"/>
                    <circle className={style.loader} cx="25" cy="25" r="23"/>
                </svg>
            </div>
    )
}

export default Preloader;
