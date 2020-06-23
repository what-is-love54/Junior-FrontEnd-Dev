import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './i18n/i18n'
import Preloader from './Component/Common/Preloader/Preloader';
import { Provider } from 'react-redux';
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

