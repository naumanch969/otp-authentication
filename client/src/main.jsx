import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reducers from './reducers'
import thunk from "redux-thunk"

import { ContextProvider } from "./context/ContextProvider"


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>        {/* react-redux */}
    <ContextProvider>             {/* context-api */}
      <BrowserRouter>             {/* react-router-dom */}
        <App />
      </BrowserRouter>
    </ContextProvider>
  </Provider>
);
