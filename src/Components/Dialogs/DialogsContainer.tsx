import React from 'react';
import {RootStoreType} from "../../Redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: RootStoreType,
};

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageAC());
    };

    let updateNewMessageText = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    };

    return (<Dialogs
        dialogsPage={state}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
    />)
};

export default DialogsContainer;