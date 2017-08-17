import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../src/common/AppHeader'
import { Link, Redirect } from 'react-router-dom';

import AutoCompleteSearch from './common/AutoCompleteSearch.js'
import OrderBy from './common/OrderBy.js'
import {List, ListItem} from 'material-ui/List';
import FilmPoster from './films/FilmPoster.js';
import FilmList from "./films/FilmList"
 

class FilmListPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            redirect: ""
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/FilmDetails" />;
            }
        
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppHeader> </AppHeader> 
                        <div>
                            <AutoCompleteSearch> </AutoCompleteSearch>
                            <OrderBy></OrderBy>
                        </div>
                        <FilmList/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default FilmListPage;