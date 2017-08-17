import React, { Component } from 'react';

import { Rating } from 'material-ui-rating';

export default class RatingStars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating,
        };
    }

    render(){
        return(
             <div>
                <Rating
                    value = {this.state.rating}
                    max = {5}
                    onChange = {(value)=>this.setState({rating: value})}
                />
            </div>
        )
    }
}