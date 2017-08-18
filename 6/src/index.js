import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouteTest from  "../src/common/RouteTest";
import FilmListPage from "./FilmListPage";
import FilmDetails from "./films/FilmDetails"

import { BrowserRouter, Link, Route } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import combinedReducer from "./reducers/comboReducer";

export const store = createStore(combinedReducer);


ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>  
            <div>
                <Route exact path = "/" component = {App}/>
                <Route exact path = "/RouteTest" component = {RouteTest}/>
                <Route exact path = "/FilmListPage" component = {FilmListPage}/>
                <Route exact path = "/FilmDetails" component = {FilmDetails}/>
            </div>
        </Provider>
    </BrowserRouter>,
       document.getElementById('root'));
registerServiceWorker();
