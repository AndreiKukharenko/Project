import React, { Component } from 'react';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class SendMessage extends Component{
    sendMsg(){
        let field = document.getElementById("commentsField")
        let commentText = field.value;
        if(commentText !== ""){
            field.value = "";
        }
        var comment = {
            "id": 3, //just for example
            "userName": this.props.username,
            "text": commentText
        }
        var films = this.props.films;
        var id = this.props.id - 1;
        var currentFilm = films[id];
        var updatedFilm = Object.assign({}, currentFilm, {comments: currentFilm.comments.concat(comment)})
        films[id] = updatedFilm;
        this.props.dispatch({type: "FILMS", films })
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

const styles = {
    width: "512px"
}