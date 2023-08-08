/* eslint-disable react/prop-types */
import { styled } from "styled-components"

const ContainerProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    `

const ImgProduct = styled.img`
    width: auto;
    height: auto;
    max-width: 70px;
    max-height: 70px;
    object-fit: contain;
    padding: 8px;
    background: #fff;
    border-bottom: 3px solid #38393a;
    border-right: 3px solid #38393a;
    `

const InfoQuantityProduct = styled.p``

const CardProductCheckout = ({img, name, price, quantity}) => {
    return (
        <ContainerProduct>
            <ImgProduct src={img} alt={name}/>
            <InfoQuantityProduct>
                {quantity} x ${price} = <b>${quantity * price}</b>
            </InfoQuantityProduct>
        </ContainerProduct>
    )
}

export default CardProductCheckout