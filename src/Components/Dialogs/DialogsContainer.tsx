import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
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

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;