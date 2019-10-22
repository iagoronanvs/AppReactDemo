import * as RxsenseTypes from './types/typesRxsense';
import * as Constants from '../util/Constants';
import { request } from '../Api';

export const setToken = value => {
  return {
    type: RxsenseTypes.SET_TOKEN,
    payload: value
  }
}

export const setPrescription = value => {
  return {
    type: RxsenseTypes.SET_PRESCRIPTION,
    payload: value
  }
}

export const setPrescriptionForm = value => {
  return {
    type: RxsenseTypes.SET_PRESCRIPTION_FORM,
    payload: value
  }
}

export const setPrescriptionDosage = value => {
  return {
    type: RxsenseTypes.SET_PRESCRIPTION_DOSAGE,
    payload: value
  }
}

export const setPrescriptionCost = value => {
  return {
    type: RxsenseTypes.SET_PRESCRIPTION_COST,
    payload: value
  }
}

export const setPrescriptionQuantity = value => {
  return {
    type: RxsenseTypes.SET_PRESCRIPTION_QUANTITY,
    payload: value
  }
}

export const setPharmacyName = value => {
  return {
    type: RxsenseTypes.SET_PHARMACY_NAME,
    payload: value
  }
}


export const setLevel = value => {
  return {
    type: RxsenseTypes.SET_LEVEL,
    payload: value
  }
}

export const setIndex = value => {
  return {
    type: RxsenseTypes.SET_INDEX,
    payload: value
  }
}

export const setDrugs = value => {
  return {
    type: RxsenseTypes.SET_LIST,
    payload: value
  }
}

export const setDetails = value => {
  return {
    type: RxsenseTypes.SET_DETAILS,
    payload: value
  }
}

export const setPharmacies = value => {
  return {
    type: RxsenseTypes.SET_PHARMACIES,
    payload: value
  }
}

export const showLoading = value => {
  return {
    type: RxsenseTypes.SHOW_LOADING
  }
}

export const hideLoading = value => {
  return {
    type: RxsenseTypes.HIDE_LOADING
  }
}

// export const checkResult = (result) => {
//   return dispatch => {
//     if ( result.message.indexOf('not authorized') != -1 )
//   }
// }

export const initState = (token, drugs, loading) => {
  return dispatch => {
    token && dispatch(setToken(null));
    drugs && dispatch(setDrugs([]));
    loading && dispatch(hideLoading());
    dispatch(setPharmacies(null));
    dispatch(setDetails(null));
  }
}

export const getToken = () => {
  return dispatch => {
    dispatch(showLoading());
    request
    .get(Constants.GET_RXSENSE_TOKEN)
    .then(response => {
      console.log(response.data.Token);
      dispatch(setToken(response.data.Token));
      dispatch(hideLoading());
    })
    .catch(error => {
        console.log(error);
        dispatch(hideLoading());
    });
  }
}

export const searchDrugs = (token, search) => {
  return dispatch => {
    dispatch(showLoading());
    request
    .post(Constants.POST_RXSENSE_DRUGS, { token, search })
    .then(response => {

      console.log(response.data);
      if (response.data.message == 'Unauthorized') {
        alert('Atenção! Não foi possível realizar a busca.')
      }else{
        dispatch(setDrugs(response.data));
        dispatch(setLevel(0));
        dispatch(setDetails(null));
        dispatch(hideLoading());
      }

    })
    .catch(error => {
        console.log(error);
        dispatch(hideLoading());
    });
  }
}

export const drugDetails = (token, ndc) => {
  return dispatch => {
    dispatch(showLoading());
    request
    .post(Constants.POST_RXSENSE_DRUG_DETAILS, { token, ndc })
    .then(response => {

      console.log(response.data.Value);
      dispatch(setDetails(response.data.Value));
      dispatch(setLevel(1));
      dispatch(hideLoading());

    })
    .catch(error => {
        console.log(error);
        dispatch(hideLoading());
    });
  }
}

export const switchForm = (ix) => {
  return dispatch => {
    dispatch(setLevel(2));
    dispatch(setIndex(ix));
  }
}

export const getPharmacies = (token, ndc, quantity, latitude, longitude) => {
  return dispatch => {
    dispatch(showLoading());
    request
    .post(Constants.POST_RXSENSE_PHARMACIES, { token, ndc, quantity, latitude, longitude })
    .then(response => {

      console.log(response.data.Value);
      dispatch(setPharmacies(response.data.Value.PharmacyPricings));
      dispatch(hideLoading());

    })
    .catch(error => {
        console.log(error);
        dispatch(hideLoading());
    });
  }
}
