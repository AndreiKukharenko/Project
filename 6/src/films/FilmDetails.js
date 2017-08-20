import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";

import {connect} from "react-redux";

class FilmDetails extends Component{
    constructor(props){
        super(props);
        var id = this.props.match.params.filmId - 1;
        var currentFilm = this.props.films[id];
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

function mapStateToProps (state) {
    var films = JSON.parse(state.films);
    return {
        films: films
    }
}

export default connect(mapStateToProps)(FilmDetails);