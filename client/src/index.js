import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
<<<<<<< HEAD
import reducers from './reducers/rootReducer';
import thunk from 'redux-thunk';
=======
<<<<<<< Updated upstream
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());
=======
import reducers from './reducers/rootReducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
>>>>>>> Stashed changes
>>>>>>> showcase

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}><App/></Provider>,
	document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
