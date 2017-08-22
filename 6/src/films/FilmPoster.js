import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Img from 'react-image';

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
        fontSize:'25px',
        padding: "10px",
        display: "block"
    }
};   
 
export default  class FilmPoster extends Component{
    render(){
        return(
            <div style = {posterSmallStyles.container}>

                <Link to={{
                    pathname: '/FilmDetails/' + this.props.filmId,
                }}>
                    <Img 
                        src = {this.props.images.poster}
                        style = {posterSmallStyles.image}
                    />
                    <span style = {posterSmallStyles.text}>{this.props.title}</span>
                </Link>
                    <br/>
                <span>{this.props.description}</span>
            </div>
        )
    }
}
