import React from 'react';
import {sendMessage} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {DialogPageType} from "../../Redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogPageType,
};

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: any) => void,
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);