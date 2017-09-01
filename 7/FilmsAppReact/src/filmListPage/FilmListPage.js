import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../common/AppHeader'

import AutoCompleteSearch from '../common/AutoCompleteSearch.js'
import OrderBy from '../common/OrderBy.js'
import FilmList from "../films/FilmList";
import axios from "axios";

export default class FilmListPage extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/ReturnFilms",
        })
        .then(function (response) {
            if(response.status === 200){
                self.setState({films: response.data})
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    render() {
        if (this.state.films) {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppHeader/> 
                            <div>
                                <AutoCompleteSearch films = {this.state.films}/>
                                <OrderBy/>
                            </div>
                            <FilmList films = {this.state.films}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            );
        }
        else {
            return (<div> Loading. Please wait</div>)
        }
    }
}