import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string,
    name: string,
};

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs' + props.id
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};