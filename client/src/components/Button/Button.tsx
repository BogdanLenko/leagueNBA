import styles from "./Button.module.sass";
import {FC, ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
    const {onClick, children, disabled} = props
    return <>
        <button className={styles.button}
                onClick={onClick}
                disabled={disabled}
        >
            {children}
        </button>
    </>
}