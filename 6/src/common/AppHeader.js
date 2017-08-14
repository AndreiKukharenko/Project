import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationExpandMore from "material-ui/svg-icons/navigation/expand-more";
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import RouteTest from '../common/RouteTest.js';
import { BrowserRouter, Link } from 'react-router-dom';


const styles = {
    title: {
        cursor: 'pointer',
    },
};

const AppHeader = () => (
<AppBar
    title={<span style={styles.title}>Film list page</span>}
    iconElementLeft = {<IconButton><NavigationExpandMore /></IconButton>}
    iconElementRight = {<div><FlatButton label="Logout" containerElement={<Link to="/RouteTest"/>}/>
                            <FlatButton label="UserName" /></div>}
    //iconElementRight = {<FlatButton label="UserName" />}
/>
);

export default AppHeader;