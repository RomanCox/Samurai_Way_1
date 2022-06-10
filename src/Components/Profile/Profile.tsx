import React from 'react'
import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType,
    isAuth: boolean,
    status: string,
    updateStatus: (status: string) => void,
};

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profileContainer}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {/*<MyPostsContainer />*/}
            {/*<MenuItem/>*/}
        </div>
    )
}

export default Profile;