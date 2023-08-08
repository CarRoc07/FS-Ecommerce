import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useProducts } from '../context/ProductsContext';
import {
    NavbarContainer,
    SearchContainer,
    SearchInput,
    SearchIcon,
    ContactInfo,
    PhoneIcon,
    TextContact,
    LogoText
} from '../styles/navbar.styles'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const { handleSearch } = useProducts()
    const refInput = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const handleScrollToSection = () => {
        const section = document.getElementById('productsSection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <NavbarContainer>
            <LogoText onClick={() => navigate('/')}>T<b style={{color: 'black'}}>STORE</b></LogoText>
            {location.pathname === '/' ? (
                <SearchContainer>
                <SearchInput type="text" placeholder="Search products" ref={refInput} />
                <SearchIcon onClick={() => {
                    handleSearch(refInput.current.value);
                    handleScrollToSection();
                    refInput.current.value = '';
                    }} />                
            </SearchContainer>
            ) : (<></>) }
            <ContactInfo>
                <PhoneIcon />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextContact><b>Support</b> 123-456-7890</TextContact>
                    <TextContact><b>Email:</b> contacto@example.com</TextContact>
                </div>
            </ContactInfo>
        </NavbarContainer>
    );
};

export default Navbar;