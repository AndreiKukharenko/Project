import React, { Component } from 'react';

import {connect} from "react-redux";
import FilmPosterContainer from "./FilmPosterContainer"

class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: JSON.parse(this.props.films),
            searchTitle: this.props.searchTitle
        }
    }

    nameSearchFilter = (_film) => {
        var str = this.props.searchTitle;
        if (str === "" || str === undefined || _film.title.includes(str)) return true;
        else return false
    }

    render() {
        var searchResult = this.state.films.filter(this.nameSearchFilter);
        var FilmPosters = searchResult.map ((value)=>{
            return <FilmPosterContainer film = {value}/> 
        })
        if(FilmPosters.length === 0){
            return <span>Not found</span>
        }
        else return (
            <div >
                {FilmPosters}
            </div>
        )
    }
};

function mapStateToProps (state) {
    return {
      films: state.films,
      searchTitle: state.searchTitle
    }
}

export default connect(mapStateToProps)(FilmList)