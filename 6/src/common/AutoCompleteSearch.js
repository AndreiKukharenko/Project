import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import {connect} from "react-redux";
import searchTitle from '../actions/searchTitle'

const autoCompleteStyle = {
    div: {
        float: "left",
        width: "50%"
    },
    autoComplete: {
        width: "350px"
    }
}

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
                dataSource = {this.props.titles}  //Array of strings or nodes used to populate the list.
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
    var filmsObj = JSON.parse(state.films);
    var titles = filmsObj.map((film) => {
        return film.title;
    });
    return {
        titles: titles
    }
}

export default connect(mapStateToProps)(AutoCompleteSearch);