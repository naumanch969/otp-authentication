import {
    START_LOADING,
    END_LOADING,
    ERROR,
    GET_ALL_USERS,
    LOGIN,
    SEND_OTP,
    CHANGE_PASSWORD,
    REGISTER,
    LOGOUT,
    NO_ERROR
} from "../constants/index"
import Cookie from 'js-cookie'

const initialState = {
    result: [],
    isLoading: false,
    isError: false,
    error: ''
}

const userReducers = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_USERS:
            return { ...state, result: action.payload.result, isError: false, error: '' }

        case SEND_OTP:
            return { ...state, isError: false, error: '' }

        case CHANGE_PASSWORD:
            return { ...state, isError: false, error: '' }

        case REGISTER:
            Cookie.set('profile', JSON.stringify(action.payload.result))
            return { ...state, result: action.payload.result, isError: false, error: '' }

        case LOGIN:
            Cookie.set('profile', JSON.stringify(action.payload.result))
            return { ...state, result: action.payload.result, isError: false, error: '' }

        case LOGOUT:
            Cookie.remove('profile')
            return { ...state }

        case START_LOADING:
            return { ...state, isLoading: true }

        case END_LOADING:
            return { ...state, isLoading: false }



        default:
            return state;
    }

}

export default userReducers