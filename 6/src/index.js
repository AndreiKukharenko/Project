import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./carousel.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FilmListPage from "./filmListPage/FilmListPage";
import FilmDetails from "./films/FilmDetails"

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import FilmsJSON from "./content/filmsGallery.json";
import combineReducers from "./reducers/comboReducer";

const films = JSON.stringify(FilmsJSON);
const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
    type: "FILMS",
    films
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>  
            <div>
                <Route exact path = "/" component = {App}/>
                {/*<Route exact path = "/RouteTest" component = {RouteTest}/>*/}
                <Route exact path = "/FilmListPage" component = {FilmListPage}/>
                <Route path = "/FilmDetails/:filmId" component = {FilmDetails}/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();