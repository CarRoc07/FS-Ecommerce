/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components"
import { FavoritesIcon, IconBackground } from "../styles/subnavbar.styles"
import { useCart } from "../context/CartContext"
import { useEffect, useState } from "react"

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    padding: 5px;
    transition: all 0.5s;
    border-right: 3px solid black;
    border-bottom: 2px solid black;
    z-index: 1;

    &:hover {
        scale: 1.15;
        border: none;
        z-index: 5;
    }

    @media (max-width: 1100px) {
        width: 150px;
    }

    @media (max-width: 700px) {
        width: 120px;
    }

    @media (max-width: 500px) {
        width: 140px;
    }

    @media (max-width: 400px) {
        width: 110px;
    }
`

const ImgCard = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;

    @media (max-width: 1100px) {
        width: 150px;
        height: 150px;
    }

    @media (max-width: 700px) {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 500px) {
        width: 140px;
        height: 140px;
    }

    @media (max-width: 400px) {
        width: 110px;
        height: 110px;
    }
    `

const TitleProduct = styled.h3`
`

const PriceProduct = styled.p``

const ContainerActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 6px;

    @media (max-width: 1100px) {
        width: 100%;
    }
    `

const ButtonAddToCart = styled.button`
    background-color: #ff8717;
    padding: 8px;
    font-weight: 600;
    border-radius: 18px;
    cursor: pointer;

    &:hover {
        background-color: #FF541F;
    }

    @media (max-width: 700px) {
        padding: 4px;
        width: 55px;
        font-size: 11px;
    }

    @media (max-width: 500px) {
        width: 70px;
    }
`

const CardProduct = ({id, name, price, img , stock }) => {
    const { addToCart, addToFavs, favs, removeToFavs} = useCart()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);

    if(loading) {
        return (
            <ContainerCard>
                <p style={{marginBottom: '10px', minWidth: "170px", minHeight: "210px", background: "linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)"}}></p>
                <p style={{marginBottom: '10px', minWidth: "150px", minHeight: "16px", background:"linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)"}}></p>
                <p style={{marginBottom: '10px', minWidth: "60px", minHeight: "10px",background:"linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)"}}></p>
            </ContainerCard>
        )
    }

    const addOrRemoveToFavs = (id) => {
        if(favs.find(fav => fav.id === id)) {
            removeToFavs({id})
        } else {
            addToFavs({ id, name, price, img })
        }
    }

    return (
        <ContainerCard>
            <ImgCard src={img} alt={name} />
            <TitleProduct>{name}</TitleProduct>
            <PriceProduct>${price}</PriceProduct>
            <ContainerActions>
                <ButtonAddToCart onClick={() => addToCart({ name, price, img, stock, id })} disabled={stock === 0}>
                    Add to Cart
                </ButtonAddToCart>
                <IconBackground onClick={() => addOrRemoveToFavs(id)} disabled={favs.find(fav => fav.id === id)}>
                    <FavoritesIcon />
                </IconBackground>
            </ContainerActions>
        </ContainerCard>
    )
}

export default CardProduct