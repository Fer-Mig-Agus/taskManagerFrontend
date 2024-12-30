import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
</BrowserRouter>,
)
