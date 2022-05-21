import React from 'react'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif' alt=''/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;