import React, { Component } from 'react';
import Img from 'react-image'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import { Link } from 'react-router-dom';

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/Comments";
import SendMessage from "../common/SendMessage";


class FilmDetails extends Component{
    render() {
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPoster/>
                      
                        <CommentList/>
                        <SendMessage/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default FilmDetails;
