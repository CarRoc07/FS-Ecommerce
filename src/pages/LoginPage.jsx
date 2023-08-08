/* eslint-disable react-hooks/exhaustive-deps */
import LoginForm from "../components/forms/LoginForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    ContainerAsideInfo,
    ContainerGeneral,
    LogoTextAuth    
} from './pages.styles';

const LoginPage = () => {
    const {auth} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if(auth) {
            navigate('/profile');
        }
    }, [auth])
    
    return (
        <ContainerGeneral>
            <ContainerAsideInfo>
                <LogoTextAuth>T<b style={{color: 'white'}}>STORE</b></LogoTextAuth>
                <h3>Ingresá para disfrutar de todas las ventajas</h3>
                <p>En Tstore, encontrarás un mundo de tecnología al alcance de tu mano.
                    Nuestra pasión es ofrecerte la mejor experiencia de compra en línea para que puedas explorar y adquirir una amplia gama de productos electrónicos de última generación.
                    Desde smartphones y portátiles hasta gadgets y accesorios, ¡lo tenemos todo para satisfacer tus necesidades tecnológicas!</p>
            </ContainerAsideInfo>
            <LoginForm />
        </ContainerGeneral>
    )
}

export default LoginPage