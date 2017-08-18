import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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

var films = JSON.parse(localStorage.getItem("Films"));//TODO change to getting data from the store
var titles = films.map((film) => {
    return film.title;
});


export default class AutoCompleteSearch extends Component {
    
    state = {
    dataSource: [],
    };

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
                dataSource = {titles}  //Array of strings or nodes used to populate the list.
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
