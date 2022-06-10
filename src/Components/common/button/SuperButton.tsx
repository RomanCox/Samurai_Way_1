import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    textColor?: string,
    disabled?: boolean,
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        textColor, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    return (
        <button className={style.info} {...restProps} disabled={disabled}/>
    )
}

export default SuperButton;