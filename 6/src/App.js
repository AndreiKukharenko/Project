import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
import "./App.css";
import Loginscreen from "./Loginscreen";
import FilmListPage from "./FilmListPage.js";


import { BrowserRouter, Link, Router, Route } from '../node_modules/react-router-dom';
import RouteTest from  "../src/common/RouteTest";
import SendMessage from "../src/common/SendMessage";


injectTapEventPlugin(); // 

class App extends Component {
    constructor(props){
        super(props);
            this.state = {
            loginPage: [],
            uploadScreen: []
            }
    }
    componentWillMount(){
        var loginPage = [];
        loginPage.push(<Loginscreen parentContext = {this}/>);
        loginPage.push(<FilmListPage parentContext = {this}/>);
        
        this.setState({
            loginPage:loginPage
        });
    } 
    render() {
      return (
        <div className="App">
          {this.state.loginPage}
          {this.state.uploadScreen}
        </div>
      );
    }
}

const style = {
    margin: 15,
};
  
export default App;