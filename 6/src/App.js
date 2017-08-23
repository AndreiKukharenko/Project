import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
import "./App.css";
import Login from "./login/Login";

injectTapEventPlugin(); // for mobile devices (recomended)

export default class App extends Component {
    render() {
      return (
            <div className="App">
                <Login></Login>
            </div>
      );
    }
}
