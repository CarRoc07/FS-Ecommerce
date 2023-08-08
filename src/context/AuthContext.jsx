/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { registerPost, loginPost, refreshTokenReq, getOrdersReq, createOrderReq, updateUserReq } from '../fetch/request'

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [accessToken, setAccessToken] = useState(null)
    const [errors, setErrors] = useState(null)
    const [refreshToken, setRefreshToken] = useState(JSON.parse(window.localStorage.getItem('refreshToken')) || null)
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const [email, setEmail] = useState(null)

    useEffect(() => {
        if (!auth && refreshToken) {
            refreshTokenFunction();
        }
    }, [auth,refreshToken])

    const getOrders = async () => {
        try {
            setLoading(true)
            const res = await getOrdersReq(accessToken)
            setOrders(res.data)
            setLoading(false)
            return true
        } catch (error) {
            console.log(error.response.data.error)
            if(error.response.data.error === 'Unauthorized: Token has expired'){
                logout()
            }
            setLoading(false)
            return false
        }
    }

    const createOrder = async (order) => {
        try {
            setLoading(true)
            const res = await createOrderReq(accessToken,order)
            console.log(res)
            await getOrders()
            setLoading(false)
            return true
        } catch (error) {
            console.log(error.response.data.error)
            if(error.response.data.error === 'Unauthorized: Token has expired'){
                logout()
            }
            setLoading(false)
            return false
        }
    }

    const refreshTokenFunction = async () => {
        try {
            if(refreshToken) {
                const res = await refreshTokenReq(refreshToken)
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setEmail(res.data.email)
                setAuth(true)
                window.localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken))
            }
        } catch (error) {
            console.log(error.response.data.error)
            logout()
        }
    }

    const signUp = async (user) => {
        try {
            setLoading(true)
            const res = await registerPost(user)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setEmail(res.data.email)
            setAuth(true)
            window.localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken))
            setLoading(false)
        } catch (error) {
            setErrors(error.response.data)
            setLoading(false)
        }
    }

    const login = async (user) => {
        try {
            setLoading(true)
            const res = await loginPost(user)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setEmail(res.data.email)
            setAuth(true)
            window.localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken))
            setLoading(false)
        } catch (error) {
            setErrors(error.response.data)
            setLoading(false)
        }
    }

    const updateUser = async (user) => {
        try {
            setLoading(true)
            const res = await updateUserReq(accessToken, user)
            setLoading(false)
            if(res === 'Unauthorized: Token has expired'){
                return false
            }
            return true
        } catch (error) {
            logout()
            setLoading(false)
            return false
        }
    }    

    const logout = () => {
        setAuth(false)
        setAccessToken(null)
        setRefreshToken(null)
        setEmail(null)
        setErrors(null)
        setLoading(false)
        window.localStorage.removeItem('refreshToken')
        window.localStorage.removeItem('cart')
        window.localStorage.removeItem('favs')
    }

    const Values = {
        auth,
        accessToken,
        refreshToken,
        signUp,
        login,
        logout,
        loading,
        setOrders,
        orders,
        setLoading,
        createOrder,
        getOrders,
        email,
        updateUser,
        errors
    }

    return (
        <AuthContext.Provider value={Values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;