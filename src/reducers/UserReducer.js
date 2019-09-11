import * as UserTypes from '../actions/types/typesUser';

const INITIAL_STATE = {
    users: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserTypes.SET_LIST_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}