import './App.css'
import {SubmitHandler, useForm} from "react-hook-form";

function App() {

    interface IForm {
        'email': string,
        'password': string,
    }

    const {register, handleSubmit, formState: { errors }, formState} = useForm<IForm>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data)
    }

    const emailError = formState.errors['email']?.message



  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='enter your e-mail' {...register('email', {
                required: 'this field is required.',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Please enter a valid email address',
                }
            })} />
            {emailError && <p style={{
                color: 'red',
            }}>{emailError}</p>}
            <input type="password" placeholder='password' {...register('password', {
                required: 'this field is required.',
                minLength: 8,
            })}/>
            {errors.password && <p style={{color: 'red', fontSize: 16}}>{errors.password.type === 'minLength' ? 'Пароль должен быть не менее 8 символов' : "это поле обязательно"}</p>}
            <button>submit</button>
        </form>
    </>
  )
}


export default App
