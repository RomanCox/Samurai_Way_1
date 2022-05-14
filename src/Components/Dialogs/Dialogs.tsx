import React from 'react';
import s from './Dialogs.module.css';
import state from './../../Redux/state'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}
type MessageItemPropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs' + props.id
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsElement = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);
    let NewMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        if (NewMessageElement.current) {
            alert(NewMessageElement.current.value)
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={NewMessageElement}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;