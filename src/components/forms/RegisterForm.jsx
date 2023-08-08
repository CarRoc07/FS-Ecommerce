import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useAuth } from "../../context/AuthContext"
import { Oval } from "react-loader-spinner"
import {
    FormStyled,
    ButtonSubmit,
    ErrorMessage,
    InputStyled
    } from "./forms.styles"

const RegisterForm = () => {
    const {handleSubmit, register, formState: { errors }} = useForm()
    const { signUp, loading, errors: serverErrors } = useAuth()

    const onSubmit = handleSubmit (async (data) => {
        signUp(data)
    })

    return (
        <FormStyled onSubmit={onSubmit}>
            <InputStyled type="text" name="name" placeholder="Nombre" error={errors.name} {...register('name', {required: true})} autoFocus/>

            {errors.name && <ErrorMessage >El nombre es requerido</ErrorMessage>}

            <InputStyled type="text" name="last_name"  placeholder="Apellido" error={errors.last_name} {...register('last_name', {required: true})} />

            {errors.last_name && <ErrorMessage >El Apellido es requerido</ErrorMessage>}

            <InputStyled type="text" name="email" placeholder="Email" error={errors.email} {...register('email', {required: true, pattern: /^\S+@\S+\.\S+$/})} />

            {errors.email?.type === 'required' && <ErrorMessage >El correo electrónico es requerido</ErrorMessage>}
            {errors.email?.type === 'pattern' && <ErrorMessage >El correo electrónico no es válido</ErrorMessage>}

            <InputStyled type="password" name="password" placeholder="Password" error={errors.password} {...register('password', {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} />

            {errors.password?.type === 'required' && <ErrorMessage >La contraseña es requerida</ErrorMessage>}
            {errors.password?.type === 'pattern' && <ErrorMessage >La contraseña debe tener al menos 8 caracteres, incluyendo letras y números</ErrorMessage>}

            <p style={{margin: '0px'}}>Are you register? <Link style={{color: '#FF8717'}} to="/login">Login</Link> now</p>

            {serverErrors && serverErrors.error && <ErrorMessage >{serverErrors.error}</ErrorMessage>}

            <ButtonSubmit type="submit">
            {!loading ? 'Register' : <Oval
                height={30}
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

export default RegisterForm