import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouteTest from  "../src/common/RouteTest";
import FilmListPage from "./FilmListPage";
import FilmDetails from "./films/FilmDetails"

import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import combinedReducer from "./reducers/comboReducer";


const store = createStore(combinedReducer);
console.log(store.getState())
ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>  
            <div>
                <Route exact path = "/" component = {App}/>
                <Route exact path = "/RouteTest" component = {RouteTest}/>
                <Route exact path = "/FilmListPage" component = {FilmListPage}/>
                <Route path = "/FilmDetails/:filmId" component = {FilmDetails}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
       