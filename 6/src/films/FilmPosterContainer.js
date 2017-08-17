import React, { Component } from 'react';
import CardMedia from 'material-ui/Card';
import Img from 'react-image'
import { Link, Redirect, Route } from 'react-router-dom';

import FilmPoster from "./FilmPoster";
import FilmDetails from "./FilmDetails";

export default class FilmPosterContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            film: props.ffilm,
        };
    }

    getfilmDetails = () => (
        this.setState({redirect: true})
    ) 

    render(){
        var props = {
            id: this.state.film.filmId,
            title: this.state.film.title,
            description: this.state.film.description,
            rating: this.state.film.rating,
            images: this.state.film.images,
            comments: this.state.film.comments
        }

        if (this.state.redirect) {
            return(
                <Redirect push to={{
                    pathname: '/FilmDetails',
                    search: "?" + props.id
                }}> </Redirect>
            )
             
        }

        return(
            <div onClick = {this.getfilmDetails}>
                <FilmPoster {...props} />
            </div>
        )
    }
}

