import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                        <Route path={'/news'} render={() => <News />}/>
                        <Route path={'/music'} render={() => <Music />}/>
                        <Route path={'/settings'} render={() => <Settings />}/>
                        <Route path={'/users'} render={() => <UsersContainer />}/>
                    </Switch>
                </div>
            </div>
    );
};
export default App;