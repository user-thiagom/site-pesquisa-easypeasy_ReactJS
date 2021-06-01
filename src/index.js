import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storeModel } from "./model";
import { StoreProvider, createStore } from 'easy-peasy';

const store = createStore(storeModel);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
