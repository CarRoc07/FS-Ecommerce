import CardProductCart from "./CardProductCart";
import { useCart } from "../context/CartContext";
import { 
    ButtonCart,
    ContainerButtons,
    ContainerCartGeneral,
    ContainerDetails,
    ContainerInfoCart,
    ContainerProductsCart,
    TitleCart  } from "../styles/cart.styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
    const navigate = useNavigate()
    const { isActiveCart, toggleCart, cart, clearCart } = useCart()
    const { auth } = useAuth()

    const redirectTo = () => {
        if(auth) {
            toggleCart()
            navigate('/checkout')
        } else {
            toggleCart()
            navigate('/login')
        }
    }

    return (
        <ContainerCartGeneral active={isActiveCart}>
        <TitleCart>Cart</TitleCart>
        <ContainerProductsCart>
            {
                cart.map(product => (
                    <CardProductCart key={product.id} {...product} />
                ))
            }
        </ContainerProductsCart>
        <ContainerInfoCart>
            <ContainerDetails>
                <p>Total:</p>
                <p>${
                    cart.reduce((acc, product) => {
                        return acc + (product.price * product.quantity)
                    }, 0)
                    .toFixed(2)
                    }</p>
            </ContainerDetails>
            <ContainerButtons>
                <ButtonCart onClick={() => clearCart()}>Clear Cart</ButtonCart>
                {
                    auth ? <ButtonCart onClick={redirectTo}>Checkout</ButtonCart> : ''
                }
            </ContainerButtons>
        </ContainerInfoCart>
        </ContainerCartGeneral>
    );
};

export default Cart;