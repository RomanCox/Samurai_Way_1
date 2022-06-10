import React from 'react';
import {addPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {PostType} from "../../../Redux/profileReducer";

type mapStateToPropsType = {
    posts: Array<PostType>,
};

type mapDispatchToPropsType = {
    addPost: (newPostBody: any) => void,
};

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;