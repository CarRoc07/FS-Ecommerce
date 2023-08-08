import { styled } from "styled-components"
import { MdPlace } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    `

export const SubscribeContainer = styled.div`
    padding: 25px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FF541F;

    @media (max-width: 600px) {
        padding: 14px 20px;
    }

    @media (max-width: 500px) {
        padding: 6px 10px;
        justify-content: center;
    }
`

export const SubscribeTitle = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: white;

    @media (max-width: 600px) {
        font-size: 22px;
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const SubscribeSubtitle = styled.p`
    font-size: 18px;
    color: white;

    @media (max-width: 600px) {
        display: none;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;

    @media (max-width: 600px) {
        padding: 4px 10px;
    }
    `

export const InputStyled = styled.input`
    padding: 16px;
    border-radius: 5px 0px 0px 5px;
    border: none;
    width: 250px;
    outline: none;


    @media (max-width: 600px) {
        width: 150px;
    }
    `

export const UbicationDiv = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
    `

export const ButtonStyled = styled.button`
    padding: 16px;
    border-radius: 0px 5px 5px 0px;
    background: black;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        background: #161616;
    }

    @media (max-width: 600px) {
        padding: 16px;
    }
    `

export const TextAllRights = styled.p`
    font-size: 20px;
    color: white;

    @media (max-width: 770px) {
        font-size: 14px;
    }
    `

export const ContainerInfoDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #23292D;
    padding: 60px 30px;
    color: white;

    @media (max-width: 1000px) {
        justify-content: space-around;
    }

    @media (max-width: 590px) {
        justify-content: space-between;
    }

    @media (max-width: 500px) {
        justify-content: center;
    }
    `

export const TelephoneIcon = styled(AiOutlinePhone)`
    font-size: 30px;
    margin-right: 5px;
    padding: 8px;
    background: #FF8717;
    border-radius: 50%;
    color: white;
    border: 2px solid black;

`;

export const UbicationIcon = styled(MdPlace)`
    font-size: 30px;
    margin-right: 5px;
    padding: 8px;
    background: #FF8717;
    border-radius: 50%;
    color: white;
    border: 2px solid black;
    `

export const ContainerGetInOn = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 590px) {
        gap: 3px;
    }

    @media (max-width: 500px) {
        display: none;
    }
    `

export const LogoTextFooter = styled.h2`
    font-size: 50px;
    font-weight: bolder;
    color: #FF8717;
    margin: 0;
    cursor: pointer;
`;

export const ImgGetInOn = styled.img`
    width: 150px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: 590px) {
        width: 120px;
        height: 45px;
    }

    @media (max-width: 500px) {
        width: 100px;
        height: 45px;
    }
    `

export const ContainerSocial = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    background: #191D22;
    padding: 10px;
    color: white;

    @media (max-width: 700px) {
        justify-content: space-around;
    }

    @media (max-width: 590px) {
        justify-content: space-between;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }

    `

export const ContainerPaymentMethods = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
    `

export const ImgPaymentMethods = styled.img`
    width: 65px;
    height: 43px;
    margin-left: 12px;
    opacity: .7;
    `