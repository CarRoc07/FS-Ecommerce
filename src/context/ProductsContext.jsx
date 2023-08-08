/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCategoriesReq, getProductsReq } from "../fetch/request";

const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error("useAuth must be used within an ProductsProvider")
    }
    return context
}

export const ProductsProvider = ({ children }) => {
    const [categorySelect, setCategorySelect] = useState(1);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('low');
    const [modalOpen, setModalIsOpen] = useState(false);

    // Fetch categories and products when doesnt exist or change the valor
    useEffect(() => {
        const getCategories = async () => {
            const res = await getCategoriesReq();
            setCategories(res.data);
        };
    
        const getProducts = async () => {
            const res = await getProductsReq();
            setProducts(res.data);
        };
    
        if (categories.length === 0) {
            getCategories();
        }
        if (products.length === 0) {
            getProducts();
        }
    }, [categories.length, products.length]);

    // Filtrado de productos por categoria, se actualiza el valor cuando cambien las dependencias
    const filteredProducts = useMemo(() => {
        if (categorySelect === 1) {
            return products;
        } else {
            return products.filter((product) => product.categoryID === categorySelect);
        }
    }, [categorySelect, products]);

    // Funcion para el Ordenado de los filteredProducts
    const sortProducts = (productsToSort) => {
        if (sortOption === 'low') {
            return [...productsToSort].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'high') {
            return [...productsToSort].sort((a, b) => b.price - a.price);
        } else {
            return productsToSort;
        }
    };

    const [sortedProducts, setSortedProducts] = useState(
        sortProducts(filteredProducts)
    );

    // Actualiza el sortedProducts cuando cambie el valor de sortOption
    useEffect(() => {
        setSortedProducts(sortProducts(filteredProducts));
    }, [filteredProducts, sortOption]);

    // Funcion para el filtrado de los productos por nombre, el value viene de un searchInput
    const handleSearch = (value) => {
        if(value === ''){
            const filteredProducts = products;
            setCategorySelect(1)
            setSortedProducts(sortProducts(filteredProducts));
            return
        }
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(value.trim().toLowerCase())
        );
        setSortedProducts(sortProducts(filteredProducts));
    };

    const Values = {
        categories,
        categorySelect,
        setCategorySelect,
        products,
        sortOption,
        setSortOption,
        sortedProducts,
        handleSearch,
        modalOpen,
        setModalIsOpen
    };

    return (
        <ProductsContext.Provider value={Values}>
            {children}
        </ProductsContext.Provider>
    );
}