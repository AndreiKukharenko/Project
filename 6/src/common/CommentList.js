import React, { Component } from 'react';
import { connect } from "react-redux";
import Comment from "./Comment";

export default class CommentList extends Component{
    render(){
        var commentsToFilm = this.props.comments.map((commentToFilm)=>{
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
