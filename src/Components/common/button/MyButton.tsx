import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
    textColor?: string,
    disabled?: boolean,
}

const MyButton: React.FC<MyButtonPropsType> = (
    {
        textColor, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName =
        disabled === true ? `${style.button} ${style.redText}`
            : `${style.button} 
    ${!textColor ? style.blueText
                : textColor === 'red' ? style.redText
                    : textColor === 'purple' ? style.purpleText
                        : textColor === 'green' ? style.greenText
                            : style.blueText
            }`

    return (
        <button
            className={finalClassName}
            disabled={disabled}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default MyButton;