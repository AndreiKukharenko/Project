import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Img from 'react-image';

export default  class FilmPoster extends Component{
    render(){
        return(
            <div className = {"filmPoster"} >

                <Link to={{
                    pathname: '/FilmDetails/' + this.props.Id,
                }}>
                    <Img className = {"filmPoster__picture"}
                        src = {this.props.Poster}
                        alt = {"poster"}
                    />
                    <span className = {"filmPoster__title"} >{this.props.Title}</span>
                </Link>
                    <br/>
                <span>{this.props.Description}</span>
            </div>
        )
    }
}
