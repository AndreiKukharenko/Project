import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from '../common/AppHeader'

import AutoCompleteSearch from '../common/AutoCompleteSearch.js'
import OrderBy from '../common/OrderBy.js'
import FilmList from "../films/FilmList"

class FilmListPage extends Component{
    render() {
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