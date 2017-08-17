import React, { Component } from 'react';
import Img from 'react-image'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import { Link } from 'react-router-dom';

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";


class FilmDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            rating: this.props.rating,
            images:  this.props.images,
            comments: this.props.comments,
        }
        if(this.props.id === undefined){
            var currentFilm = JSON.parse(localStorage.getItem("Films"))[this.props.location.search.slice(-1) - 1];
            console.log(currentFilm)
            this.state = {
                id: currentFilm.filmId,
                title: currentFilm.title,
                description: currentFilm.description,
                rating: currentFilm.rating,
                images: currentFilm.images,
                comments: currentFilm.comments
            }
        }
        //debugger;
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
