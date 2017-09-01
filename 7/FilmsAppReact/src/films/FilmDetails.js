import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppHeader from "../common/AppHeader";
import FilmPoster from "../films/FilmPoster";
import CommentList from "../common/CommentList";
import SendMessage from "../common/SendMessage";
import RatingStars from "../common/RatingStars";
import Gallery from "../common/Gallery";

export default class FilmDetails extends Component{
    render() {
        return (
            <div>
                <MuiThemeProvider>  
                    <div>
                        <AppHeader/>
                        <FilmPoster {...this.props}/>
                        <RatingStars rating = {this.props.Rating}/>
                        {/*<Gallery screenshots = {this.props.images.screenshots}/>*/} 
                        {/*<CommentList comments = {this.props.Comments}/>*/}
                        <SendMessage id = {this.props.Id}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}