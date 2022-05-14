import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import state from './Redux/state'

const App = () => {
    let message = state.profilePage.posts[0].message;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Routes>*/}
                    <Switch>
                        <Route path={'/profile'} render={() => <Profile message={message}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                    </Switch>
                    {/*</Routes>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;