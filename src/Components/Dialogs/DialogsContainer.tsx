import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import { Dispatch } from 'redux';
import {DialogPageType} from "../../Redux/dialogsReducer";

type mapStateToPropsType = {
    dialogsPage: DialogPageType,
};

type mapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (newText: string) => void,
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;