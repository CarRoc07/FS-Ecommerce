/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
    NavbarContainer,
    NavItems,
    NavLink,
    IconBackground,
    UserIcon,
    FavoritesIcon,
    CartIcon
} from '../styles/subnavbar.styles'
import { useAuth } from '../context/AuthContext';
import { FiArrowLeft } from 'react-icons/fi';
import { styled } from 'styled-components';

const ArrowLeft = styled(FiArrowLeft)`
    font-size: 33px;
    font-weight: bold;
    `

const SubNavbar = () => {
    const {toggleCart, toggleFavorites} = useCart()
    const navigate = useNavigate();
    const { auth } = useAuth()
    const location = useLocation();

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <NavbarContainer>
            <NavItems>
                <NavLink to="/"> <strong>{location.pathname === '/' ? 'Home' : (<ArrowLeft />)}</strong> </NavLink>
                {location.pathname === '/' && (
                <>
                    <NavLink onClick={() => handleScrollToSection('categoriesSection')}>
                        <strong>Shop</strong>
                    </NavLink>
                    <NavLink onClick={() => handleScrollToSection('footerSection')}>
                        <strong>Contact</strong>
                    </NavLink>
                </>
            )}
            </NavItems>
            <NavItems>
                <IconBackground onClick={() => auth ? navigate('/profile') : navigate('/login')}>
                <UserIcon />
                </IconBackground>
                <IconBackground onClick={toggleFavorites}>
                <FavoritesIcon />
                </IconBackground>
                <IconBackground onClick={toggleCart}>
                <CartIcon />
                </IconBackground>
            </NavItems>
        </NavbarContainer>
    );
};

export default SubNavbar;