import style from './Preloader2.module.css';
import React from 'react';

const Preloader2 = () => {
    return (
        <div className={style.display}>
            <div className={style.overlay}></div>
            <div className={`${style.pacman} ${style.pacmanReal}`}>
                <div className={style.pacmanMask}>
                    <div className={style.pacmanInner}></div>
                </div>
            </div>
            <div className={`${style.pacman} ${style.pacmanMirror}`}>
                <div className={style.pacmanMask}>
                    <div className={style.pacmanInner}></div>
                </div>
            </div>
            <div className={`${style.food} ${style.food1}`}></div>
            <div className={`${style.food} ${style.food2}`}></div>
            <div className={`${style.food} ${style.food3}`}></div>
            <div className={`${style.food} ${style.food4}`}></div>
            <div className={`${style.food} ${style.food5}`}></div>
            <div className={`${style.food} ${style.food6}`}></div>
            <div className={`${style.food} ${style.food7}`}></div>
            <div className={`${style.food} ${style.food8}`}></div>
            <div className={`${style.food} ${style.food9}`}></div>
            <div className={`${style.food} ${style.food10}`}></div>
            <div className={`${style.food} ${style.food11}`}></div>
        </div>
    )
}

export default Preloader2;