import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })


export const sendRegisterOTP = (email) => API.post('/user/send-register-otp', { email })
export const register = (userData) => API.post('/user/register', userData)       // {name, email, password, otp}

export const login = (userData) => API.put('/user/login', userData)          // {email, password}
export const sendForgetPasswordOTP = (email) => API.post('/user/send-forget-pass-otp', { email })
export const changePassword = (userData) => API.put('/user/change-password', userData)