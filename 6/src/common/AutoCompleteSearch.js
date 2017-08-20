import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import {connect} from "react-redux";

const autoCompleteStyle = {
    div: {
        float: "left",
        width: "50%"
    },
    autoComplete: {
        width: "300px"
    }
    //margin: "10px" ??
}

class AutoCompleteSearch extends Component {
    constructor(props){
        super(props);
    }
    // state = {
    // dataSource: [],
    // };

    /*handleUpdateInput = (value) => {
      this.setState({
      
      });
    };*/
  
    render() {
        return (
            <div style = {autoCompleteStyle.div}>
                <AutoComplete
                hintText = "Type anything"
                filter = {AutoComplete.caseInsensitiveFilter}
                dataSource = {this.props.titles}  //Array of strings or nodes used to populate the list.
                //onUpdateInput = {this.handleUpdateInput}
                floatingLabelText = "Search"
                maxSearchResults = {5}
                style = {autoCompleteStyle.autoComplete}
                
                /*onNewRequest = {Callback function that is fired when a list item is selected, or enter is pressed in the TextField.

              Signature:
              function(chosenRequest: string, index: number) => void
              chosenRequest: Either the TextField input value, if enter is pressed in the TextField, or the text value 
              of the corresponding list item that was selected.
              index: The index in dataSource of the list item selected, or -1 if enter is pressed in the TextField.}*/
                />
          </div>
      );
  }
}

function mapStateToProps (state) {
    //debugger
    var filmsObj = JSON.parse(state.films);
    var titles = filmsObj.map((film) => {
        return film.title;
    });
    return {
        titles: titles
    }
}

export default connect(mapStateToProps)(AutoCompleteSearch);