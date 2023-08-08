import axios from './axios'

export const registerPost = (user) => axios.post('/register', user)

export const loginPost = async (user) => await axios.post('/login', user)

export const refreshTokenReq = async (refreshToken) => await axios.get('/refresh', { headers: {'Authorization': `Bearer ${refreshToken}`}})

export const updateUserReq = async (accessToken, user) => {
    try {
        const res = await axios.put('/update', user, { headers: {'Authorization': `Bearer ${accessToken}`}})
        return res
    } catch (error) {
        return error.response.data.error
    }
}

export const getOrdersReq = async (accessToken) => await axios.get('/orders', { headers: {'Authorization': `Bearer ${accessToken}`}})

export const createOrderReq = async (accessToken, order) => await axios.post('/orders', order, { headers: {'Authorization': `Bearer ${accessToken}`}})

export const getCategoriesReq = async () => await axios.get('/category')

export const getProductsReq = async () => await axios.get(`/products`)

