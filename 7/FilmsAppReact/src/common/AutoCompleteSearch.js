import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {connect} from "react-redux";
import axios from "axios";
import changeFilms from "../actions/changeFilms";

class AutoCompleteSearch extends Component {
    
    handleInput = (value) => {
        this.getFilms(value);
    };
    handleField = (searchText) => {
        if (searchText === "") this.getFilms("");
        this.getFilms(searchText);
    };

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
                    dataSource = {this.props.titles}
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
    var titles = state.films.map((film) => {
        return film.Title;
    });
    return {
        films: state.films,
        titles
    }
}

export default connect(mapStateToProps)(AutoCompleteSearch);