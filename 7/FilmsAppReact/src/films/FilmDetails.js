import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPosterContainer from "../films/FilmPosterContainer";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";
import Gallery from "../common/Gallery";

export default class FilmDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentFilm: this.props.currentFilm
        }
    }
    render() {
        var currentFilm = this.state.currentFilm;
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPosterContainer film = {currentFilm}/>
                        <RatingStars rating = {currentFilm.Rating}/>
                        <Gallery screenshots = {currentFilm.Images}/>
                        {/*<CommentList comments = {this.props.Comments}/>*/}
                        <SendMessage id = {currentFilm.Id}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}