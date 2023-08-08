import styled from 'styled-components';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 14px;
    background-color: #fff;
    max-width: 1650px;
    margin: 0 auto;
    box-sizing: border-box;
    margin: -1.5px auto;
    border-bottom: 4px solid black;

    @media (max-width: 1000px) {
        justify-content: center;
        gap: 100px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`;

export const LogoText = styled.h2`
    font-size: 32px;
    font-weight: bolder;
    color: #FF8717;
    margin: 0;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: black;
`;

export const SearchInput = styled.input`
    padding: 11px 14px;
    width: 350px;
    border: none;
    border-radius: 20px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    outline: none;
    background: #eee;

    @media (max-width: 1000px) {
        width: 270px;
    }

    @media (max-width: 500px) {
        width: 200px; 
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const PhoneIcon = styled(AiOutlinePhone)`
    font-size: 30px;
    margin-right: 5px;
    padding: 8px;
    background: #eee;
    border-radius: 50%;
    color: black;
`;

export const TextContact = styled.p`
    margin: 0;
    padding: 0;
`

export const SearchIcon = styled(MdSearch)`
    font-size: 20px;
    margin: 0px 10px;
    color: #fff;
    cursor: pointer;
    background: black;
`;