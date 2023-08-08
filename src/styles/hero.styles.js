import { styled } from "styled-components";

export const ContainerHero = styled.div`
    position: relative;
    background: url('https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689721779/Eccomerce/90473_uhjto5.jpg');
    margin: 0 auto;
    height: 500px;
    background-size: cover;
    z-index: 0;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 650px) {
        height: 450px;
    }

    @media (max-width: 500px) {
        height: 650px;
    }
`

export const SliceContainer = styled.div`
    margin: 0 auto;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        gap: 20px;
    }
`;

export const ProductImage = styled.img`
    width: auto;
    height: auto;
    max-width: 350px;
    max-height: 380px;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 650px) {
        max-width: 200px;
        max-height: 230px;
    }
`;

export const ProductInfo = styled.div`
    margin-left: 20px;
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 18px;

    @media (max-width: 1000px) {
        gap: 8px;
    }

    @media (max-width: 650px) {
        gap: 9px;
    }
`;

export const TitleDiscount = styled.h2`
    font-size: 23px;
    font-weight: 100;
    margin-bottom: 5px;
    background: #FF8717;
    border-radius: 16px;
    padding: 5px 10px;

    @media (max-width: 650px) {
        font-size: 19px;
    }

    @media (max-width: 500px) {
        width: 100%;
        text-align: center;
        font-size: 16px;
    }
`;

export const ProductTitle = styled.h3`
    font-size: 60px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 1000px) {
        font-size: 45px;
    }
`;

export const ProductPrice = styled.p`
    font-size: 36px;
    font-weight: 500;

    @media (max-width: 1000px) {
        font-size: 30px;
    }
`;

export const ContainerIndicator = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    `

export const IndexIndicator = styled.div`
    padding: 0px 8px;
    background-color:  ${(props) => (props.select ? '#FF8717' : '#333')};
    border-radius: 16px;
    height: 10px;
    width: 30px;
    cursor: pointer;
    `
