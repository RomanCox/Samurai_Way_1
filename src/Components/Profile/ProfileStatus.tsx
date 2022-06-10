import React, {ChangeEvent, useState} from 'react'
import style from './Profile.module.css'
import MyInputText from "../common/input/MyInputText";

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status /*? props.status : 'no status'*/)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.statusContainer}>
            {!editMode &&
                <div className={style.status}>
                    <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'no status'}</span>
                </div>
            }
            {editMode &&
                 <div>
                    <MyInputText onChange={onChangeHandler} onBlur={deactivateEditMode} value={status} autoFocus={true} backgroundColor={style.backgroundInput}/>
                </div>
            }
        </div>
    )
};

/*class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className={style.status}>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={onChangeHandler} onBlur={deactivateEditMode} value={status} autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
}*/

export default ProfileStatus;