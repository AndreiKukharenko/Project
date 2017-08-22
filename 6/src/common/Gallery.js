import React, { Component } from 'react';
import {connect} from "react-redux";

import {Carousel} from 'react-responsive-carousel';

const galleryStyles ={
    display: "flex",
    justifyContent: "center"
}

class Gallery extends Component{
    render() {
        var screenshotsToDisplay = this.props.screenshots.map((screenshot)=>{
            return (<div>
                        <img src={screenshot} alt ={"alt.text"} />
                        <p className="legend">Legend</p>
                    </div>)
            }
        )
        return(
            <div style = {galleryStyles}>
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

function mapStateToProps(){
    return{
        filmPosters:  ""
    }
}

export default connect(mapStateToProps)(Gallery);