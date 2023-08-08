import { useNavigate } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { useAuth } from "../../context/AuthContext"
import { useForm } from "react-hook-form"
import { Oval } from "react-loader-spinner"
import { useProducts } from '../../context/ProductsContext'
import {
    InputStyled,
    StyledEditInfoForm,
    TextInfoEmail,
    DivInputsStyled,
    ButtonStyled,
    InputStyledData
} from './forms.styles'

const EditInfoForm = () => {
    const { email, logout, loading, updateUser } = useAuth()
    const { setModalIsOpen  } = useProducts()
    const { handleSubmit, register } = useForm()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const ok = await updateUser(data)
        if (!ok){
            setModalIsOpen(true)
            navigate('/')
        }
        logout()
        navigate('/')
    })

    return (
        <StyledEditInfoForm onSubmit={onSubmit}>
            <DivInputsStyled>
                <TextInfoEmail>{email}</TextInfoEmail>
                <InputStyledData type="text" name="newName" placeholder="Nombre" {...register('newName')}/>
            </DivInputsStyled>
            <DivInputsStyled>
                <InputStyledData type="text" name="newLast_name" placeholder="Apellido" {...register('newLast_name')}/>
                <InputStyledData type="password" name="newPassword" placeholder="Password" {...register('newPassword', {pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})}/>
            </DivInputsStyled>
            <ButtonStyled type="submit">
                {!loading ? 'Save' : <Oval 
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
            </ButtonStyled>
        </StyledEditInfoForm>
    )
}

export default EditInfoForm