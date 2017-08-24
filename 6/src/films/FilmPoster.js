import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Img from 'react-image';

export default  class FilmPoster extends Component{
    render(){
        return(
            <div className = {"filmPoster"} >

                <Link to={{
                    pathname: '/FilmDetails/' + this.props.filmId,
                }}>
                    <Img className = {"filmPoster__picture"}
                        src = {this.props.images.poster}
                        alt = {"poster"}
                    />
                    <span className = {"filmPoster__title"} >{this.props.title}</span>
                </Link>
                    <br/>
                <span>{this.props.description}</span>
            </div>
        )
    }
}
