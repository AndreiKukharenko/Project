import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import {connect} from "react-redux";
import searchTitle from '../actions/searchTitle'
import {autoCompleteStyle} from "../styles";

class AutoCompleteSearch extends Component {
    constructor(props){
        super(props);
        this.props = {
        }
    }

    handleInput = (value) => {
        this.props.dispatch(searchTitle(value));
    };
  
    render() {
        return (
            <div style = {autoCompleteStyle.div}>
                <AutoComplete
                hintText = "Type anything"
                filter = {AutoComplete.caseInsensitiveFilter}
                dataSource = {this.props.titles}
                floatingLabelText = "Search"
                maxSearchResults = {5}
                style = {autoCompleteStyle.autoComplete}
                onNewRequest = {this.handleInput}
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