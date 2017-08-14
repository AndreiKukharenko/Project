import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';


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
      <div>
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