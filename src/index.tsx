import store from "./Redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./Redux/store";

let rerenderState = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderState(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderState(state)
});