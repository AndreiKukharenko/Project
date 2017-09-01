import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPosterContainer from "../films/FilmPosterContainer";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";
import Gallery from "../common/Gallery";

export default class FilmDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentFilm: this.props.currentFilm
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPosterContainer film = {this.state.currentFilm}/>
                        <RatingStars rating = {this.state.currentFilm.Rating}/>
                        {/*<Gallery screenshots = {this.props.images.screenshots}/>*/} 
                        {/*<CommentList comments = {this.props.Comments}/>*/}
                        <SendMessage id = {this.state.currentFilm.Id}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}