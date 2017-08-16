import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FilmPosterContainer from "./FilmPosterContainer"


export default class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: JSON.parse(localStorage.getItem("Films"))
        }
    }

    render(){
        var FilmPoster = this.state.films.map((film)=>{
            return <FilmPosterContainer ffilm = {film}/> 
        })
        console.log(FilmPoster);
      return (
        <div >
            {FilmPoster}
        </div>
      )
    }
  
  };