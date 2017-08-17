import React, { Component } from 'react';

const commentStyles = {

}

export default class Comment extends Component{
    render(){
        return(
            <ul>
                <li>{this.props.comment.userName}</li>
                <li>{this.props.comment.text}</li>
            </ul>  
        ) 
    }
}