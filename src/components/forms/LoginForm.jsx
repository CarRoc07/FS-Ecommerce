import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import { Oval } from "react-loader-spinner"
import { Link } from "react-router-dom"
import {
    FormStyled,
    ButtonSubmit,
    ErrorMessage,
    InputStyled
    } from "./forms.styles"

const LoginForm = () => {
    const {handleSubmit, register, formState: { errors }} = useForm()
    const { login, loading, errors: serverErrors } = useAuth()

    const onSubmit = handleSubmit (async (data) => {
        login(data)
    })

    return (
        <FormStyled onSubmit={onSubmit}>
            <InputStyled type="text" name="email" placeholder="Email" error={errors.email} {...register('email', {required: true, pattern: /^\S+@\S+\.\S+$/})} />

            {errors.email?.type === 'required' && <ErrorMessage >El correo electrónico es requerido</ErrorMessage>}
            {errors.email?.type === 'pattern' && <ErrorMessage >El correo electrónico no es válido</ErrorMessage>}

            <InputStyled type="password" name="password" placeholder="Password" error={errors.password} {...register('password', {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} />

            {errors.password?.type === 'required' && <ErrorMessage >La contraseña es requerida</ErrorMessage>}
            {errors.password?.type === 'pattern' && <ErrorMessage >La contraseña debe tener al menos 8 caracteres, incluyendo letras y números</ErrorMessage>}

            <p style={{margin: '0px'}}>Are you register? <Link style={{color: '#FF8717'}} to="/register">Register</Link> now</p>

            {serverErrors && serverErrors.error && <ErrorMessage >{serverErrors.error}</ErrorMessage>}

            <ButtonSubmit type="submit">
            {!loading ? 'Login' : <Oval
                height={17}
                width={30}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}/>}
            </ButtonSubmit>

        </FormStyled>
    )
}

export default LoginForm