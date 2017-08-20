import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
import "./App.css";
import Loginscreen from "./login/Loginscreen";

injectTapEventPlugin(); // for mobile devices (recomended)

export default class App extends Component {
    constructor(props){
        super(props);
            this.state = {
            loginPage: [],
            }
    };

    componentWillMount(){
        var loginPage = [];
        loginPage.push(<Loginscreen parentContext = {this}/>);
        
        this.setState({
            loginPage:loginPage
        });
    } 
    render() {
      return (
            <div className="App">
                {this.state.loginPage}
            </div>
      );
    }
}
