import React, { Component } from 'react';

const Comment = () => (
    <div>
        <p>UserName1</p>
        <span>Message</span>
    </div>
)

export default class CommentList extends Component{

    render(){
        return(
            <div>
                <ul>    
                    <li>
                        <Comment/>
                    </li>
                    <li>
                        <Comment/>
                    </li>
                </ul>
            </div>
        )
    }
}