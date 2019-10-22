import * as UserTypes from '../actions/types/typesUser';

const INITIAL_STATE = {
    users: [],
    vsee_users: [],
    vsee_command: null,
    modal_is_visible: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserTypes.SET_LIST_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UserTypes.SET_VSEE_USERS:
            return {
                ...state,
                vsee_users: action.payload
            }
        case UserTypes.SET_VSEE_COMMAND:
            return {
                ...state,
                vsee_command: action.payload
            }
        case UserTypes.SHOW_MODAL:
            return {
                ...state,
                modal_is_visible: true
            }
        case UserTypes.HIDE_MODAL:
            return {
                ...state,
                modal_is_visible: false
            }
        default:
            return state;
    }
}