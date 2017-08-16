import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import {Link, Redirect} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
    title: {
        cursor: 'pointer',
        textAlign: "center"
    },
};

export default class AppHeader extends Component {
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
                iconElementRight = {<div><FlatButton label="Logout" containerElement={<Link to="/RouteTest"/>} />
                                        <FlatButton label={"username"} /></div>}
            />
        )
    }
};

