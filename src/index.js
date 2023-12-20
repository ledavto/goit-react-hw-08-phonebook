import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
  <App />
</BrowserRouter>
  </Provider>
);



// npm install redux
// npm install react-redux
// npm install @redux-devtools/extension
// npm install @reduxjs/toolkit
// npm i axios
// npm install react-router-dom