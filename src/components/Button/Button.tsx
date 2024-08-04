import styles from "./Button.module.sass";
import {FC, ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
    const {onClick, children} = props
    return <>
        <button className={styles.button}
                onClick={onClick}
                disabled={props.disabled}
        >
            {children}
        </button>
    </>
}