import Categories from "../components/Categories"
import Filters from "../components/Filters"
import Hero from "../components/Hero"
import Products from "../components/Products"

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Filters />
            <Products />
        </>
    )
}

export default Home