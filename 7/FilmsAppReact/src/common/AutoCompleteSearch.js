import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import searchTitle from '../actions/searchTitle'

export default class AutoCompleteSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            titles: mapTitles(this.props.films)
        }
    }
    
    handleInput = (value) => {
        this.props.dispatch(searchTitle(value)); 
    };
    handleField = (searchText) => {
        if (searchText === "") this.props.dispatch(searchTitle(searchText)); // TODO: Implement on server-side
    };
  
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

function mapTitles (films) {
    var titles = films.map((film) => {
        return film.Title;
    });
    return titles;
}
