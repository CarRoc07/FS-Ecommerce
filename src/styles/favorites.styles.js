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

export const ContainerFavoriteGeneral = styled.div`
    background: #161616;
    width: 300px;
    height: auto;
    position: absolute;
    top: 100px;
    right: 0;
    padding: 10px;
    color: white;
    opacity: ${({ active }) => (active ? 1 : 0)};
    animation: ${({ active }) => (active ? slideIn : slideOut)} 0.4s;
    transition: all 0.3s ease-in-out;
    display: ${({ active }) => (active ? 'flex' : 'none')};;
    flex-direction: column;
    gap: 18px;
    border-bottom-left-radius: 12px;

    @media (max-width: 1600px) {
        top: 135px;
        right: 0px;
    }

    @media (max-width: 600px) {
        padding: 60px 0px 0px 0px;
    }

    @media (max-width: 500px) {
        border-bottom-left-radius: 0px;
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;

export const TitleFavorite = styled.h2`
    font-size: 28px;
    text-align: end;
    margin-right: 20px;

    @media (max-width: 1500px) {
        text-align: center;
    }
`;

export const ContainerProductsFavorite = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 26px;
    min-height: 250px;
    max-height: 300px;
    overflow-y: scroll;
    margin-bottom: 10px;
    border-bottom: 2px solid #FF541F;
`;

export const ButtonFavorites = styled.button`
    background: #FF8717;
    padding: 10px;
    border-radius: 24px;
    font-weight: 500;
    cursor: pointer;
    font-weight: 600;
    color: white;
    margin: 0 auto;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;
    width: 150px;

    &:hover {
        background: #FF541F;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
    `;

export const ButtonFavoritesDelete = styled.button`
    background: #CB0303;
    padding: 8px;
    border-radius: 50%;
    font-weight: 500;
    cursor: pointer;
    font-weight: 600;
    color: white;
    margin: 10px;
    margin-bottom: 0px;
    transition: all 0.4s ease-in-out;

    &:hover {
        background: #FF0000;
        border: 2px solid white;
    }
`;

export const ContainerDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 80%;
`;

export const ContainerProductFavorite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
`

export const ImgFavoriteProduct = styled.img`
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