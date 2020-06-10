import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Preloader from './Component/Common/Preloader';
import './i18next'
import { store } from './Component/redux/store';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={(<Preloader/>)}>
          <App />
        </Suspense>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

