import React from 'react';
import style from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Preloader2 from "./Components/common/preloader/Preloader2";;

const App = () => {
    return (
        <div className={style.container}>
            <HeaderContainer/>
            <div className={style.contentContainer}>
                <div className={style.navbar}>
                    <Navbar/>
                </div>
                <div className={style.content}>
                    <Switch>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/temp'} render={() => <Preloader2/>}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default App;