import { useEffect, useState } from 'react';
import {
    TitleDiscount,
    ProductImage,
    ProductInfo,
    ProductPrice,
    ProductTitle,
    SliceContainer,
    ContainerIndicator,
    IndexIndicator,
    ContainerHero
} from '../styles/hero.styles'

    const products = [
        {
            id: 1,
            title: 'Headphones Sonic Wave',
            price: `$${350.00}`,
            image: 'https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689733813/Eccomerce/Headphone-No-Background_jonenm.png'
        },
        {
            id: 2,
            title: 'Headphones Aero Beats',
            price: `$${250.00}`,
            image: 'https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689733807/Eccomerce/Bluetooth-Headphones-No-Background_iwv4e1.png'
        },
        {
            id: 3,
            title: 'Headphones Pulse Tunes',
            price: `$${220.00}`,
            image: 'https://res.cloudinary.com/dxkiqjvlp/image/upload/c_scale,h_1935,w_1615/v1689737170/Eccomerce/Headphones-Transparent-PNG_hosucv.png'
        }
    ]

const Hero = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentProductIndex]);

    const currentProduct = products[currentProductIndex];

    return (
        <ContainerHero>
            <SliceContainer>
                <ProductImage src={currentProduct.image} alt={currentProduct.title} />
                <ProductInfo>
                    <TitleDiscount>Headphones discount</TitleDiscount>
                    <ProductTitle>{currentProduct.title}</ProductTitle>
                    <ProductPrice>{currentProduct.price}</ProductPrice>
                </ProductInfo>
            </SliceContainer>
            <ContainerIndicator>
                <IndexIndicator select={currentProductIndex === 0} onClick={() => setCurrentProductIndex(0)}/>
                <IndexIndicator select={currentProductIndex === 1} onClick={() => setCurrentProductIndex(1)}/>
                <IndexIndicator select={currentProductIndex === 2} onClick={() => setCurrentProductIndex(2)}/>
            </ContainerIndicator>
        </ContainerHero>
        
    )
}

export default Hero