import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {DialogPageType} from "../../Redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogPageType,
};

type mapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (newText: string) => void,
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;