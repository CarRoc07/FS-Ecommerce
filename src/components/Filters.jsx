import { useProducts } from "../context/ProductsContext"
import { 
    ContainerFilter,
    ContainerResults,
    Icon,
    ResultText,
    Select } from "../styles/filters.styles"


const Filters = () => {
    const { setSortOption, sortedProducts} = useProducts()

    return (
        <ContainerFilter id="productsSection">
            <ContainerResults>
                <Icon/>
                <ResultText> Showing {sortedProducts.length} results </ResultText>
            </ContainerResults>
            <Select name="Sort by price" id="sort" onChange={(e) => setSortOption(e.target.value)}>
                <option value="low">Sort by: price low to high</option>
                <option value="high">Sort by: price high to low</option>
            </Select>
        </ContainerFilter>
    )
}

export default Filters