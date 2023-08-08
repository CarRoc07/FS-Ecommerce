/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { 
    ContainerCard,
    ImgCategory,
    TitleCategory } from "../styles/categories.styles"

const CategoryCard = ({name, img, color, setCategorySelect, id}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, []);

    if(loading) {
        return (
            <ContainerCard color={color}>
                <p style={{marginBottom: '10px', minWidth: "90px", borderRadius: "50%", minHeight: "90px", background: "linear-gradient(90deg, #dfdede 25%, #c7c6c6 37%, #dddddd 63%)"}}></p>
                <p style={{marginBottom: '10px', minWidth: "80px", minHeight: "20px", background: "linear-gradient(90deg, #dfdfdf 25%, #bfbfbf 37%, #e2e2e2 63%)"}}></p>
            </ContainerCard>
        )
    }

    return (
        <ContainerCard color={color} onClick={() => setCategorySelect(+id)}>
            <ImgCategory src={img} alt={name} />
            <TitleCategory>{name}</TitleCategory>
        </ContainerCard>
    )
}

export default CategoryCard