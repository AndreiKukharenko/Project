import React, { Component } from 'react';
import { connect } from "react-redux";
import Comment from "./Comment";

class CommentList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        debugger
        console.log(newComment)
        var newComment = {
            userName: this.props.username,
            text: this.props.newComment
        }
        var commentsToFilm = this.props.comments.map((commentToFilm)=>{
            return <Comment comment = {commentToFilm}/>        
            }
        )
        if(newComment.userName !== "" || newComment.text !== ""){
            commentsToFilm.push(<Comment comment = {newComment}/>)
        }
        return(
            <div>
                {commentsToFilm}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        newComment: state.sendComment,
        username: state.username
    }
}

export default connect(mapStateToProps)(CommentList)