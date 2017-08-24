import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Img from 'react-image';
import {posterSmallStyles} from "../styles";

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
