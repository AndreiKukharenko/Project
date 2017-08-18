import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";

class FilmDetails extends Component{
    constructor(props){
        super(props);
        var currentFilm = JSON.parse(localStorage.getItem("Films"))[this.props.match.params.filmId - 1];
        this.state = {
            id: currentFilm.filmId,
            title: currentFilm.title,
            description: currentFilm.description,
            rating: currentFilm.rating,
            images: currentFilm.images,
            comments: currentFilm.comments
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPoster {...this.state}/>
                        <RatingStars rating = {this.state.rating}/>
                      
                        <CommentList comments = {this.state.comments}/>
                        <SendMessage/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default FilmDetails;
