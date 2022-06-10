import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {MyPostsPropsType} from "./MyPostsContainer";
import MyButton from "../../common/button/MyButton";
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostBody'} component={'textarea'} validate={[required, maxLength10]}/>
            </div>
            <div>
                <MyButton>Add post</MyButton>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'profileAddPostForm',})(AddPostForm)

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} post={p.message} likesCount={p.likesCount}/>);

    const addNewPost = (values: any) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div>
            My posts
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;