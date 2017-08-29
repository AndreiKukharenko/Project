import React, { Component } from 'react';
import FilmPoster from "./FilmPoster";

export default class FilmPosterContainer extends Component{
    render(){
        return(
            <div >
                <FilmPoster { ...this.props.film } />
            </div>
        )
    }
}