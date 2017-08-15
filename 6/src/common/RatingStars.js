import React, { Component } from 'react';

import { Rating } from 'material-ui-rating';

    const setRating = () => (
        <p></p>
    )
    
export default class RatingStars extends Component{

    render(){
        return(
             <div>
                <Rating
                value = {3}
                max = {5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
                />
            </div>
        )
    }
}