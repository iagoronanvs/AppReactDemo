import * as AlertTypes from './types/typesAlert';

export const open = (title, message) => {
    return {
        type: AlertTypes.ALERT_SHOW,
        payload: {
            title,
            message
        }
    }
}
export const hide = () => {
    return {
        type: AlertTypes.ALERT_HIDE
    }
}