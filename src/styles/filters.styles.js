import { styled } from "styled-components"
import { AiOutlineAppstore } from "react-icons/ai";

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    width: 85%;

`

export const Icon = styled(AiOutlineAppstore)`
    font-size: 40px;
    color: #ff8717;
    margin: 0;
    padding: 0;
    margin-right: 12px;

    @media (max-width: 500px) {
        margin-right: 6px;
        font-size: 28px;
    }
    `

export const Select = styled.select`
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #ff8717;
    padding: 8px;
    font-size: 14px;
    outline: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }

    @media (max-width: 500px) {
        padding: 5px;
        font-size: 12px;
    }
    `

export const ContainerResults = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ResultText = styled.h4`
    font-size: 20px;
    color: #888;
    font-weight: 400;

    @media (max-width: 500px) {
        font-size: 15px;
    }

    @media (max-width: 420px) {
        font-size: 12px;
    }
    `