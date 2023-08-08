import { styled } from "styled-components";

// login and register page

export const ContainerGeneral = styled.div`
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689721779/Eccomerce/90473_uhjto5.jpg');
    margin: 0 auto;
    height: 500px;
    background-size: cover;
    z-index: 0;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    gap: 60px;
    `

export const ContainerAsideInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 45%;

    @media (max-width: 650px) {
        display: none;
    }
    `

export const LogoTextAuth = styled.h2`
    font-size: 52px;
    font-weight: bolder;
    color: #FF8717;
    margin: 0;
`;

// profile

export const Container = styled.div`
    margin: 0 auto;
    height: 500px;
    z-index: 0;
    display: flex;
    color: white;
    align-items: center;
    gap: 70px;
    background: #23292D;

    @media (max-width: 870px) {
        gap: 40px;
    }

    @media (max-width: 830px) {
        gap: 10px;
    }

    @media (max-width: 670px) {
        flex-direction: column;
        margin: 0;
    }
    `

export const ContainerListOptions = styled.div`
    background: #191D22;
    padding: 10px;
    width: 250px;
    height: 100%;

    @media (max-width: 830px) {
        width: 120px;
    }

    @media (max-width: 670px) {
        width: 100%;
        height: auto;
        padding: 10px 0px 0px 0px;
    }

    `

export const ListOptions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 95%;
    padding: 5px;

    @media (max-width: 1150px) {
        padding: 22px 5px;
    }

    @media (max-width: 670px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        gap: 8px;
        padding: 16px 0px 0px 0px;
    }

    `

export const ListOption = styled.li`
    list-style: none;
    cursor: pointer;
    font-size: 30px;
    width: 100%;
    padding: 10px;

    &:hover {
        background: #2E3B55;
    }

    @media (max-width: 670px) {
        width: 100px;
        padding: 3px;
        text-align: center;
    }

    @media (max-width: 400px) {
        font-size: 26px;
    }
    `

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 75%;
    width: 40%;

    @media (max-width: 870px) {
        width: auto;
        height: auto;
        justify-content: center;
        padding: 16px 0px;
    }

    @media (max-width: 400px) {
        height: 100%;
        padding: 16px 0px;
    }
    `


//checkout

export const ContainerGeneralCheckout = styled.div`
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689721779/Eccomerce/90473_uhjto5.jpg');
    margin: 0 auto;
    height: 500px;
    background-size: cover;
    padding: 20px;
    z-index: 0;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    gap: 75px;

    @media (max-width: 700px) {
        gap: 10px;
    }

    @media (max-width: 700px) {
        flex-direction: column-reverse;
        height: auto;
        padding: 40px 0px;
    }
    `

export const ContainerFormPay =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    width:300px;

    @media (max-width: 380px) {
        width: 250px;
    }
    `

export const ContainerProducts = styled.div`
    background: #161616;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    /* border-radius: 0px 16px 16px 0px; */
    border-right: 3px solid #aaa;
    border-bottom: 2px solid #aaa;

    @media (max-width: 380px) {
        padding: 8px;
    }
    `

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    `

export const InputStyled = styled.input`
    padding: 12px;
    border: none;
    outline: none;
    background: #fff;
    box-shadow: 0px 0px 5px #ccc;
    `

export const ButtonPay = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    border: none;
    background: #FF8717;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-right: 3px solid white;
    border-bottom: 2px solid white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #FF541F;
    }
    `

export const ContainerProductsToBuy = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 13px;
    max-height: 300px;
    overflow-y: scroll;
    padding: 12px 30px;
`;