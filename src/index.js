import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import App from './App';
import cartReducer from './Stores/reducers/cart-reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));