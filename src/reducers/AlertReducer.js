import * as AlertTypes from '../actions/types/typesAlert';

const INITIAL_STATE = {
    isVisible: false,
    title: '',
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlertTypes.ALERT_SHOW:
            return {
                ...state,
                isVisible: true,
                title: action.payload.title,
                message: action.payload.message
            }
        case AlertTypes.ALERT_HIDE:
            return {
                ...state,
                isVisible: false,
                title: '',
                message: ''
            }
        default:
            return state;
    }
}