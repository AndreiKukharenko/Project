import React, { Component } from 'react';

import FilmPosterContainer from "./FilmPosterContainer"

export default class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: JSON.parse(localStorage.getItem("Films"))
        }
    }

    render(){
        var FilmPosters = this.state.films.map((film)=>{
            return <FilmPosterContainer ffilm = {film}/> 
        })
        return (
            <div >
                {FilmPosters}
            </div>
        )
    }
};