import React, { Component } from 'react';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import sendComment from '../actions/sendComment'

const styles = {
    width: "512px"
}

class SendMessage extends Component{
    sendMsg(){
        let field = document.getElementById("commentsField")
        let comment = field.value;
        //debugger
        if(comment !== ""){
            field.value = "";
        }
        this.props.dispatch(sendComment(this.props.films, this.props.id, this.props.username, comment));
    }
    render(){
        return(
            <div>
                <FlatButton label="Send Message" primary={true} 
                            onClick = {() => this.sendMsg()} style = {this.styles} />
                <TextField
                    id = "commentsField"
                    hintText = "Message text"
                    multiLine = {true}
                    rows = {2}
                    rowsMax = {4}
                    style = {styles}
                />
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