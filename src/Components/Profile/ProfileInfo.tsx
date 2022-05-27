import React from 'react'
import {ProfileType} from "../../Redux/profileReducer";
import Preloader from "../common/preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType,
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img src='https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif' alt=''/>
                </div>
                <div>
                    <div>
                        <img src={props.profile.photos.large} alt={'avatar'}/>
                    </div>
                    <div>
                        {props.profile.aboutMe}
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileInfo;