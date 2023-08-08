import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        width: 0;
        height: 0;
        opacity: 0;
    }
    to {
        width: 250px;
        height: 450px;
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        width: 250px;
        height: 450px;
        opacity: 1;
    }
    to {
        width: 0;
        height: 0;
        opacity: 0;
    }
`

export const ContainerCartGeneral = styled.div`
    background: #161616;
    width: 300px;
    height: 450px;
    position: absolute;
    top: 100px;
    right: 40px;
    padding: 12px;
    color: white;
    opacity: ${({ active }) => (active ? 1 : 0)};
    animation: ${({ active }) => (active ? slideIn : slideOut)} 0.4s;
    transition: all 0.3s ease-in-out;
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    gap: 12px;
    border-bottom-left-radius: 12px;

    @media (max-width: 1250px) {
        top: 135px;
        right: 0px;
    }

    @media (max-width: 600px) {
        top: 185px;
    }

    @media (max-width: 500px) {
        top: 163px;
        border-bottom-left-radius: 0px;
    }

    @media (max-width: 350px) {
        padding: 6px;
        width: 290px;
        height: auto;
    }
`;

export const TitleCart = styled.h2`
    font-size: 28px;
    text-align: end;
    margin-right: 20px;
`;

export const ContainerProductsCart = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;
    min-height: 250px;
    max-height: 300px;
    overflow-y: scroll;
`;

export const ContainerInfoCart = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    border-top: 2px groove #FF8717;
    border-bottom: 2px groove #FF8717;
    `

export const ButtonCart = styled.button`
    background: #FF8717;
    padding: 10px;
    border-radius: 24px;
    cursor: pointer;
    font-weight: 600;
    color: white;
    margin: 10px;

    transition: all 0.3s ease-in-out;

    &:hover {
        background: #FF541F;
    }

    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (max-width: 350px) {
        font-size: 19px;
    }
    `;

export const ContainerDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 80%;

    @media (max-width: 850px) {
        font-size: 22px;
    }
`;

export const ContainerProductCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
`

export const ImgCartProduct = styled.img`
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

export const ContainerQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    max-width: 90px;
    `

export const ButttonAddQuantity = styled.button`
    padding: 8px;
    border-radius: 22px;
    background: #FF8717;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    font-weight: bold;
    font-size: 16px;
    color: #fff;

    &:hover {
        background: #FF541F;

    }
    `

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    `

export const TextQuantity = styled.p`
    border: none;
    outline: none;
    cursor: auto;
    text-align: center;
    font-size: 21px;
    `