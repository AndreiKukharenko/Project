import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
    width: "512px"
}

const sendMsg = () =>{
    let field = document.getElementById("commentsField")
    let comment = field.value;
    if(field !== ""){
        console.log(comment);
        field.value = "";
    }

}

class SendMessage extends Component{

    render(){
        return(
            <div>
                <FlatButton label="Send Message" primary={true} 
                            onClick ={sendMsg} style = {this.styles} />
                <TextField
                    id = "commentsField"
                    hintText="Message text"
                    multiLine={true}
                    rows = {2}
                    rowsMax = {4}
                    style = {styles}
                />
            </div >
        )
    }
}

export default SendMessage;