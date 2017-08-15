import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationExpandMore from "material-ui/svg-icons/navigation/expand-more";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import RouteTest from '../common/RouteTest.js';
import {Link} from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const styles = {
    title: {
        cursor: 'pointer',
    },
};


const AppHeader = () => (
<AppBar
    title={<span style={styles.title}>Film list page</span>}
    iconElementLeft = {<IconButton>
        <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        useLayerForClickAway = {true}
        >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
        </IconMenu>
    </IconButton>}
    iconElementRight = {<div><FlatButton label="Logout" containerElement={<Link to="/RouteTest"/>} />
                            <FlatButton label={"username"} /></div>}
    //iconElementRight = {<FlatButton label="UserName" />}
/>
);

export default AppHeader;