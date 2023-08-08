import EditInfoForm from "../components/forms/EditInfoForm"
import OrdersList from "../components/orders/OrdersList"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom" 
import CustomConfirm from "../components/forms/CustomConfirm"
import { useProducts } from "../context/ProductsContext"
import {
    ContainerInfo,
    ContainerListOptions,
    Container,
    ListOptions,
    ListOption } from "./pages.styles"

const Profile = () => {
    const [option, setOption] = useState('profile')
    const { logout, getOrders } = useAuth()
    const { setModalIsOpen } = useProducts()
    const navigate = useNavigate()

    const logoutConfirm = () => {
        logout()
        navigate('/')
    }

    const getOrdersFromUser = async () => {
        const ok = await getOrders()
        if(!ok){
            setModalIsOpen(true)
            navigate('/')
        }
        setOption('orders')
    }

    return (
        <Container>
            <ContainerListOptions>
                <ListOptions>
                    <ListOption onClick={() => setOption('profile')}>Profile</ListOption>
                    <ListOption onClick={() => getOrdersFromUser()}>My orders</ListOption>
                    <ListOption onClick={() => setOption('logout')}>Logout</ListOption>
                </ListOptions>
            </ContainerListOptions>
            <ContainerInfo>
                {option === 'profile' && <EditInfoForm />}
                {option === 'orders' &&
                <OrdersList />}
            </ContainerInfo>
            <CustomConfirm show={option === 'logout'} onConfirm={logoutConfirm} onClose={() => setOption('profile')} />
        </Container>
    )
}

export default Profile