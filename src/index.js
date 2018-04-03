import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import generalInfoReducer from './store/reducers/reducergeneralinfo';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';



const rootReducer = combineReducers({
    gen : generalInfoReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
