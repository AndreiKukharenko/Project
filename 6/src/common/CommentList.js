import React, { Component } from 'react';
import { connect } from "react-redux";
import Comment from "./Comment";

class CommentList extends Component{

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

function mapStateToProps (state) {
    return {
        newComment: state.sendComment,
    }
}

export default connect(mapStateToProps)(CommentList);