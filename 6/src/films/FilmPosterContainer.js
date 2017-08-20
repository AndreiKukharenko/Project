import React, { Component } from 'react';
import CardMedia from 'material-ui/Card';
import Img from 'react-image'

import FilmPoster from "./FilmPoster";
import FilmDetails from "./FilmDetails";

export default class FilmPosterContainer extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div >
                <FilmPoster { ...this.props.film } />
            </div>
        )
    }
}
