import { IconBackground } from "../styles/subnavbar.styles";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai"
import {
    FooterContainer,
    ButtonStyled,
    ContainerGetInOn,
    ContainerInfoDetails,
    ContainerSocial,
    ImgGetInOn,
    ImgPaymentMethods,
    InputContainer,
    InputStyled,
    SubscribeContainer,
    SubscribeTitle,
    TelephoneIcon,
    UbicationIcon, 
    UbicationDiv,
    TextAllRights,
    ContainerPaymentMethods,
    LogoTextFooter,
    SubscribeSubtitle} from "../styles/footer.styles";

const Footer = () => {
    return (
        <FooterContainer id="footerSection">
            <SubscribeContainer>
                <div>
                    <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
                    <SubscribeSubtitle>Get the latest news and updates from us</SubscribeSubtitle>
                </div>
                <InputContainer>
                    <InputStyled type="text" placeholder="Enter your email address" />
                    <ButtonStyled>Subscribe</ButtonStyled>
                </InputContainer>
            </SubscribeContainer>
            <ContainerInfoDetails>
                <LogoTextFooter >T<b style={{color: 'white', fontSize: '50px'}}>STORE</b></LogoTextFooter>
                <UbicationDiv>
                    <p>
                        4517 Washington Ave. Manchester, Kentucky
                    </p>
                    <p>
                        39495 Washington Ave. Manchester
                    </p>
                </UbicationDiv>
                <UbicationDiv>
                    <div style={{ display: "flex", alignItems: "center", margin: '10px' }}>
                        <UbicationIcon />
                        <p>254 Lilian Blvd, Holbrook</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", margin: '10px' }}>
                        <TelephoneIcon />
                        <p>242535643636</p>
                    </div>
                </UbicationDiv>
                <ContainerGetInOn>
                    <ImgGetInOn src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689814289/Eccomerce/BadgeIOS_twovtb.png" alt="LOGO APP STORE" />
                    <ImgGetInOn src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689814293/Eccomerce/GooglePlay_g1bfyn.png" alt="LOGO PLAY STORE" />
                </ContainerGetInOn>
            </ContainerInfoDetails>
            <ContainerSocial>
                <TextAllRights>
                    © 2023 TStore. All rights reserved.
                </TextAllRights>
                <div style={{ display: "flex", gap: "10px" }}>
                    <IconBackground>
                        <AiOutlineFacebook style={{ fontSize: "30px", color: "black"  }} />
                    </IconBackground>
                    <IconBackground>
                        <AiOutlineInstagram style={{ fontSize: "30px", color: "black"  }} />
                    </IconBackground>
                    <IconBackground>
                        <AiOutlineLinkedin style={{ fontSize: "30px", color: "black"  }} />
                    </IconBackground>
                    <IconBackground>
                        <AiOutlineTwitter style={{ fontSize: "30px", color: "black"  }} />
                    </IconBackground>
                    <IconBackground>
                        <AiOutlineYoutube style={{ fontSize: "30px", color: "black"  }} />
                    </IconBackground>
                </div>
                <ContainerPaymentMethods>
                    <ImgPaymentMethods src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689819949/Eccomerce/full-color-800x450-cee226a48bed4177b90351075b332227_h1oeac.jpg" alt="Imagen visa" />
                    <ImgPaymentMethods src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689819705/Eccomerce/mastercard_u8usr5.jpg" alt="Imagen MasterCard" />
                    <ImgPaymentMethods src="https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689819708/Eccomerce/PayPalLogo1200-e1567562592270_sum0ik.jpg" alt="Imagen Paypal" />
                </ContainerPaymentMethods>
            </ContainerSocial>
        </FooterContainer>
    )
}

export default Footer