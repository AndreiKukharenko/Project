import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./carousel.css";
import FilmListPage from "./filmListPage/FilmListPage";
import FilmDetailsContainer from "./films/FilmDetailsContainer";

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import combineReducers from "./reducers/comboReducer";
import orderBy from "../src/actions/orderBy";
import setUserName from "../src/actions/setUserName";

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(orderBy("FilmId"));

store.dispatch(setUserName(currentUserName)); //comment this for DEBUG on localhost:3000 only

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>  
            <div>
                <Route exact path = "/" component = {FilmListPage}/>
                <Route exact path = "/Film/Index" component = {FilmListPage}/>
                <Route exact path = "/FilmDetails/:filmId" component = {FilmDetailsContainer}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));