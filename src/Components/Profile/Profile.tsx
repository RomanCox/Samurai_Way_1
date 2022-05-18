import React from 'react';
import {RootStoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: RootStoreType,
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif' alt=''/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                <MyPostsContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}

export default Profile;