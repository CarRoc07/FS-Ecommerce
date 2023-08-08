import { useCart } from "../context/CartContext"
import { ButtonFavorites, ContainerFavoriteGeneral, ContainerProductsFavorite, TitleFavorite } from "../styles/favorites.styles"
import CardProductFavorite from "./CardProductFavorite"

const Favorites = () => {
    const { isActiveFavorites, favs, clearFavs } = useCart()

    return (
        <ContainerFavoriteGeneral active={isActiveFavorites}>
            <TitleFavorite> Favorites </TitleFavorite>
            <ContainerProductsFavorite>
                {
                    favs.map(fav => (
                        <CardProductFavorite key={fav.id} {...fav} />
                    ))
                }
            </ContainerProductsFavorite>
            <ButtonFavorites onClick={() => clearFavs()}>
                Clear favorites
            </ButtonFavorites>
        </ContainerFavoriteGeneral>
    )
}

export default Favorites