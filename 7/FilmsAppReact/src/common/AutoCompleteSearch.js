import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import searchTitle from '../actions/searchTitle'
import {connect} from "react-redux";
import axios from "axios";
import changeFilms from "../actions/changeFilms";

class AutoCompleteSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            titles: this.mapTitles(this.props.films)
        }
    }
    
    handleInput = (value) => {
        this.getFilms(value);
    };
    handleField = (searchText) => {
        if (searchText === "") this.getFilms("");
        this.getFilms(searchText);
    };

    mapTitles = (films) => {
        var titles = films.map((film) => {
            return film.Title;
        });
        return titles;
    }

    getFilms = (searchString) => {
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/SortAndSearch",
            params: {
                searchString 
            }
        })
        .then(function (response) {
            if(response.status === 200){
                self.setState({films: response.data});
                self.props.dispatch(changeFilms(response.data))
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            self.setState({error: error.message})
            console.log(error);
        });
    }
  
    render() {
        return (
            <div className = {"autocomplete"}>
                <AutoComplete
                    hintText = "Type anything"
                    filter = {AutoComplete.caseInsensitiveFilter}
                    dataSource = {this.state.titles}
                    floatingLabelText = "Search"
                    maxSearchResults = {5}
                    className = {"autocomplete__field"}
                    onNewRequest = {this.handleInput}
                    onUpdateInput = {this.handleField}
                />
          </div>
      );
  }
}

function mapStateToProps(state){
    return {
        films: state.films
    }
}

export default connect(mapStateToProps)(AutoCompleteSearch);