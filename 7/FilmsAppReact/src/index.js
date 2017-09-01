import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./carousel.css";
import App from './App';
import FilmListPage from "./filmListPage/FilmListPage";
import FilmDetailsContainer from "./films/FilmDetailsContainer";

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import combineReducers from "./reducers/comboReducer";
import orderBy from "../src/actions/orderBy";

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(orderBy("Name"));

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>  
            <div>
                {/*<Route exact path = "/" component = {App}/>*/}
                <Route path = "/" component = {FilmListPage}/>
                <Route exact path = "/FilmDetails/:filmId" component = {FilmDetailsContainer}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));