import React from 'react';
import MyPosts from './MyPosts/MyPosts'

type ProfileType = {
    message: string
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
                <MyPosts message={props.message}/>
            </div>
        </div>
    )
}

export default Profile;