import React, { Component } from 'react';

import {connect} from "react-redux";
import FilmPosterContainer from "./FilmPosterContainer";
import axios from "axios";

class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: this.props.films,
        }
    }

    // nameSearchFilter = (_film) => {
    //     var str = this.props.searchTitle.toLocaleUpperCase();
    //     if (str === "" || str === undefined || _film.title.toLocaleUpperCase().includes(str)) return true;
    //     else return false;
    // }

    // orderByfilter = (data) => {
    //     var order = this.props.orderBy;
    //     return this.sortJSON(data, order, "descending");
    // }

    // sortJSON = (data, key, way) => {
    //     if (key === "") return data;
    //     var sortedJSON = data.sort(function(a, b) {
    //         var x = a[key]; var y = b[key];
    //         if(way === 'ascending' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
    //         else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    //     });
    //     return sortedJSON;
    // }

    // getOrderedFilteredPosters = () => {
    //     var searchResult = this.state.films.filter(this.nameSearchFilter);
    //     if(searchResult.length === 0){
    //         return <span>Not found</span>
    //     }
    //     var filteredResult = this.orderByfilter(searchResult);
    //     let FilmPosters = filteredResult.map ((value, index)=>{
    //         return <FilmPosterContainer film = {value} key = {index}/> 
    //     })
    //     return FilmPosters;
    // }

    getPosters = () => {
        var films = this.state.films;
        
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

//export default FilmList