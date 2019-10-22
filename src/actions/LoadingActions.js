import * as LoadingTypes from './types/typesLoading';

export const loadingActive = () => {
    return {
        type: LoadingTypes.SET_LOADING,
        payload: true
    }
}

export const loadingDismiss = () => {
    return {
        type: LoadingTypes.SET_LOADING,
        payload: false
    }
}