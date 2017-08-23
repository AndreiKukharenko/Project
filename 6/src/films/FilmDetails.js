import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";
import Gallery from "../common/Gallery";

import {connect} from "react-redux";

class FilmDetails extends Component{
    constructor(props){
        super(props);
        var id = this.props.match.params.filmId - 1;
        var currentFilm = this.props.films[id];
        this.state = { ...currentFilm }
    }

    // ComponentWillReceiveProps(nextProps){
    //     this.setState();
    // }

    render() {
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPoster {...this.state}/>
                        <RatingStars rating = {this.state.rating}/>
                        <Gallery screenshots = {this.state.images.screenshots}/>                    
                        <CommentList comments = {this.state.comments}/>
                        <SendMessage id = {this.state.filmId}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        films: state.films,
    }
}

export default connect(mapStateToProps)(FilmDetails);