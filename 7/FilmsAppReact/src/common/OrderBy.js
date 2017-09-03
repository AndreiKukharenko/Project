import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {connect} from "react-redux";
import orderBy from "../actions/orderBy";
import axios from "axios";
import changeFilms from "../actions/changeFilms";


class OrderBy extends Component {
    state = {
        value: "FilmId"
    };

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.dispatch(orderBy(value));
        this.getFilms(value);
    }

    getFilms = (sortOrder) => {
        var self = this;
        axios({
            method:'get',
            url: "http://localhost:61095/Film/SortAndSearch",
            params: {
                sortOrder
            }
        })
        .then(function (response) {
            if(response.status === 200){
                self.setState({films: response.data});
                //TODo: consider using special bool props
                self.props.dispatch(changeFilms(response.data))
            }else {
                alert("bad request");
            }
        })
        .catch(function(error){
            self.setState({error: error.message})
            console.log(error);
        });
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
                <MenuItem value={"FilmId"} primaryText="FilmId" />
                <MenuItem value={"Title"} primaryText="Title" />
                <MenuItem value={"Rating"} primaryText="Rating" />
              </SelectField>
            </div>
        );
    }
}

export default connect()(OrderBy);