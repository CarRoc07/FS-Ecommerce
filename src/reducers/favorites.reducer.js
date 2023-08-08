export const initialStateFavorites = []

export const reducerFavorite = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'ADD_TO_FAVS':
            return [...state, {...payload}]
        case 'REMOVE_TO_FAVS':
            return state.filter((item) => item.id !== payload.id)
        case 'CLEAR_FAVS':
            return initialStateFavorites;
        default:
            return state;
    }
}