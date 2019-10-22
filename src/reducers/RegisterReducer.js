import * as RegisterTypes from '../actions/types/typesRegister';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case RegisterTypes.REGISTER_CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case RegisterTypes.REGISTER_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case RegisterTypes.REGISTER_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case RegisterTypes.REGISTER_CHANGE_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            }
        case RegisterTypes.REGISTER_SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case RegisterTypes.REGISTER_RESET_FORM:
            return {
                ...state,
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        default:
            return state;
    }
}