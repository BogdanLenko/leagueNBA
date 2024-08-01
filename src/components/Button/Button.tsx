import styles from "./Button.module.sass";

interface ButtonProps {
    text: string;
}
export function Button(props:ButtonProps) {


    return <>
        <button className={styles.button}>{props.text}</button>
    </>
}