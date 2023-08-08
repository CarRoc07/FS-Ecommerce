import styled, { css } from 'styled-components';
import { IoMdPerson, IoMdHeartEmpty, IoMdCart } from 'react-icons/io';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ff8717;
    border-radius: 36px;
    color: black;
    max-width: 1300px;
    margin: 0 auto;
    margin-bottom: -32px;
    box-sizing: border-box;
    z-index: 100;
    border-left: 7px solid white;
    border-right: 7px solid white;
    -webkit-box-shadow: 0px 0px 17px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 17px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px -10px rgba(0,0,0,0.75);

    @media (max-width: 1300px) {
        border-radius: 0;
        border: none;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px;

    @media (max-width: 500px) {
        padding: 10px 0px;
        gap: 5px;
    }
`;

export const NavLink = styled(Link)`
    margin-right: 15px;
    margin-left: 15px;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        border-bottom: 2px solid black;
        scale: 1.1;
    }

    @media (max-width: 500px) {
        margin-right: 5px;
        margin-left: 5px;
    }
`;

export const IconBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: ${props => props.disabled ? "#DE1A1A"  : "#ccc" };
        scale: 1.1;
    }

    ${props =>
    props.disabled &&
        css`
        background: #DE1A1A;
    `}

    @media (max-width: 500px) {
        width: 33px;
        height: 33px;
    }
`;

export const UserIcon = styled(IoMdPerson)`
    font-size: 24px;
`;

export const FavoritesIcon = styled(IoMdHeartEmpty)`
    font-size: 24px;

    ${props =>
    props.onFavs &&
        css`
        cursor: not-allowed;
        background: red;
    `}
`;

export const CartIcon = styled(IoMdCart)`
    font-size: 24px;
`;