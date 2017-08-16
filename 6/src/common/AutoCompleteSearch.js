import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const style = {
    width: "50%",
    float: "left"
}

class AutoCompleteSearch extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  

  render() {
    return (
      <div style = {style}>
        <AutoComplete
          hintText = "Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search"
        />
      </div>
    );
  }
}

export default AutoCompleteSearch;