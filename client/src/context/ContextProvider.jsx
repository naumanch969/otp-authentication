import { createContext, useContext, useState } from "react"
import Cookie from 'js-cookie'
const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const initialUserState = { name: '', email: '', password: '', confirmPassword: '', registerOTP: '', forgetPasswordOTP: '' }
    const initialErrorObj = { login: '', register: '', sendRegisterOTP: '', sendForgetPasswordOTP: '', changePassword: '' }

    const [user, setUser] = useState(Cookie.get('profile') ? JSON.parse(Cookie.get('profile')) : null)
    const [validationMessage, setValidationMessage] = useState(initialUserState)
    const [userFormData, setUserFormData] = useState(initialUserState)
    const [errorObj, setErrorObj] = useState(initialErrorObj)
    const [showPassword, setShowPassword] = useState(false)
    const [page, setPage] = useState('register')

    return (
        <StateContext.Provider
            value={{
                initialUserState,
                userFormData, setUserFormData,
                initialErrorObj,
                errorObj, setErrorObj,
                user, setUser,
                page, setPage,
                showPassword, setShowPassword,
                validationMessage, setValidationMessage
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)