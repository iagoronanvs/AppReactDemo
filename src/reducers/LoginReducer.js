import * as LoginTypes from '../actions/types/typesLogin';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case LoginTypes.LOGIN_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case LoginTypes.LOGIN_SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}