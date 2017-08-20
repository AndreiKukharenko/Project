import React, { Component } from 'react';

import {connect} from "react-redux";
import FilmPosterContainer from "./FilmPosterContainer"

class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: JSON.parse(this.props.films)
        }
    }

    render(){
        var FilmPosters = this.state.films.map((value)=>{
            return <FilmPosterContainer film = {value}/> 
        })
        return (
            <div >
                {FilmPosters}
            </div>
        )
    }
};

function mapStateToProps (state) {
    return {
      films: state.films
    }
}

export default connect(mapStateToProps)(FilmList)