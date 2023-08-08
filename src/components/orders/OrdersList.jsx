/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components"
import { useAuth } from "../../context/AuthContext"
import { useEffect, useState } from "react"

const ContainerOrders = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 13px;
    max-height: 400px;
    width: fit-content;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px;
    
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 670px) {
        flex-direction: row;
        max-height: 320px;
        width: 100%;
    }
    `

const ContainerOrder = styled.div`
    background: #191D22;
    padding: 16px;
    width: 200px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 500px) {
        width: 150px;
    }

    @media (max-width: 400px) {
        width: 120px;
    }

    @media (max-width: 340px) {
        width: 105px;
    }
    `

const ContainerOrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `

const TextInfo = styled.p`
    font-size: 19px;
    `

const TextInfoID = styled.p`
    font-size: 25px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`

const OrdersList = () => {
    const { orders } = useAuth();
    return (
        <ContainerOrders>
            {orders.length === 0 ? <p style={{fontSize: "30px"}}>No orders yet ...</p> : orders.map((order) => (
                    <CardOrder key={order.id} {...order}/>
            ))}
        </ContainerOrders>
    )
}

const CardOrder = ({id, orderItems, status, total}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, []);

    if(loading) {
        return (
            <ContainerOrder>
                <p style={{marginBottom: '10px', minWidth: "120px", borderRadius: "5px", minHeight: "60px", background: "linear-gradient(90deg, #2D3338 25%, #191D22 37%, #2D3338 63%)"}}></p>
                <ContainerOrderInfo>
                    <p style={{marginBottom: '10px', minWidth: "120px", borderRadius: "5px", minHeight: "10px", background: "linear-gradient(90deg, #2D3338 25%, #191D22 37%, #2D3338 63%)"}}></p>
                    <p style={{marginBottom: '10px', minWidth: "120px", borderRadius: "5px", minHeight: "10px", background: "linear-gradient(90deg, #2D3338 25%, #191D22 37%, #2D3338 63%)"}}></p>
                    <p style={{marginBottom: '10px', minWidth: "120px", borderRadius: "5px", minHeight: "10px", background: "linear-gradient(90deg, #2D3338 25%, #191D22 37%, #2D3338 63%)"}}></p>
                </ContainerOrderInfo>
            </ContainerOrder>
        )
    }

    return (
        <ContainerOrder>
            <TextInfoID>OrderID: <b>{id}</b></TextInfoID>
            <ContainerOrderInfo>
                <TextInfo>Items: <b>5</b></TextInfo>
                <TextInfo><b>{status}</b></TextInfo>
                <TextInfo>Total: <b>${total}</b></TextInfo>
            </ContainerOrderInfo>
        </ContainerOrder>
    )
}



export default OrdersList