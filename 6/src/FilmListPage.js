import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import AppHeader from './common/AppHeader'*/
import AppHeader from '../src/common/AppHeader'


import AutoCompleteSearch from './common/AutoCompleteSearch.js'
import OrderBy from './common/OrderBy.js'
import {List, ListItem} from 'material-ui/List';
import FilmPoster from './films/FilmPoster.js';
 


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


                        <List /*nestedItems = {[]}*/>
                            <ListItem>  <FilmPoster/>  </ListItem>
                            <ListItem>  <FilmPoster/>  </ListItem>
                            
                        </List>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default FilmListPage;