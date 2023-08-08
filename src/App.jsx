import { BrowserRouter } from "react-router-dom"
import Cart from "./components/Cart"
import Favorites from "./components/Favorites"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { CartContextProvider } from "./context/CartContext"
import Routes from "./routes/routes"
import AuthProvider from "./context/AuthContext"
import { ProductsProvider } from "./context/ProductsContext"
import { Modal, ModalinfoLogout } from "./components/orders/Modal"

function App() {

  return (
    <div style={{backgroundColor:'#eee', maxWidth: '1350px', margin: '0 auto', padding: '0', height: '100%'}}>
      <AuthProvider>
        <ProductsProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Header />
              <Routes />
              <Footer />
              <Cart />
              <Favorites />
              <Modal />
              <ModalinfoLogout />
            </BrowserRouter>
          </CartContextProvider>
        </ProductsProvider>
      </AuthProvider>
    </div>
  )
}

export default App
