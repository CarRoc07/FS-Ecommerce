import { useProducts } from "../../context/ProductsContext"
import confetti from 'canvas-confetti'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { styled } from "styled-components"

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 100;
    padding: 16px;
    width: 220px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #FF541F;
    -webkit-box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    border-radius: 16px;
    `

const ButtonClose = styled.button`
    padding: 8px;
    background: #FF8717;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 26px;
    border-radius: 12px;
    font-weight: 600;

    &:hover {
        background: #FF541F;
    }
`

export const ModalinfoLogout = () => {
    const { modalOpen, setModalIsOpen } = useProducts()
    const { auth } = useAuth()
    const navigate = useNavigate()

    if(!modalOpen || auth) return null

    return (
        <Container>
            <div style={{color: "black", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", flexDirection: "column", gap: "10px", padding: "5px" }}>
                <h2 style={{fontSize: "27px"}}> ERROR! SESSION EXPIRED. </h2>
                <h4 style={{fontWeight: "400"}}>
                Your user session has expired for security or inactivity reasons. Please log in again to continue using the application.
                </h4>
            </div>
            <ButtonClose onClick={() => {
                setModalIsOpen(false)
                navigate('/login')
                }}>LOGIN</ButtonClose>
        </Container>
    )
}

export const Modal = () => {
    const { modalOpen, setModalIsOpen } = useProducts()
    const { auth } = useAuth()

    if(!modalOpen || !auth) return null

    confetti()

    return (
        <Container>
            <div style={{color: "black", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", flexDirection: "column", gap: "10px", padding: "5px" }}>
                <h2 style={{fontSize: "27px"}}>CONGRATULATIONS!</h2>
                <img style={{width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%"}} src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1690914094/Eccomerce/Accesories/depositphotos_10548265-stock-illustration-vector-illustration-of-colorful-balloons_bwjijh.webp" alt="globos" />
                <h4 style={{fontWeight: "400"}}>Your order has been placed.
                We will contact you within 24 hours.
                <br />Thank you!</h4>
            </div>
            <ButtonClose onClick={() => setModalIsOpen(false)}>CONTINUE</ButtonClose>
        </Container>
    )
}
