import { css, styled } from "styled-components";

// custom confirm

export const ConfirmContainer = styled.div`
    position: fixed;
    top: 35%;
    left: 50%;
    background: #191D22;
    transform: translate(-50%, -50%);
    z-index: 100;
    padding: 16px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #FF541F;
    -webkit-box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 81px -36px rgba(0,0,0,0.75);
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

export const ConfirmText = styled.p`
    color: white;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
`;

export const ConfirmButton = styled.button`
    padding: 6px 15px;
    font-size: 24px;
    margin: 0px 10px;
    cursor: pointer;
    font-weight: 600;
    background: #FF541F;
    color: white;
    border: none;
    border-radius: 10px;

    &:hover {
        background: #FF8717;
    }
`;

//Edit info form

export const StyledEditInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 45px;

    @media (max-width: 680px) {
        align-items: center;
        height: auto;
        gap: 35px;
    }
    `

export const InputStyled = styled.input`
    padding: 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    background: #fff;
    box-shadow: 0px 0px 3px #ccc;
    width: 220px;
    font-size: 18px;
    font-weight: 200;


    ${({ error }) =>
    error &&
        css`
        border: 2px solid red;
        box-shadow: 0px 0px 5px red;
    `}

    `

export const InputStyledData = styled.input`
    padding: 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    background: #fff;
    box-shadow: 0px 0px 3px #ccc;
    width: 220px;
    font-size: 18px;
    font-weight: 200;

    ${({ error }) =>
    error &&
        css`
        border: 2px solid red;
        box-shadow: 0px 0px 5px red;
    `}

    @media (max-width: 870px) {
        width: 150px;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
    `

export const DivInputsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 400px) {
        flex-direction: column;
    }
    `

export const ButtonStyled = styled.button`
    background: #FF8717;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    color: white;
    border: none;
    width: 180px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s ease-in-out;

    &:hover {
        background: #FF541F;
    }

    @media (max-width: 400px) {
        width: 65%;
    }
    `

export const TextInfoEmail = styled.p`
    padding: 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    background: #fff;
    box-shadow: 0px 0px 3px #ccc;
    width: 220px;
    font-size: 18px;
    font-weight: 500;
    color: black;

    @media (max-width: 870px) {
        width: 150px;
        font-size: 14px;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
    `

// login form

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 650px) {
        gap: 2px;
    }
    `

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF8717;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    font-weight: 600;
    color: white;
    margin: 5px auto;
    width: 100%;
    border: none;

    transition: all 0.3s ease-in-out;

    &:hover {
        background: #FF541F;
    }

    @media (max-width: 650px) {
        font-size: 25px;
    }
    `

export const ErrorMessage = styled.p`
    color: red;
    font-weight: 300;
    padding: 0;
    margin: 0;
    width: 200px;
    `