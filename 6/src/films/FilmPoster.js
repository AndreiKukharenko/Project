import React, { Component } from 'react';
import CardMedia from 'material-ui/Card';
import Img from 'react-image'

const posterSmallStyles = {
    image: {
        display: 'block',
        float: 'left',
        height: '400px',
        width: '450px',
        alt: "rocket"
    },
    container:{
        padding: '10px',
        height: '450px', 
        borderSize: '1px',
        borderStyle: 'solid'
    },
    text: {
        fontSize:'25px'
    }
};   
 
export default  class FilmPoster extends Component{
    render(){
        
        return(
            <div style = {posterSmallStyles.container}>
                <Img 
                    src={this.props.images.poster}
                    style = {posterSmallStyles.image}
                />
                <h4>{this.props.title}</h4>
                    <br/>
                <span style = {posterSmallStyles.text}>{this.props.description}</span>
            </div>
        )
    }
}
