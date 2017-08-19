import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import { Redirect, withRouter, Link } from 'react-router-dom';

import FilmsJSON from "../content/filmsGallery.json"
//import setUserName from "../src/actions/setUserName"

import setUserName from '../actions/setUserName'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleClick(event){
        var apiBaseUrl = "http://httpbin.org/post";
        var self = this;
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        let action = setUserName(this.state.username);
        this.props.dispatch(action)
        //debugger

        axios.post(apiBaseUrl, payload)
        .then(function (response) {
          if(response.status === 200){
            localStorage.setItem("Films", JSON.stringify(FilmsJSON));

          }else if(response.data.code === 404){ ////////// изменить
            console.log("Username password do not match");
            alert("username password do not match")
          }else{
            console.log("Username does not exists");
            alert("Username does not exist");
          }
        })
        .catch(function(error){
          console.log(error);
        });
      };

    render() {
        return (
          <div>
              <MuiThemeProvider>
                <div>
                  <AppBar title="Login"/>
                  <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                  <br/>
                    <TextField
                      type="password"
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      onChange = {(event,newValue) => this.setState({password:newValue})}
                      />
                  <br/>
                  <RaisedButton 
                    label="Submit" primary = {true} style = {style} 
                    onClick = {(event) => this.handleClick(event)}
                    containerElement = {<Link to="/FilmListPage"/>}
                  />
                </div>
              </MuiThemeProvider>
            </div>
          );
    }
}

const style = { margin: 15 };

function mapStateToProps (state) {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Login)
