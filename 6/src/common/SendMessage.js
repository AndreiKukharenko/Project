import React, { Component } from 'react';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

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
        var films = this.props.films;
        var id = this.props.id - 1;
        var currentFilm = films[id];
        var updatedFilm = Object.assign({}, currentFilm, {comments: currentFilm.comments.concat(comment)})
        films[id] = updatedFilm;
        this.props.dispatch({type: "FILMS", films })
        if(commentText !== ""){
            this.setState({value: ""});
        }
    }
    render(){
        return(
            <div>
                <TextField
                    hintText = "Message text"
                    multiLine = {true}
                    rows = {2}
                    rowsMax = {4}
                    style = {styles}
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

const styles = {
    width: "512px"
}