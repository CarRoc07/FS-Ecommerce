import CardProductCheckout from "../components/CardProductCheckout"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import { Oval } from "react-loader-spinner"
import { useProducts } from "../context/ProductsContext"
import { useNavigate } from "react-router-dom"
import {
    ContainerGeneralCheckout,
    ContainerFormPay,
    FormStyled,
    InputStyled,
    ButtonPay,
    ContainerProducts,
    ContainerProductsToBuy } from "./pages.styles"

const Checkout = () => {
    const { cart, clearCart } = useCart()
    const { createOrder, loading } = useAuth()
    const { setModalIsOpen } = useProducts()
    const navigate = useNavigate()

    const organizeOrderItems = async (e) => {
        e.preventDefault()
        const orderItems = []
        cart.forEach(product => {
            orderItems.push({
                productID: product.id,
                quantity: product.quantity,
                price: product.price
            })
        })
        const ok = await createOrder({orderItems:orderItems})
        if(!ok){
            navigate('/')
            setModalIsOpen(true)
        }
        clearCart()
        setModalIsOpen(true)
        navigate('/')
    }

    return (
        <ContainerGeneralCheckout>
            <ContainerFormPay>
                <h1 style={{fontWeight: "700", margin: '0', fontSize: '40px'}}>CHECKOUT</h1>
                <h2 style={{fontWeight: "300"}}>Pay with your favorite Card!</h2>
                <FormStyled>
                    <InputStyled type="text" placeholder="Cardholder"/>
                    <InputStyled type="text" placeholder="Cardnumber"/>
                    <InputStyled type="date" placeholder="expiration date"/>
                    <InputStyled type="text" placeholder="CVV"/>
                    <ButtonPay type="submit" onClick={organizeOrderItems}>
                    {!loading ? 
                    'PAY' : 
                    <Oval 
                    height={30}
                    width={30}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#fff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}/>
                    }</ButtonPay>
                </FormStyled>
            </ContainerFormPay>
            <ContainerProducts>
                <h2>Products to buy</h2>
                <ContainerProductsToBuy>
                {
                cart.map(product => (
                    <CardProductCheckout key={product.id} {...product} />
                ))
                }
                </ContainerProductsToBuy>
                <p>Total: ....... ${
                    cart.reduce((acc, product) => {
                        return acc + (product.price * product.quantity)
                    }, 0)
                    .toFixed(2)
                    }</p>
            </ContainerProducts>
        </ContainerGeneralCheckout>
    )
}

export default Checkout