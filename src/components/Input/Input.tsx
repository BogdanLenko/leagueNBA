import styles from './Input.module.css';
import {FC, InputHTMLAttributes} from 'react';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    options?: object,
    title?: string,
}

export const InputReg: FC<Input> = (props) => {
    const {title, type, options, placeholder} = props
    return <>
        <h2 className={styles.text}>{title}</h2>
        <input className={styles.login}
               type={type}
               {...options}
               placeholder={placeholder}/>
    </>
}