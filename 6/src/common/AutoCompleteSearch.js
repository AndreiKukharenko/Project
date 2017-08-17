import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const autoCompleteStyle = {
    width: "50%",
    float: "left",
    //margin: "10px" ??
}

export default class AutoCompleteSearch extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    /*this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });*/
  };
  

  render() {
    return (
      <div style = {autoCompleteStyle}>
        <AutoComplete
          hintText = "Type anything"
          dataSource={this.state.dataSource}  //Array of strings or nodes used to populate the list.
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search"        // see http://www.material-ui.com/#/components/auto-complete
        />
      </div>
    );
  }
}
