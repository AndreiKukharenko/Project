import React, { Component } from 'react';
import Comment from "./Comment";

export default class CommentList extends Component{
    render(){
        var commentsToFilm = this.props.comments.map((commentToFilm, index)=>{
            return <Comment comment = {commentToFilm} key = {index}/>        
            }
        )
        return(
            <div>
                {commentsToFilm}
            </div>
        )
    }
}
