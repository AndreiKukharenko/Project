import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {connect} from "react-redux";
import orderBy from "../actions/orderBy";

class OrderBy extends Component {
    state = {
        value: "Films id"
    };

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.dispatch(orderBy(value));
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
                <MenuItem value={"Films id"} primaryText="Films id" />
                <MenuItem value={"title"} primaryText="Name" />
                <MenuItem value={"rating"} primaryText="Rating" />
              </SelectField>
            </div>
        );
    }
}

export default connect()(OrderBy);