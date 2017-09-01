import React, { Component } from 'react';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import addComment from "../actions/addComment";

class SendMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
    sendMsg(){
        let commentText = this.state.value;
        var comment = {
            "userName": this.props.username,
            "text": commentText
        }
        let action = addComment(comment, this.props.id);
        this.props.dispatch(action);
        if(commentText !== ""){
            this.setState({value: ""});
        }
    }
    render(){
        return(
            <div className = {"comments-field"}>
                <TextField
                    hintText = "Message text"
                    multiLine = {true}
                    rows = {2}
                    rowsMax = {4}
                    className = {"comments-field__text"}
                    onChange = {(event, text)=> this.setState({value: text}) }
                    value = {this.state.value}
                />
                <FlatButton label="Send Message" primary={true} 
                            onClick = {() => this.sendMsg()} />
            </div >
        )
    }
}

function mapStateToProps(state){
    return {
        username: state.username,
        films: state.films
    }
}
export default connect(mapStateToProps)(SendMessage);