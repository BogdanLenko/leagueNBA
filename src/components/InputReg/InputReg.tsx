import styles from './InputReg.module.css';

interface InputReg {
    type: string,
    options?: object,
    placeholder: string,
}

export function InputReg(props: InputReg) {
    
    
    return <>
        <h2 className={styles.text}>{props.type}</h2>
        <input className={styles.login}
               type={props.type}
               {...props.options}
               placeholder={props.placeholder}/>
    </>
}