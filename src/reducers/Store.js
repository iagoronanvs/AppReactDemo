
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

// const persistConfig = {
//     key: 'root',
//     storage
// }

//const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(reducers, applyMiddleware(ReduxThunk));

//const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

//const persistor = persistStore(store);
//export { store };
