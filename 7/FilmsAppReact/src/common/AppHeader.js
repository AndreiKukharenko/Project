import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import EditorInsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class AppHeader extends Component {
    logout = () => {
        //debugger
        fetch("http://localhost:61095/Account/Logout")
    }
    render(){
        return(
            <AppBar className = {"appBar"}
                title={<span className = {"appBar__title"}>Film list page</span>}
                iconElementLeft = {
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        useLayerForClickAway = {true}
                    >
                        <MenuItem primaryText="To list of films" containerElement={<Link to="/"/>} />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                    </IconMenu>
                }
                iconElementRight = {<div><FlatButton label="Logout" onClick= {this.logout} />
                                        <FlatButton label={this.props.username} icon = {<EditorInsertEmoticon/>} containerElement={<Link to="/"/>}/>
                                    </div>
                                }
            />
        )
    }
};

function mapStateToProps (state) {
    return { username: state.username }
}

export default connect(mapStateToProps)(AppHeader);