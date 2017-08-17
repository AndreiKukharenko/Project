import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import "./App.css";
import Loginscreen from "./Loginscreen";
import FilmListPage from "./FilmListPage.js";
import combinedReducer from "./reducers/comboReducer";

injectTapEventPlugin(); // for mobile devices (recomended)

export const store = createStore(combinedReducer);

export default class App extends Component {
    constructor(props){
        super(props);
            this.state = {
            loginPage: [],
            uploadScreen: []
            }
    };

    componentWillMount(){
        var loginPage = [];
        loginPage.push(<Loginscreen parentContext = {this}/>);
        //loginPage.push(<FilmListPage parentContext = {this}/>);
        
        this.setState({
            loginPage:loginPage
        });
    } 
    render() {
      return (
        <Provider store = {store}>  
            <div className="App">
                {this.state.loginPage}
                {this.state.uploadScreen}
            </div>
        </Provider>
      );
    }
}
