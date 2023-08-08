/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { styled, css } from "styled-components"
import CardProduct from "./CardProduct"
import { useState } from "react"
import { useProducts } from "../context/ProductsContext"

const ContainerGeneral = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    `

const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
    width: 90%;
    background-color: #fff;
    padding: 20px;
    -webkit-box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);

    @media (max-width: 850px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    `

const ContainerButtons = styled.div`
    background-color: #191D22;
    margin: 0 auto;
    width: 90%;
    padding: 20px;
    -webkit-box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 20px -17px rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    `

const ButtonStyled = styled.button`
    background: #FF8717;
    padding: 11px;
    border-radius: 24px;
    font-weight: 500;
    cursor: pointer;
    font-weight: 600;
    color: white;
    margin: 10px;
    font-size: 26px;
    border: none;

    transition: all 0.3s ease-in-out;

    &:hover {
        background: #FF541F;
    }

    ${props =>
        props.disabled &&
        css`
        background: #ccc;
        cursor: not-allowed;
        &:hover {
            background: #ccc;
        }
    `}
    `;

const Products = () => {
    const [limit, setLimit] = useState(8)
    const { sortedProducts } = useProducts()

    return (
        <ContainerGeneral >
            <ContainerProducts>
            {sortedProducts.slice(0, limit).map((product) => (
                <CardProduct key={product.id} {...product} /> ))
            }
            </ContainerProducts>
            <ContainerButtons>
                    <ButtonStyled disabled={limit <= 8} onClick={() => setLimit(limit - 8)}>← Prev</ButtonStyled>
                    <ButtonStyled disabled={limit >= sortedProducts.length} onClick={() => setLimit(limit + 8)}>Next →</ButtonStyled>
            </ContainerButtons>
        </ContainerGeneral>
    )
}

export default Products