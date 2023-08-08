import { Routes as RoutesRouter, Route} from 'react-router-dom'
import Home from '../pages/Home'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import ProtectedRoute from './ProtectedRoute'

const Routes = () => {
    return (
        <RoutesRouter>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route element={<ProtectedRoute />}>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/profile' element={<Profile />}/>
            </Route>
        </RoutesRouter>
    )
}

export default Routes