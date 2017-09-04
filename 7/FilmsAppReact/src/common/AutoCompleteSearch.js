import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {connect} from "react-redux";
import axios from "axios";
import changeFilms from "../actions/changeFilms";

class AutoCompleteSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            titles: []
        }
    }
    
    handleInput = (value) => {
        this.getFilms(value);
        this.mapTitles();
    };
    handleField = (searchText) => {
        if (searchText === "") this.getFilms("");
        this.getFilms(searchText);
    };

    mapTitles = () => {
        var films = this.props.films;
        var titles = films.map((film) => {
            return film.Title;
        });
        this.setState({titles})
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