import React, { Component } from 'react';

export default class Comment extends Component{
    render(){
        return(
            <ul>
                <li><span>User: </span>{this.props.comment.User}</li>
                <li>{this.props.comment.Text}</li>
            </ul>  
        ) 
    }
}