import React from 'react'
import style from './Profile.module.css'
import {ProfileType} from "../../Redux/profileReducer";
import Preloader2 from "../common/preloader/Preloader2";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../assets/images/user.png";


type ProfileInfoPropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader2/>
        /*return <Preloader/>*/
    } else {
        return (
            <div className={style.profileInfoContainer}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt={'avatar'} className={style.avatar}/>
                    : <img src={avatar} alt='no avatar'/>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        )
    }
}
export default ProfileInfo;