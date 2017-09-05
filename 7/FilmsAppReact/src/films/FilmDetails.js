import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPosterContainer from "../films/FilmPosterContainer";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";
import Gallery from "../common/Gallery";

export default class FilmDetails extends Component{
    render() {
        var currentFilm = this.props.currentFilm;
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPosterContainer film = {currentFilm}/>
                        <RatingStars rating = {currentFilm.Rating}/>
                        <Gallery screenshots = {currentFilm.Images}/>
                        <CommentList comments = {currentFilm.Comments}/>
                        <SendMessage filmId = {currentFilm.Id} reRender = {this.props.reRender}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}