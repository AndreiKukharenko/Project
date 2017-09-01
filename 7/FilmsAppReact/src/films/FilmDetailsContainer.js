import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import {connect} from "react-redux";

export default class FilmDetailsContainer extends Component{
    render(){
        var id = this.props.match.params.filmId;
        console.log(id)
// get currentFilm from server here 
        var currentFilm = this.props.films[id];
        return(
            <div >
                <FilmDetails { ...currentFilm} />
            </div>
        )
    }
}
