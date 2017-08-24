import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import {connect} from "react-redux";
import searchTitle from '../actions/searchTitle'

class AutoCompleteSearch extends Component {
    handleInput = (value) => {
        this.props.dispatch(searchTitle(value));
    };
    handleField = (searchText) => {
        if (searchText === "") this.props.dispatch(searchTitle(searchText));
    };
  
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

function mapStateToProps (state) {
    var titles = state.films.map((film) => {
        return film.title;
    });
    return {
        titles
    }
}

export default connect(mapStateToProps)(AutoCompleteSearch);