import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import {connect} from "react-redux";

class FilmDetailsContainer extends Component{
    render(){
        var id = this.props.match.params.filmId;
        var currentFilm = this.props.films[id];
        return(
            <div >
                <FilmDetails { ...currentFilm} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        films: state.films
    }
}
export default connect(mapStateToProps)(FilmDetailsContainer);