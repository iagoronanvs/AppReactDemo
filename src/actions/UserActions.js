import * as UserTypes from './types/typesUser'; 
import * as Constants from '../util/Constants';
import { request } from '../Api';
import axios from 'axios';

export const setUsers = users => {
    return {
        type: UserTypes.SET_LIST_USERS,
        payload: users
    }
}

export const requestUsers = () => {
    return dispatch => {
        axios
        .get(Constants.GET_USERS)
        .then(response => {
            //console.log(response.data);
            dispatch(setUsers(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}