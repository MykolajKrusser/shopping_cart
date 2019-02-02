import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducer/reducer';

const composeEnhancers = compose;

const rootReducers = combineReducers({
    reducer: reducer
})

const stateStore = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={stateStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
