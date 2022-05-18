import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route, Switch} from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import {ActionType, RootStateType, RootStoreType} from './Redux/store'
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: RootStoreType
    state: RootStateType,
    dispatch: (action: ActionType) => void,
};

const App = (props: AppPropsType) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path={'/profile'} render={() => <Profile
                            store={props.store}
                        />}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer
                            store={props.store}
                        />}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
    );
};
export default App;