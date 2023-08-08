/* eslint-disable react-refresh/only-export-components */
import { useEffect, useReducer } from 'react';
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { initialStateCart, reducerCart } from '../reducers/cart.reducer';
import { initialStateFavorites, reducerFavorite } from '../reducers/favorites.reducer';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useAuth must be used within an CartProvider")
    }
    return context
}

export const CartContextProvider = ({ children }) => {
    const [isActiveCart, setIsActiveCart] = useState(false);
    const [isActiveFavorites, setIsActiveFavorites] = useState(false);
    const [stateCart, dispatchCart] = useReducer(reducerCart, JSON.parse(localStorage.getItem('cart')) || initialStateCart);
    const [stateFavs, dispatchFavs] = useReducer(reducerFavorite, JSON.parse(localStorage.getItem('favs')) || initialStateFavorites);

    const addToCart = (product) => dispatchCart({type: 'ADD_TO_CART', payload: product})
    const removeToCart = (product) => dispatchCart({type: 'REMOVE_TO_CART', payload: product})
    const clearCart = () => dispatchCart({type: 'CLEAR_CART'})

    const addToFavs = (product) => dispatchFavs({type: 'ADD_TO_FAVS', payload: product})
    const removeToFavs = (product) => dispatchFavs({type: 'REMOVE_TO_FAVS', payload: product})
    const clearFavs = () => dispatchFavs({type: 'CLEAR_FAVS'})

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(stateCart))
    }, [stateCart])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])

    const toggleCart = () => {
        setIsActiveFavorites(false)
        setIsActiveCart(!isActiveCart);
    };

    const toggleFavorites = () => {
        setIsActiveCart(false)
        setIsActiveFavorites(!isActiveFavorites);
    }

    const Values = {
        isActiveCart,
        isActiveFavorites,
        toggleCart,
        toggleFavorites,
        cart: stateCart,
        clearCart,
        addToCart,
        removeToCart,
        favs: stateFavs,
        clearFavs,
        addToFavs,
        removeToFavs
    }

    return (
        <CartContext.Provider value={Values}>
            {children}
        </CartContext.Provider>
    )
}
