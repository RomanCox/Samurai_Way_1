import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import style from './MyInputText.module.css'

// тип пропсов обычного input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего input будут такие же пропсы как у обычного input
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type MyInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном input
    onChangeText?: (value: string) => void,
    onEnter?: () => void,
    error?: string,
    spanClassName?: string,
    backgroundColor?: string,
    placeholder?: string,
    inputError?: boolean,
}

const MyInputText: React.FC<MyInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип input
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, inputError,
        backgroundColor,
        spanClassName, placeholder,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${style.span} ${inputError ? style.spanError : ''} ${spanClassName ? spanClassName : ''}`
    /*const finalInputClassName = `${s.errorInput} ${className}` // need to fix with (?:) and s.superInput*/
    /*const myInputClass = `${className} ${style.input}`*/
    const myInputStyle = `${backgroundColor}
    ${style.input}
    ${error ? style.error : ''}
    ${inputError ? style.inputError : ''}`

    const barStyle = `${style.bar} ${inputError ? style.barError : ''}`

    return (
        <div className={style.container}>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                // className={finalInputClassName}
                className={myInputStyle}

                {...restProps} // отдаём input остальные пропсы если они есть (value например там внутри)
            />
            <span className={barStyle}>{}</span>
            <label className={style.label}>{placeholder}</label>

            {inputError && <span className={finalSpanClassName}>{error}</span>}
        </div>
    )
}

export default MyInputText
