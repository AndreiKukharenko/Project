import React, { Component } from 'react';

import {connect} from "react-redux";
import FilmPosterContainer from "./FilmPosterContainer";

class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: this.props.films,
        }
    }

    getPosters = () => {
        var films = this.props.films;
        
        let FilmPosters = films.map ((value, index)=>{
            return <FilmPosterContainer film = {value} key = {index}/> 
        })
        return FilmPosters;
    }

    render() {
        return (
            <div >
                {this.getPosters()}
            </div>
        )
    }
};

function mapStateToProps (state) {
    return {
      searchTitle: state.searchTitle,
      orderBy: state.orderBy
    }
}

export default connect(mapStateToProps)(FilmList);