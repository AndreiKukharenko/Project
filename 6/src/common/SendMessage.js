import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
//TODO
}

const sendMsg = () =>{

}

class SendMessage extends Component{

    render(){
        return(
            <div>
                <FlatButton label="SendMessage" primary={true} 
                            onClick ={sendMsg} style = {this.styles} />
                <TextField
                    hintText="Message text"
                    multiLine={true}
                    rows = {2}
                    rowsMax = {4}
                />
            </div >
        )
    }
}

export default SendMessage;