import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";

import { Redirect, withRouter, Link } from 'react-router-dom';

import FilmsJSON from "./content/filmsGallery.json"

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      auth: false
    }
  }

    static propTypes = {
      username: React.PropTypes.string.isRequired,
      password: React.PropTypes.string.isRequired,
    }

    handleClick(event){
      var apiBaseUrl = "http://httpbin.org/post";
      var self = this;
      var payload = {
        "email": this.state.username,
        "password": this.state.password
      }
      axios.post(apiBaseUrl, payload)   // axios - Fetching Data library
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          console.log("Login successfull");
          var uploadScreen = [];
          //uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          self.props.appContext.setState({loginPage: [], uploadScreen:uploadScreen});
          self.setState({auth:true})
          self.render(true)
          
          var data = FilmsJSON;
          localStorage.setItem("Films", JSON.stringify(data));
        }
        else if(response.data.code === 404){ ////////// изменить
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else{
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error){
        console.log(error);
      });
    };

    render(auth) {
      /*const {from} = this.props.location.state || { from: { pathname: '/' } }*/

      if(auth){
        console.log("in render")
        return (
          <Redirect push to="/RouteTest"/>
        )
      }

    else{
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
}
const style = { margin: 15 };
export default Login;
