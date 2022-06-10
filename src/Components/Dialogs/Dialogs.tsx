import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import MyButton from "../common/button/MyButton";
import {Field, reduxForm} from "redux-form";

export type addNewMessageType = {
    newMessageBody: string,
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component='textarea' placeholder='Enter your message'/>
            </div>
            <div>
                <MyButton>Send</MyButton>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm',})(AddMessageForm)

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <MessageItem key={m.id} message={m.message}/>);

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                    {/*<textarea
                        placeholder='Enter your message'
                        ref={NewMessageElement}
                        onChange={onChangeHandler}
                        value={props.dialogsPage.newMessageText}
                    />*/}
                </div>
                {/*<div>
                    <MyButton onClick={onClickHandler}>Send</MyButton>
                </div>*/}
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;