import React from 'react';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/reducers/Store';
import Alert from './src/components/alert/Alert';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Alert />
      {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
    </Provider>
  );
};

export default App;
