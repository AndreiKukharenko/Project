import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import setUserName from "../actions/setUserName"

const styles = {
    title: {
        cursor: 'pointer',
        textAlign: "center"
    },
};

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <AppBar
                title={<span style={styles.title}>Film list page</span>}
                iconElementLeft = {
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        useLayerForClickAway = {true}
                    >
                        <MenuItem primaryText="To list of films" containerElement={<Link to="/FilmListPage"/>} />
                        <MenuItem primaryText="Send feedback" containerElement={<Link to="/RouteTest"/>} /> 
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                    </IconMenu>
                }
                iconElementRight = {<div><FlatButton label="Logout" containerElement={<Link to="/"/>} />
                                        <FlatButton label={this.props.username} containerElement={<Link to="/RouteTest"/>}/>
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