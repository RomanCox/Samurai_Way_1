import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {DialogPageType} from "../../Redux/store";

type DialogsPropsType = {
    dialogsPage: DialogPageType,
    addMessage: () => void,
    updateNewMessageText: (newText: string) => void,
};

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <MessageItem message={m.message}/>);
    let NewMessageElement = React.createRef<HTMLTextAreaElement>();
    let onClickHandler = () => {
        props.addMessage();
    };

    let onChangeHandler = () => {
        if (NewMessageElement.current) {
            props.updateNewMessageText(NewMessageElement.current.value)
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                    <textarea
                        placeholder='Enter your message'
                        ref={NewMessageElement}
                        onChange={onChangeHandler}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;