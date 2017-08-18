import React, { Component } from 'react';
import CardMedia from 'material-ui/Card';
import Img from 'react-image'

import FilmPoster from "./FilmPoster";
import FilmDetails from "./FilmDetails";

export default class FilmPosterContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            film: props.ffilm,
        };
    }

    render(){
        var props = {
            id: this.state.film.filmId,
            title: this.state.film.title,
            description: this.state.film.description,
            rating: this.state.film.rating,
            images: this.state.film.images,
            comments: this.state.film.comments
        }

        return(
            <div >
                <FilmPoster {...props} />
            </div>
        )
    }
}

