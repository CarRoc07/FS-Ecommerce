import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    height: 300px;
    margin-bottom: 50px;
    padding: 10px;

    @media (max-width: 1350px) {
        gap: 30px;
    }

    @media (max-width: 1000px) {
        gap: 16px;
        flex-wrap: wrap;
        height: auto;
    }

    @media (max-width: 900px) {
        flex-wrap: wrap;
        height: auto;
    }
`

export const CategoryTextTitle = styled.h2`
    font-size: 36px;
    text-align: start;
    padding: 12px;
    margin-left: 45px;
    font-weight: 400;

    @media (max-width: 500px) {
        text-align: center;
        margin-left: 0px;
    }
    `

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 130px;
    height: 180px;
    text-align: center;
    background-color: ${(props) => props.color};;
    padding: 27px 20px;
    border-radius: 60px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;
    font-family: 'Ubuntu', sans-serif;

    &:hover {
        scale: 1.25;
    }

    @media (max-width: 1000px) {
        padding: 10px 10px;
        gap: 0px;
        justify-content: center;
    }

    @media (max-width: 820px) {
        height: 150px;
        width: calc(27% - 16px);
    }
    `

export const ImgCategory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 1000px) {
        width: 100px;
        height: auto;
    }

    @media (max-width: 420px) {
        width: 70px;
        height: auto;
    }
    `

export const TitleCategory = styled.h3`
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    `

