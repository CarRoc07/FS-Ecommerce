/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext'
import { ButtonFavoritesDelete, ContainerProductFavorite, ImgFavoriteProduct } from '../styles/favorites.styles'

const CardProductFavorite = ({img, price, name, id}) => {
    const { removeToFavs } = useCart()

    return (
        <ContainerProductFavorite>
            <ImgFavoriteProduct src={img} alt={name} />
            <h3>$ {price}</h3>
            <ButtonFavoritesDelete onClick={() => removeToFavs({id})}>
            ✖
            </ButtonFavoritesDelete>
        </ContainerProductFavorite>
    )
}

export default CardProductFavorite