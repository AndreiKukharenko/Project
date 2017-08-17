import React, { Component } from 'react';

import Comment from "./Comment";

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }
    render(){
        var commentsToFilm = this.state.comments.map((commentToFilm)=>{
            return <Comment comment = {commentToFilm}/>        
            }
        )
        return(
            <div>
                {commentsToFilm}
            </div>
        )
    }
}