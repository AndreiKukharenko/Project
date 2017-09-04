import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';

export default class Gallery extends Component{
    render() {
        var screenshotsToDisplay = this.props.screenshots.map((screenshot, index)=>{
            return (<div key ={index}> 
                        <img src={screenshot.ImageUrl}  alt ={"alt.text"} />
                        <p className="legend">Legend</p>
                    </div>)
            }
        )
        return(
            <div>
            <Carousel axis="horizontal" 
                showThumbs={true} showArrows={true} 
                dynamicHeight width = {"300px"}
            >
                {screenshotsToDisplay}
            </Carousel>
            </div>
        ) 
    }
}