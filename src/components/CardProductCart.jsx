/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { 
    TextQuantity,
    ButttonAddQuantity,
    ImgCartProduct,
    ContainerProductCart,
    ContainerQuantity } from "../styles/cart.styles"
import { useCart } from "../context/CartContext"


const CardProductCart = ({id, img, name, quantity, price}) => {
    const { addToCart, removeToCart } = useCart()

    return (
        <ContainerProductCart>
            <ImgCartProduct src={img} alt={name}/>
            <ContainerQuantity>
                <ButttonAddQuantity onClick={() => removeToCart({id})}>
                −
                </ButttonAddQuantity>
                <TextQuantity>
                    {quantity}
                </TextQuantity>
                <ButttonAddQuantity onClick={() => addToCart({id})}>
                +
                </ButttonAddQuantity>
            </ContainerQuantity>
            <h3 >${quantity * price}</h3>
        </ContainerProductCart>
    )
}

export default CardProductCart