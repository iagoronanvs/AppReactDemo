import * as LoagingTypes from '../actions/types/typesLoading';

const INITIAL_STATE = {
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LoagingTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}