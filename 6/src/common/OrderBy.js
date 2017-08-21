import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
      width: 150,
    },
};

/**
 a controlled component, with the current selection set through the `value` property.
 can be disabled with the `disabled` property.
 */
export default class OrderBy extends Component {
    state = {
        value: 2,
    };

    handleChange = (event, index, value) => {
        console.log(value)
        this.setState({value});
    }
    render() {
        return (
            <div>
              <SelectField
                floatingLabelText="Ordered by"
                value={this.state.value}
                onChange={this.handleChange}
                autoWidth={true}
              >
                <MenuItem value={"name"} primaryText="Name" />
                <MenuItem value={2} primaryText="Year" />
                <MenuItem value={3} primaryText="Director" />
                <MenuItem value={4} primaryText="Rating" />
              </SelectField>
            </div>
        );
    }
}