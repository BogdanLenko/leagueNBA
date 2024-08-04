import styles from "./Sign_in.module.sass"
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../components/main.ts";
import {Input} from "../../components/main.ts";
import goal from "../../img/goal.png"
import {FC, useMemo} from "react";


interface IForm {
    'email': string,
    'password': string,
}

export const Sign_in: FC = () => {

    const {register, handleSubmit,
        formState: { errors }, formState} = useForm<IForm>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data)
    }

    const emailError = formState.errors['email']?.message
    const passwordError = errors.password && errors.password?.type === 'minLength'
        ? 'password must have more than 8 characters'
        : errors.password?.type === 'required'
        ? 'this field is required.'
        : ''

    const  emailOptions = useMemo(() => {
        return {
            ...register('email', {
                required: 'this field is required.',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Please enter a valid email address',}
            })
        }
    },[])

    const passOptions = useMemo(() => {
        return {
        ...register('password', {
            required: 'this field is required.',
            minLength: 8,
        })
        }
    }, [])

    const isDisabled = !formState.isValid

    return (
        <div className={styles.signIn}>
            <div className={styles.section1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.nonem}>
                        <Input title={'email address'} type={'email'} options={emailOptions} placeholder={'enter your email address'} />
                    </div>
                    <div className={styles.error}>
                        {emailError && <p>{emailError}</p>}
                    </div>
                    <div className={styles.nonem}>
                        <Input title={'password'} type={'password'} placeholder={'enter your password'} options={passOptions} />
                    </div>
                    <div className={styles.error}>
                        <p style={{color: "red",}}>{passwordError}</p>
                    </div>
                    <Button disabled={isDisabled}>sign in</Button>
                </form>
            </div>

            <div className={styles.section2}>
                <img src={goal} alt="goal"/>
            </div>
        </div>
    )
}