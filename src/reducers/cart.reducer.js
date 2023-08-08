/* eslint-disable no-case-declarations */
export const initialStateCart = []

export const reducerCart = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'ADD_TO_CART':
            const {id} = payload
            const productInCart = state.find((item) => item.id === id);
            if(productInCart) {
                return state.map((item) => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                })    
            }
            return [...state, {...payload, quantity: 1}]
        case 'REMOVE_TO_CART':
            const productInCartShop = state.find((item) => item.id === payload.id);
            if(productInCartShop.quantity > 1) {
                return state.map((item) => {
                    if(item.id === payload.id) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    return item
                })    
            }
            return state.filter((item) => item.id !== payload.id)
        case 'CLEAR_CART':
            return initialStateCart;
        default:
            return state;
    }
}