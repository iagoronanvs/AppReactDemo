import * as RxsenseTypes from '../actions/types/typesRxsense';

const INITIAL_STATE = {
  token: null,
  level: 0,
  index: 0,
  drugs: [],
  pharmacies: [],
  details: null,
  loading: false,
  prescription: null,
  prescriptionForm: null,
  prescriptionDosage: null,
  prescriptionQuantity: null,
  prescriptionCost: null,
  pharmacyName: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RxsenseTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case RxsenseTypes.SET_LIST:
      return {
        ...state,
        drugs: action.payload
      }
    case RxsenseTypes.SET_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    case RxsenseTypes.SET_LEVEL:
      return {
        ...state,
        level: action.payload
      }
    case RxsenseTypes.SET_INDEX:
      return {
        ...state,
        index: action.payload
      }
    case RxsenseTypes.SET_PHARMACIES:
      return {
        ...state,
        pharmacies: action.payload
      }
    case RxsenseTypes.SHOW_LOADING:
        return {
          ...state,
          loading: true
        }
    case RxsenseTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false
      }

    case RxsenseTypes.SET_PRESCRIPTION:
      return {
        ...state,
        prescription: action.payload
      }

    case RxsenseTypes.SET_PRESCRIPTION_FORM:
      return {
        ...state,
        prescriptionForm: action.payload
      }

    case RxsenseTypes.SET_PRESCRIPTION_COST:
      return {
        ...state,
        prescriptionCost: action.payload
      }

    case RxsenseTypes.SET_PRESCRIPTION_DOSAGE:
      return {
        ...state,
        prescriptionDosage: action.payload
      }

    case RxsenseTypes.SET_PRESCRIPTION_QUANTITY:
      return {
        ...state,
        prescriptionQuantity: action.payload
      }

    case RxsenseTypes.SET_PHARMACY_NAME:
      return {
        ...state,
        pharmacyName: action.payload
      }

    default:
      return state;
  }
}
