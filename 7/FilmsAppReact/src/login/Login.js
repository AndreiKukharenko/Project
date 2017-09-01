import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

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
        var apiBaseUrl = "http://localhost:61095/Film/TakeJson";
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        let action = setUserName(this.state.username);
        this.props.dispatch(action);
        this.sendRequest(apiBaseUrl, payload);
      };
      
      sendRequest(url){
        axios({
          method:'get',
          url: url,
        })
        .then(function (response) {
          if(response.status === 200){
            console.log("request sent successfully");
            console.log(response.data);
          }else if(response.data.code === 404){ //~
            alert("404")
          }else{
            alert("bad request");
          }
        })
        .catch(function(error){
          console.log(error);
        });

        // request to GetCurrentUsername
        axios({
          method:'get',
          url: "http://localhost:61095/Film/GetCurrentUsername",
        })
        .then(function (response) {
          if(response.status === 200){
            console.log("request to GetCurrentUsername");
            console.log(response.data);
          }else if(response.data.code === 404){ //~
            alert("404")
          }else{
            alert("bad request");
          }
        })
        .catch(function(error){
          console.log(error);
        });



      }

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