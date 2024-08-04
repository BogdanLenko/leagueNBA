import styles from './InputReg.module.css';
import { FC } from 'react';

interface InputReg {
    type: string,
    options?: object,
    placeholder: string,
}

export const InputReg: FC<InputReg> = (props) => {
    
    
    return <>
        <h2 className={styles.text}>{props.type}</h2>
        <input className={styles.login}
               type={props.type}
               {...props.options}
               placeholder={props.placeholder}/>
    </>
}