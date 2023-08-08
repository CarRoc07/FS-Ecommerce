/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import CategoryCard from "./CategoryCard"
import { CategoryTextTitle, Container } from '../styles/categories.styles'
import { useProducts } from "../context/ProductsContext"

const colors = [
    {
        id:1,
        color: '#E9FFEB'
    },
    {
        id:2,
        color: '#FFEAEC'
    },
    {
        id:3,
        color: '#F1F5FA'
    },
    {
        id:4,
        color: '#FFFEE8'
    },
    {
        id:5,
        color: '#F8F1F9'
    },
    {
        id: 6,
        color: '#E9FFEB'
    }
]



const Categories = () => {
    const {categories, setCategorySelect, categorySelect} = useProducts()

    const selectedCategory =
    categories.length > 0 ? categories.find((category) => category.id === categorySelect) : null;

    return (
        <>
            <Container id="categoriesSection">
                {
                    categories.map(category => (
                        <CategoryCard key={category.id} {...category} color={colors[category.id - 1].color} setCategorySelect={setCategorySelect}/>
                    ))
                }
            </Container>
        {selectedCategory && (
            <CategoryTextTitle>-- {selectedCategory.name} --</CategoryTextTitle>
        )}
        </>
        
    )
}

export default Categories