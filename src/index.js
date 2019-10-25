import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(...middlewares))}>
        <App />
    </Provider>,   
    document.getElementById('root')
);
