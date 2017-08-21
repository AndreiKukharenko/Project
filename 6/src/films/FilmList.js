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
        else return false;
    }

    orderByfilter = (data) => {
        var order = this.props.orderBy;
        return this.sortJSON(data, order, "descending");
    }

    sortJSON = (data, key, way) => {
        if (key === "") return data;
        return data.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            if(way === 'ascending' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            else if (way !== 'ascending') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
    }

    render() {
        var searchResult = this.state.films.filter(this.nameSearchFilter);
        if(searchResult.length === 0){
            return <span>Not found</span>
        }
        var filteredResult = this.orderByfilter(searchResult);
        console.log(filteredResult)
        var FilmPosters = filteredResult.map ((value)=>{
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
      films: state.films,
      searchTitle: state.searchTitle,
      orderBy: state.orderBy
    }
}

export default connect(mapStateToProps)(FilmList);