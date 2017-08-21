import React, { Component } from 'react';

import {connect} from "react-redux";

const galleryStyles = {

}

class Gallery extends Component{
    constructor(props){
        super(props);
        this.props = {

        }
    }
    
    slider(){
        var screenshots = this.props.screenshots;

    }

    render() {
        return(
            <div>
                <button>previous</button>
                {this.screenshots}

                <button>next</button>
                

            </div>
        ) 
    }
}

function mapStateToProps(){
    this.state.films;
    return{
        filmPosters:  ""
    }
}

export default connect(mapStateToProps)(Gallery);