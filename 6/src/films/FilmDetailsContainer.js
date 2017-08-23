import React, { Component } from 'react';
import FilmDetails from "./FilmDetails";
import {connect} from "react-redux";

class FilmDetailsContainer extends Component{
    constructor(props){
        super(props);
        var id = this.props.match.params.filmId - 1;
        var currentFilm = this.props.films[id];
        this.state = { ...currentFilm }
    }
    render(){
        return(
            <div >
                <FilmDetails { ...this.state} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        films: state.films
    }
}
export default connect(mapStateToProps)(FilmDetailsContainer)